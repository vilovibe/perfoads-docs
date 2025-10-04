---
title: Sync Logs
description: Read sync history, troubleshoot failures, understand data volume metrics, and monitor sync health over time
category: core-features
phase: 2
order: 06
---

# Sync Logs

Every sync operation is logged with detailed metrics, status, and error information. The Sync Logs page is your diagnostic tool for understanding what happened during syncs, troubleshooting failures, and monitoring system health.

---

## What You'll Learn

- Navigating the Sync Logs interface
- Reading sync log entries
- Understanding status codes
- Interpreting data volume badges
- Filtering and searching logs
- Troubleshooting common sync errors
- Exporting log data for analysis

**Time needed**: 12 minutes to read

---

## Accessing Sync Logs

**Path**: Main navigation → Sync Logs

**What you'll see**:
- Table of all sync operations (newest first)
- Filter controls (date range, status, client)
- Export button
- Pagination controls

[Screenshot: Sync Logs page overview]
*Complete history of all sync operations*

---

## Sync Log Entry Anatomy

### Log Table Columns

**Timestamp**:
- When sync started
- Timezone-aware
- Format: "Oct 4, 2025 2:15:32 AM EST"

**Client**:
- Client name (clickable link)
- Opens client details page

**Type**:
- Smart Sync
- Full Sync
- Manual
- Auto-sync

**Status**:
- Success (green)
- Failed (red)
- In Progress (blue)
- Queued (gray)

**Duration**:
- How long sync took
- Format: "3m 42s" or "15m 8s"

**Data Volume**:
- Badged indicators
- Shows amount of data synced
- Color-coded

**Actions**:
- View Details (magnifying glass icon)
- Re-sync (sync icon)
- Download Log (download icon)

[Screenshot: Sync log entry with all columns labeled]
*Each log entry tells the complete story of one sync*

---

## Understanding Status Codes

### Success (Green ✓)

**What it means**:
- Sync completed without errors
- All data types synced
- Data stored successfully
- AI analysis triggered

**Log details**:
```
Status: Success
Duration: 3m 42s
Data synced: 12/12 data types
Campaigns: 45
Keywords: 1,234
Ads: 156
...
```

**No action needed** - everything worked perfectly

[Screenshot: Successful sync log entry]
*Green checkmark indicates healthy sync*

---

### Failed (Red ✗)

**What it means**:
- Sync encountered error and stopped
- Data may be partially synced
- AI analysis not triggered
- Needs investigation

**Common error types**:
- OAuth expired
- Permission denied
- API timeout
- Network error
- Invalid customer ID

**Log details**:
```
Status: Failed
Duration: 1m 15s (stopped early)
Error: OAuth token expired
Error code: OAUTH_TOKEN_EXPIRED
Timestamp: 2025-10-04 02:15:32
```

**Action required**: Fix error, re-sync

[Screenshot: Failed sync with error details]
*Red X with error message explains what went wrong*

---

### In Progress (Blue ⟳)

**What it means**:
- Sync currently running
- Real-time status update
- Progress percentage visible

**Log details**:
```
Status: In Progress
Progress: 67% complete
Current operation: Syncing keywords
Elapsed time: 2m 30s
```

**Refresh to see updates** - status updates every 30 seconds

[Screenshot: In progress sync with progress bar]
*Watch syncs happen in real-time*

---

### Queued (Gray ⌛)

**What it means**:
- Waiting for available slot
- Position in queue shown
- Estimated wait time

**Log details**:
```
Status: Queued
Position: 3
ETA: ~6 minutes
Queue depth: 8 clients
```

**Normal behavior** when multiple syncs requested

[Screenshot: Queued sync showing position]
*Queue position tells you how long to wait*

---

## Data Volume Badges

### What They Show

Data volume badges indicate how much data was synced:

**Badges**:
- 🟢 Small: <100 campaigns, <5K keywords
- 🟡 Medium: 100-500 campaigns, 5K-20K keywords
- 🔴 Large: 500+ campaigns, 20K+ keywords

**Why it matters**:
- Large volumes = longer sync times
- Small volumes = faster syncs
- Helps explain duration differences

**Example**:
```
Client A: Small badge, 2m sync time
Client B: Large badge, 15m sync time
```

Both are normal - size affects speed

[Screenshot: Data volume badges in different colors]
*Badges give you context for sync duration*

---

### Data Metrics Breakdown

**Click "View Details"** on any log entry to see:

```
Campaigns:       45
Ad Groups:       234
Keywords:        1,234
Ads:            156
Search Terms:    2,456
Conversions:     12
Geographic Data: 150 locations
Extensions:      78
Quality Scores:  1,234
Audience Data:   34 lists
Settings:        45
Budget Data:     45
```

**Total operations**: Sum of all data type queries

**API quota used**: ~500 operations

[Screenshot: Detailed data breakdown modal]
*See exactly what was synced*

---

## Filtering Sync Logs

### Filter by Date Range

**Presets**:
- Today
- Last 7 Days
- Last 30 Days
- This Month
- Custom Range

**Custom range**:
1. Click "Custom Range"
2. Select start date
3. Select end date
4. Click Apply

**Use case**: Find syncs from specific period

[Screenshot: Date range filter with calendar picker]
*Narrow down logs to specific timeframe*

---

### Filter by Status

**Options**:
- ☑ Success
- ☑ Failed
- ☑ In Progress
- ☑ Queued

**Uncheck to hide** that status

**Common filters**:

**Show only failures**:
- Uncheck all except "Failed"
- Reveals problematic syncs

**Show only successes**:
- Uncheck all except "Success"
- Verify healthy syncs

**Hide completed**:
- Uncheck "Success"
- Focus on active/failed only

[Screenshot: Status filter with checkboxes]
*Filter to focus on specific outcomes*

---

### Filter by Client

**Dropdown shows**:
- All Clients (default)
- Alphabetical client list

**Select specific client**:
- Shows only that client's syncs
- See historical pattern
- Identify chronic issues

**Use case**: Troubleshoot one client

[Screenshot: Client filter dropdown]
*View sync history for a specific client*

---

### Filter by Type

**Options**:
- Smart Sync
- Full Sync
- Manual
- Auto-sync

**Use case**: Differentiate manual vs automatic syncs

**Example**:
- Filter to "Auto-sync"
- Verify daily auto-sync is working
- Check success rate

---

## Searching Sync Logs

**Search box** searches across:
- Client names
- Error messages
- Data type names

**Examples**:

**Search "OAuth"**:
- Finds all OAuth-related errors

**Search "ACME"**:
- Finds all syncs for ACME Corp

**Search "timeout"**:
- Finds all timeout errors

**Case insensitive, partial matches**

[Screenshot: Search results for "OAuth"]
*Search quickly finds specific logs*

---

## Troubleshooting with Sync Logs

### Common Error Patterns

#### Error: "OAuth token expired"

**Full error**:
```
OAUTH_TOKEN_EXPIRED
The OAuth token has expired and needs to be refreshed.
```

**What it means**:
- Your Google connection expired
- Needs re-authentication

**Solution**:
1. Go to Settings → Google Ads Connections
2. Click "Reconnect Google Ads"
3. Approve permissions
4. Re-sync the client

**Prevention**: System should auto-refresh, but manual re-auth fixes it

---

#### Error: "Permission denied"

**Full error**:
```
PERMISSION_DENIED
You do not have permission to access this Google Ads account.
```

**What it means**:
- Google account lost access
- Client revoked permissions
- Account access changed

**Solution**:
1. Verify you still have access in Google Ads directly
2. If yes: Re-connect OAuth
3. If no: Client needs to re-grant access
4. Update access, then re-sync

---

#### Error: "API timeout"

**Full error**:
```
API_TIMEOUT
Google Ads API did not respond within 60 seconds.
```

**What it means**:
- Google's servers slow
- Network issue
- Large account taking too long

**Solution**:
1. Wait 5 minutes
2. Try syncing again
3. If repeats: Try at different time
4. If chronic: Contact support

**Usually temporary** - Google API performance fluctuates

---

#### Error: "Rate limit exceeded"

**Full error**:
```
RATE_LIMIT_EXCEEDED
Google Ads API rate limit has been reached.
```

**What it means**:
- Too many API calls today
- Quota exhausted
- Need to wait for reset

**Solution**:
1. Check API Tracking page
2. See quota usage
3. Wait until quota resets (midnight PST)
4. Or reduce sync frequency

**Prevention**: Stagger syncs, disable low-priority clients

---

### Analyzing Failure Patterns

**Look for**:

**Consistent failures for one client**:
```
Oct 4: Failed - OAuth expired
Oct 3: Failed - OAuth expired
Oct 2: Failed - OAuth expired
```
→ This client needs re-auth

**Failures at same time daily**:
```
Oct 4 2:00 AM: 5 failures
Oct 3 2:00 AM: 4 failures
Oct 2 2:00 AM: 6 failures
```
→ Auto-sync time has issues, try different time

**Random failures across all clients**:
```
Oct 4: Client A failed (timeout)
Oct 3: Client B failed (network)
Oct 2: Client C failed (timeout)
```
→ System-wide issue, usually temporary

[Screenshot: Logs showing pattern of failures]
*Patterns reveal root causes*

---

## Sync Health Monitoring

### Success Rate Metric

**Calculation**:
```
Success Rate = (Successful Syncs / Total Syncs) × 100%

Example:
Last 7 days:
- Total syncs: 140
- Successful: 133
- Failed: 7

Success rate: 133/140 = 95%
```

**Healthy range**: 95-100%

**Warning range**: 90-95%

**Problem range**: <90%

---

### Average Sync Duration

**Tracking**:
```
Last 30 syncs:
- Sync 1: 3m 42s
- Sync 2: 2m 15s
- Sync 3: 4m 30s
...

Average: 3m 45s
```

**What's normal**:
- Small accounts: 2-4 minutes
- Medium accounts: 4-8 minutes
- Large accounts: 8-15 minutes

**Red flags**:
- Suddenly doubled (5m → 10m)
- Trending upward over weeks
- Highly variable (2m one day, 20m next)

**Investigate** if average increases significantly

---

### Failure Trends

**Weekly comparison**:
```
Week 1: 2 failures
Week 2: 5 failures
Week 3: 12 failures  ← Trend up
Week 4: ???
```

**What it indicates**:
- Growing OAuth issues
- API quota approaching limits
- Account access problems

**Action**: Investigate before it gets worse

---

## Exporting Sync Logs

### Export Options

**Formats**:
- CSV (best for spreadsheet analysis)
- Excel (formatted with formulas)

**What's included**:
- All visible log entries
- Applied filters reflected
- Current date range
- All columns

**Process**:
1. Apply desired filters
2. Click Export button
3. Choose format
4. File downloads

[Screenshot: Export dialog with format options]
*Export for deeper analysis or reporting*

---

### Analysis Use Cases

**Monthly reporting**:
```
1. Filter: Last 30 days
3. Calculate success rate
4. Graph sync duration trends
5. Identify problematic clients
```

**Client review**:
```
1. Filter: Specific client
2. Filter: Last 90 days
4. Show client their data freshness
5. Prove regular monitoring
```

**Troubleshooting**:
```
1. Filter: Failed syncs only
2. Filter: Last 7 days
4. Sort by error type
5. Identify common issues
```

---

## Advanced Features

### Log Retention

**How long logs are kept**:
- 90 days of complete logs
- Older logs auto-deleted
- Summary stats kept indefinitely

**Why 90 days**:
- Matches data retention
- Sufficient for troubleshooting
- Reduces database size

**Export important logs** before 90 days for long-term records

---

### Automatic Error Notifications (Coming Soon)

**Planned features**:
```
Email alerts when:
- Sync fails 3x in a row
- Daily auto-sync doesn't run
- Success rate drops below 90%
```

**Configuration**:
- Set email addresses
- Choose alert threshold

---

## Tips & Best Practices

### Daily Check-In

**Morning routine**:
1. Open Sync Logs
2. Filter to "Last 24 hours"
3. Check for failures
4. Investigate errors
5. Re-sync failed clients

**Time**: 2 minutes

**Prevents**: Small issues becoming big problems

---

### Weekly Review

**Every Monday**:
1. Export last 7 days
2. Calculate success rate
3. Review average duration
4. Identify trends
5. Adjust auto-sync schedule if needed

**Time**: 10 minutes

**Benefit**: Proactive problem detection

---

### Client-Specific Audits

**Before client calls**:
1. Filter to that client
2. Review last 10 syncs
3. Check success rate
4. Verify data freshness
5. Note any issues to discuss

**Shows professionalism**: "I verified your data is fresh as of yesterday at 2 AM"

---

### Documentation

**Keep records** of chronic issues:
```
Client: ACME Corp
Issue: OAuth expires every 30 days
Pattern: Consistent since Sep 2025
Solution: Re-auth monthly
Next re-auth due: Nov 1, 2025
```

**Helps**:
- Remember solutions
- Onboard new team members
- Justify system improvements

---

## Common Questions

**Q: How far back do logs go?**
A: 90 days. Export logs if you need longer retention.

**Q: Can I delete individual log entries?**
A: No, logs are immutable for audit purposes. They auto-delete after 90 days.

**Q: Why don't I see real-time updates for in-progress syncs?**
A: Refresh the page to see updated progress. Auto-refresh is planned for future.

**Q: Can I filter by multiple clients at once?**
A: Not currently - one client at a time. Use search for multiple: "ACME|Bakery" (future feature).

**Q: What's the difference between "Manual" and "Auto-sync" types?**
A: Manual = you clicked sync button. Auto-sync = system ran it on schedule.

**Q: If a sync fails, does it automatically retry?**
A: No, manual retry required. Auto-sync will try again next scheduled time.

**Q: Can I see which specific API calls were made?**
A: Yes, in the "View Details" modal for each log entry. Shows all operations.

---

## Troubleshooting the Logs Page

### Problem: Logs page loads slowly

**Cause**: Trying to load 90 days of logs at once

**Solution**:
1. Use date range filter (Last 7 Days)
2. Use client filter
3. Reduce items per page (25 instead of 100)

---

### Problem: Can't find a specific sync

**Diagnostics**:
1. Check date range - is it included?
2. Check status filter - is it hidden?
3. Check client filter - correct client selected?

**Solution**:
- Expand date range
- Check all status boxes
- Select "All Clients"
- Use search

---

### Problem: Export file is empty

**Cause**: Current filters exclude all logs

**Solution**:
1. Clear all filters
2. Verify logs exist
3. Apply one filter at a time
4. Export when logs visible

---

## Next Steps

Master sync monitoring with these related guides:

- **[Sync System Guide](04-sync-system-guide.html)** - Technical deep dive
- **[Auto-Sync Setup](05-auto-sync-setup.html)** - Configure automatic syncing
- **[Smart Sync Explained](../phase-1-essential/05-smart-sync-explained.html)** - Understand sync mechanics
- **[Bulk Operations](03-bulk-operations.html)** - Manage multiple syncs

---

**View your sync history**: Go to [Sync Logs](06-sync-logs.html)

**Need help interpreting errors?** Contact support at support@aiperfoads.xyz

**Last Updated**: October 4, 2025
