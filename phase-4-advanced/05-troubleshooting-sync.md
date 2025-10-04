---
title: Troubleshooting Sync Issues
description: Diagnose and fix common Smart Sync problems including failed syncs, incomplete data, slow syncs, and sync errors
category: advanced
phase: 4
order: 05
---

# Troubleshooting Sync Issues

Smart Sync pulls your Google Ads data reliably, but occasionally issues arise. This guide helps you diagnose and fix common sync problems including failed syncs, missing data, slow performance, and error messages. Follow the step-by-step solutions to get syncs working again.

---

## What You'll Learn

- Identifying sync problems quickly
- Reading sync logs for diagnostics
- Fixing failed syncs
- Resolving incomplete data issues
- Speeding up slow syncs
- Understanding error messages
- When to contact support
- Preventive maintenance tips

**Time needed**: 12 minutes to read

---

## Quick Diagnostic Checklist

**Before Deep Troubleshooting, Check**:

1. **OAuth Status**: Is Google Ads connection active?
   - Go to Settings → Google Ads Connections
   - Look for ✅ Connected status

2. **Recent Sync Time**: When was last successful sync?
   - Client List → Check "Last Sync" column
   - If >48 hours, investigate why

3. **Sync Logs**: Any error messages?
   - Client Details → Sync Logs tab
   - Look for red error messages

4. **Client Status**: Is client active?
   - Client List → Status column
   - Should be 🟢 Active, not 🔴 Error

5. **Auto-Sync**: Is it enabled?
   - Settings → Sync Settings
   - Toggle should be ON

[Screenshot: Quick health check showing OAuth status, last sync, and sync logs]
*Check these 5 indicators first before detailed troubleshooting*

---

## Problem 1: Sync Failed Completely

### Symptoms

- Sync status shows "Failed"
- Error message in sync log
- Last successful sync >24 hours ago
- Data in dashboard is stale

---

### Cause 1: OAuth Connection Expired

**Diagnostic**:
```
Sync Log Error: "OAuth token invalid or expired"
Settings → Google Ads Connections: ❌ Disconnected
```

**Solution**:

1. Go to Settings → Google Ads Connections
2. Click **Reconnect OAuth** button
3. Log in to Google account (use account with Google Ads access)
4. Grant permissions
5. Verify status changes to ✅ Connected
6. Return to Client List
7. Click client's Actions menu → Sync Now
8. Monitor sync progress

**Expected Outcome**: Sync completes successfully within 2-5 minutes

**Prevention**: System auto-refreshes OAuth tokens, but if Google account password changed or permissions revoked, manual reconnect required.

---

### Cause 2: Google Ads API Rate Limit

**Diagnostic**:
```
Sync Log Error: "Rate limit exceeded" or "Too many requests"
Multiple clients failed sync simultaneously
```

**Explanation**: Google Ads API has daily request limits. Syncing too many clients in short time exceeds limit.

**Solution**:

**Immediate**:
1. Wait 1 hour
2. Retry sync for critical clients first
3. Spread out other client syncs

**Long-Term**:
1. Enable Auto-Sync with staggered times (system handles this automatically)
2. Avoid manual sync for all clients simultaneously
3. Sync high-priority clients first if hitting limits

**Google Ads API Limits**:
- Operations per day: 15,000-50,000 (varies by account)
- Requests per second: 100-200

**PerfoAds Handling**: Smart Sync automatically batches and spaces requests to stay within limits

---

### Cause 3: Invalid Customer ID

**Diagnostic**:
```
Sync Log Error: "Customer ID not found" or "Invalid customer ID"
Client recently added
```

**Solution**:

1. Verify Customer ID is correct:
   - Open Client Details → Settings
   - Check Customer ID format: `XXX-XXX-XXXX` (10 digits with dashes)
   - Compare with Google Ads account number

2. If Customer ID wrong:
   - Click **Edit Client**
   - Update Customer ID
   - Save
   - Retry sync

3. If Customer ID correct but still failing:
   - Verify you have access to this account in Google Ads
   - Check OAuth was granted for this specific account
   - Refresh account discovery: Settings → Google Ads Connections → Refresh Discovery

---

## Problem 2: Sync Incomplete (Partial Data)

### Symptoms

- Sync status: "Completed"
- Some campaigns show data, others don't
- Metrics inconsistent (e.g., clicks but no impressions)
- Data looks partial, not comprehensive

---

### Cause 1: Sync Interrupted Mid-Process

**Diagnostic**:
```
Sync Log: "Sync completed" but duration very short (<30 seconds)
Expected sync time: 2-5 minutes
Actual sync time: 15 seconds
```

**What Happened**: Sync started but didn't complete full data pull

**Solution**:

1. Go to Client Details → Sync Logs
2. Check sync duration (should be 2-5 minutes for most accounts)
3. If abnormally short: Data pull incomplete
4. Fix:
   - Click Actions → Sync Now (retry)
   - Monitor sync log for full completion
   - Verify data freshness after completion

**Prevention**: System has built-in retry logic, but manual retry ensures full data pull

---

### Cause 2: Campaigns Paused or Removed

**Diagnostic**:
```
Missing campaigns in PerfoAds
Campaigns exist in Google Ads
Sync log shows no errors
```

**Check**:
1. Go to Google Ads
2. Verify campaign status (Active, Paused, or Removed)
3. Paused campaigns: Still sync, show in PerfoAds with Paused status
4. Removed campaigns: Don't sync (intentional behavior)

**Solution**:
- If campaign was paused: It will appear after next sync
- If campaign was removed: Expected behavior, not synced
- If campaign active but missing: Rerun sync

---

### Cause 3: Date Range Filter

**Diagnostic**:
```
User: "Where's last week's data?"
Dashboard shows "Last 30 days" filter
```

**Not a Sync Issue**: Data exists, just filtered out by date range

**Solution**:
1. Check date range selector (top right of dashboard)
2. Adjust to include desired dates
3. Data appears immediately (no sync needed)

---

## Problem 3: Sync is Very Slow

### Symptoms

- Sync takes >10 minutes (normal: 2-5 minutes)
- Sync progress bar stuck at same percentage for long time
- System feels unresponsive during sync

---

### Cause 1: Large Account (Many Campaigns/Keywords)

**Profile**:
```
Account Size:
- 50+ campaigns
- 10,000+ keywords
- 2+ years of historical data
```

**Expected Sync Time**: 5-15 minutes (this is normal for large accounts)

**Not a Problem**: Large accounts naturally take longer

**Solution**: None needed, this is expected behavior

**Optimization**: System uses Smart Sync (only pulls new data since last sync), which is already optimized

---

### Cause 2: Slow Internet Connection

**Diagnostic**:
```
Sync slow
Other web pages loading slowly
Speed test shows <5 Mbps
```

**Solution**:
- Use faster internet connection
- Close bandwidth-heavy applications
- Retry sync when connection improves

**Note**: Sync happens server-side (backend pulls from Google Ads), but slow connection affects seeing updates in dashboard

---

### Cause 3: Google Ads API Throttling

**Diagnostic**:
```
Sync Log: Multiple "Throttled" or "Retry" messages
Sync eventually completes but takes longer
```

**What's Happening**: Google is rate-limiting requests, system automatically retries with delays

**Solution**:
- Let sync complete (it will finish, just slower)
- Future syncs: Space out syncs more (use auto-sync instead of manual all-client sync)

**Prevention**: Auto-sync handles rate limiting automatically by spreading syncs throughout the day

---

## Problem 4: Sync Stuck in "In Progress"

### Symptoms

- Sync status shows "In Progress" for >30 minutes
- Progress bar not moving
- Can't start new sync

---

### Cause: Sync Process Stalled

**Solution**:

**Step 1: Wait**
- Normal sync: 2-5 minutes
- Large account: up to 15 minutes
- If <15 minutes, wait a bit longer

**Step 2: Refresh Page**
1. Hard refresh browser: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
2. Check if status updated

**Step 3: Cancel Stuck Sync**
1. Go to Client Details → Sync Logs
2. Find in-progress sync
3. Click **Cancel Sync** button (if available)
4. Wait 1 minute
5. Retry: Actions → Sync Now

**Step 4: Contact Support** (if still stuck after 30 minutes)
- Provide client name and Customer ID
- Support can manually reset sync state

---

## Problem 5: Missing Recent Data

### Symptoms

- Synced successfully today
- But data only shows through yesterday
- Today's data missing

---

### This is Normal Behavior

**Explanation**: Google Ads data has reporting lag

**Data Availability**:
- **Yesterday's data**: Available by 3 AM next day (Pacific Time)
- **Today's data**: Not fully available until tomorrow

**What PerfoAds Shows**:
- Complete data through yesterday
- Today's data: Partial (only if Google has processed it)

**Solution**: None needed, this is Google Ads reporting lag, not sync issue

**Best Practice**: Sync runs early morning (2-6 AM) to capture complete previous day's data

---

## Problem 6: Error Messages

### Error: "Customer not found"

**Meaning**: Customer ID doesn't exist or you don't have access

**Fix**:
1. Verify Customer ID format: XXX-XXX-XXXX
2. Check you have access to this account in Google Ads
3. Refresh account discovery: Settings → Google Ads Connections → Refresh Discovery
4. If still failing: Customer ID may be incorrect, update it

---

### Error: "Invalid credentials"

**Meaning**: OAuth token invalid

**Fix**:
1. Settings → Google Ads Connections
2. Click Reconnect OAuth
3. Complete authorization flow

---

### Error: "Permission denied"

**Meaning**: OAuth granted, but not for this specific account

**Fix**:
1. Verify you have admin or standard access (not read-only) to Google Ads account
2. Reconnect OAuth and ensure you select correct Google account
3. Refresh Discovery to see updated account list

---

### Error: "Rate limit exceeded"

**Meaning**: Too many API requests in short time

**Fix**:
1. Wait 1 hour
2. Retry sync
3. Enable auto-sync to avoid manual mass syncs

---

### Error: "Timeout"

**Meaning**: Sync took too long and timed out

**Fix**:
1. Retry sync (often works on second attempt)
2. If persists: Contact support (account may be very large, requiring special handling)

---

## Sync Logs: Reading and Interpreting

### Accessing Sync Logs

**Location**: Client Details → Sync Logs Tab

**What You'll See**:
```
[2025-10-04 03:15:22] Sync started
[2025-10-04 03:15:45] Fetching campaigns... (15 found)
[2025-10-04 03:16:10] Fetching keywords... (2,341 found)
[2025-10-04 03:17:02] Fetching performance data...
[2025-10-04 03:18:15] Sync completed successfully
```

---

### Log Status Indicators

**🟢 Success**:
```
"Sync completed successfully"
Duration: 2-5 minutes
All data categories fetched
```

**🟡 Warning**:
```
"Sync completed with warnings"
Some data skipped (e.g., archived campaigns)
Mostly successful
```

**🔴 Error**:
```
"Sync failed: [error message]"
No data updated
Requires intervention
```

---

### Common Log Messages

**"No changes detected"**:
- Meaning: No new data since last sync
- Action: None needed, this is normal if account hasn't changed

**"Partial data sync"**:
- Meaning: Some data categories failed, others succeeded
- Action: Check which category failed, retry sync

**"Retrying... (attempt 2 of 3)"**:
- Meaning: API request failed, system auto-retrying
- Action: Wait for completion, system handles retries

---

## Prevention and Maintenance

### Enable Auto-Sync

**Why**: Ensures consistent daily data updates without manual work

**How**:
1. Settings → Sync Settings
2. Enable Auto-Sync toggle
3. Set sync time (recommend: 2-6 AM)
4. Save

**Benefit**: No more manual syncs, data always fresh

---

### Monitor OAuth Health

**Monthly Check**:
1. Settings → Google Ads Connections
2. Verify: ✅ Connected status
3. If ⚠️ Expiring Soon: Reconnect now (don't wait for expiration)

**Why**: Prevents sudden sync failures due to expired OAuth

---

### Review Sync Logs Weekly

**Quick Review**:
1. Client List → Check "Last Sync" column
2. Any clients with "Last Sync: 2+ days ago"?
3. Open those clients → Sync Logs → Check for errors
4. Fix proactively before client notices stale data

---

## When to Contact Support

**Contact Support If**:

1. **Sync stuck in progress >30 minutes** after refresh
2. **Repeated failures** for same client (3+ failed syncs in a row)
3. **Error message not covered** in this guide
4. **Data inconsistencies** (data in Google Ads but not syncing)
5. **All clients failing sync** simultaneously (system-wide issue)

**Provide to Support**:
- Client name and Customer ID
- Screenshot of sync log errors
- Steps you've already tried
- When issue started

---

## Common Questions

**Q: How often should I manually sync?**
A: Rarely. Enable auto-sync and let system handle it. Manual sync only when you need immediate data refresh.

**Q: Can I sync multiple clients at once?**
A: Yes, but not recommended if you have >10 clients (risks rate limiting). Auto-sync handles this better.

**Q: Why does sync time vary?**
A: Account size (campaigns, keywords, data volume) affects sync time. Small accounts: 1-2 min. Large accounts: 5-15 min.

**Q: Is it safe to sync during business hours?**
A: Yes, but off-hours better (system load lower, no user activity during sync).

**Q: What if I pause auto-sync temporarily?**
A: Data goes stale. Re-enable as soon as possible. Use manual sync for critical clients in meantime.

**Q: Can sync break my Google Ads campaigns?**
A: No. Sync is read-only. It pulls data but never modifies campaigns.

---

## Advanced Diagnostic Tips

### Check Google Ads API Status

**Google Status Page**: https://ads-developers.googleblog.com/

**If Widespread Issues**:
- Google Ads API may be down
- Check status page
- Wait for Google to resolve
- Retry sync after resolution

---

### Browser Console Errors

**For Advanced Users**:

1. Open browser console: F12 (Windows) or Cmd+Option+I (Mac)
2. Go to Console tab
3. Trigger sync
4. Watch for JavaScript errors
5. Screenshot errors if any
6. Provide to support if needed

---

## Next Steps

Resolve sync issues and optimize data flow with these guides:

- **[Smart Sync Explained](../phase-1-essential/05-smart-sync-explained.html)** - How sync works
- **[Sync Logs](../phase-2-core-features/06-sync-logs.html)** - Detailed log reading guide
- **[Auto-Sync Setup](../phase-2-core-features/05-auto-sync-setup.html)** - Configure automated syncs
- **[Troubleshooting OAuth](06-troubleshooting-oauth.html)** - Fix Google Ads connection issues

---

**Enable auto-sync** to prevent manual sync issues

**Monitor OAuth health** monthly to avoid sudden failures

**Check sync logs** weekly for early problem detection

**Last Updated**: October 4, 2025
