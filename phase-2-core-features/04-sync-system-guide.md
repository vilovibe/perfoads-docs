---
title: Sync System Guide
description: Technical deep dive into the sync system architecture - concurrent queue, API management, error handling, and performance optimization
category: core-features
phase: 2
order: 04
---

# Sync System Guide

Understanding how the sync system works helps you troubleshoot issues, optimize performance, and make smart decisions about when and how to sync your clients. This guide goes deep into the technical architecture.

---

## What You'll Learn

- How Smart Sync differs from Full Sync under the hood
- Concurrent sync queue architecture
- API rate limit protection mechanisms
- Error handling and retry logic
- Performance optimization techniques
- Advanced sync strategies for large portfolios

**Time needed**: 18 minutes to read

**Audience**: Power users, technical users, agency managers

---

## Sync System Architecture

### Three-Layer Design

The sync system has three layers working together:

**1. Request Layer** (what you see):
- Sync button clicks
- Bulk operations
- Auto-sync scheduler

**2. Queue Layer** (traffic control):
- Manages concurrent operations
- Enforces API limits
- Handles prioritization

**3. Execution Layer** (does the work):
- Connects to Google Ads API
- Pulls and transforms data
- Stores in database
- Triggers AI analysis

[Screenshot: Architecture diagram showing three layers]
*Layered design keeps syncs fast and reliable*

---

## Smart Sync vs Full Sync (Technical)

### Smart Sync Internals

**How it calculates date range**:

```javascript
if (lastSyncDate exists) {
  startDate = lastSyncDate - 1 day (buffer)
  endDate = today

  if (startDate > 90 days ago) {
    startDate = 90 days ago
  }
} else {
  // First sync
  startDate = 90 days ago
  endDate = today
}
```

**The 1-day buffer explained**:
- Google Ads data can change retroactively
- Conversions lag (click today, convert tomorrow)
- Attribution models look back
- Buffer catches these updates

**Example scenarios**:

**Last synced yesterday**:
```
Last sync: Oct 1, 2:00 AM
Today: Oct 2, 2:00 AM
Date range: Sep 30 - Oct 2 (3 days)
Reason: Oct 1 + buffer day (Sep 30) + today (Oct 2)
```

**Last synced 7 days ago**:
```
Last sync: Sep 25
Today: Oct 2
Date range: Sep 24 - Oct 2 (9 days)
Reason: Sep 25 + buffer (Sep 24) through today
```

**First time ever**:
```
Last sync: Never
Today: Oct 2
Date range: Jul 4 - Oct 2 (90 days)
Reason: Maximum historical data allowed
```

[Screenshot: Date range calculation visualization]
*Smart Sync adapts to last sync date automatically*

---

### Full Sync Internals

**Fixed date range**:
```javascript
startDate = 30 days ago
endDate = today
```

**Why only 30 days (not 90)?**
- Balance between thoroughness and speed
- Most data issues appear in recent 30 days
- Reduces API quota usage
- Faster completion

**Performance comparison**:
```
Smart Sync (daily):    2-4 minutes,  200-500 API operations
Full Sync (30 days):  10-15 minutes, 2000-5000 API operations
Full Sync (90 days):  25-40 minutes, 6000-15000 API operations (not available)
```

**When system forces Full Sync**:
- Never synced before (automatic)
- Last sync >90 days ago (automatic)
- Data integrity check fails (automatic)
- User explicitly requests it (manual)

---

## Concurrent Sync Queue

### Queue Architecture

**Capacity limits**:
```
Maximum concurrent syncs:  5 clients
Maximum queue size:        Unlimited
Processing order:          FIFO (First In, First Out)
Priority system:           Not currently implemented
```

**Why limit to 5 concurrent syncs?**

**1. API Rate Limits**:
- Google Ads API: ~15,000 operations/day per account
- Each sync: 200-5000 operations
- 5 concurrent × 500 avg = 2,500 operations/hour
- Stays well within limits

**2. System Resources**:
- Database connections (max pool size)
- Memory usage per sync
- CPU for data transformation
- Network bandwidth

**3. Error Rate**:
- More concurrent = higher error probability
- 5 concurrent maintains <1% error rate
- 10+ concurrent pushes error rate >5%

[Screenshot: Resource usage graph showing optimal concurrency]
*5 concurrent strikes the right balance*

---

### Queue States

**1. Pending**:
- Client selected for sync
- Not yet queued
- Pre-validation stage

**2. Queued**:
- Waiting for available slot
- Position number assigned
- ETA calculated

**3. Active**:
- One of 5 concurrent syncs
- Actually pulling data
- Progress tracked

**4. Completed**:
- Sync finished successfully
- Data stored
- AI analysis triggered

**5. Failed**:
- Encountered error
- Not retried automatically
- Logged for investigation

**State transitions**:
```
Pending → Queued → Active → Completed
                         ↘ Failed
```

[Screenshot: Queue state diagram]
*Syncs move through these states automatically*

---

### Queue Management Algorithm

**Simplified pseudocode**:

```javascript
// Check capacity every 30 seconds
while (true) {
  activeSyncs = getActiveSyncs()

  if (activeSyncs.length < 5) {
    // Capacity available
    availableSlots = 5 - activeSyncs.length
    queuedSyncs = getQueuedSyncs()

    // Start next syncs
    for (i = 0; i < availableSlots; i++) {
      if (queuedSyncs[i]) {
        startSync(queuedSyncs[i])
      }
    }
  }

  wait(30 seconds)
}
```

**Key behaviors**:
- Checks every 30 seconds
- Fills available slots immediately
- No priority (FIFO only)
- Never exceeds 5 concurrent

---

### ETA Calculation

**Formula**:
```
Position in queue: N
Average sync time: 4 minutes
Concurrent limit: 5

Batch number = ceil(N / 5)
ETA = Batch number × 4 minutes

Examples:
Position 3: Batch 1, ETA ~4 minutes
Position 7: Batch 2, ETA ~8 minutes
Position 13: Batch 3, ETA ~12 minutes
```

**Why ETAs are estimates**:
- Actual sync time varies (2-15 minutes)
- Account size affects duration
- API performance fluctuates
- Other syncs may fail (frees slots early)

[Screenshot: Queue with ETA calculations]
*ETA gives you rough idea of wait time*

---

## API Rate Limit Protection

### Google Ads API Limits

**Official limits** (as of 2025):
```
Operations per day:     15,000 (basic access)
                        1,000,000 (standard access)
                        Unlimited (premium access)

Operations per minute:  100 (burst protection)
```

**What counts as an operation**:
- API query for campaigns
- API query for keywords
- API query for performance data
- Each data type = separate operation

**Smart Sync operation count**:
```
Small account (10 campaigns):
  - 12 data types × ~10-20 operations = ~200 ops

Large account (200 campaigns):
  - 12 data types × ~200-400 operations = ~5000 ops
```

---

### Protection Mechanisms

**1. Operation Tracking**:
- System counts every API call
- Tracks daily, hourly, minute totals
- Visible in API Tracking page
- Updates in real-time

**2. Throttling**:
```javascript
if (operationsThisMinute > 80) {
  // Approaching limit
  sleep(10 seconds)
  retry()
}

if (operationsThisHour > 5000) {
  // Nearing daily limit
  pauseNewSyncs()
  allowOnlyActiveToComplete()
}
```

**3. Backoff Strategy**:
```javascript
retries = 0

while (retries < 3) {
  try {
    apiCall()
    break  // Success
  } catch (RateLimitError) {
    wait(2^retries minutes)  // Exponential backoff
    retries++
  }
}

Wait times:
Retry 1: 2^0 = 1 minute
Retry 2: 2^1 = 2 minutes
Retry 3: 2^2 = 4 minutes
```

[Screenshot: API usage dashboard showing throttling in action]
*System automatically slows down when approaching limits*

---

### Quota Allocation Strategy

**For agencies with many clients**:

**Problem**: 50 clients × 500 operations = 25,000 operations/day

**Solution 1: Spread syncs across 24 hours**
```
2 AM:  Clients 1-10  (5,000 ops)
6 AM:  Clients 11-20 (5,000 ops)
10 AM: Clients 21-30 (5,000 ops)
2 PM:  Clients 31-40 (5,000 ops)
6 PM:  Clients 41-50 (5,000 ops)

Total: 25,000 ops across full day
```

**Solution 2: Sync less frequently**
```
Daily:  Top 20 clients (10,000 ops)
Every 2 days: Next 20 clients (5,000 ops/day avg)
Weekly: Remaining 10 clients (1,000 ops/day avg)

Total: ~16,000 ops/day average
```

**Solution 3: Upgrade to Standard Access**
- Contact Google Ads API support
- Request standard access (1M ops/day)
- Requires business justification
- Usually approved for agencies

---

## Error Handling

### Error Types

**1. Temporary Errors** (auto-retry):
```
- Network timeout
- API temporary unavailability
- Rate limit (429 error)
- Server error (500, 502, 503)
```

**Retry logic**: 3 attempts with exponential backoff

**2. Permanent Errors** (no retry):
```
- Invalid customer ID
- OAuth token revoked
- Permission denied
- Account suspended
```

**Action**: Mark sync as failed, log error, notify user

**3. Data Errors** (partial retry):
```
- Campaign not found (skip campaign, continue)
- Metric not available (skip metric, continue)
- Date range too far back (reduce range, retry)
```

**Action**: Complete sync with warnings

[Screenshot: Error log showing different error types]
*System handles different errors differently*

---

### Retry Strategy

**Full retry** (entire sync):
```javascript
try {
  smartSync(client)
} catch (TemporaryError) {
  wait(1 minute)
  smartSync(client)  // Full retry
}
```

**Partial retry** (failed data types only):
```javascript
dataTypes = [campaigns, keywords, ads, ...]
failed = []

for (type in dataTypes) {
  try {
    syncDataType(type)
  } catch (Error) {
    failed.push(type)
  }
}

// Retry only failed types
for (type in failed) {
  retrySyncDataType(type)
}
```

**Circuit breaker** (stop trying):
```javascript
consecutiveFailures = 0

if (syncFails) {
  consecutiveFailures++
}

if (consecutiveFailures >= 5) {
  // Something is seriously wrong
  pauseAutoSync()
  sendAdminAlert()
  requireManualInvestigation()
}
```

---

### Failure Recovery

**Self-healing OAuth**:
```javascript
try {
  syncWithToken(token)
} catch (TokenExpired) {
  newToken = refreshToken()
  syncWithToken(newToken)
}

catch (TokenRevoked) {
  // Can't auto-heal this
  markClientAsNeedsReauth()
  notifyUser()
}
```

**Database transaction safety**:
```javascript
beginTransaction()

try {
  deleteOldData()
  insertNewData()
  commit()
} catch (Error) {
  rollback()  // Restore to previous state
  logError()
}
```

**Result**: Never left with partial/corrupt data

---

## Performance Optimization

### Batch Operations

**Instead of this** (slow):
```javascript
for (campaign in campaigns) {
  database.insert(campaign)  // 100 separate calls
}
```

**Do this** (fast):
```javascript
database.batchInsert(campaigns)  // 1 call with 100 items
```

**Performance gain**: 30-50x faster

**Where it's used**:
- All data type inserts
- Bulk updates
- Delete operations

---

### Data Transformation Pipeline

**Three-stage processing**:

**Stage 1: Fetch** (from Google Ads API)
- Batched queries
- Parallel requests where possible
- Compressed responses

**Stage 2: Transform** (convert format)
- Google's format → Internal format
- Normalize field names
- Calculate derived metrics
- Handle dual API (camelCase + snake_case)

**Stage 3: Load** (into database)
- Batch inserts
- Transaction-safe
- Index optimization

**Total time**:
```
Fetch:     40% of sync time
Transform: 20% of sync time
Load:      40% of sync time
```

[Screenshot: Pipeline visualization showing three stages]
*Pipelined processing maximizes throughput*

---

### Caching Strategy

**What's cached**:
```
Account structure:     24 hours
Campaign settings:     6 hours
Performance metrics:   Never (always fresh)
Conversion actions:    24 hours
```

**Cache benefits**:
- Reduce API calls
- Faster repeated syncs
- Less network traffic

**Cache invalidation**:
- Time-based (expiry)
- Manual sync forces refresh
- Data change detected

---

## Advanced Sync Strategies

### Differential Sync

**Problem**: Re-syncing unchanged data wastes API quota

**Solution**: Track what changed
```javascript
previousCampaigns = getStoredCampaigns()
currentCampaigns = fetchFromGoogleAds()

added = currentCampaigns - previousCampaigns
removed = previousCampaigns - currentCampaigns
unchanged = intersection(previous, current)

// Only process added and removed
updateDatabase(added, removed)
// Skip unchanged campaigns
```

**Not currently implemented** but planned for future

---

### Selective Data Type Sync

**Scenario**: Only need to update performance metrics, not structure

**Concept**:
```javascript
syncOptions = {
  campaigns: false,     // Skip structure
  keywords: false,      // Skip structure
  performance: true,    // Only this
  conversions: true     // And this
}

smartSync(client, syncOptions)
```

**Use case**:
- Quick refresh before calls
- Performance-only dashboards
- Reduces sync time by 60%

**Status**: Not available in UI yet (roadmap item)

---

### Predictive Pre-fetching

**Concept**: Sync likely-to-be-viewed clients proactively

**Algorithm**:
```javascript
// User views Client A
onClientView(clientA) {
  relatedClients = getSameIndustry(clientA)

  // Pre-fetch in background
  for (client in relatedClients) {
    if (lastSync > 6 hours) {
      backgroundSync(client)
    }
  }
}
```

**Result**: Data appears instantly when you click

**Status**: Experimental, not enabled by default

---

## Monitoring and Diagnostics

### Sync Health Metrics

**What the system tracks**:
```
Success rate:       % of syncs completed
Average duration:   Mean sync time
API quota usage:    % of daily limit used
Error rate:         % of syncs that fail
Queue depth:        Max queued clients
```

**Healthy thresholds**:
```
Success rate:  >95%
Avg duration:  <5 minutes
Quota usage:   <60%
Error rate:    <5%
Queue depth:   <20 clients
```

**Alerts trigger when**:
```
Success rate:  <90%
Avg duration:  >10 minutes
Quota usage:   >80%
Error rate:    >10%
Queue depth:   >50 clients
```

[Screenshot: Health dashboard showing all metrics]
*Monitor system health in real-time*

---

### Performance Profiling

**Where time goes** (average 4-minute sync):
```
OAuth authentication:     10 sec  (4%)
Date range calculation:   5 sec   (2%)
Fetch campaigns:          45 sec  (19%)
Fetch ad groups:          40 sec  (17%)
Fetch keywords:           60 sec  (25%)
Fetch ads:                35 sec  (15%)
Fetch performance:        50 sec  (21%)
Data transformation:      20 sec  (8%)
Database insert:          30 sec  (13%)
AI analysis trigger:      5 sec   (2%)
```

**Optimization targets**:
- Keyword fetch (slowest)
- Performance metrics (second slowest)
- Database insert (third slowest)

---

## Tips & Best Practices

### For Agency Managers

**Monitor API quota**:
- Check API Tracking page weekly
- If usage >70%, spread syncs more
- Consider requesting higher quota

**Set realistic sync schedules**:
- Don't sync 50 clients at 2 AM
- Stagger by 30-minute intervals
- Balance across 24-hour period

**Plan for growth**:
- 20 clients → daily sync works
- 50 clients → need staggering
- 100+ clients → need enterprise plan

---

### For Power Users

**Understand trade-offs**:
```
More frequent syncs:
  + Fresher data
  - Higher API usage
  - More queue congestion

Less frequent syncs:
  + Lower API usage
  + Faster when you do sync
  - Stale data between syncs
```

**Optimize for your needs**:
- High-value clients: Sync daily
- Low-value clients: Sync weekly
- Test/inactive: Disable auto-sync

---

### For Developers

**API response handling**:
```javascript
// Handle both camelCase and snake_case
const campaign = row.campaign || row.campaign_data
const adGroup = row.adGroup || row.ad_group

// Never assume format
if (campaign?.id) {
  // Safe to access
}
```

**Retry logic best practices**:
```javascript
const retryWithBackoff = async (fn, retries = 3) => {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn()
    } catch (error) {
      if (i === retries - 1) throw error
      await wait(2 ** i * 1000)  // Exponential backoff
    }
  }
}
```

---

## Common Questions

**Q: Can I increase concurrent sync limit above 5?**
A: Not currently in the standard plan. Enterprise plan allows 10-15 concurrent syncs. Contact sales.

**Q: Why does Smart Sync sometimes take longer than Full Sync?**
A: It shouldn't. If this happens, it's likely a large account where "since last sync" is actually more data than 30 days. Check the date range in Sync Logs.

**Q: What happens if I hit the Google Ads API limit?**
A: System automatically stops queuing new syncs. Active syncs complete. Resume after quota resets (usually midnight PST).

**Q: Can I see which specific API calls are being made?**
A: Yes, in Sync Logs → Details. Shows every API operation with timestamps and response sizes.

**Q: Does pausing auto-sync affect manual syncs?**
A: No, you can always manually sync even if auto-sync is disabled.

**Q: What's the maximum account size the system can handle?**
A: Successfully tested with accounts having 1000+ campaigns, 10000+ keywords. Sync takes 20-30 minutes but completes.

---

## Troubleshooting

### Problem: Syncs taking much longer than usual

**Diagnostics**:
1. Check account size (campaigns, keywords)
2. Check date range (is it pulling 90 days?)
3. Check Google Ads API status
4. Check network latency

**Solutions**:
- Large account: Expected, no fix needed
- Wrong date range: Clear cache, re-sync
- API issues: Wait for Google to resolve
- Network: Check internet connection

---

### Problem: High failure rate

**Diagnostics**:
1. Check Sync Logs for error patterns
2. Check OAuth health
3. Check API quota usage

**Common causes**:
- Token expired (re-auth needed)
- Permission revoked (re-grant needed)
- Quota exceeded (wait or upgrade)

---

### Problem: Queue not moving

**Symptom**: Position stays the same for 30+ minutes

**Diagnostics**:
1. Check if any syncs are active
2. Check Sync Logs for stuck syncs
3. Check system status page

**Solutions**:
- Cancel stuck syncs manually
- Contact support with timestamps
- System will auto-recover in 1 hour (timeout)

---

## Next Steps

Deep dive into specific sync topics:

- **[Auto-Sync Setup](/docs/auto-sync-setup)** - Configure automatic schedules
- **[Sync Logs](/docs/sync-logs)** - Read and interpret sync history
- **[Smart Sync Explained](/docs/smart-sync-explained)** - User-friendly overview
- **[API Tracking](/docs/api-tracking)** - Monitor quota usage

---

**Need enterprise sync capacity?** Contact sales at sales@aiperfoads.xyz

**Found a sync bug?** Report at support@aiperfoads.xyz with Sync Log details

**Last Updated**: October 4, 2025
