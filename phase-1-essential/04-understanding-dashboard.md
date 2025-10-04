---
title: Understanding the Dashboard
description: Complete guide to navigating your PerfoAds dashboard, understanding metrics, and using the client list interface
category: getting-started
phase: 1
order: 04
---

# Understanding the Dashboard

Your PerfoAds dashboard is mission control for all your Google Ads clients. This guide walks you through every element, metric, and action available - so you can manage accounts confidently and efficiently.

---

## What You'll Learn

- How to read the summary cards (clients, syncs, spend, alerts)
- Understanding the client list table and what each column means
- Using filters and search to find specific clients
- Quick actions available from the dashboard
- Interpreting status indicators and alerts

**Time needed**: 10 minutes to read, 5 minutes to explore

---

## Dashboard Layout Overview

When you log in, you see the client list dashboard with three main sections:

1. **Top Bar** - Navigation, search, and Add Client button
2. **Summary Cards** - High-level overview of all accounts
3. **Client Table** - Detailed list of all your clients with metrics

[Screenshot: Full dashboard view showing all three sections]
*Your dashboard gives you complete visibility into all managed accounts*

---

## Summary Cards

The four cards at the top give you an at-a-glance view of your entire operation.

### Total Clients

**What it shows**: How many Google Ads accounts you're managing

**Example**: `12 Clients`

**Why it matters**: Tracks your client base size. Helps you see growth over time.

[Screenshot: Total Clients card showing number]
*Total active clients in your account*

### Active Syncs

**What it shows**: How many clients are currently syncing data

**Example**: `2 Active`

**Why it matters**:
- If you see 5+ syncing at once, some might be in queue
- Zero means all syncs are complete or none running
- Helps you know if data is refreshing

[Screenshot: Active Syncs card showing count]
*Real-time view of ongoing sync operations*

### Total Spend

**What it shows**: Combined ad spend across all clients (last 30 days)

**Example**: `$45,230`

**Why it matters**:
- Track total budget you're managing
- Spot unusual spending patterns
- Report to management on total ad investment

**Note**: Only includes clients with recent sync data

[Screenshot: Total Spend card showing dollar amount]
*Aggregate spending across your entire client portfolio*

### Active Alerts

**What it shows**: Total AI-generated alerts needing attention

**Example**: `18 Alerts` with severity breakdown:
- 3 Critical (red)
- 7 High (orange)
- 5 Medium (yellow)
- 3 Low (blue)

**Why it matters**:
- Know how many optimization opportunities exist
- Prioritize which clients need attention
- Track alert resolution progress

[Screenshot: Active Alerts card showing count and severity colors]
*See all unresolved alerts at a glance*

---

## Client List Table

This is where you spend most of your time - viewing and managing clients.

### Table Columns Explained

Each row represents one client. Here's what every column means:

#### Client Name

**What it shows**: The friendly name you gave the client

**Features**:
- Click to open client detail page
- Pencil icon to edit name, website, or budget

**Example**: `ACME Corp`, `Bakery - Downtown`

[Screenshot: Client name column with edit icon]
*Click the name to view details, click the pencil to edit*

#### Customer ID

**What it shows**: The Google Ads customer ID (10-digit number)

**Example**: `123-456-7890`

**Why it matters**:
- Unique identifier from Google
- Useful when talking to Google Ads support
- Matches the ID in Google Ads interface

**Format**: Always `XXX-XXX-XXXX`

#### Last Sync

**What it shows**: When data was last refreshed

**Examples**:
- `Just now` - Synced in last minute
- `5 minutes ago` - Recent sync
- `2 hours ago` - Somewhat fresh
- `Yesterday at 2:00 AM` - Older data

**Freshness Indicators**:
- 🟢 Green - Synced today (fresh data)
- 🟡 Yellow - 1-3 days old (slightly stale)
- 🔴 Red - 4+ days old (very stale)

**Why it matters**: Know if you're looking at current data or outdated metrics

[Screenshot: Last Sync column showing different time formats and color indicators]
*Color-coded freshness helps you spot stale data quickly*

#### Synced Days

**What it shows**: How many days of data you have

**Example**: `90 days`

**Why it matters**:
- More days = better trend analysis
- AI needs 30+ days for good insights
- First sync usually gets 90 days

**Typical values**:
- 90 days - Full historical data
- 30 days - Minimum for good AI analysis
- 7 days - New account or partial sync

#### Status

**What it shows**: Current state of the client account

**Possible values**:

**✅ Active**
- Client is ready to use
- Data is synced
- Everything working normally

**🔄 Syncing**
- Data refresh in progress
- Shows percentage complete
- Usually 2-15 minutes

**❌ Failed**
- Last sync encountered an error
- Click for error details
- Needs attention (see Troubleshooting)

**⏸️ Paused**
- Auto-sync disabled
- Manual sync still available
- Used for inactive clients

[Screenshot: Status column showing all four status types]
*Status helps you quickly identify which clients need attention*

#### Alerts

**What it shows**: Number of unresolved AI alerts for this client

**Format**: Badge with number and color

**Color coding**:
- 🔴 Red - Critical issues (budget waste, broken tracking)
- 🟡 Yellow - Important optimizations (performance drops)
- 🟢 Green - Minor suggestions (small improvements)

**Examples**:
- `5` in red - 5 critical alerts
- `2` in yellow - 2 medium-priority alerts
- `-` (dash) - No alerts

**Click the badge**: Opens client detail page filtered to alerts

[Screenshot: Alerts column showing different colored badges]
*Color tells you severity at a glance*

#### Actions

**What it shows**: Dropdown menu with quick actions

**Available actions**:

**Smart Sync**
- Pull latest data from Google Ads
- Only syncs new data since last sync
- Fastest option (2-4 minutes)

**Full Sync**
- Re-sync all historical data
- Use when data seems wrong
- Takes longer (5-15 minutes)

**View Details**
- Opens client detail page
- Same as clicking client name

**Edit Client**
- Change name, website, budget
- Update business context
- Modify sync settings

**Delete Client**
- Permanently removes client
- Deletes all synced data
- Cannot be undone - use carefully!

[Screenshot: Actions dropdown menu open showing all options]
*Quick access to common operations without leaving the dashboard*

---

## Using Filters and Search

### Search Box

Located in the top bar, lets you find clients quickly.

**Searchable fields**:
- Client name
- Customer ID
- Website URL

**Examples**:
- Type `ACME` to find ACME Corp
- Type `123-456` to find by customer ID
- Type `.com` to see all with websites

[Screenshot: Search box with example search]
*Search across name, ID, or URL to find clients fast*

### Filter by Status

Click the status filter dropdown to show only:
- Active clients
- Syncing clients
- Failed clients
- Paused clients

**Use case**: Filter to "Failed" to see which clients need troubleshooting.

[Screenshot: Status filter dropdown]
*Filter helps you focus on specific client groups*

### Sort Columns

Click any column header to sort:

**Click once** - Sort ascending (A to Z, oldest to newest)
**Click twice** - Sort descending (Z to A, newest to oldest)
**Click third time** - Remove sort

**Useful sorts**:
- Sort by Last Sync (oldest first) to find stale data
- Sort by Alerts (highest first) to prioritize work
- Sort by Client Name (A-Z) for alphabetical view

[Screenshot: Column headers with sort arrows]
*Click headers to reorder the table*

---

## Understanding Client Health at a Glance

You can quickly assess client health by looking at multiple indicators together:

### Healthy Client

✅ **Status**: Active
🟢 **Last Sync**: Just now (green)
📊 **Synced Days**: 90 days
🟢 **Alerts**: 0-2 (green or none)

**What it means**: Everything's running smoothly, no urgent action needed.

### Needs Attention

🟡 **Status**: Active
🟡 **Last Sync**: 2 days ago (yellow)
📊 **Synced Days**: 90 days
🟡 **Alerts**: 3-5 (yellow)

**What it means**: Data is getting stale, some optimization opportunities exist. Review alerts soon.

### Critical Issues

🔴 **Status**: Failed or Active
🔴 **Last Sync**: 5+ days ago (red)
📊 **Synced Days**: 30 days
🔴 **Alerts**: 5+ (red)

**What it means**: Sync is broken or critical problems exist. Fix immediately.

[Screenshot: Three example rows showing healthy, attention-needed, and critical clients]
*Compare these patterns to quickly triage your client list*

---

## Quick Actions from Dashboard

You can do most common tasks without leaving the dashboard:

### Sync a Single Client

1. Find the client in the list
2. Click Actions (⋮) next to their name
3. Select Smart Sync
4. Status changes to "Syncing..."
5. Wait 2-4 minutes

**When to use**: Before client calls, after making Google Ads changes

### Sync Multiple Clients

1. Check the boxes next to client names
2. Bulk Actions menu appears at the top
3. Click "Sync Selected"
4. All selected clients sync in queue

**When to use**: Refreshing data for a group of related clients

[Screenshot: Multiple clients selected with bulk actions menu]
*Select clients and sync them all at once*

### Edit Client Info

1. Click Actions (⋮) → Edit Client
2. Modal opens with editable fields
3. Update name, website, budget, or goals
4. Click Save

**When to use**: Client changes their business info, budget increases

### View Client Details

**Method 1**: Click client name
**Method 2**: Click Actions → View Details
**Method 3**: Click alert badge (opens to alerts)

**What you see**: Full client page with campaigns, metrics, AI chat, and alerts

---

## Top Bar Features

### Main Navigation

**Clients** - Where you are now (client list)
**Sync Logs** - History of all sync operations
**AI Chat** - Global AI assistant (not client-specific)
**Settings** - Configure sync schedules, preferences, API keys

[Screenshot: Top navigation bar]
*Navigate between main sections of the platform*

### Add Client Button

Big blue button in top right - starts the client onboarding process.

**Shortcut**: Press `Ctrl+K` (Windows) or `Cmd+K` (Mac) to open quickly

### User Menu

Click your profile icon (top right) for:
- Account settings
- Connected Google accounts
- Billing (if applicable)
- Logout

---

## Dashboard Refresh Behavior

### Auto-Refresh

**Dashboard updates automatically** when:
- A client sync completes
- New alerts are generated
- You make changes in another tab

**Refresh frequency**: Every 30 seconds while you're viewing the page

### Manual Refresh

**Refresh button** (top right, circular arrow icon):
- Click to force immediate refresh
- Useful if data seems outdated
- Shows loading indicator while refreshing

[Screenshot: Refresh button location]
*Force a refresh if you need the latest data immediately*

---

## Tips & Best Practices

### Daily Workflow

**Morning routine**:
1. Check summary cards - any unusual numbers?
2. Sort by Alerts (highest first) - which clients need attention?
3. Filter to Failed - any broken syncs overnight?
4. Review clients with red Last Sync - data stale?

**Throughout the day**:
- Use search to quickly find specific clients
- Sync before client calls for fresh data
- Check Active Syncs card if platform seems slow

### Staying Organized

**Naming convention**: Use consistent names so sorting works well
- Good: `ACME Corp`, `Bakery - Downtown`, `Law Firm - Smith`
- Bad: `client1`, `test`, `asdf`

**Regular cleanup**:
- Delete old test clients
- Pause inactive clients (not currently advertising)
- Update budgets when client spending changes

### Performance Optimization

**Large client lists** (20+ clients):
- Use search instead of scrolling
- Use filters to focus on relevant subsets
- Consider syncing in batches (not all at once)

**Slow dashboard**:
- Check Active Syncs - if 5+ are running, wait for some to finish
- Refresh browser if metrics seem frozen
- Close other tabs to free up memory

---

## Common Questions

**Q: Why don't I see any clients?**
A: You haven't added any yet. Click "Add Client" in the top right to get started.

**Q: Can I rearrange the columns?**
A: Not currently, but you can sort by any column to reorganize the list.

**Q: What does the dash (-) mean in the Alerts column?**
A: No alerts for that client. Either the account is healthy or AI hasn't analyzed it yet.

**Q: Why is Last Sync showing "Never" for a client I just added?**
A: You added the client but haven't run a sync yet. Click Actions → Smart Sync to pull data.

**Q: Can I hide paused clients from the list?**
A: Yes, use the Status filter and uncheck "Paused" to hide them.

**Q: What happens if I delete a client by accident?**
A: All data is permanently deleted and cannot be recovered. You can re-add the client, but you'll need to sync from scratch.

**Q: How many clients can I manage from one dashboard?**
A: No hard limit, but we recommend 50 or fewer for best performance. Contact sales for enterprise pricing if you need more.

---

## Troubleshooting

### Problem: Dashboard shows old data

**Symptom**: Metrics don't match Google Ads, Last Sync times look wrong

**Solution**:
1. Click the refresh button (top right)
2. Wait 5 seconds for data to reload
3. Check if Last Sync updated
4. If still wrong, try logging out and back in

### Problem: Client stuck in "Syncing" status

**Symptom**: Status shows "Syncing" for 20+ minutes

**Solution**:
1. Refresh the dashboard
2. Check Sync Logs page for that client
3. If truly stuck, contact support (provide client name and timestamp)

### Problem: Summary cards show zeros

**Symptom**: Total Clients shows 0, Total Spend shows $0

**Solution**:
1. Check if you have any clients added (table should have rows)
2. Refresh the dashboard
3. Check if clients have been synced (Last Sync should not be "Never")
4. If clients exist but cards show 0, contact support

### Problem: Actions dropdown doesn't work

**Symptom**: Clicking Actions (⋮) does nothing

**Solution**:
1. Refresh the page
2. Try a different browser (Chrome, Firefox, Safari, Edge all supported)
3. Clear browser cache
4. Disable browser extensions that might interfere

---

## Next Steps

Now that you understand the dashboard, explore these related topics:

- **[Client Details Page](../phase-2-core-features/02-client-details-page.html)** - Deep dive into a single client's data
- **[Smart Sync Explained](05-smart-sync-explained.html)** - How the sync system works
- **[Sync Logs](../phase-2-core-features/06-sync-logs.html)** - Troubleshoot sync issues and view history
- **[Smart Alerts Intro](../phase-3-ai-features/01-smart-alerts-intro.html)** - Start acting on AI recommendations

---

**Ready to explore a client?** Click any client name in your dashboard to view their details.

**Need to add more clients?** Click **Add Client** in the top right.

**Want to customize your dashboard?** Go to Settings → Display Preferences (coming soon).

**Need help?** Contact support at support@aiperfoads.xyz

**Last Updated**: October 4, 2025
