---
title: Per-Client Settings
description: Override global defaults with client-specific sync schedules, notification preferences, and custom configurations
category: advanced
phase: 4
order: 02
---

# Per-Client Settings

Per-Client Settings let you customize sync behavior, notification preferences, and other configurations for individual clients that differ from your global defaults. Perfect for clients with unique requirements, different timezones, or special handling needs. This guide shows you how and when to use client-specific overrides.

---

## What You'll Learn

- What per-client settings are and when to use them
- Accessing client-specific settings
- Sync schedule overrides
- Notification preference customization
- Override priority rules
- Real-world examples for common scenarios
- Best practices for settings management

**Time needed**: 8 minutes to read

---

## What Are Per-Client Settings?

**Definition**: Client-specific configurations that override global defaults for that client only

**Location**: Client Details → Settings Tab

**Purpose**:
- Handle clients with unique sync requirements
- Accommodate different timezones
- Customize notification frequency
- Special handling for VIP or high-budget accounts

**Key Concept**: Per-client settings always override global settings for that specific client

[Screenshot: Per-client Settings tab in Client Details]
*Settings tab shows global defaults and allows per-client overrides*

---

## Global vs Per-Client: Priority Rules

### How Overrides Work

**Priority Order**:
1. **Per-Client Settings** (highest priority) - Always wins
2. **Global Settings** (fallback) - Used if no per-client override

**Example**:
```
Global Setting: Sync at 2:00 AM EST daily
Per-Client Override for Client A: Sync at 6:00 AM PST daily

Result:
- Client A: Syncs at 6:00 AM PST
- All other clients: Sync at 2:00 AM EST
```

---

### When to Use Per-Client Settings

**Use Per-Client When**:
- Client requires different sync time than majority
- Client has unique timezone needs
- VIP client needs more frequent notifications
- Testing new sync schedule before applying globally
- Client has special data refresh requirements

**Use Global When**:
- Setting applies to most/all clients
- You want consistency across accounts
- No special requirements for specific clients

---

## Accessing Per-Client Settings

**Steps**:

1. Navigate to Client List
2. Click on client name to open Client Details
3. Click **Settings** tab
4. You'll see:
   - **Global Defaults** (shown in gray)
   - **Per-Client Overrides** (shown in blue if set)

[Screenshot: Client Settings tab showing global defaults vs overrides]
*Global defaults appear in gray; overrides appear in blue*

---

## Per-Client Sync Settings

### Sync Schedule Override

**What**: Custom sync time for this specific client

**When to Use**:

**Scenario 1: Different Timezone**
```
Your Agency: New York (EST)
Client: California (PST)

Global Sync: 2:00 AM EST (11:00 PM PST previous night)
Client Override: 2:00 AM PST (5:00 AM EST)

Why: Client wants fresh data by start of their business day
```

**Scenario 2: E-commerce Client**
```
Most Clients: B2B service businesses
Special Client: E-commerce store (most sales 6-11 PM)

Global Sync: 2:00 AM
Client Override: 7:00 AM

Why: E-commerce client wants previous night's sales data
ready for morning review
```

**Scenario 3: High-Budget Account**
```
Most Clients: $2K-$10K/month budgets
VIP Client: $150K/month budget

Global Sync: Once daily at 2:00 AM
Client Override: Twice daily (2:00 AM and 2:00 PM)

Why: VIP client needs mid-day data refresh for active management
```

---

### How to Set Sync Time Override

**Steps**:

1. Open Client Details → Settings Tab
2. Find **Sync Schedule** section
3. Toggle **Override Global Settings** switch
4. Select custom sync time(s)
5. Click **Save Settings**

**Confirmation**: Client card on Client List will show custom sync time badge

[Screenshot: Sync time override form]
*Enable override and select custom time for this client*

---

### Disabling Auto-Sync Per Client

**Scenario**: Temporarily pause sync for specific client

**When Useful**:
- Client account has OAuth issues (fix before next sync)
- Testing campaign changes that need stable data
- Client requested sync pause during migration
- Budget exhausted early in month (pause until reset)

**How to Disable**:

1. Client Details → Settings Tab
2. Find **Auto-Sync Enabled** toggle
3. Switch to **Disabled**
4. Save Settings

**Result**: This client skipped during auto-sync runs. Manual sync still available.

**Important**: Remember to re-enable when ready! Disabled clients don't get data updates.

---

## Per-Client Notification Settings

**Status**: Coming Soon (Q1 2026)

**Planned Features**:
- Custom alert notification frequency per client
- Email digest preferences
- Severity threshold for notifications
- Quiet hours configuration

**Preview**:
```
VIP Client: All severity 5+ alerts immediately
Standard Client: Daily digest of severity 7+ alerts
Low-Budget Client: Weekly summary only
```

---

## Custom Time Selection

### Choosing Optimal Sync Time

**Consider**:

1. **Client's Timezone**
   - When does their business day start?
   - When do they typically review reports?

2. **Campaign Activity**
   - When are ads most active?
   - When do most conversions happen?

3. **Your Workflow**
   - When do you review this account?
   - When are you available to act on alerts?

---

### Sync Time Recommendations

**B2B Service Business**:
```
Optimal Sync: 2:00 AM - 6:00 AM (client's timezone)
Why: Campaigns run business hours, overnight sync provides
next-day data
```

**E-commerce (24/7 sales)**:
```
Optimal Sync: 6:00 AM - 8:00 AM (client's timezone)
Why: Captures previous night's sales, ready for morning review
```

**Local Services (9-5 PM)**:
```
Optimal Sync: 1:00 AM - 4:00 AM (client's timezone)
Why: Off-hours sync, data ready before business opens
```

**International Client (Europe, you're in US)**:
```
Optimal Sync: Based on YOUR timezone for consistency
Why: You manage account during your business hours
```

---

## Real-World Examples

### Example 1: Agency with East Coast and West Coast Clients

**Setup**:
```
Global Settings:
- Sync Time: 3:00 AM EST
- Timezone: EST (New York)

Per-Client Overrides:
- West Coast clients: 3:00 AM PST
- Central Time clients: 3:00 AM CST
- East Coast clients: Use global (3:00 AM EST)
```

**Result**: All clients have data synced by 3 AM their local time

**Why It Works**: Consistent workflow across timezones

---

### Example 2: Mix of B2B and E-commerce Clients

**Setup**:
```
Global Settings (majority B2B):
- Sync Time: 2:00 AM EST

Per-Client Overrides:
- E-commerce Client A: 7:00 AM EST
- E-commerce Client B: 6:30 AM EST
- All B2B Clients: Use global (2:00 AM EST)
```

**Why**: E-commerce clients need morning data for overnight sales review

---

### Example 3: Testing New Sync Time

**Scenario**: Considering moving global sync from 2 AM to 4 AM

**Safe Testing Approach**:
1. Select 2-3 test clients
2. Set per-client override: 4:00 AM
3. Monitor for 1 week
4. Check:
   - Data freshness meets needs?
   - No conflicts with your workflow?
   - Clients satisfied with timing?
5. If successful: Update global setting
6. Remove per-client overrides for test clients

**Benefit**: Test without affecting all clients

---

### Example 4: VIP Client Special Handling

**Client**: $180K/month budget, requires active management

**Per-Client Settings**:
```
Sync Schedule: Twice daily (3:00 AM and 3:00 PM)
Notification: All severity 4+ alerts immediately
Auto-Sync: Always enabled (high priority)
```

**Standard Clients**:
```
Sync Schedule: Once daily (3:00 AM)
Notification: Daily digest severity 7+ alerts
Auto-Sync: Enabled
```

**Why**: VIP client gets premium service level with real-time data

---

## Managing Multiple Overrides

### Tracking Client Overrides

**How to See Which Clients Have Overrides**:

1. Client List page shows badges:
   - 🕐 Custom sync time badge
   - 🔕 Auto-sync disabled badge
   - ⭐ VIP handling badge (if enabled)

2. Settings Dashboard (future feature) will show:
   - Count of clients with overrides
   - List of all custom configurations

---

### Best Practices for Override Management

**Keep It Simple**:
- Limit overrides to clients with genuine unique needs
- Too many overrides = hard to manage
- Aim for <20% of clients with custom settings

**Document Why**:
```
Client: Acme Corp
Override: Sync at 6 AM PST (instead of 2 AM EST global)
Reason: Client in California, wants fresh data at start
of their business day
Set By: John Smith
Date: Oct 1, 2025
```

**Quarterly Review**:
- Are overrides still necessary?
- Has client's needs changed?
- Can override be removed?

---

## Sync Override Examples by Scenario

### Scenario: Overnight Campaign Changes

**Situation**: Client makes frequent overnight bid adjustments

**Problem**: 2 AM sync doesn't capture changes made at 3 AM

**Solution**:
```
Per-Client Override: Sync at 6:00 AM
Result: Captures any changes made overnight
```

---

### Scenario: Budget Resets Mid-Month

**Situation**: Client resets budget on 15th of month (not 1st)

**Problem**: Need fresh data immediately after budget reset

**Solution**:
```
On Reset Day (15th):
1. Trigger manual sync at 9 AM
2. Resume auto-sync schedule

No Permanent Override Needed: Use manual sync as needed
```

---

### Scenario: Testing New Campaign Structure

**Situation**: Major account restructure, need stable data for 1 week

**Solution**:
```
Per-Client Override: Disable auto-sync for 7 days
Manual Process: Daily manual sync at controlled time
After 1 Week: Re-enable auto-sync
```

---

## Common Questions

**Q: Can I set different sync times for the same client on different days?**
A: Not currently. Sync time applies to all days. You can disable auto-sync and use manual sync for custom schedules.

**Q: What happens if I delete a per-client override?**
A: Client immediately reverts to global default settings. Change takes effect next sync cycle.

**Q: Can I bulk apply the same override to multiple clients?**
A: Not directly. You must set per-client overrides individually. If many clients need the same setting, consider making it the new global default.

**Q: Do per-client settings sync to other team members?**
A: Yes. Per-client settings are account-level, not user-level. All team members see the same settings.

**Q: How do I know if a client has custom settings?**
A: Client List shows badges for custom configurations. Client Settings tab shows overrides in blue vs global defaults in gray.

**Q: Can I temporarily override an override?**
A: Yes, via manual sync. Use "Sync Now" button to trigger immediate sync regardless of schedule.

---

## Troubleshooting

### Problem: Override not taking effect

**Symptoms**:
- Set custom sync time
- Client still syncs at global time

**Diagnostics**:
1. Check you clicked **Save Settings** after making change
2. Verify override toggle is **ON**
3. Check Sync Logs to see actual sync time

**Solution**:
- Changes take effect **next sync cycle**, not immediately
- If you set override at 3 PM for 6 AM sync, first custom sync is tomorrow at 6 AM

---

### Problem: Can't access per-client settings

**Symptoms**:
- Settings tab missing from Client Details
- Settings tab grayed out

**Solution**:
- Check user permissions (need edit access)
- Verify client is not archived
- Refresh page and try again

---

### Problem: Too many overrides to manage

**Symptoms**:
- 30+ clients with custom settings
- Hard to remember which client has what override
- Settings getting out of sync with needs

**Solution**:
1. **Audit All Overrides**: List every client with custom settings
2. **Categorize by Need**: Timezone, VIP, Testing, Other
3. **Remove Unnecessary**: Delete overrides no longer needed
4. **Standardize**: If many clients need same override, make it global default
5. **Document**: Note why each remaining override exists

---

### Problem: Client complaining data is stale

**Symptoms**:
- Client says yesterday's data missing
- Data looks correct to you

**Diagnostics**:
1. Check client's timezone vs your timezone
2. Check actual sync time in Sync Logs
3. Verify client's expectation of "fresh data"

**Solution**:
```
Client: "Why is today's data missing?"
Your Timezone: EST
Client Timezone: PST (3 hours behind)
Sync Time: 2 AM EST (11 PM PST previous night)

Problem: Client checking at 9 AM PST (12 PM EST)
expects "today's" data, but sync ran 3 hours before
their business day started

Solution: Move client sync to 2 AM PST (5 AM EST)
Result: Data ready at start of client's business day
```

---

## Best Practices

### Start with Global Defaults

**Approach**:
1. Set smart global defaults that work for 80% of clients
2. Only add per-client overrides when justified
3. Document reason for each override

**Why**: Simpler management, less configuration overhead

---

### Review Overrides Quarterly

**Checklist**:
- [ ] List all clients with overrides
- [ ] Verify override still necessary
- [ ] Check if business circumstances changed
- [ ] Remove obsolete overrides
- [ ] Update documentation

**When**: Every 3 months or when client relationships change

---

### Communicate Changes to Clients

**When Setting Override**:
```
Email to Client:
"Hi [Client],

We've adjusted your data sync time from 2 AM EST to 6 AM PST
to better align with your business hours. You'll see fresh data
ready each morning at the start of your workday.

Let me know if this timing doesn't work and we can adjust.

Thanks,
[Your Name]"
```

**Why**: Clients appreciate knowing when to expect updated data

---

### Use Overrides for Testing

**Safe Testing Pattern**:
1. Select 2-3 representative clients
2. Apply test override
3. Monitor for 1-2 weeks
4. Gather feedback
5. If successful: Promote to global default
6. Remove test overrides

**Benefit**: De-risk changes before affecting all clients

---

## Next Steps

Optimize client-specific configurations with these guides:

- **[Global Settings](/docs/global-settings)** - Set account-wide defaults
- **[Auto-Sync Setup](/docs/auto-sync-setup)** - Complete guide to sync scheduling
- **[Sync Logs](/docs/sync-logs)** - Verify custom sync times are working
- **[Troubleshooting Sync](/docs/troubleshooting-sync)** - Fix sync issues

---

**Use per-client settings sparingly** for genuine unique needs

**Review quarterly** to remove unnecessary overrides

**Document why** each override exists for future reference

**Last Updated**: October 4, 2025
