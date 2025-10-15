# Data Syncing

Data syncing is how PerfoAds gets your Google Ads data and keeps it up to date.

## What Is Data Syncing?

Syncing means PerfoAds connects to Google Ads and copies your campaign data (performance metrics, campaigns, ad groups, keywords, etc.) into your PerfoAds dashboard.

## How Syncing Works

### Automatic 24-Hour Sync
**Default behavior**: Your data automatically syncs once every 24 hours.

**What happens**:
1. PerfoAds connects to your Google Ads account
2. Downloads the latest data (campaigns, metrics, performance)
3. Updates your dashboard with new information
4. Generates Smart Alerts if it detects important changes

**When it runs**: Typically overnight (during off-peak hours)

**How long it takes**: 1-5 minutes depending on account size

### First Sync
When you first connect a Google Ads account:
- Initial sync can take 5-15 minutes
- PerfoAds downloads historical data (last 90 days)
- You'll get an email when the first sync completes
- After that, syncs are faster (only updating new data)

## Manual Sync

Force an immediate sync instead of waiting for the automatic 24-hour sync.

### How to Manually Sync

**From Clients List**:
1. Click the three dots (⋮) next to a client
2. Select "Sync Now"
3. Wait for the sync to complete (1-5 minutes)

**From Client Dashboard**:
1. Look for the "Last Synced" timestamp
2. Click "Sync Now" button (if available)
3. Dashboard updates when sync finishes

### When to Use Manual Sync

**Good reasons**:
- You just made changes in Google Ads and want to see them immediately
- You're about to present data to a client and need it current
- Automatic sync failed and you're manually retrying

**Not necessary**:
- Daily monitoring (automatic sync handles this)
- Checking yesterday's performance (already synced)
- "Just because" (wastes API quota unnecessarily)

## Understanding Last Sync Time

Every client shows a "Last Synced" timestamp:

**"Synced 2 hours ago"** = Data is current as of 2 hours ago

**"Synced 1 day ago"** = Next automatic sync is due soon

**"Synced 3 days ago"** = Something is wrong - sync may have failed

### Data Freshness

Your dashboard shows data up to the last sync time. If it says "Last synced: 10 hours ago," you're seeing data from 10 hours ago, not real-time.

**This is normal**: Google Ads data itself has a delay (usually 2-3 hours). Real-time data doesn't exist in Google Ads anyway.

## Sync Status Indicators

### Syncing (In Progress)
Blue spinner icon. Sync is currently running. Wait for it to finish (1-5 minutes).

### Synced Successfully (Green)
Green checkmark. Last sync completed without errors. Data is up to date.

### Sync Failed (Red)
Red X icon. Last sync encountered an error. Click for details or retry manually.

### Sync Pending (Yellow)
Yellow clock icon. Sync is scheduled but hasn't run yet (only appears for very new accounts).

## Why Syncs Fail

Common reasons:

### Authentication Expired
**Fix**: Reconnect your Google account in the Google Accounts page.

### Google Ads API Limit Reached
**Fix**: Wait a few hours and try again. Manual syncs count against daily API quota.

### Google Ads Account Suspended
**Fix**: Check your Google Ads account directly. If it's suspended, PerfoAds can't access data.

### Network Issues
**Fix**: Temporary problem. Try manual sync again in a few minutes.

## Sync History & Logs

View detailed sync history in **Settings > Sync Settings**:

**Sync Log shows**:
- Exact time of each sync
- Success or failure status
- Error messages (if failed)
- How much data was synced

**Use sync logs to**:
- Troubleshoot sync failures
- Verify data is updating regularly
- Check if manual syncs completed

## What Data Is Synced?

PerfoAds syncs:
- ✅ Campaign names, status, budgets
- ✅ Ad group names and status
- ✅ Performance metrics (impressions, clicks, conversions, cost)
- ✅ Keyword data and performance
- ✅ Ad copy and creative (for display purposes)
- ✅ Conversion events
- ✅ Quality scores

PerfoAds **does NOT sync**:
- ❌ Billing information
- ❌ Credit card details
- ❌ Google Ads login credentials
- ❌ Audience lists (only references to them)

## Data Retention

**How long PerfoAds keeps your data**:
- Active clients: All historical data is kept
- Deleted clients: Data is permanently deleted within 30 days
- Disconnected Google accounts: Data remains until you delete the client

## Best Practices

**Let automatic sync do its job**: Daily automatic syncs are sufficient for most users.

**Use manual sync only when needed**: Excessive manual syncs can hit API limits.

**Check sync status if data seems wrong**: Old "Last Synced" time = stale data.

**Enable "Sync Failed" email notifications**: So you know immediately if syncing stops working.

**Don't panic if a sync fails**: Try manual sync. Most failures are temporary (network issues, API timeouts).

## Troubleshooting

### "Data hasn't updated in days"
1. Check "Last Synced" timestamp
2. Look for failed sync errors
3. Try manual sync
4. Check Google Accounts page for authentication issues

### "Manual sync not working"
1. Verify internet connection
2. Check if Google Ads account is accessible
3. Wait 5 minutes and try again
4. Reconnect Google account if issue persists

### "Sync says successful but data looks wrong"
1. Check the exact sync timestamp
2. Remember Google Ads data has 2-3 hour delay built-in
3. Verify you're looking at the correct date range
4. Compare with Google Ads directly to confirm discrepancy
