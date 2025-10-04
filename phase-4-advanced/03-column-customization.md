---
title: Column Customization
description: Customize which metrics and columns appear in your Client List table for a personalized workflow
category: advanced
phase: 4
order: 03
---

# Column Customization

Column Customization lets you control which metrics appear in your Client List table. Show only the data you care about, hide clutter, and create the perfect view for your workflow. Preferences save automatically and sync across devices. This guide shows you how to customize your columns and use presets.

---

## What You'll Learn

- What column customization is and why it matters
- Accessing column settings
- Available columns and metrics
- Hiding and showing columns
- Reordering columns
- Saving custom views
- Preset column configurations
- Best practices by role and workflow

**Time needed**: 7 minutes to read

---

## What Is Column Customization?

**Definition**: User-level control over which data columns appear in the Client List table

**Purpose**:
- Show only metrics you need
- Remove visual clutter
- Create workflow-optimized views
- Faster data scanning

**User-Level**: Each team member can have their own column preferences

[Screenshot: Client List with column customization menu open]
*The column menu shows all available columns with checkboxes*

---

## Why Customize Columns?

### Before Customization

**Default View**:
```
All 15 metrics showing:
Client | Spend | Clicks | CTR | CPC | Impressions | Conversions |
Conv Rate | CPA | ROAS | Quality Score | Budget | Impression Share |
Status | Last Sync | Actions
```

**Problem**: Too much data, hard to scan quickly

---

### After Customization

**Account Manager View**:
```
Only 7 metrics showing:
Client | Spend | Conversions | CPA | ROAS | Status | Last Sync | Actions
```

**Benefit**: Focus on what matters for your role

---

## Accessing Column Settings

**Method 1: Column Header Menu**

1. Click any column header in Client List
2. Select **Customize Columns**
3. Column settings panel opens

---

**Method 2: Table Settings Icon**

1. Look for ⚙️ icon in top-right of Client List table
2. Click icon
3. **Manage Columns** option opens settings

---

**Method 3: Right-Click**

1. Right-click any column header
2. Select **Column Settings**

[Screenshot: Three ways to access column customization]
*Multiple entry points make customization easy to access*

---

## Available Columns

### Performance Metrics

**Spend** 💰
- Total ad spend for selected date range
- Default: Last 30 days
- Format: $X,XXX.XX

**Clicks** 🖱️
- Total clicks on ads
- Format: X,XXX

**Impressions** 👁️
- Total ad impressions
- Format: X,XXX,XXX

**Conversions** ✅
- Total conversion events
- Format: XXX

---

### Efficiency Metrics

**CTR** (Click-Through Rate) 📊
- Clicks ÷ Impressions × 100
- Format: X.XX%

**CPC** (Cost Per Click) 💵
- Spend ÷ Clicks
- Format: $X.XX

**Conversion Rate** 📈
- Conversions ÷ Clicks × 100
- Format: X.XX%

**CPA** (Cost Per Acquisition) 🎯
- Spend ÷ Conversions
- Format: $XX.XX

**ROAS** (Return on Ad Spend) 💰
- Revenue ÷ Spend
- Format: X.XX (example: 4.25 = $4.25 return per $1 spent)

---

### Quality & Status

**Quality Score** ⭐
- Average Quality Score across all keywords
- Range: 1-10
- Format: X.X/10

**Impression Share** 📊
- Percentage of eligible impressions you received
- Format: XX%

**Status** 🚦
- Active, Paused, OAuth Error
- Color-coded: Green, Yellow, Red

---

### Operational

**Budget** 💳
- Monthly budget (if configured)
- Format: $X,XXX/month

**Last Sync** 🔄
- Timestamp of most recent data sync
- Format: "2 hours ago", "Yesterday 3:00 PM"

**Alerts** 🔔
- Count of active alerts
- Format: Badge with number (example: 🔔 3)

**Client Name** 📝
- Client display name
- Always visible (cannot hide)

**Actions** ⚙️
- Menu with Sync, View, Edit, Delete
- Always visible (cannot hide)

---

## Hiding and Showing Columns

### How to Hide a Column

**Method 1: Column Settings Panel**

1. Open column settings (⚙️ icon)
2. Find column in list
3. Uncheck checkbox
4. Click **Save**
5. Column disappears immediately

---

**Method 2: Column Header Menu**

1. Click column header you want to hide
2. Select **Hide This Column**
3. Confirmation: "Column hidden. Undo?"

---

### How to Show a Hidden Column

**Steps**:

1. Open column settings
2. Find hidden column (unchecked)
3. Check checkbox
4. Click **Save**
5. Column appears at default position

**Note**: Showing a column adds it to the end of the table. Use reorder to move it.

---

## Reordering Columns

### Drag and Drop

**Steps**:

1. Open column settings panel
2. Find column in list
3. Click and hold drag handle (⋮⋮ icon)
4. Drag to desired position
5. Release mouse
6. Click **Save**

**Visual Feedback**: Column preview updates as you drag

[Screenshot: Drag-and-drop column reordering interface]
*Drag columns into your preferred order*

---

### Order Presets

**Logical Orders**:

**Financial Focus** (left to right):
```
Client → Spend → Conversions → CPA → ROAS → Budget
```

**Performance Focus**:
```
Client → Conversions → Conversion Rate → CTR → Quality Score
```

**Operational Focus**:
```
Client → Status → Last Sync → Alerts → Actions
```

---

## Saving Custom Views

### How Preferences Save

**Automatic Saving**:
- Every change saved immediately
- No manual "Save Preferences" button needed
- Changes sync across devices

**Storage**:
- Saved to your user account
- Not shared with other team members
- Persists across browser sessions

---

### Resetting to Default

**When to Reset**:
- Too much customization, want fresh start
- Accidentally hid important column
- Want to see what default view looks like

**How to Reset**:

1. Open column settings
2. Click **Reset to Default** button (bottom of panel)
3. Confirm reset
4. All columns restored to original state

**Warning**: Cannot undo reset. All custom order and visibility lost.

---

## Preset Column Configurations

### Preset 1: Account Manager View

**Best For**: Managing multiple clients, focus on results

**Visible Columns**:
```
1. Client Name
2. Spend
3. Conversions
4. CPA
5. ROAS
6. Status
7. Last Sync
8. Alerts
9. Actions
```

**Hidden**: Clicks, Impressions, CTR, CPC, Conversion Rate, Quality Score, Budget, Impression Share

**Why**: Shows results (conversions, CPA, ROAS) without technical metrics clutter

---

### Preset 2: PPC Specialist View

**Best For**: Deep optimization work, technical analysis

**Visible Columns**:
```
1. Client Name
2. Spend
3. Clicks
4. CTR
5. CPC
6. Quality Score
7. Conversion Rate
8. CPA
9. Actions
```

**Hidden**: Impressions, ROAS, Budget, Impression Share, Status, Last Sync, Alerts

**Why**: Technical metrics for optimization decisions

---

### Preset 3: Executive Dashboard

**Best For**: High-level overview, quick status check

**Visible Columns**:
```
1. Client Name
2. Spend
3. Conversions
4. ROAS
5. Status
6. Alerts
7. Actions
```

**Hidden**: All technical metrics, only results shown

**Why**: Fast visual scan of client health and ROI

---

### Preset 4: Budget Manager View

**Best For**: Financial planning, spend tracking

**Visible Columns**:
```
1. Client Name
2. Spend
3. Budget
4. Conversions
5. CPA
6. ROAS
7. Status
8. Actions
```

**Hidden**: All click/impression metrics, quality scores

**Why**: Financial metrics and budget pacing focus

---

### Preset 5: Troubleshooting View

**Best For**: Diagnosing issues, checking sync status

**Visible Columns**:
```
1. Client Name
2. Status
3. Last Sync
4. Alerts
5. Quality Score
6. Impression Share
7. Actions
```

**Hidden**: Performance metrics

**Why**: Focus on operational health, not performance numbers

---

## Column Width Adjustment

### Resizing Columns

**Method**: Drag column borders

**Steps**:

1. Hover over border between two column headers
2. Cursor changes to ↔ (resize cursor)
3. Click and drag left or right
4. Release to set new width

**Auto-Save**: Column widths save automatically

---

### Auto-Fit Column

**Double-Click Border**: Auto-size column to fit content

**Use When**: Column is too wide/narrow for data

[Screenshot: Column resize cursor and double-click auto-fit]
*Resize columns by dragging or double-click to auto-fit*

---

## Best Practices by Role

### For Account Managers

**Priority Columns**:
1. Client Name
2. Spend
3. Conversions
4. CPA
5. ROAS
6. Alerts

**Why**: Quick scan of results and issues

**Hide**: Technical metrics (CTR, CPC, Quality Score)

---

### For PPC Specialists

**Priority Columns**:
1. Client Name
2. CTR
3. CPC
4. Quality Score
5. Conversion Rate
6. CPA

**Why**: Optimization metrics front and center

**Hide**: High-level metrics (ROAS, Budget)

---

### For Executives/Owners

**Priority Columns**:
1. Client Name
2. Spend
3. ROAS
4. Status
5. Alerts

**Why**: Minimal view, focus on ROI and health

**Hide**: All technical metrics

---

### For Onboarding/Support Team

**Priority Columns**:
1. Client Name
2. Status
3. Last Sync
4. Alerts
5. Quality Score

**Why**: Operational health, not performance

**Hide**: Performance metrics

---

## Common Customization Patterns

### Pattern 1: Metric Grouping

**Group Related Metrics Together**:

**Good Order**:
```
Client → [Traffic Metrics] → [Conversion Metrics] → [Quality Metrics] → [Status]
Client → Clicks → Impressions → CTR → Conversions → Conv Rate → CPA → Quality Score → Status
```

**Bad Order**:
```
Client → Clicks → CPA → Impressions → Status → CTR → Conversions
(Random order, hard to scan)
```

---

### Pattern 2: Left-to-Right Importance

**Most Important → Least Important**:

**Good**:
```
Client → ROAS → CPA → Conversions → Spend → Status
(Primary metrics left, supporting data right)
```

**Bad**:
```
Client → Impressions → Clicks → CTR → CPC → Conversions → ROAS
(Too many steps to get to what matters)
```

---

### Pattern 3: Color-Coded Scanning

**Leverage Built-In Color Coding**:

**Status Column** (color-coded):
- 🟢 Green: Healthy
- 🟡 Yellow: Needs Attention
- 🔴 Red: Critical Issue

**Alerts Column** (color-coded badges):
- 🔴 Red badge: Critical alerts
- 🟡 Yellow badge: Warning alerts
- 🔵 Blue badge: Info alerts

**Pro Tip**: Put Status and Alerts columns near left for fast visual scanning

---

## Troubleshooting

### Problem: Column disappeared after hiding it

**Symptom**: Hid column, now can't find it to show again

**Solution**:
1. Open column settings (⚙️)
2. Scroll through column list
3. Find unchecked column
4. Check checkbox
5. Click Save

**Prevention**: Use "Hide" carefully on important columns

---

### Problem: Column order keeps resetting

**Symptom**: Reorder columns, but order resets on refresh

**Causes**:
- Browser cookies disabled
- Incognito/Private browsing
- Browser cache cleared
- Using multiple browsers

**Solution**:
- Enable cookies for this domain
- Use normal browsing mode
- Don't clear cookies for this site
- Reorder in each browser you use

---

### Problem: Can't resize column

**Symptom**: Drag border, but column won't resize

**Solution**:
- Try double-clicking border (auto-fit)
- Refresh page and try again
- Check if column has minimum width restriction

---

### Problem: Too many columns to manage

**Symptom**: 15 columns, can't decide what to hide

**Solution**:
1. Start with preset based on your role
2. Hide all non-essential columns
3. Add back one at a time as needed
4. Stop when view feels comfortable

**Rule of Thumb**: 6-8 visible columns ideal for scanning

---

## Common Questions

**Q: Can I save multiple column layouts?**
A: Not currently. You have one active column configuration. Future versions may support saved presets.

**Q: Do column settings affect exported reports?**
A: No. Exports include all data regardless of column visibility.

**Q: Can admin force specific column layout for all users?**
A: No. Column preferences are user-level only.

**Q: What columns cannot be hidden?**
A: Client Name and Actions columns are always visible.

**Q: Can I hide the Alerts column?**
A: Yes, but not recommended. Alerts are critical for account health.

**Q: Do column settings sync across devices?**
A: Yes, saved to your account. Same settings on desktop, laptop, tablet.

---

## Advanced Tips

### Tip 1: Role-Based Quick Switch

**Create Documentation**:
```
Your Team's Column Presets:

Account Manager Mode:
- Show: Client, Spend, Conversions, CPA, ROAS, Alerts
- Hide: All technical metrics

Deep Dive Mode:
- Show: Client, CTR, CPC, QS, Conv Rate, CPA
- Hide: ROAS, Budget, Status

Executive Mode:
- Show: Client, Spend, ROAS, Status, Alerts
- Hide: Everything else
```

**Use Cases**: Switch modes based on current task

---

### Tip 2: Combine with Sorting

**Power User Workflow**:
1. Customize columns to show only ROAS, CPA, Status
2. Sort by ROAS (descending)
3. Quickly identify best and worst performers

---

### Tip 3: Minimize During Training

**When Training New Team Members**:
1. Reset to default (show all columns)
2. Explain each metric
3. Help them customize to their role
4. Document their final configuration

---

## Next Steps

Optimize your workflow with these guides:

- **[Client List Overview](/docs/client-list-overview)** - Complete Client List guide
- **[Metrics Glossary](/docs/metrics-glossary)** - Understand every metric
- **[Export Reports](/docs/export-reports)** - Export customized data
- **[Performance Charts](/docs/performance-charts)** - Visualize metrics

---

**Customize your columns now** for faster workflow

**Start with a preset** based on your role, adjust from there

**Keep it simple** - 6-8 columns ideal for quick scanning

**Last Updated**: October 4, 2025
