---
title: Client List Overview
description: Master the client list interface - manage multiple accounts, run bulk operations, and keep all your Google Ads clients organized
category: core-features
phase: 2
order: 01
---

# Client List Overview

The client list is your command center for managing all Google Ads accounts. This guide goes deep into every feature, action, and workflow available from the client list page - helping you manage 5, 10, or 50+ clients efficiently.

---

## What You'll Learn

- Advanced client list navigation and filtering
- Every action available from the Actions menu
- Bulk operations for managing multiple clients at once
- Understanding client health indicators
- Organizing and prioritizing your client list
- Keyboard shortcuts and productivity tips

**Time needed**: 15 minutes to read

---

## Client List Anatomy

The client list has five main areas:

### 1. Top Navigation Bar

**Left side**:
- **Clients** - Current page (highlighted)
- **Sync Logs** - View sync history
- **AI Chat** - Global AI assistant
- **Settings** - Configure preferences

**Right side**:
- **Search box** - Find clients quickly
- **Filter dropdown** - Filter by status
- **Add Client** button - Onboard new accounts
- **User menu** - Account settings, logout

[Screenshot: Top navigation bar with all elements labeled]
*Navigation gives you quick access to all major sections*

### 2. Summary Cards

Four cards showing aggregate metrics:

**Total Clients** - Count of all managed accounts
**Active Syncs** - Currently running sync operations
**Total Spend** - Combined spend (last 30 days)
**Active Alerts** - Unresolved AI recommendations

[Screenshot: All four summary cards]
*Summary cards give you instant portfolio-wide visibility*

### 3. Bulk Actions Toolbar

Appears when you select clients using checkboxes:

**Select All** - Check all clients on current page
**Sync Selected** - Run Smart Sync on all selected
**Delete Selected** - Remove multiple clients at once
**Clear Selection** - Deselect all

[Screenshot: Bulk actions toolbar when clients are selected]
*Bulk operations save massive amounts of time*

### 4. Client Table

Main list showing all clients with columns:
- Checkbox (for bulk selection)
- Client Name
- Customer ID
- Last Sync
- Synced Days
- Status
- Alerts
- Actions menu (⋮)

### 5. Pagination Controls

**Bottom of table**:
- Page numbers
- Next/Previous buttons
- Items per page selector (10, 25, 50, 100)

[Screenshot: Full client list page with all five areas labeled]
*Understanding the layout helps you work faster*

---

## Actions Menu Deep Dive

Click the three-dot menu (⋮) next to any client to reveal all available actions.

### View Details

**What it does**: Opens client detail page

**Shortcut**: Click client name directly

**When to use**:
- Reviewing campaign performance
- Checking AI alerts for one client
- Exploring detailed metrics

**What you'll see**: 6-tab interface with Overview, Campaigns, Ad Groups, Keywords, AI Chat, Settings

[Screenshot: Client details page]
*Detailed view shows everything for one account*

---

### Smart Sync

**What it does**: Pulls new data since last sync (2-4 minutes)

**How it works**:
1. Calculates date range based on last sync
2. Pulls only new data from Google Ads
3. Updates campaigns, keywords, ads, performance
4. Triggers AI analysis
5. Generates new alerts if issues found

**When to use**:
- Before client calls (get fresh data)
- After making Google Ads changes
- When data looks stale (Last Sync is yellow/red)

**Status updates**:
- Click action → Status changes to "Syncing..."
- Progress bar shows percentage complete
- When done → "Last synced: Just now"

[Screenshot: Smart Sync progress in client list]
*Watch sync progress without leaving the page*

**Pro Tip**: Smart Sync is smart - it only pulls what's new. Use this 99% of the time.

---

### Full Sync (30 Days)

**What it does**: Re-syncs last 30 days of data (5-15 minutes)

**How it differs from Smart Sync**:
- Ignores last sync date
- Pulls full 30 days regardless
- Takes longer
- Uses more API quota

**When to use**:
- Data looks wrong or incomplete
- Metrics don't match Google Ads interface
- Major campaign restructure happened
- Troubleshooting data accuracy issues

**When NOT to use**:
- Daily routine syncs (use Smart Sync)
- Quick refresh before calls (use Smart Sync)
- Just checking for new data (use Smart Sync)

**Warning**: Full Sync uses 10-20x more API quota than Smart Sync. Use sparingly.

[Screenshot: Actions menu showing both Smart Sync and Full Sync]
*Full Sync is for special cases only*

---

### Edit Client Info

**What it does**: Opens modal to update client details

**Editable fields**:

**Basic Info**:
- Client Name
- Website URL
- Monthly Budget
- Industry

**Business Context**:
- Business Goals
- Target Audience
- Geographic Focus
- Competitive Landscape

**Sync Settings**:
- Auto-sync enabled/disabled
- Sync schedule time
- Alert preferences

[Screenshot: Edit Client modal with all fields]
*Update client info without leaving the list*

**When to use**:
- Client changes their budget
- Website URL updated
- Business goals shift
- New campaign focus

**Pro Tip**: Add detailed business context for better AI recommendations. The more the AI knows, the smarter its suggestions.

---

### Purge Data

**What it does**: Deletes all synced data but keeps client entry

**Use cases**:
- Reset client data completely
- Clear out corrupted data
- Start fresh after major Google Ads changes
- Troubleshooting data issues

**What gets deleted**:
- All campaigns, ad groups, keywords, ads
- All performance metrics
- All sync history
- All AI alerts

**What stays**:
- Client name and basic info
- Customer ID
- Sync settings
- Business profile

**After purging**:
- Client shows "Never synced"
- Run Smart Sync to pull fresh data
- AI re-analyzes from scratch

[Screenshot: Purge Data confirmation dialog]
*Purging is permanent - use carefully*

**Warning**: This cannot be undone. Only purge if you're certain.

---

### Delete Client

**What it does**: Permanently removes client and all data

**What gets deleted**:
- Everything (client entry + all data)
- Cannot be recovered

**When to use**:
- Client ended their contract
- Test client no longer needed
- Duplicate entry to clean up
- Account access was revoked

**Process**:
1. Click Delete Client
2. Confirmation dialog appears
3. Type client name to confirm
4. Click "Permanently Delete"

[Screenshot: Delete confirmation requiring client name]
*Requires typing client name to prevent accidents*

**Alternative**: If you might need the client later, disable auto-sync instead of deleting.

---

## Bulk Operations

Select multiple clients to perform actions on all of them at once.

### Selecting Clients

**Method 1: Individual checkboxes**
- Click checkbox next to each client name
- Selected rows highlight in blue

**Method 2: Select All**
- Click checkbox in table header
- Selects all clients on current page
- Does NOT select clients on other pages

**Method 3: Shift+Click**
- Click first client checkbox
- Hold Shift, click last client checkbox
- Selects all clients in between

[Screenshot: Multiple clients selected with checkboxes]
*Select specific clients or all at once*

---

### Bulk Sync

**When you've selected clients**:
1. Bulk actions toolbar appears at top
2. Click "Sync Selected"
3. All selected clients queue for sync
4. System processes 5 at a time (concurrent limit)
5. Remaining clients wait in queue

**Status indicators**:
- First 5: "Syncing... 25%"
- Next clients: "Queued (position 3)"
- Watch progress in real-time

**When to use**:
- Morning routine - refresh all high-priority clients
- After weekend - sync clients that don't auto-sync
- Before team meeting - get fresh data for all accounts

**Example workflow**:
1. Filter to clients with stale data (Last Sync = red)
2. Select All
3. Bulk Sync
4. Go get coffee while they sync

[Screenshot: Bulk sync showing mix of syncing and queued clients]
*Bulk sync processes multiple clients automatically*

---

### Bulk Delete

**What it does**: Deletes multiple clients at once

**Process**:
1. Select clients to delete
2. Click "Delete Selected"
3. Confirmation dialog lists all clients
4. Type "DELETE" to confirm
5. All selected clients permanently removed

**When to use**:
- Cleaning up multiple test clients
- Removing batch of old clients
- End-of-quarter cleanup

**Warning**: This deletes EVERYTHING for selected clients. Cannot be undone.

[Screenshot: Bulk delete confirmation showing list of clients]
*Review the list carefully before confirming*

---

## Client Health Indicators

Quickly assess client health by reading visual cues.

### Last Sync Color Coding

🟢 **Green** - Fresh data
- Synced today
- Data is current
- Safe to use for decisions

🟡 **Yellow** - Slightly stale
- Synced 1-3 days ago
- Data is mostly current
- Consider syncing before important calls

🔴 **Red** - Very stale
- Synced 4+ days ago
- Data is outdated
- Sync immediately

**Never** - Never synced
- New client, no data yet
- Run Smart Sync to pull data

[Screenshot: Client list showing all four freshness indicators]
*Color coding helps you spot stale data instantly*

---

### Status Indicators

✅ **Active** (green)
- Everything working normally
- Last sync succeeded
- No action needed

🔄 **Syncing** (blue)
- Data refresh in progress
- Shows percentage complete
- Wait for completion

❌ **Failed** (red)
- Last sync encountered error
- Needs troubleshooting
- Click to see error details

⏸️ **Paused** (gray)
- Auto-sync disabled
- Manual sync still works
- Used for inactive campaigns

[Screenshot: Status column showing all four states]
*Status tells you which clients need attention*

---

### Alert Severity Badges

🔴 **Red badge** - Critical issues
- Budget waste
- Broken conversion tracking
- Campaign delivery stopped
- Fix immediately

🟡 **Yellow badge** - Important
- Performance drops
- Quality score issues
- Optimization opportunities
- Review soon

🟢 **Green badge** - Minor suggestions
- Small improvements
- Nice-to-have optimizations
- Low priority

**-** No badge - No alerts
- Account is healthy
- No issues found
- Or not analyzed yet

[Screenshot: Alerts column with different colored badges]
*Badge color indicates urgency*

---

## Filtering and Sorting

### Filter by Status

Click Status filter dropdown:

**Filter options**:
- ☑ Active (default: checked)
- ☑ Syncing (default: checked)
- ☑ Failed (default: checked)
- ☑ Paused (default: unchecked)

**Use cases**:

**Show only failed syncs**:
- Uncheck all except Failed
- See which clients need troubleshooting

**Hide paused clients**:
- Uncheck Paused
- Clean view of active clients only

**Show everything**:
- Check all boxes
- See entire client portfolio

[Screenshot: Status filter dropdown with checkboxes]
*Filter to focus on specific client groups*

---

### Sort Columns

Click any column header to sort:

**Click once**: Ascending (A→Z, 0→9, oldest→newest)
**Click twice**: Descending (Z→A, 9→0, newest→oldest)
**Click third time**: Remove sort (back to default)

**Useful sorts**:

**By Last Sync (oldest first)**:
- Find clients with stale data
- Prioritize syncs

**By Alerts (highest first)**:
- See which clients need most attention
- Triage optimization work

**By Client Name (A→Z)**:
- Alphabetical organization
- Find clients quickly

**By Synced Days (lowest first)**:
- Find clients with limited data
- Identify partial syncs

[Screenshot: Column headers with sort arrows]
*Click headers to reorder the table*

---

### Search

**Search box** in top right searches across:
- Client name
- Customer ID
- Website URL

**Search tips**:

**Partial matches work**:
- Type "ACME" finds "ACME Corp"
- Type "123" finds "123-456-7890"

**Case insensitive**:
- "acme" = "ACME" = "Acme"

**Clears filters**:
- Search overrides status filters
- Shows all matching clients regardless of status

**Example searches**:
- `bakery` - Find all bakery clients
- `123-456` - Find by customer ID
- `.com` - Find all with website URLs

[Screenshot: Search results showing filtered clients]
*Search across multiple fields simultaneously*

---

## Pagination and Performance

### Items Per Page

**Selector** at bottom of table:
- 10 items (fastest load)
- 25 items (default)
- 50 items
- 100 items (slowest load)

**Recommendations**:

**5-20 clients total**: Use 50 items per page
- See everyone at once
- No pagination needed

**20-50 clients**: Use 25 items per page
- Good balance
- Fast loading

**50+ clients**: Use 10-25 items per page
- Keeps page responsive
- Use search/filters to find clients

[Screenshot: Items per page selector]
*Choose based on total client count*

---

### Performance Tips

**For large client lists (30+ clients)**:

**Use filters aggressively**:
- Filter to Active only (hide paused)
- Filter to Failed when troubleshooting
- Don't load everything at once

**Leverage search**:
- Search is faster than scrolling
- Type a few characters to narrow results

**Increase items per page carefully**:
- 100 items = slow load
- Better to use search/filters

**Close other tabs**:
- Client list is memory-intensive
- Other tabs slow it down

---

## Keyboard Shortcuts

**Navigation**:
- `Ctrl+K` (Windows) or `Cmd+K` (Mac) - Focus search box
- `Ctrl+N` or `Cmd+N` - Add new client
- `Ctrl+R` or `Cmd+R` - Refresh page

**Selection**:
- `Shift+Click` - Select range
- `Ctrl+A` or `Cmd+A` - Select all (within table)

**Actions** (when client is focused):
- `Enter` - Open client details
- `S` - Smart Sync
- `E` - Edit client info
- `D` - Delete client

[Screenshot: Keyboard shortcuts overlay]
*Learn shortcuts to work faster*

---

## Workflow Patterns

### Daily Morning Routine

1. **Check summary cards**
   - Any unusual numbers?
   - More alerts than normal?

2. **Filter to Failed**
   - Any broken syncs overnight?
   - Fix immediately

3. **Sort by Last Sync (oldest first)**
   - Identify stale data
   - Select and bulk sync if needed

4. **Sort by Alerts (highest first)**
   - Which clients need attention today?
   - Review top 3-5 critical alerts

**Time**: 5 minutes to triage your entire portfolio

---

### Before Client Calls

1. **Search for client name**
2. **Check Last Sync time**
   - If older than 1 hour → Smart Sync
3. **While sync runs, review alerts**
4. **Open client detail page**
5. **You have fresh data for the call**

**Time**: 3-4 minutes

---

### Weekly Cleanup

1. **Filter to Paused**
   - Delete old test clients
   - Remove ended contracts

2. **Check Total Spend card**
   - Compare to last week
   - Investigate large changes

3. **Bulk sync all clients**
   - Select All
   - Sync Selected
   - Ensure everyone has fresh data

**Time**: 10-15 minutes

---

### End of Month

1. **Export client list** (coming soon)
2. **Review Total Spend** for invoicing
3. **Check all clients for budget pacing**
4. **Clean up deleted/inactive clients**
5. **Verify auto-sync schedules still appropriate**

**Time**: 20-30 minutes

---

## Tips & Best Practices

### Organization

**Naming convention**:
- Use consistent format: `[Company] - [Location/Type]`
- Example: `ACME Corp - Main`, `Bakery - Downtown`
- Makes alphabetical sorting useful

**Tag paused clients**:
- Add "[PAUSED]" to client name
- Easy to identify even when filtering is off
- Example: `[PAUSED] Old Client - Test`

**Group by industry** (optional):
- Prefix with industry: `Legal - Smith & Associates`
- All legal clients group together when sorted

---

### Performance Management

**Don't sync everything at once**:
- Stagger auto-sync times
- Avoid 20 clients syncing at 2 AM
- Spread across 2-3 hours

**Pause inactive clients**:
- If campaigns stopped, disable auto-sync
- Saves API quota
- Reduces clutter

**Archive old clients**:
- Delete clients from 6+ months ago
- Or pause and add "[ARCHIVE]" to name

---

### Alert Management

**Daily triage**:
- Sort by Alerts (highest first)
- Work through top 5 clients
- Accept/decline recommendations
- Track resolution progress

**Set alert thresholds**:
- Go to Settings → Alert Preferences
- Choose minimum severity to show
- Filter out noise from low-priority alerts

---

## Common Questions

**Q: Can I rename the client list columns?**
A: Not currently. Column names are fixed, but you can sort by any column.

**Q: What's the maximum number of clients I can manage?**
A: No hard limit, but performance is best with 50 or fewer. Contact sales for enterprise needs (100+ clients).

**Q: Can I export the client list to CSV?**
A: Coming soon! This feature is planned for Phase 4.

**Q: Why don't I see all clients when I search?**
A: Search respects status filters. If filtering to "Active only" and you search for a paused client, it won't show. Clear filters to see all matches.

**Q: Can I customize which columns are visible?**
A: Not yet, but column customization is on the roadmap.

**Q: What happens if I delete a client by accident?**
A: Deletion is permanent and cannot be undone. That's why we require typing the client name to confirm. Be very careful.

**Q: Can I restore a deleted client?**
A: No. Once deleted, all data is permanently removed. You can re-add the client, but you'll start from scratch with a new sync.

---

## Troubleshooting

### Problem: Client list loads slowly

**Symptom**: Page takes 10+ seconds to load

**Causes**:
- Too many items per page (100 items)
- 50+ total clients
- Slow internet connection

**Solution**:
1. Reduce items per page to 25
2. Use filters to show subset of clients
3. Close other browser tabs
4. Refresh the page

### Problem: Bulk sync seems stuck

**Symptom**: First few clients sync, then others stay "Queued" forever

**Causes**:
- One sync failed, blocking the queue
- API limit reached
- Backend issue

**Solution**:
1. Refresh the page
2. Check Sync Logs for errors
3. Cancel queued syncs
4. Try syncing in smaller batches (5-10 at a time)

### Problem: Actions menu doesn't open

**Symptom**: Clicking ⋮ does nothing

**Causes**:
- Browser extension blocking JavaScript
- Page not fully loaded
- Browser compatibility issue

**Solution**:
1. Refresh the page
2. Wait for page to fully load
3. Try different browser (Chrome, Firefox, Safari)
4. Disable browser extensions temporarily

### Problem: Search doesn't find existing client

**Symptom**: You know client exists but search returns nothing

**Causes**:
- Status filters exclude the client
- Misspelled search term
- Client was deleted

**Solution**:
1. Clear all status filters (check all boxes)
2. Try searching by Customer ID instead of name
3. Check other pages (pagination)
4. Verify client wasn't deleted

---

## Next Steps

Now that you've mastered the client list, explore these related topics:

- **[Client Details Page](/docs/client-details-page)** - Deep dive into individual client data
- **[Bulk Operations](/docs/bulk-operations)** - Advanced bulk management techniques
- **[Sync Logs](/docs/sync-logs)** - Troubleshoot sync issues and view history
- **[Auto-Sync Setup](/docs/auto-sync-setup)** - Configure automatic sync schedules

---

**Ready to manage your clients?** Head to your [client list](/clients) and try these features!

**Need to add more clients?** Click **Add Client** in the top right.

**Want to customize display?** Go to Settings → Display Preferences (coming soon).

**Need help?** Contact support at support@aiperfoads.xyz

**Last Updated**: October 4, 2025
