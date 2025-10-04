---
title: "Sync System Guide"
description: "Understanding how syncing works in PerfoAds"
---

# Sync System Guide

Syncing keeps your PerfoAds data fresh by pulling the latest performance metrics from Google Ads. This guide explains when to use each sync type and how to monitor sync progress.

---

## 📊 What Syncing Does

When you sync a client, PerfoAds:
- Connects to their Google Ads account
- Downloads performance data (impressions, clicks, conversions, costs)
- Updates your dashboard with the latest metrics
- Processes the data for Smart Alerts and AI insights

**Result**: Your dashboard shows accurate, up-to-date performance data.

---

## 🔄 Two Sync Types

### Smart Sync (Recommended)
**What it does**: Pulls only data that changed since the last sync

**Use when**:
- Daily or regular monitoring
- Client has been synced before
- You want quick refreshes

**Benefits**:
- Fast (typically 2-5 minutes)
- Efficient with API quota
- Perfect for daily updates

---

### Full Sync
**What it does**: Pulls complete 90-day history from scratch

**Use when**:
- Adding a client for the first time
- Haven't synced in 30+ days
- Data looks incomplete or incorrect
- Troubleshooting sync issues

**Benefits**:
- Guaranteed complete data
- Resets any sync errors
- Fresh start for the client

**Trade-off**: Takes longer (5-15 minutes depending on account size)

---

## 🎯 When to Use Each Type

| Situation | Recommended Sync Type | Why |
|-----------|----------------------|-----|
| **First time adding client** | Full Sync | Need complete 90-day history |
| **Daily monitoring** | Smart Sync | Fast, efficient updates |
| **Haven't synced in 30+ days** | Full Sync | Gap is too large for Smart Sync |
| **Data looks wrong** | Full Sync | Reset and get fresh data |
| **Regular schedule (every 1-7 days)** | Smart Sync | Quick incremental updates |
| **After changing date range** | Smart Sync | Updates only what changed |

---

## 📈 Understanding Sync Status

When you trigger a sync, you'll see these statuses:

**Queued** 🟡
- Your sync is waiting in line
- Other syncs are processing first
- Typically waits 0-30 seconds

**Processing** 🔵
- Actively downloading data from Google Ads
- Do not close the browser or navigate away
- Progress updates every few seconds

**Completed** ✅
- Sync finished successfully
- Dashboard now shows latest data
- Check timestamp to confirm freshness

**Failed** ❌
- Something went wrong (OAuth expired, API error, etc.)
- Check sync logs for details
- Try again or use Full Sync

---

## ⏱️ How Long Does Syncing Take?

**Smart Sync**:
- Small accounts (1-5 campaigns): 1-3 minutes
- Medium accounts (5-20 campaigns): 3-5 minutes
- Large accounts (20+ campaigns): 5-10 minutes

**Full Sync**:
- Small accounts: 3-5 minutes
- Medium accounts: 5-10 minutes
- Large accounts: 10-15 minutes

*Times vary based on account complexity and API response speed*

---

## 🔧 Best Practices

**For Daily Monitoring**:
- Use Smart Sync every morning
- Set up Auto-Sync for hands-free updates
- Check sync logs weekly for issues

**For New Clients**:
- Always start with Full Sync
- Wait for completion before analyzing data
- Verify metrics look correct

**For Troubleshooting**:
- Try Full Sync if Smart Sync fails repeatedly
- Check OAuth connection is still valid
- Review sync logs for error patterns

---

## 🚨 Common Issues & Quick Fixes

**Sync Takes Forever**
- **Cause**: Large account with lots of data
- **Fix**: Be patient, or check sync logs for errors

**Sync Keeps Failing**
- **Cause**: OAuth expired or API quota exceeded
- **Fix**: Re-authorize Google Ads, try again later, or use Full Sync

**Data Looks Old**
- **Cause**: Sync didn't complete or auto-sync is off
- **Fix**: Manually trigger sync, check last sync timestamp

**Missing Recent Days**
- **Cause**: Google Ads data delay (24-48 hours normal)
- **Fix**: Not a sync issue - Google Ads data has natural delay

---

## 📚 Related Guides

- **[Auto-Sync Setup](05-auto-sync-setup.html)** - Schedule automatic syncs
- **[Sync Logs](06-sync-logs.html)** - Monitor sync history and debug issues
- **[Troubleshooting: Sync Issues](../phase-4-advanced/05-troubleshooting-sync.html)** - Advanced sync troubleshooting

---

**Need Help?** Contact [contact@perfoads.com](mailto:contact@perfoads.com)
