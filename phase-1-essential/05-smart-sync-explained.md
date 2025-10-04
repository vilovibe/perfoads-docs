---
title: Smart Sync Explained
description: How Smart Sync works, when to use it, what data it pulls, and why it's 30x faster than traditional syncing
category: getting-started
phase: 1
order: 05
---

# Smart Sync Explained

Smart Sync is the engine that keeps your Google Ads data fresh. Instead of pulling all historical data every time (slow and wasteful), it figures out what's new since your last sync and only grabs that. This makes syncing 30x faster while staying within Google's API limits.

This guide explains how it works, what data it pulls, and when to use it.

---

## What You'll Learn

- What Smart Sync is and how it's different from Full Sync
- How Smart Sync calculates what data to pull
- What 12 types of data are synced
- When to use Smart Sync vs Full Sync
- How long syncs take and why
- Troubleshooting sync issues

**Time needed**: 8 minutes to read

---

## What is Smart Sync?

**Simple explanation**: Smart Sync looks at when you last synced, then only pulls new data from that date forward.

**Example**:
- Last sync: 3 days ago
- Smart Sync pulls: Only the last 3 days of data
- Time saved: 90% faster than re-syncing all 90 days

[Screenshot: Smart Sync progress showing "Syncing last 3 days..."]
*Smart Sync only pulls what's new - much faster than full sync*

---

## Smart Sync vs Full Sync

### Smart Sync (Default - Use This)

**What it does**:
- Calculates optimal date range automatically
- Pulls only new data since last sync
- Usually 2-4 minutes

**When to use**:
- Daily automatic syncs
- Quick refresh before client calls
- Updating recent performance data
- After making small changes in Google Ads

**How often**: Once per day is perfect

### Full Sync (Use Sparingly)

**What it does**:
- Re-syncs all historical data (typically 90 days)
- Ignores last sync date
- Usually 10-30 minutes

**When to use**:
- First time adding a client
- Data looks wrong or incomplete
- Major changes in Google Ads (campaign restructures)
- Restoring from backup

**How often**: Rarely - only when needed

[Screenshot: Actions menu showing both Smart Sync and Full Sync options]
*Smart Sync is the default - Full Sync is for special cases*

---

## How Smart Sync Calculates Date Range

Smart Sync uses smart logic to determine what data to pull:

### The Calculation

Smart Sync automatically determines the optimal date range:
- **First sync**: Pulls last 90 days of data
- **Subsequent syncs**: Pulls only data that changed since last sync (with 1-day buffer for accuracy)

### Why the 1-Day Buffer?

Google Ads data can change retroactively:
- Conversions sometimes take hours to track
- Google processes clicks in batches
- Attribution models look back at previous days

**The buffer ensures we don't miss updates to recent data.**

### Example Scenarios

**Scenario 1: Daily sync**
- Last sync: Yesterday
- Smart Sync pulls: Last 2 days (yesterday + buffer)
- Time: ~2 minutes

**Scenario 2: Missed a few days**
- Last sync: 5 days ago
- Smart Sync pulls: Last 6 days (5 days + buffer)
- Time: ~4 minutes

**Scenario 3: First time sync**
- Last sync: Never
- Smart Sync pulls: Last 90 days (full history)
- Time: ~10-15 minutes

[Screenshot: Sync logs showing calculated date range]
*System logs show exactly what date range was synced*

---

## What Data Gets Synced

Smart Sync pulls 12 types of data from Google Ads:

### 1. Campaign Data

**What it includes**:
- Campaign names and IDs
- Campaign types (Search, Display, Video, etc.)
- Status (active, paused, removed, ended)
- Budgets and bid strategies
- Targeting settings
- Campaign-level performance metrics

**Why it matters**: Foundation for all other data

### 2. Ad Group Data

**What it includes**:
- Ad group names and IDs
- Parent campaign associations
- Status and targeting
- Ad group-level performance

**Why it matters**: Organizes keywords and ads into logical groups

### 3. Keyword Data

**What it includes**:
- Keyword text and match types
- Bids and quality scores
- Status and approval
- Keyword performance metrics

**Why it matters**: Core of search advertising - where budget is spent

### 4. Ad Creative Data

**What it includes**:
- Responsive search ads (headlines, descriptions)
- Expanded text ads (legacy)
- Ad copy and final URLs
- Ad performance metrics

**Why it matters**: What users actually see in search results

### 5. Search Term Data

**What it includes**:
- Actual queries users typed
- Which keyword triggered the ad
- Match type that was used
- Query performance

**Why it matters**: Shows if your keywords match user intent

### 6. Geographic Performance

**What it includes**:
- Performance by country, state, city
- Spend and conversions by location
- Geographic targeting effectiveness

**Why it matters**: Identify high-performing and low-performing regions

### 7. Conversion Data

**What it includes**:
- Conversion actions configured
- Conversion counts and values
- Attribution model used
- Conversion by source

**Why it matters**: Tracks ROI and business outcomes

### 8. Budget Tracking

**What it includes**:
- Daily budget limits
- Actual spend vs budget
- Budget pacing
- Overspend warnings

**Why it matters**: Prevents budget overruns

### 9. Quality Score Data

**What it includes**:
- Quality score (1-10)
- Expected CTR rating
- Ad relevance rating
- Landing page experience rating

**Why it matters**: Affects ad rank and cost-per-click

### 10. Extensions

**What it includes**:
- Sitelink extensions
- Callout extensions
- Call extensions
- Structured snippet extensions

**Why it matters**: Makes ads more prominent and clickable

### 11. Audience Data

**What it includes**:
- Audience lists and associations
- Performance by audience
- Audience bid adjustments

**Why it matters**: Shows which audiences convert best

### 12. Campaign Settings

**What it includes**:
- Bid strategies (manual, automated)
- Ad rotation settings
- Device targeting
- Ad scheduling

**Why it matters**: Affects how campaigns run

[Screenshot: Sync progress showing all 12 data types]
*You can see each data type being synced in real-time*

---

## How Long Syncs Take

### Factors Affecting Speed

**Account size**:
- Small (1-10 campaigns): 2-4 minutes
- Medium (10-50 campaigns): 4-8 minutes
- Large (50-200 campaigns): 8-15 minutes
- Very large (200+ campaigns): 15-30 minutes

**Date range**:
- 1-3 days: Very fast (1-2 minutes)
- 7 days: Fast (2-4 minutes)
- 30 days: Medium (5-10 minutes)
- 90 days: Slow (10-30 minutes)

**Data complexity**:
- More keywords = longer sync
- More ad groups = longer sync
- More conversions = longer sync

### Why Smart Sync is Fast

**Batched operations**: Pulls data in batches, not one-by-one
**Parallel processing**: Multiple data types synced simultaneously
**Optimized queries**: Only requests needed fields
**Smart caching**: Re-uses data that hasn't changed

**Result**: 30x faster than naive sync approaches

[Screenshot: Comparison showing Smart Sync vs traditional sync times]
*Smart Sync completes in minutes what used to take hours*

---

## When Sync Runs

### Automatic Daily Sync

**Default schedule**: 2:00 AM your local time

**How it works**:
- System wakes up at scheduled time
- Runs Smart Sync on all enabled clients
- Processes up to 5 clients simultaneously
- Queues the rest until capacity available
- Sends email if any syncs fail

**Customization**: Go to Settings → Sync Schedule to change time

### Manual Sync

**From client list**:
1. Click Actions (⋮) → Smart Sync
2. Sync starts immediately
3. Progress shows in Status column

**Bulk sync**:
1. Select multiple clients (checkboxes)
2. Click Bulk Actions → Sync Selected
3. All clients queue up and sync in order

**When to use**: Before client calls, after Google Ads changes

[Screenshot: Sync schedule settings showing time picker]
*Customize when automatic syncs run*

---

## Sync Queue and Concurrency

### How the Queue Works

**Concurrent limit**: 5 clients syncing at once

**Why the limit**:
- Google Ads API has rate limits
- Prevents hitting quota too fast
- Ensures each sync completes successfully

**Queue behavior**:
- Client 1-5: Start immediately
- Client 6+: Wait in queue
- As each finishes, next in queue starts

### Checking Queue Position

**From client list**:
- Status shows "Queued (position 3)" if waiting
- Once syncing: "Syncing... 45%"
- When done: "Last synced: Just now"

**From sync logs**:
- See all queued, active, and completed syncs
- Estimated wait time for queued syncs

[Screenshot: Client list showing mix of syncing, queued, and completed statuses]
*Queue ensures syncs complete successfully without hitting rate limits*

---

## Understanding Sync Progress

### Progress Indicators

**Percentage complete**: `0%` → `100%`
- Based on number of data types completed
- Each of 12 data types = ~8.3% progress

**Current operation**: `Syncing campaigns...`
- Shows which data type is being pulled
- Updates every few seconds

**Estimated time remaining**: `~2 minutes left`
- Based on account size and current speed
- Adjusts dynamically

[Screenshot: Sync progress bar showing 67% complete, "Syncing keywords..."]
*Real-time progress keeps you informed*

### What Happens During Sync

PerfoAds connects to Google Ads, downloads your latest performance data, and updates your dashboard with fresh metrics. You'll see a progress bar showing real-time updates as the sync completes.

---

## Tips & Best Practices

### Daily Routine

**Let auto-sync handle it**: Set it once, forget about it
- Sync runs overnight
- Data fresh when you start work
- No manual intervention needed

**Morning check**: Look for failed syncs
- Filter by Status = Failed
- Check Sync Logs for errors
- Re-sync manually if needed

### Before Client Calls

**Quick refresh**:
1. Find client in list
2. Smart Sync (2-4 minutes)
3. Open client detail page
4. You have fresh data for the call

**Don't over-sync**: Syncing every hour wastes API quota and provides minimal benefit

### For Large Accounts

**Stagger sync times**: Don't sync 50 clients at 2 AM
- Spread them out: 2:00 AM, 2:30 AM, 3:00 AM, etc.
- Reduces queue congestion
- Faster completion overall

**Consider less frequent syncs**: Some clients don't need daily updates
- Low-budget clients: Sync 2-3x per week
- Paused campaigns: Sync weekly or disable
- Test accounts: Sync manually only

Smart Sync is designed to be efficient with Google's API limits. If you're syncing many clients frequently and notice slower performance, consider reducing sync frequency for less active clients or spreading syncs throughout the day.

---

## Common Questions

**Q: What's the difference between Smart Sync and Full Sync?**
A: Smart Sync only pulls new data since last sync (fast). Full Sync re-syncs all historical data (slow). Use Smart Sync 99% of the time.

**Q: How often should I sync?**
A: Once per day is perfect for most accounts. More frequent syncing provides minimal benefit and wastes API quota.

**Q: Can I sync while I'm viewing a client's data?**
A: Yes! Sync runs in the background. The page will update automatically when new data arrives.

**Q: What if I make changes in Google Ads - do I need to sync right away?**
A: You can, but it's not required. Changes will appear in your next scheduled sync (usually within 24 hours). If you need to see them immediately, run a manual Smart Sync.

**Q: Does syncing use my Google Ads API quota?**
A: Yes, but Smart Sync is designed to stay well within limits. You'd need to sync hundreds of clients daily to approach quota.

**Q: What happens if sync fails?**
A: The system logs the error and you'll see "Failed" status. Check Sync Logs for details. Usually it's a temporary issue - try syncing again.

**Q: Can I pause automatic syncing for a client?**
A: Auto-sync is controlled globally in Settings. You can disable it for all clients, but there is no per-client auto-sync control.

---

## Troubleshooting Sync Issues

### Problem: Sync stuck at 0%

**Symptom**: Progress shows 0% for 5+ minutes

**Possible causes**:
- Google Ads API is slow
- Large account taking time to authenticate
- Network connectivity issue

**Solution**:
1. Wait 10 minutes (some accounts are just slow to start)
2. Check your internet connection
3. If still stuck after 15 minutes, cancel and retry
4. Check Sync Logs for error details

### Problem: Sync fails with "Permission denied"

**Symptom**: Sync starts but immediately fails with auth error

**Possible causes**:
- Google account access was revoked
- OAuth token expired
- Account permissions changed

**Solution**:
1. Go to Settings → Connected Accounts
2. Click "Reconnect Google Ads"
3. Approve all permissions
4. Try syncing again

### Problem: Sync completes but data looks wrong

**Symptom**: Numbers don't match Google Ads interface

**Possible causes**:
- Google Ads shows different time zone
- Attribution model differences
- Conversion tracking lag
- Data not refreshed in browser

**Solution**:
1. Refresh the page (Ctrl+R or Cmd+R)
2. Check date range - make sure it matches
3. Compare time zones (PerfoAds uses account time zone)
4. If still wrong, run a Full Sync to re-pull all data

### Problem: Sync takes forever

**Symptom**: Sync runs for 30+ minutes

**Possible causes**:
- Very large account (500+ campaigns)
- Running Full Sync instead of Smart Sync
- Google API performance issues

**Solution**:
1. Check if you accidentally started Full Sync
2. For huge accounts, this is normal
3. Consider breaking into multiple client entries if manageable
4. Contact support if syncs consistently take 45+ minutes

---

## Next Steps

Now that you understand how Smart Sync works, explore related topics:

- **[Sync Logs](../phase-2-core-features/06-sync-logs.html)** - View detailed sync history and debug issues
- **[Auto-Sync Setup](../phase-2-core-features/05-auto-sync-setup.html)** - Configure automatic sync schedules
- **[Client Details Page](../phase-2-core-features/02-client-details-page.html)** - Explore the data that syncs pull

---

**Want to change your sync schedule?** Go to Settings → Sync Schedule

**Need to troubleshoot a failed sync?** Check the [Sync Logs page](../phase-2-core-features/06-sync-logs.html)

**Have a huge account?** Contact support@aiperfoads.xyz for optimization tips

**Last Updated**: October 4, 2025
