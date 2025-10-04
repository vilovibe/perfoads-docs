---
title: Bulk Operations
description: Master bulk client management - sync, delete, and onboard multiple Google Ads accounts efficiently
category: core-features
phase: 2
order: 03
---

# Bulk Operations

Managing 10, 20, or 50 Google Ads clients one-by-one is tedious. Bulk operations let you sync, delete, and onboard multiple clients at once - saving hours of repetitive work and keeping your entire portfolio in sync.

---

## What You'll Learn

- Selecting multiple clients for bulk actions
- Bulk syncing strategies for different scenarios
- Safe bulk deletion procedures
- Bulk onboarding from account discovery
- Queue management for large operations
- Best practices for managing client portfolios

**Time needed**: 12 minutes to read

---

## Why Use Bulk Operations

### Time Savings

**Without bulk operations**:
- 20 clients × 3 clicks each = 60 clicks
- Time: 10-15 minutes

**With bulk operations**:
- Select all → 1 click to sync
- Time: 2 minutes

**Result**: 80% time savings

### Consistency

**Bulk operations ensure**:
- All clients synced at same time
- Same date range for analysis
- Consistent data freshness
- Easier portfolio-wide reporting

### Scale

**As you grow**:
- 5 clients → Manual works fine
- 20 clients → Bulk saves time
- 50+ clients → Bulk is essential

[Screenshot: Time comparison chart showing manual vs bulk operations]
*Bulk operations become critical as client count grows*

---

## Client Selection Methods

### Method 1: Individual Checkboxes

**How to use**:
1. Click checkbox next to client name
2. Client row highlights in blue
3. Repeat for each client you want
4. Bulk actions toolbar appears

**When to use**:
- Selecting specific clients
- Non-sequential selections
- Custom groupings

**Example**: Select all e-commerce clients across the list

[Screenshot: Individual clients selected with checkboxes]
*Select specific clients regardless of position*

---

### Method 2: Select All

**How to use**:
1. Click checkbox in table header
2. All clients on current page select
3. Bulk actions toolbar appears

**Important**: Only selects visible clients on current page

**If you have 50 clients with 25 per page**:
- Select All selects 25 clients (page 1)
- Navigate to page 2, Select All again for next 25
- Total: Two separate operations

**When to use**:
- Syncing entire portfolio
- Morning refresh routine
- End-of-day cleanup

[Screenshot: Select All checkbox in header]
*Quick way to select everything visible*

---

### Method 3: Shift+Click Range Selection

**How to use**:
1. Click first client's checkbox
2. Hold Shift key
3. Click last client's checkbox
4. All clients between them select

**Example**:
- Click client #3
- Shift+Click client #10
- Clients 3, 4, 5, 6, 7, 8, 9, 10 all select

**When to use**:
- Sequential selections
- Contiguous groups
- Faster than clicking individual boxes

[Screenshot: Range selection demonstration]
*Shift+Click selects entire range*

---

### Method 4: Filter Then Select All

**Most powerful method**:

1. **Apply filters** to narrow list
   - Example: Filter to "Status = Failed"
2. **Select All** (all failed syncs)
3. **Bulk action** (re-sync all failures)

**Use cases**:

**Sync all stale data**:
- Sort by Last Sync (oldest first)
- Select first 10-20
- Bulk sync

**Delete all paused clients**:
- Filter to Status = Paused
- Select All
- Bulk delete

**Sync specific campaign types** (if tracked):
- Filter by industry tag
- Select All
- Bulk sync

[Screenshot: Filtered list with Select All]
*Combine filters with Select All for targeted bulk actions*

---

## Bulk Sync Operations

### Standard Bulk Sync

**Process**:
1. Select clients (any method)
2. Bulk actions toolbar appears
3. Click "Sync Selected"
4. Confirmation dialog shows count
5. Confirm action
6. Syncs queue up and process

**What happens**:
- First 5 clients: Start syncing immediately (concurrent limit)
- Remaining clients: Enter queue
- As each completes, next in queue starts
- All clients eventually process

**Status indicators**:
- Active syncs: "Syncing... 45%"
- Queued syncs: "Queued (position 3)"
- Completed: "Last synced: Just now"

[Screenshot: Bulk sync in progress showing mix of statuses]
*Watch progress across all selected clients*

---

### Morning Refresh Routine

**Goal**: Get fresh data for all active clients

**Steps**:
1. Go to client list
2. Filter: Status = Active (uncheck Paused)
3. Select All
4. Sync Selected
5. Go make coffee ☕
6. Return to fresh data

**Time**:
- Selection: 30 seconds
- Sync duration: 5-20 minutes (automatic)
- Your active time: 30 seconds

**Frequency**: Daily or every other day

---

### Selective Sync Strategy

**For large portfolios (30+ clients)**:

**Don't sync everyone every day**:
- High-priority clients: Daily
- Medium-priority: Every 2-3 days
- Low-priority: Weekly

**Implementation**:

**High-priority (top 10 spending clients)**:
- Monday: Select clients 1-10 → Sync
- Tuesday: Auto-sync handles them
- Wednesday: Manual check if needed

**Medium-priority (next 20 clients)**:
- Monday: Sync clients 11-20
- Wednesday: Sync clients 21-30
- Friday: Check for any failures

**Low-priority (remaining clients)**:
- Monday: Sync all remaining
- Or use auto-sync weekly schedule

**Why this works**:
- Focuses effort on revenue-driving accounts
- Reduces API quota usage
- Prevents queue bottlenecks

[Screenshot: Client list with priority tags]
*Use naming convention to identify priority tiers*

---

### Before Client Call Prep

**Scenario**: You have 3 client calls tomorrow

**Steps**:
1. Search for first client
2. Click checkbox
3. Search for second client
4. Click checkbox (adds to selection)
5. Search for third client
6. Click checkbox
7. Sync Selected

**Result**: All 3 clients have fresh data before meetings

**Time**: 2 minutes vs. 6 minutes (syncing individually)

---

### Emergency Bulk Re-sync

**When to use**:
- Major Google Ads API update
- Data looks wrong across multiple clients
- After system maintenance

**Process**:
1. Select affected clients
2. Use Full Sync (not Smart Sync)
3. Wait for completion
4. Verify data accuracy

**Warning**: Full Sync uses 10-20x more API quota. Only use when necessary.

---

## Bulk Delete Operations

### Safety Checks

Bulk delete is **PERMANENT** and **CANNOT BE UNDONE**.

**Built-in safety features**:
1. Confirmation dialog lists all clients
2. Requires typing "DELETE" to confirm
3. Shows total count before deletion
4. Cannot bulk delete more than 20 at once (prevents accidents)

[Screenshot: Bulk delete confirmation requiring DELETE]
*Safety mechanism prevents accidental mass deletion*

---

### When to Bulk Delete

**End-of-contract cleanup**:
- Client contracts ended
- No longer managing these accounts
- Remove from system

**Test account cleanup**:
- Created test clients during setup
- No longer needed
- Cluttering the list

**Duplicate removal**:
- Accidentally added same account twice
- Clean up duplicates

**Access revoked**:
- Client removed your access
- Can't sync anymore
- Delete to prevent errors

---

### Safe Bulk Delete Process

**Step 1: Identify clients to delete**

Create a list first:
```
Clients to Delete:
- Test Client 1
- Test Client 2
- Old Account - Ended Contract
```

**Step 2: Filter and verify**

Don't rely on memory - use clear visual indicators:
1. Add "[DELETE]" prefix to client names
2. Filter or search for "[DELETE]"
3. Verify the list matches your notes
4. Double-check each one

**Step 3: Select carefully**

- Use individual checkboxes (not Select All)
- Check each client name
- Count matches your list
- Verify one more time

**Step 4: Execute deletion**

1. Click "Delete Selected"
2. Review list in confirmation dialog
3. Type "DELETE" exactly
4. Confirm

**Step 5: Verify**

- Refresh page
- Confirm clients are gone
- Check Total Clients card (should decrease)

[Screenshot: Safe deletion workflow diagram]
*Follow this process to avoid accidental deletions*

---

### What NOT to Delete in Bulk

**❌ Don't bulk delete**:
- Active clients with campaigns running
- Clients with recent data (synced in last 7 days)
- High-spend accounts
- Clients mixed with active ones

**Instead**:
- Pause auto-sync first
- Let them sit for 30 days
- Then delete individually or in small batches

---

## Bulk Onboarding

Add multiple clients from Google Ads account discovery at once.

### Account Discovery Process

**Step 1: Connect Google Account**

1. Go to Settings → Google Ads Connections
2. Click "Refresh Discovery Cache"
3. System queries Google Ads API
4. Retrieves all accounts you have access to
5. Cache expires after 24 hours

**What you'll see**:
- List of all Google Ads accounts
- Account names and customer IDs
- Which accounts are already added (grayed out)
- Account status (active, suspended, etc.)

[Screenshot: Account discovery showing list of available accounts]
*Discover all accessible Google Ads accounts*

---

### Bulk Adding Clients

**Step 2: Select accounts to add**

**Method 1: Individual selection**
- Click checkbox next to each account
- Select 5-10 at a time (recommended)

**Method 2: Select All**
- Click "Select All"
- Only recommended for small portfolios (<10 accounts)

**Filtering available**:
- Hide already-added accounts
- Filter by account status
- Search by name or ID

**Step 3: Configure bulk settings**

**Optional but recommended**:
- Auto-sync: Enable/disable for all
- Sync time: Set default time
- Initial sync: Run immediately or schedule

**Step 4: Add clients**

1. Click "Add Selected Clients"
2. System creates client entries
3. Optionally triggers initial sync
4. Progress indicator shows creation status

**Step 5: Verify**

- Go to client list
- See new clients appear
- Check Total Clients card
- Verify sync status

[Screenshot: Bulk add clients interface]
*Add multiple clients in one operation*

---

### Post-Onboarding Workflow

**After bulk adding clients**:

**Immediate tasks**:
1. Run initial sync on all (if not auto-triggered)
2. Let syncs complete (10-30 minutes)
3. Review for any sync failures

**Within 24 hours**:
1. Add business profiles for each
2. Set monthly budgets
3. Configure per-client sync schedules
4. Check for initial AI alerts

**Within first week**:
1. Review AI alerts for all new clients
2. Accept/decline recommendations
3. Set up priority tiers
4. Establish routine workflows

---

## Queue Management

### Understanding the Sync Queue

**Concurrent limit**: 5 clients syncing at once

**Why the limit**:
- Google Ads API rate limits
- System resource management
- Ensures sync quality

**Queue behavior**:
```
Selected 15 clients to sync:

Clients 1-5:   Syncing now
Clients 6-10:  Queued (waiting)
Clients 11-15: Queued (waiting)

As #1 finishes → #6 starts
As #2 finishes → #7 starts
And so on...
```

[Screenshot: Queue status visualization]
*Visual representation of queue processing*

---

### Queue Priority

**Processing order**: First selected → First processed

**Cannot change priority** once queued

**To prioritize specific clients**:
1. Don't select all at once
2. Sync high-priority batch first
3. Let that complete
4. Then sync next batch

**Example**:
```
Batch 1 (high priority): Clients with meetings today
  → Sync → Wait for completion

Batch 2 (medium priority): Top 10 spenders
  → Sync → Wait for completion

Batch 3 (low priority): Remaining clients
  → Sync → Let run overnight
```

---

### Canceling Queued Syncs

**How to cancel**:
1. Find client in queue ("Queued (position 3)")
2. Click Actions → Cancel Sync
3. Removed from queue

**Important**: Cannot cancel active syncs (only queued ones)

**When to cancel**:
- Accidentally queued wrong clients
- Need to prioritize different clients
- System experiencing issues

---

### Managing Large Queues

**Problem**: Queued 50 clients, taking forever

**Solutions**:

**Solution 1: Batch processing**
- Cancel remaining queued syncs
- Select 10 clients at a time
- Sync in batches throughout the day

**Solution 2: Overnight processing**
- Let queue run overnight
- Check in morning for failures
- Re-sync failures

**Solution 3: Increase concurrency** (not currently available)
- Contact support for enterprise plan
- Higher concurrent limit (10-15)
- Faster bulk processing

---

## Advanced Bulk Strategies

### Segment-Based Syncing

**Organize clients into segments**:

**By industry**:
- E-commerce: Prefix "EC -"
- Legal: Prefix "Legal -"
- Healthcare: Prefix "HC -"

**Sync by segment**:
1. Search "EC -"
2. Select All results
3. Sync
4. Repeat for other segments

**Benefits**:
- Targeted sync scheduling
- Industry-specific analysis
- Easier reporting

---

### Time-Zone Based Syncing

**For multi-timezone portfolios**:

**East Coast clients** (EST):
- Sync at 2:00 AM EST
- Fresh data by 9 AM EST

**West Coast clients** (PST):
- Sync at 2:00 AM PST (5 AM EST)
- Fresh data by 9 AM PST

**International clients**:
- Set per-client sync times
- Respect local business hours

**Implementation**:
1. Tag clients by timezone
2. Use per-client sync settings
3. Or manually batch sync at different times

---

### Budget-Tiered Syncing

**Sync frequency based on spend**:

**High spend** ($10K+/month):
- Daily sync
- Priority queue position
- Immediate alerts

**Medium spend** ($1K-$10K/month):
- Sync every 2-3 days
- Standard queue
- Daily alert review

**Low spend** (<$1K/month):
- Weekly sync
- Low priority
- Weekly alert review

**Setup**:
1. Tag clients by spend tier
2. Filter by tag
3. Bulk sync on schedule

---

## Tips & Best Practices

### Naming Conventions

**Use prefixes for easy filtering**:
```
[PRIORITY] ACME Corp
[PAUSED] Old Client
[TEST] Demo Account
[DELETE] Ended Contract
```

**Benefits**:
- Search "[PRIORITY]" finds all priority clients
- Filter and bulk sync by tag
- Clear visual indicators

---

### Regular Cleanup

**Monthly cleanup routine**:

**Week 1**: Review all clients
- Identify inactive/ended clients
- Tag for deletion

**Week 2**: Disable auto-sync on tagged clients
- Prevents wasted API quota
- Keeps data for review

**Week 3**: Export any needed data
- Historical reports
- Client records

**Week 4**: Bulk delete tagged clients
- Clean slate for next month

---

### Documentation

**Keep a client inventory**:
```
Client Name | Customer ID | Priority | Sync Schedule | Notes
ACME Corp   | 123-456-7890| High     | Daily 2 AM    | Main account
Bakery Inc  | 234-567-8901| Medium   | Every 3 days  | Seasonal
```

**Why it helps**:
- Know what's what before bulk actions
- Reference during selection
- Onboard new team members faster

---

### Test Before Production

**When trying new bulk operations**:

1. **Create test clients** (2-3)
2. **Practice bulk operations** on test set
3. **Verify behavior** matches expectations
4. **Delete test clients**
5. **Run on production** with confidence

**Especially important for**:
- Bulk delete (irreversible)
- Bulk onboarding (affects client count)
- Complex filter combinations

---

## Common Questions

**Q: What's the maximum number of clients I can sync at once?**
A: No hard limit, but practical limit is ~50 due to queue time. For larger batches, split into multiple operations.

**Q: Can I bulk sync some clients with Smart Sync and others with Full Sync?**
A: No, bulk operations apply the same action to all selected clients. For mixed operations, sync in separate batches.

**Q: What happens if I close the browser while bulk sync is running?**
A: Syncs continue on the server. When you reload, you'll see updated statuses. The queue keeps processing.

**Q: Can I schedule bulk syncs to run automatically?**
A: Not currently. Use auto-sync per-client settings instead. Bulk sync is for manual operations.

**Q: If a bulk sync fails for one client, do the others keep going?**
A: Yes, each client syncs independently. One failure doesn't affect others.

**Q: Can I bulk update client business profiles?**
A: Not currently. Business profiles must be updated individually. This feature is on the roadmap.

**Q: What happens to queued syncs if I log out?**
A: Queued syncs are user-specific and will be canceled. Active syncs complete, but queued ones drop.

---

## Troubleshooting

### Problem: Bulk sync takes forever

**Symptom**: Queue not moving, syncs stuck

**Causes**:
- Too many clients queued
- One sync is stuck/frozen
- API rate limit reached

**Solution**:
1. Check Sync Logs for stuck syncs
2. Cancel queued syncs
3. Restart in smaller batches (5-10 at a time)
4. Contact support if persists

---

### Problem: Accidentally selected wrong clients

**Symptom**: Realized after clicking "Sync Selected"

**Solution**:
1. Immediately cancel queued syncs (if not started yet)
2. Active syncs will complete (can't cancel)
3. Let them finish (no harm in extra sync)
4. Next time, double-check selection

---

### Problem: Bulk delete removed wrong clients

**Symptom**: Deleted clients you meant to keep

**Solution**:
- **Bad news**: Cannot recover deleted clients
- **Re-add process**:
  1. Go to account discovery
  2. Find deleted accounts
  3. Re-add them
  4. Run initial sync
  5. Re-configure business profiles

**Prevention**: Always export client list before bulk delete

---

### Problem: Select All only selects 25 clients (not all 50)

**Symptom**: Expected to select entire portfolio but only got one page

**Cause**: Select All is page-scoped, not global

**Solution**:
1. Click Select All on page 1
2. Navigate to page 2
3. Click Select All again
4. Repeat for all pages
5. Or change "Items per page" to show all at once

---

## Next Steps

Master bulk operations and explore related workflows:

- **[Sync System Guide](/docs/sync-system-guide)** - Deep dive into sync mechanics
- **[Auto-Sync Setup](/docs/auto-sync-setup)** - Configure automated syncing
- **[Sync Logs](/docs/sync-logs)** - Troubleshoot sync issues
- **[Client List Overview](/docs/client-list-overview)** - Advanced list management

---

**Ready to try bulk operations?** Go to your [client list](/clients) and select multiple clients!

**Managing a large portfolio?** Contact sales for enterprise features at sales@aiperfoads.xyz

**Need help?** Contact support at support@aiperfoads.xyz

**Last Updated**: October 4, 2025
