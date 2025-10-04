---
title: Auto-Sync Setup
description: Configure automatic daily syncing - set schedules, manage timezones, and customize per-client sync preferences
category: core-features
phase: 2
order: 05
---

# Auto-Sync Setup

Auto-sync runs Smart Sync automatically on a schedule you choose. Set it up once and your client data stays fresh every day - no manual work required. This guide shows you how to configure global and per-client sync schedules.

---

## What You'll Learn

- Setting up global auto-sync schedules
- Configuring per-client custom sync times
- Managing timezones for multi-region portfolios
- Staggering syncs to avoid queue congestion
- Enabling and disabling auto-sync
- Troubleshooting sync schedule issues

**Time needed**: 10 minutes to read

---

## Why Use Auto-Sync

### Set It and Forget It

**Without auto-sync**:
- Remember to sync clients daily
- Click sync for each client
- Risk forgetting some clients
- Inconsistent data freshness

**With auto-sync**:
- Syncs happen automatically
- Every day at the same time
- All enabled clients stay fresh
- Zero manual effort

---

### Fresh Data Every Morning

**Typical workflow**:
```
2:00 AM:  Auto-sync runs
2:30 AM:  All clients synced
9:00 AM:  You start work with fresh data
```

**Result**: Always have yesterday's data ready when you arrive

---

### Consistent Analysis

**When all clients sync at same time**:
- Compare metrics across clients fairly
- Build portfolio-wide reports
- Spot trends easier
- Make data-driven decisions

[Screenshot: Auto-sync success notification]
*Wake up to fresh data every day*

---

## Global Auto-Sync Settings

### Accessing Global Settings

**Path**: Settings → Sync Settings

**What you'll see**:
- Auto-sync master toggle (enable/disable for all)
- Default sync time
- Timezone selector
- Sync frequency options

[Screenshot: Global sync settings page]
*Configure default behavior for all clients*

---

### Setting the Sync Time

**Time picker**:
- 24-hour format
- 15-minute increments
- Timezone-aware

**Recommended times**:

**2:00 AM** (most common):
- After midnight (fresh daily data)
- Before business hours
- Low system load

**6:00 AM** (early risers):
- Data ready by 7 AM
- Good for East Coast businesses

**11:00 PM** (night owls):
- End-of-day data
- Sync overnight
- Ready next morning

**When to avoid**:
- Business hours (8 AM - 6 PM) - system is busy
- Peak usage times - slower syncs

[Screenshot: Time picker showing 2:00 AM selection]
*Choose a time when you don't need the system*

---

### Choosing Your Timezone

**Important**: Sync time is in YOUR timezone, not client's

**Example**:
```
Your timezone: EST (New York)
Sync time set: 2:00 AM EST

What happens:
- 2:00 AM EST: East Coast clients sync
- 2:00 AM EST: West Coast clients sync (11 PM PST for them)
- 2:00 AM EST: International clients sync (7 AM UK for them)
```

**Best practice**:
- Use your primary business timezone
- Or where most clients are located
- Consistency matters more than perfection

**Timezone options**:
- US timezones (EST, CST, MST, PST)
- International (GMT, CET, AEST, etc.)
- Automatically handles DST (Daylight Saving Time)

[Screenshot: Timezone dropdown selector]
*Select the timezone you work in*

---

### Sync Frequency

**Currently available**:
- Daily (default and recommended)
- Disable auto-sync

**Planned for future**:
- Every 2 days
- Every 3 days
- Weekly
- Custom schedules

**Why daily is recommended**:
- Google Ads data changes daily
- Conversions lag 24-48 hours
- AI insights need fresh data
- Minimal API quota impact

---

### Enabling Auto-Sync Globally

**Steps**:
1. Go to Settings → Sync Settings
2. Toggle "Enable Auto-Sync" to ON
3. Set sync time (e.g., 2:00 AM)
4. Select timezone
5. Click Save Settings

**What happens**:
- All clients with auto-sync enabled will sync at this time
- Clients with custom schedules use their own times
- Disabled clients are skipped

[Screenshot: Auto-sync enabled with green toggle]
*Master toggle enables auto-sync system-wide*

---

## Per-Client Auto-Sync Settings

### Why Override Global Settings

**Use cases**:

**Different timezone client**:
- Global: 2 AM EST
- West Coast client: Override to 2 AM PST (5 AM EST)
- Reason: Sync during their night, not yours

**High-priority client**:
- Global: Once daily
- This client: Twice daily (if future feature)
- Reason: Needs more frequent updates

**Inactive client**:
- Global: Daily
- This client: Disabled
- Reason: Campaigns paused, no need to sync

**Low-budget client**:
- Global: Daily
- This client: Every 3 days
- Reason: Saves API quota

---

### Accessing Per-Client Settings

**Path**: Client Details → Settings Tab

**What you'll see**:
- "Override global sync settings" toggle
- Custom sync time picker
- Custom timezone selector
- Enable/disable auto-sync for this client

[Screenshot: Per-client sync settings]
*Customize sync behavior for individual clients*

---

### Overriding Global Schedule

**Steps**:
1. Open client details page
2. Go to Settings tab
3. Toggle "Override global settings" to ON
4. Set custom sync time
5. Set custom timezone (optional)
6. Click Save

**Result**:
- This client ignores global settings
- Uses custom schedule instead
- Other clients unaffected

**Example**:
```
Global setting: 2:00 AM EST
Client A: Uses global (2:00 AM EST)
Client B: Override to 6:00 AM PST (9:00 AM EST)
Client C: Override to disabled (never auto-syncs)

What happens:
2:00 AM EST: Client A syncs
9:00 AM EST: Client B syncs
Never:       Client C doesn't auto-sync
```

[Screenshot: Override toggle enabled with custom settings]
*Per-client overrides give you flexibility*

---

## Sync Staggering Strategies

### Why Stagger Syncs

**Problem**: 50 clients syncing at 2:00 AM

**Issues**:
- 45 clients queue up (only 5 concurrent)
- Last clients wait 30-45 minutes
- Higher failure rate
- API quota spike

**Solution**: Stagger sync times

---

### Simple Staggering

**Method**: Use 15-minute intervals

```
2:00 AM: Clients 1-5
2:15 AM: Clients 6-10
2:30 AM: Clients 11-15
2:45 AM: Clients 16-20
3:00 AM: Clients 21-25
...etc
```

**Implementation**:
1. Group clients in batches of 5
2. Set each batch 15 minutes apart
3. Use per-client overrides

**Time to sync 50 clients**:
```
Without staggering: 30-45 minutes (queue delays)
With staggering:   2.5 hours (spread out, no queue)
```

[Screenshot: Staggered schedule visualization]
*Spread syncs across time to avoid congestion*

---

### Priority-Based Staggering

**Group clients by priority**:

**High priority** (2:00 AM):
- Top 10 spending clients
- Clients with meetings tomorrow
- Active campaigns

**Medium priority** (3:00 AM):
- Next 20 clients
- Stable campaigns
- Regular check-ins

**Low priority** (4:00 AM):
- Remaining clients
- Low spend accounts
- Infrequent reviews

**Benefits**:
- Important clients sync first
- Less critical clients later
- Optimizes your workflow

---

### Timezone-Based Staggering

**For multi-region portfolios**:

```
East Coast clients (EST):
  Sync: 2:00 AM EST

Central clients (CST):
  Sync: 2:00 AM CST (3:00 AM EST)

Mountain clients (MST):
  Sync: 2:00 AM MST (4:00 AM EST)

West Coast clients (PST):
  Sync: 2:00 AM PST (5:00 AM EST)
```

**Benefits**:
- Natural staggering by geography
- Syncs happen in local nighttime
- Easy to remember and manage

---

## Email Notifications (Coming Soon)

### Planned Features

**Sync completion notifications**:
- Daily summary: "All 25 clients synced successfully"
- Failure alerts: "3 clients failed to sync - see details"
- Weekly digest: Performance summary

**Configuration options**:
- Email address(es) for notifications
- Notification frequency (every sync, daily, weekly)
- Severity threshold (only failures, or all syncs)

**Example email**:
```
Subject: Daily Sync Report - Oct 4, 2025

Success: 22/25 clients synced
Failed: 3 clients (see details)

Failed Clients:
- ACME Corp: OAuth token expired
- Bakery Inc: Permission denied
- Law Firm: API timeout

Action Required:
- Re-auth ACME Corp and Bakery Inc
- Retry Law Firm sync
```

[Screenshot: Email notification mockup]
*Stay informed of sync status without logging in*

---

## Enabling and Disabling Auto-Sync

### Disabling for Specific Clients

**When to disable**:
- Client campaigns are paused
- No longer managing this account
- Temporarily troubleshooting
- Testing manual sync workflows

**How to disable**:
1. Go to client Settings tab
2. Toggle "Enable auto-sync" to OFF
3. Save

**Result**:
- This client skipped in auto-sync
- Can still manually sync anytime
- No API quota used for this client

---

### Disabling Globally

**When to disable**:
- Going on vacation
- System maintenance
- Troubleshooting sync issues
- API quota concerns

**How to disable**:
1. Go to Settings → Sync Settings
2. Toggle "Enable Auto-Sync" to OFF
3. Save

**Result**:
- ALL clients skip auto-sync
- Even clients with custom schedules
- Manual syncs still work
- Re-enable when ready

**Warning**: Don't forget to re-enable!

[Screenshot: Disabled auto-sync with reminder]
*System reminds you auto-sync is disabled*

---

## Monitoring Auto-Sync

### Check Last Auto-Sync Run

**Where to check**:
- Sync Logs page → Filter to "Auto-sync"
- Shows all auto-sync operations
- Includes successes and failures

**What to look for**:
```
Success: Expected number of clients synced
Failures: Investigate errors
Missing: Clients that should have synced but didn't
```

---

### Auto-Sync Health Dashboard

**Planned feature** - Coming soon:
```
Auto-Sync Health:
- Success rate: 95% (last 7 days)
- Average syncs/day: 23 clients
- Most common errors: OAuth expiry (3%)
- Sync time: 2:00 AM EST
```

**Alerts when**:
- Success rate drops below 90%
- No syncs ran when expected
- More than 5 consecutive failures

---

## Tips & Best Practices

### Set It Up Early

**First week with PerfoAds**:
1. Add all clients
2. Configure auto-sync immediately
3. Set time that works for your schedule
4. Monitor for a week
5. Adjust as needed

**Don't delay**: The sooner auto-sync is set up, the sooner you benefit

---

### Regular Audits

**Monthly check**:
1. Review auto-sync settings
2. Disable syncs for inactive clients
3. Adjust sync times if needed
4. Check for failures

**Quarterly review**:
1. Evaluate sync frequency
2. Reassess priority groupings
3. Update staggering strategy
4. Optimize API quota usage

---

### Document Your Setup

**Keep a record**:
```
Auto-Sync Configuration (Oct 2025)

Global:
- Time: 2:00 AM EST
- Timezone: Eastern
- Enabled: Yes

Custom Schedules:
- ACME Corp: 6:00 AM PST (high priority)
- Bakery Inc: Disabled (inactive campaigns)
- Law Firm: 3:00 AM EST (medium priority)

Notes:
- West Coast clients staggered to 5:00 AM EST
- Review quarterly
```

**Why**:
- Remember your decisions
- Onboard new team members
- Troubleshoot issues
- Plan changes

---

### Test Before Production

**Before enabling auto-sync for 50 clients**:

1. **Test with 2-3 clients first**
2. **Set sync for tomorrow night**
3. **Check results next morning**
4. **Verify success in Sync Logs**
5. **Then enable for all clients**

**Prevents**:
- Unexpected behaviors
- Mass failures
- Wasted API quota
- Morning surprises

---

## Common Questions

**Q: What if I'm in a timezone not listed?**
A: Contact support to request your timezone. We can add any valid timezone.

**Q: Can I set different sync times for weekdays vs weekends?**
A: Not currently. Auto-sync runs every day at the same time. This feature is on the roadmap.

**Q: What happens on daylight saving time changes?**
A: System automatically adjusts. Your 2 AM stays 2 AM local time, even when clocks change.

**Q: Can I disable auto-sync on specific days (like holidays)?**
A: Not currently. Best workaround: Disable globally for that day, re-enable the next day.

**Q: If I change the sync time, when does it take effect?**
A: Immediately. If you change from 2 AM to 6 AM at 5:30 AM, it will sync at 6 AM that same day.

**Q: What if I have clients in multiple Google Ads accounts?**
A: Auto-sync works the same. All clients sync regardless of which Google account they're under.

**Q: Can I get notified when a specific client fails to sync?**
A: Not yet, but email notifications are coming soon. For now, check Sync Logs daily.

---

## Troubleshooting

### Problem: Auto-sync didn't run

**Diagnostics**:
1. Check global toggle - is auto-sync enabled?
2. Check sync time - did it already pass today?
3. Check Sync Logs - any entries for today?

**Common causes**:
- Auto-sync disabled globally
- All clients have auto-sync disabled
- System maintenance (rare)

**Solution**:
- Re-enable auto-sync
- Verify at least one client has auto-sync enabled
- Check system status page

---

### Problem: Only some clients synced

**Diagnostics**:
1. Check which clients synced in Sync Logs
2. Compare to client list - which are missing?
3. Check missing clients' auto-sync settings

**Common causes**:
- Some clients have auto-sync disabled
- Some clients failed OAuth
- Queue limit reached (rare)

**Solution**:
- Re-enable auto-sync for disabled clients
- Re-auth clients with OAuth errors
- Stagger sync times to reduce queue

---

### Problem: Auto-sync runs at wrong time

**Diagnostics**:
1. Check timezone setting
2. Check sync time setting
3. Check DST status

**Common causes**:
- Wrong timezone selected
- DST transition today
- Browser timezone vs setting mismatch

**Solution**:
- Update timezone to match your location
- Wait 24 hours if DST just changed
- Refresh browser, check again

---

### Problem: Too many API quota warnings

**Diagnostics**:
1. Check API Tracking page
2. Count how many clients auto-sync daily
3. Calculate: clients × 500 ops avg

**Common causes**:
- Too many clients syncing at once
- All clients syncing daily when some could be less frequent
- Large accounts consuming quota

**Solution**:
- Disable auto-sync for low-priority clients
- Sync some clients every 2-3 days instead
- Stagger sync times across 24 hours
- Request higher API quota from Google

---

## Next Steps

Perfect your sync setup with these guides:

- **[Sync System Guide](/docs/sync-system-guide)** - Understand how syncing works
- **[Sync Logs](/docs/sync-logs)** - Monitor and troubleshoot syncs
- **[Bulk Operations](/docs/bulk-operations)** - Manage multiple clients efficiently
- **[Smart Sync Explained](/docs/smart-sync-explained)** - Learn about Smart Sync

---

**Ready to set up auto-sync?** Go to [Settings → Sync Settings](/settings)

**Need help choosing sync times?** Contact support at support@aiperfoads.xyz

**Want email notifications?** Join the waitlist in Settings (coming soon)

**Last Updated**: October 4, 2025
