---
title: Export Reports
description: Export client data, performance metrics, and campaign details to CSV and Excel formats for reporting and analysis
category: advanced
phase: 4
order: 04
---

# Export Reports

Export Reports lets you download client data, performance metrics, campaigns, and more in CSV or Excel format. Perfect for custom reporting, data analysis, client presentations, or importing into other tools. This guide shows you every export option and how to use them effectively.

---

## What You'll Learn

- Available export formats (CSV, Excel)
- Exporting from Client List
- Exporting campaign and keyword data
- Exporting performance reports
- Date range selection for exports
- Custom field selection
- Automated exports (coming soon)
- Best practices for each export type

**Time needed**: 8 minutes to read

---

## What Can You Export?

### Available Export Types

**Client-Level Exports**:
- Client List (all clients with metrics)
- Single client performance summary
- Client context and settings

**Campaign-Level Exports**:
- All campaigns for a client
- Campaign performance by date range
- Campaign settings and configuration

**Keyword-Level Exports**:
- All keywords for a client
- Keyword performance metrics
- Search term reports

**Alert Exports**:
- Active alerts by client
- Alert history and accept/decline log
- Alert performance tracking

[Screenshot: Export button locations throughout the app]
*Export options appear in multiple locations for convenience*

---

## Export Formats

### CSV (Comma-Separated Values)

**Best For**:
- Importing into other tools
- Custom data processing
- Lightweight file size
- Universal compatibility

**File Extension**: `.csv`

**Opens In**: Excel, Google Sheets, Numbers, text editors

**Pros**:
- Small file size
- Works everywhere
- Easy to parse programmatically

**Cons**:
- No formatting (colors, bold, etc.)
- No multiple sheets
- Plain text only

---

### Excel (.xlsx)

**Best For**:
- Client presentations
- Pre-formatted reports
- Multiple data sheets in one file
- Advanced Excel features

**File Extension**: `.xlsx`

**Opens In**: Microsoft Excel, Google Sheets, Numbers

**Pros**:
- Formatted data (bold headers, colors)
- Multiple sheets possible
- Can include charts (future feature)
- Professional appearance

**Cons**:
- Larger file size
- Requires compatible software

**Note**: Excel format currently exports as CSV. Native .xlsx support coming soon.

---

## Exporting Client List

### What Gets Exported

**Included Data**:
```
Client Name, Customer ID, Status, Last Sync,
Spend, Clicks, Impressions, CTR, CPC,
Conversions, Conversion Rate, CPA, ROAS,
Quality Score, Budget, Active Campaigns
```

**Date Range**: Last 30 days (default)

---

### How to Export Client List

**Steps**:

1. Go to Client List page
2. Click **Export** button (top right, near search)
3. Select format:
   - CSV
   - Excel
4. Choose columns:
   - All Columns
   - Visible Columns Only (respects your column customization)
5. Click **Download**

**File Name Format**: `clients-export-YYYY-MM-DD.csv`

**Example**: `clients-export-2025-10-04.csv`

[Screenshot: Client List export dialog with options]
*Choose export format and which columns to include*

---

### Export Options

#### Option 1: All Columns

**Exports**: Every available metric, even hidden columns

**Use When**:
- Creating master data file
- Need comprehensive data
- Importing into another system

**Size**: Larger file, more columns

---

#### Option 2: Visible Columns Only

**Exports**: Only columns currently shown in your table view

**Use When**:
- Creating focused report
- Match your current view
- Smaller, cleaner export

**Tip**: Customize columns first, then export visible only

---

## Exporting Single Client Data

### Client Performance Summary

**Location**: Client Details → Performance Tab

**What Gets Exported**:
```
Client Information:
- Client Name, Customer ID, Status, Website

Performance Metrics (by date range):
- Spend, Clicks, Impressions, CTR, CPC
- Conversions, Conversion Rate, CPA, ROAS

Campaign Breakdown:
- Each campaign's performance
- Campaign-level metrics
```

---

### How to Export Client Performance

**Steps**:

1. Open Client Details
2. Select Performance tab
3. Choose date range (top right):
   - Last 7 days
   - Last 30 days
   - Last 90 days
   - Custom range
4. Click **Export** button
5. Select format (CSV or Excel)
6. Click **Download**

**File Name**: `client-[name]-performance-YYYY-MM-DD.csv`

**Example**: `client-acme-corp-performance-2025-10-04.csv`

---

## Exporting Campaign Data

### What Gets Exported

**Campaign Metrics**:
```
Campaign Name, Status, Type, Budget,
Spend, Clicks, Impressions, CTR, CPC,
Conversions, Conversion Rate, CPA,
Impression Share, Quality Score (avg)
```

**Date Range**: Selected range (default: Last 30 days)

---

### How to Export Campaigns

**Steps**:

1. Go to Client Details → Campaigns Tab
2. Select date range
3. (Optional) Filter campaigns by status or type
4. Click **Export Campaigns** button
5. Choose format
6. Click **Download**

**File Name**: `campaigns-[client-name]-YYYY-MM-DD.csv`

**Includes**: Only campaigns matching current filter

---

## Exporting Keyword Data

### What Gets Exported

**Keyword Metrics**:
```
Keyword Text, Match Type, Campaign, Ad Group,
Spend, Clicks, Impressions, CTR, CPC,
Conversions, Conversion Rate, CPA,
Quality Score, Status
```

**Sort Order**: By spend (descending)

---

### How to Export Keywords

**Steps**:

1. Client Details → Keywords Tab
2. Select date range
3. (Optional) Filter by:
   - Campaign
   - Ad Group
   - Match type (exact, phrase, broad)
   - Quality Score range
4. Click **Export Keywords**
5. Choose format
6. Download

**File Name**: `keywords-[client-name]-YYYY-MM-DD.csv`

**Row Limit**: 10,000 keywords per export (for performance)

---

## Exporting Alert Data

### What Gets Exported

**Alert Information**:
```
Alert ID, Client Name, Title, Description,
Severity, Category, Status,
Created Date, Last Updated,
Accept/Decline Action, Action Date
```

---

### How to Export Alerts

**Current Alerts**:

1. Client Details → Alerts Tab
2. Click **Export Current Alerts**
3. Downloads active alerts for this client

**Alert History**:

1. Client Details → Alerts Tab
2. Click **History** button
3. Select date range
4. Click **Export History**
5. Downloads accepted/declined alerts

**File Names**:
- `alerts-active-[client]-YYYY-MM-DD.csv`
- `alerts-history-[client]-YYYY-MM-DD.csv`

---

## Date Range Selection

### Available Date Ranges

**Preset Ranges**:
- Last 7 days
- Last 14 days
- Last 30 days (default)
- Last 90 days
- This month
- Last month
- This quarter
- Last quarter
- This year
- Last year

**Custom Range**:
- Pick any start and end date
- Max range: 2 years

---

### How Date Ranges Affect Exports

**Example 1: Last 30 Days**
```
Export Date: October 4, 2025
Date Range: Sept 5 - Oct 4, 2025
Metrics: Aggregated from this 30-day period
```

**Example 2: Custom Range**
```
Export Date: October 4, 2025
Custom Range: Jan 1 - Mar 31, 2025 (Q1)
Metrics: Q1 2025 data only
```

**Best Practice**: Match date range to your reporting period (monthly, quarterly, etc.)

---

## Custom Field Selection

### Choosing Specific Fields

**Use Case**: Export only the metrics you need

**Steps**:

1. Click **Export** button
2. Select **Custom Fields** option
3. Checkbox list appears:
   - Client Name ✓ (always included)
   - Spend ✓
   - Conversions ✓
   - CPA ✓
   - ROAS ✓
   - CTR ☐ (uncheck to exclude)
   - Impressions ☐
   - Quality Score ☐
4. Check only fields you want
5. Click **Export Selected**

**Result**: Smaller file with only chosen columns

[Screenshot: Custom field selection dialog]
*Select exactly which metrics to include in export*

---

## Export Use Cases

### Use Case 1: Monthly Client Report

**Goal**: Send client their monthly performance summary

**Steps**:

1. Open Client Details
2. Select "Last Month" date range
3. Export Performance Summary (Excel)
4. File includes:
   - All campaigns
   - Monthly spend and conversions
   - CPA and ROAS
5. Email file to client

**Time Saved**: 5-10 minutes vs manual report creation

---

### Use Case 2: Budget Planning Spreadsheet

**Goal**: Analyze all clients' spend to plan next quarter budgets

**Steps**:

1. Go to Client List
2. Select "Last Quarter" date range
3. Export All Clients (CSV)
4. Custom fields: Client Name, Spend, Budget, ROAS
5. Import CSV into your budget planning spreadsheet
6. Add formulas for next quarter projections

**Benefit**: Real data for planning, not guesses

---

### Use Case 3: Keyword Audit

**Goal**: Find low-performing keywords across account

**Steps**:

1. Client Details → Keywords
2. Date range: Last 90 days
3. Export Keywords (CSV)
4. Open in Excel/Sheets
5. Sort by:
   - Quality Score (low to high)
   - CPA (high to low)
6. Identify keywords to pause

**Analysis**: External tool flexibility for deep dives

---

### Use Case 4: Agency Portfolio Review

**Goal**: Present all client performance to agency partners

**Steps**:

1. Client List
2. Date range: This Quarter
3. Export All Clients (Excel)
4. Custom fields: Client, Spend, Conversions, CPA, ROAS, Status
5. Open in Excel
6. Add pivot table for summary by industry
7. Create charts for presentation

**Output**: Professional board-ready report

---

## Export Scheduling (Coming Soon)

**Planned Features**:

**Automated Exports**:
- Schedule daily, weekly, or monthly exports
- Email exports to specified addresses
- Save to cloud storage (Google Drive, Dropbox)
- Custom templates for each scheduled export

**Example Scheduled Export**:
```
Export Name: "Monthly Client Summary"
Frequency: First day of each month
Format: Excel
Recipients: team@agency.com, boss@agency.com
Includes: All clients, last month date range
```

**Availability**: Q1 2026 (planned)

---

## Best Practices

### Name Your Exports Logically

**Good File Names**:
```
client-acme-Q3-2025-performance.csv
all-clients-september-2025.csv
keywords-acme-high-cpa-oct-2025.csv
```

**Bad File Names**:
```
export.csv
data.csv
file (1).csv
```

**Why**: Easy to find later, self-documenting

---

### Export Regularly

**Recommendation**: Export key data monthly

**Why**:
- Historical backup
- Trend analysis
- Client reporting archive

**Storage**: Create folder structure:
```
exports/
  2025/
    Q3/
      September/
        clients-list-sept-2025.csv
        client-acme-sept-2025.csv
    Q4/
      October/
        ...
```

---

### Match Export to Purpose

**For Client Presentations**: Excel, formatted, focused fields

**For Data Analysis**: CSV, all fields, long date range

**For Quick Check**: CSV, visible columns only, last 7 days

**For Archiving**: CSV, all clients, all fields, monthly

---

### Verify Before Sharing

**Checklist Before Sending Export to Client**:
- [ ] Date range correct?
- [ ] Client-specific data only (no other clients)?
- [ ] Metrics make sense (no $0 conversions at $50 CPA)?
- [ ] File name professional?
- [ ] Format opens correctly?

**Why**: Avoid client confusion or wrong data

---

## Troubleshooting

### Problem: Export button missing

**Symptom**: Can't find Export button on page

**Solutions**:
- **Client List**: Top right, near Search box
- **Client Details**: Each tab (Performance, Campaigns, etc.) has own Export
- **Screen size**: Might be in overflow menu (...) on small screens

---

### Problem: Export file is empty

**Symptom**: Downloaded file has headers but no data rows

**Causes**:
- No data for selected date range
- Filters excluding all results
- Client has never synced

**Solution**:
1. Check date range (expand if needed)
2. Clear filters
3. Verify client has synced data

---

### Problem: Can't open CSV file

**Symptom**: File opens as gibberish or in wrong program

**Solution**:

**Windows**:
1. Right-click CSV file
2. Open With → Excel (or Google Sheets)

**Mac**:
1. Right-click CSV file
2. Open With → Numbers (or Excel)

**Alternative**: Import CSV into Google Sheets (File → Import → Upload)

---

### Problem: Excel opens CSV with wrong encoding

**Symptom**: Special characters (accents, symbols) display incorrectly

**Solution**:

**Excel**:
1. Don't double-click CSV
2. Open Excel first
3. File → Import → Text File
4. Select CSV file
5. Choose encoding: UTF-8
6. Import

**Google Sheets**: Handles encoding automatically (no issue)

---

### Problem: Export is missing recent data

**Symptom**: Downloaded today, but data is from yesterday

**Cause**: Data based on last sync time, not export time

**Solution**:
1. Check "Last Sync" for client
2. If stale, run sync first
3. Then export

**Rule**: Exports show data as of last sync, not real-time

---

## Common Questions

**Q: Can I schedule automatic exports?**
A: Not yet. Scheduled exports planned for Q1 2026.

**Q: Is there a limit on export file size?**
A: Yes. Max 10,000 rows per export. For larger data sets, use date range filtering.

**Q: Can I export from multiple clients at once?**
A: Yes, via Client List export (exports all visible clients).

**Q: Do exports include archived clients?**
A: Only if you enable "Show Archived" filter before exporting.

**Q: Can I customize the export file format?**
A: Currently CSV or Excel. Custom templates coming in future update.

**Q: Are exports included in data usage/limits?**
A: No. Exports don't count against Google Ads API limits.

---

## Advanced Tips

### Tip 1: Combine Exports for Analysis

**Multi-Client Keyword Analysis**:

1. Export keywords for Client A
2. Export keywords for Client B
3. Export keywords for Client C
4. Combine CSVs into single spreadsheet
5. Analyze patterns across all clients

**Insight**: Find keyword opportunities used by one client but not others

---

### Tip 2: Use Exports for Backup

**Monthly Backup Routine**:

```
1st of Month:
- Export all clients (last month date range)
- Save to: exports/2025/october/all-clients-oct-2025.csv
- Store in cloud backup (Google Drive, Dropbox)
```

**Benefit**: Historical data preserved if needed later

---

### Tip 3: Import into Google Sheets for Dashboards

**Steps**:

1. Export clients as CSV
2. Google Sheets → File → Import → Upload
3. Create pivot tables and charts
4. Share live dashboard with team

**Use Case**: Real-time team visibility without logging into PerfoAds

---

## Next Steps

Master data exports and reporting with these guides:

- **[Column Customization](/docs/column-customization)** - Control what gets exported
- **[Performance Charts](/docs/performance-charts)** - Visual alternatives to exports
- **[Metrics Glossary](/docs/metrics-glossary)** - Understand exported metrics
- **[Client Details Page](/docs/client-details-page)** - Export from Client Details

---

**Export regularly** for historical data and client reporting

**Use CSV for analysis**, Excel for presentations

**Verify data** before sharing with clients

**Last Updated**: October 4, 2025
