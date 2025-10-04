---
title: Quick Start Guide
description: Get up and running with PerfoAds in 5 minutes - connect your Google Ads account and sync your first client
category: getting-started
phase: 1
order: 02
---

# Quick Start Guide

This guide gets you from zero to managing your first client in about 5 minutes. You'll connect your Google account, add a client, and run your first data sync. No complicated setup - just the essentials to get started.

---

## What You'll Accomplish

By the end of this guide, you'll have:

- Connected your Google Ads account to PerfoAds
- Added your first client
- Synced their Google Ads data
- Viewed their campaigns and performance metrics

**Time needed**: 5 minutes

---

## Before You Start

Make sure you have:

- **Google Ads account access** - You need at least view permission for the accounts you want to manage
- **Active campaigns** - The account should have some campaign history (ideally 30+ days of data)
- **Google account login** - You'll use OAuth to connect securely

[Screenshot: Login screen showing "Connect with Google" button]
*You'll start by logging in with your Google account*

---

## Step 1: Log In with Google

The first time you access PerfoAds, you'll see the login screen.

1. Click **Connect with Google**
2. Choose your Google account (the one with Google Ads access)
3. Click **Allow** when Google asks for permissions

**What permissions are needed?**
- Read access to your Google Ads data
- Basic profile info (email, name)

**Important**: PerfoAds only *reads* your data. It never makes changes to campaigns, bids, or budgets.

[Screenshot: Google OAuth permission screen]
*Google will ask you to approve access - this is normal and secure*

**Result**: You're logged in and see the empty client dashboard.

---

## Step 2: Add Your First Client

Now let's add a client account to manage.

1. Click **Add Client** in the top right corner
2. You'll see a list of all Google Ads accounts you have access to
3. Select the account you want to manage
4. Fill in the client details:
   - **Client Name**: A friendly name (e.g., "ACME Corp")
   - **Website URL**: Their website (optional but helpful)
   - **Monthly Budget**: Approximate monthly ad spend
   - **Business Goals**: What they're trying to achieve (optional)

5. Click **Create Client**

[Screenshot: Add Client form with fields filled in]
*Fill in basic info about the client - you can always edit this later*

**Pro Tip**: If you manage accounts through an MCC (Manager account), all your client accounts will show up in the list automatically.

**Result**: Your new client appears in the client list with a "Never synced" status.

---

## Step 3: Run Your First Sync

Now let's pull in the client's Google Ads data.

1. Find your client in the list
2. Click the three-dot menu (⋮) next to their name
3. Select **Smart Sync**
4. Wait 2-4 minutes while data syncs

[Screenshot: Client list with Actions menu open, Smart Sync highlighted]
*Smart Sync is the fastest way to get fresh data*

**What's happening during sync?**
The system is pulling:
- All campaigns and their settings
- Ad groups and keywords
- Performance data (clicks, impressions, conversions)
- Spend and budget information
- Last 90 days of metrics

**Progress indicator**: You'll see a progress bar showing sync status. Feel free to navigate away - it runs in the background.

[Screenshot: Sync progress bar showing "Syncing: 45% complete"]
*The sync runs automatically - you don't need to stay on the page*

**Result**: When sync completes, you'll see a green checkmark and "Last synced: Just now" next to the client.

---

## Step 4: Explore Your Client's Data

Click on the client name to open their detail page.

Here's what you'll see:

### Overview Section
- Total spend, impressions, clicks, conversions
- Budget usage for the month
- Performance trends (up or down)

[Screenshot: Client dashboard overview with key metrics]
*The dashboard gives you a quick snapshot of account health*

### Campaigns Tab
View all active campaigns with:
- Spend and performance
- Click-through rates (CTR)
- Conversion metrics
- Status (active, paused, ended)

### Performance Charts
Visual graphs showing:
- Spend over time
- Clicks and impressions trends
- Conversion patterns

[Screenshot: Performance charts showing 30-day trends]
*Charts help you spot trends and issues quickly*

**Pro Tip**: Click any campaign to drill down into ad groups and keywords.

---

## What Happens Next?

Now that your first client is set up, the system starts working automatically:

### Daily Auto-Sync
- Runs once per day (you choose the time in Settings)
- Pulls only new data since last sync
- Takes 2-4 minutes per client
- Happens in the background

### AI Analysis
- Scans for optimization opportunities
- Creates Smart Alerts when issues are found
- Updates continuously as new data comes in

### Fresh Insights
- Performance metrics update after each sync
- Charts reflect latest trends
- AI Chat has access to current data

---

## Tips for Success

**Sync Regularly**: Set up auto-sync to run daily (morning works well). This keeps your data fresh and AI insights accurate.

**Add All Clients**: Don't stop at one! Add all your Google Ads accounts now while you're in setup mode. Bulk sync saves time.

**Check Alerts**: After your first sync completes, visit the AI Alerts page. You might already have optimization opportunities waiting.

**Explore AI Chat**: Try asking "What campaigns need attention?" or "Why did my CTR drop?" to see AI insights in action.

**Set Business Context**: Go to Settings → Business Profile and add details about your client's industry, goals, and constraints. This helps the AI give better recommendations.

---

## Common Questions

**Q: How often should I sync?**
A: Once per day is perfect for most agencies. You can also run manual syncs anytime you need fresh data (like before client calls).

**Q: Can I sync multiple clients at once?**
A: Yes! Select multiple clients from the list, then use the Bulk Actions menu to sync them all together.

**Q: What if sync fails?**
A: First, check that you're still logged into Google. Then try syncing again. If it keeps failing, check the Sync Logs page for error details.

**Q: Does syncing use my Google Ads API quota?**
A: Yes, but Smart Sync is designed to stay well within Google's limits. It only pulls new data since the last sync, which is much faster and uses fewer API calls.

**Q: Can I change client details later?**
A: Absolutely. Click the client, then click the Edit button to update name, website, budget, or goals anytime.

**Q: Will this affect my live campaigns?**
A: No. PerfoAds only reads data - it never makes changes to your campaigns, bids, keywords, or budgets. You stay in full control.

---

## Troubleshooting

### Problem: "No Google Ads accounts found"

**Symptom**: After logging in, the Add Client screen shows no accounts

**Solution**:
1. Make sure you're logged into the correct Google account
2. Verify that account has access to Google Ads accounts (direct or via MCC)
3. Try logging out and back in
4. Contact support if the issue persists

### Problem: Sync takes longer than 5 minutes

**Symptom**: Sync progress stays at same percentage for a long time

**Solution**:
1. Large accounts (100+ campaigns) can take 5-10 minutes - this is normal
2. Check your internet connection
3. Don't close the browser tab (it won't cancel sync, but you won't see updates)
4. If stuck for 15+ minutes, contact support

### Problem: "Permission denied" error

**Symptom**: Sync fails with permission error

**Solution**:
1. Go to Settings → Connected Accounts
2. Click **Reconnect Google Ads**
3. Make sure you grant all requested permissions
4. Try syncing again

---

## Next Steps

You're all set! Here's what to explore next:

- **[Adding Your First Client](/docs/adding-first-client)** - Detailed walkthrough with advanced options
- **[Understanding the Dashboard](/docs/understanding-dashboard)** - Learn what every metric means
- **[Smart Sync Explained](/docs/smart-sync-explained)** - How the sync system works under the hood
- **[Smart Alerts Intro](/docs/smart-alerts-intro)** - Start getting AI-powered optimization suggestions

---

**Ready to add more clients?** Click **Add Client** and repeat Step 2-3 for each account.

**Want to set up auto-sync?** Go to Settings → Sync Schedule to configure daily automatic syncing.

**Need help?** Contact support at support@aiperfoads.xyz

**Last Updated**: October 4, 2025
