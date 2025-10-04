---
title: Performance Charts Guide
description: Master performance charts - visualize trends, compare metrics, identify patterns, and make data-driven optimization decisions
category: core-features
phase: 2
order: 08
---

# Performance Charts Guide

Performance charts turn numbers into visuals, making trends and patterns obvious at a glance. This guide shows you how to customize charts, interpret what you see, and use visual data to make better optimization decisions.

---

## What You'll Learn

- Understanding the dual Y-axis chart design
- Choosing which metrics to visualize
- Switching between daily and weekly aggregation
- Interpreting chart patterns and trends
- Comparing multiple metrics
- Exporting charts for presentations
- Advanced charting strategies

**Time needed**: 10 minutes to read

---

## Accessing Performance Charts

**Location**: Client Details → Overview Tab → Bottom of page

**What you'll see**:
- Line chart with dual Y-axes
- Metric selector dropdowns
- Aggregation toggle (Day/Week)
- Date range controls
- Export button

[Screenshot: Performance chart showing default view]
*Charts appear at the bottom of the Overview tab*

---

## Understanding the Dual Y-Axis Design

### Why Two Y-Axes?

**Problem**: Metrics have different scales

```
Cost: $1,000-$5,000 (thousands)
Clicks: 100-500 (hundreds)
```

**On single axis**: Clicks would be invisible line at bottom

**Solution**: Two Y-axes

**Left Y-axis** (blue): Volume metrics
- Clicks
- Impressions
- Conversions

**Right Y-axis** (green): Cost metrics
- Cost
- CPC
- CPM
- Cost Per Conversion

[Screenshot: Dual Y-axis chart with annotations]
*Left axis for volume, right axis for cost*

---

### Reading the Chart

**Each line**:
- Color-coded to match legend
- Data point for each day/week
- Connects points to show trend

**Hover over any point**:
- Shows exact value
- Shows date
- Shows all visible metrics

**Zoom**:
- Click and drag to zoom into specific date range
- Double-click to reset zoom

[Screenshot: Hover tooltip showing values]
*Hover reveals exact numbers for any point*

---

## Customizing Displayed Metrics

### Metric Selector

**Default view**:
- Metric 1: Cost (right axis)
- Metric 2: Clicks (left axis)

**To change metrics**:
1. Click metric dropdown
2. Select new metric from list
3. Chart updates instantly

**Available in dropdowns**:
- All metrics available in your account
- Organized by category
- Color-coded by axis assignment

[Screenshot: Metric dropdown menu]
*Choose from 40+ available metrics*

---

### Optimal Metric Combinations

**Cost analysis**:
```
Metric 1: Cost (right axis)
Metric 2: Clicks (left axis)
Metric 3: Impressions (left axis)

Shows: If spend increased, did traffic increase proportionally?
```

**Conversion tracking**:
```
Metric 1: Conversions (left axis)
Metric 2: Cost (right axis)
Metric 3: Conversion Rate (right axis)

Shows: Cost vs conversion trends
```

**Quality monitoring**:
```
Metric 1: CTR (right axis)
Metric 2: Quality Score (left axis)
Metric 3: CPC (right axis)

Shows: Quality impact on cost
```

**ROI analysis**:
```
Metric 1: Conversion Value (right axis)
Metric 2: Cost (right axis)
Metric 3: Conversions (left axis)

Shows: Revenue vs spend trends
```

---

### Maximum 3 Metrics

**Why the limit**: More than 3 lines = cluttered, hard to read

**Best practice**:
- Start with 2 metrics
- Add 3rd only if needed
- Remove one to add another

**Legend**:
- Shows all displayed metrics
- Click to hide/show specific line
- Useful for comparing subsets

[Screenshot: Chart with 3 metrics and legend]
*Maximum 3 metrics keeps chart readable*

---

## Daily vs Weekly Aggregation

### Daily Aggregation (Default)

**What it shows**: Each day as separate data point

**Use when**:
- Analyzing recent changes (last 7-14 days)
- Identifying specific events
- Day-to-day fluctuations matter

**Example**:
```
Oct 1: 100 clicks
Oct 2: 120 clicks
Oct 3: 95 clicks
Oct 4: 110 clicks
```

**Pros**:
- Detailed view
- See daily patterns
- Identify exact dates of changes

**Cons**:
- Noisy for long ranges
- Harder to see big-picture trends

[Screenshot: Daily aggregation chart]
*Daily view shows every single day*

---

### Weekly Aggregation

**What it shows**: Weeks aggregated into single data point

**Use when**:
- Long date ranges (30-90 days)
- Smoothing out daily noise
- Big-picture trend analysis

**Example**:
```
Week of Sep 25: 700 clicks (avg 100/day)
Week of Oct 2: 840 clicks (avg 120/day)
Week of Oct 9: 665 clicks (avg 95/day)
```

**Pros**:
- Cleaner view
- Easier to spot trends
- Reduces noise

**Cons**:
- Less detailed
- Can't see specific days

**How weeks are defined**: Sunday-Saturday

[Screenshot: Weekly aggregation chart]
*Weekly view smooths out daily fluctuations*

---

### When to Use Each

**Daily aggregation**:
```
Date range: Last 7 days → Daily
Date range: Last 14 days → Daily
Date range: Last 30 days → Daily or Weekly
Date range: Last 90 days → Weekly
```

**Rule of thumb**:
- <14 days: Daily
- 14-30 days: Either works
- >30 days: Weekly

---

## Interpreting Chart Patterns

### Upward Trend

**What it looks like**: Line sloping upward left to right

**For cost metrics**: Spending increasing
- ✓ Good if conversions also increasing
- ✗ Bad if conversions flat

**For volume metrics**: Traffic/conversions increasing
- ✓ Good - growth
- ? Check if cost increased proportionally

[Screenshot: Upward trend example]
*Upward slope indicates growth*

**Action**: If cost up but conversions flat → investigate efficiency drop

---

### Downward Trend

**What it looks like**: Line sloping downward left to right

**For cost metrics**: Spending decreasing
- ✓ Good if conversions stable (better efficiency)
- ✗ Bad if conversions also decreasing

**For volume metrics**: Traffic/conversions decreasing
- ✗ Bad - declining performance
- ? Check if this was intentional (budget cut)

[Screenshot: Downward trend example]
*Downward slope indicates decline*

**Action**: If unintentional decline → check for disapproved ads, budget limits, bid changes

---

### Spike

**What it looks like**: Sudden sharp increase on one day/week

**Causes**:
- Seasonal event (Black Friday)
- Competitor stopped advertising
- Bid increase
- New campaign launched
- Budget increase

[Screenshot: Spike pattern]
*Sharp spike indicates sudden change*

**Action**:
1. Identify the date
2. Check what changed that day
3. If positive spike → replicate
4. If negative spike → investigate

---

### Drop

**What it looks like**: Sudden sharp decrease on one day/week

**Causes**:
- Budget exhausted early
- Ads disapproved
- Competitor increased bids
- Seasonal drop
- Technical issue

[Screenshot: Drop pattern]
*Sharp drop requires immediate investigation*

**Action**:
1. Urgent: Check if ads are running
2. Check budget status
3. Review recent changes
4. Check Google Ads for errors

---

### Flat Line

**What it looks like**: Horizontal line with minimal variation

**For cost metrics**: Consistent spending
- ✓ Good - predictable
- ? Could indicate budget cap

**For volume metrics**: Stable performance
- ✓ Good - consistency
- ? Could indicate missed opportunities

[Screenshot: Flat line pattern]
*Flat line shows stability*

**Action**: If flat at low level → room for improvement

---

### Seasonality Pattern

**What it looks like**: Repeating pattern (weekly peaks and valleys)

**Common patterns**:
```
Weekly:
- Monday-Friday: High
- Saturday-Sunday: Low

Or opposite:
- Monday-Friday: Low
- Saturday-Sunday: High (retail)
```

[Screenshot: Seasonality pattern]
*Repeating patterns indicate day-of-week effects*

**Action**: Use ad scheduling to match patterns

---

## Comparing Metrics

### Correlation Analysis

**Strong positive correlation**:
```
Cost up → Conversions up
Both lines move together
```
**Interpretation**: Spending more = more results (good)

**Negative correlation**:
```
Cost up → Conversions down
Lines move opposite
```
**Interpretation**: Efficiency declining (bad)

**No correlation**:
```
Cost up → Conversions flat
Lines don't match
```
**Interpretation**: Diminishing returns

[Screenshot: Correlated vs uncorrelated metrics]
*Compare line movements to spot relationships*

---

### Lag Effects

**Delayed response**:
```
Oct 1: Cost spike
Oct 3: Conversion spike (2 days later)
```

**Why this happens**:
- Users research before buying
- B2B sales cycles
- Remarketing effects
- Conversion tracking delay

**Action**: Don't judge campaigns on day 1 - wait 3-7 days

---

## Date Range Impact

### Short Range (7 days)

**What you see**: Daily fluctuations

**Use for**:
- Recent campaign changes
- Quick performance checks
- Tactical adjustments

**Limitations**: Can't see long-term trends

---

### Medium Range (30 days)

**What you see**: Short-term trends

**Use for**:
- Monthly performance reviews
- Month-over-month comparisons
- Standard reporting

**Best for**: Most analysis

---

### Long Range (90 days)

**What you see**: Big-picture trends

**Use for**:
- Quarterly reviews
- Seasonal pattern identification
- Long-term optimization

**Recommendation**: Use weekly aggregation

---

## Exporting Charts

### Export Options

**Formats**:
- PNG (image file)
- PDF (presentation-ready)

**Process**:
1. Configure chart (metrics, date range, aggregation)
2. Click Export button
3. Choose format
4. File downloads

**What's included**:
- Chart visualization
- Legend
- Date range
- Client name
- Export timestamp

[Screenshot: Exported chart sample]
*Export for client reports or presentations*

---

### Use Cases

**Client presentations**:
1. Show cost vs conversions trend
2. Export as PDF
3. Include in monthly report

**Internal reviews**:
1. Show performance trends
2. Export as PNG
3. Add to team dashboards

**Before/after analysis**:
1. Export "before" chart
2. Make optimizations
3. Export "after" chart
4. Compare side-by-side

---

## Advanced Charting Strategies

### Benchmark Comparison

**Method**: Export baseline, compare to current

**Example**:
```
Baseline (Sep): Avg CPC $5.00
Current (Oct): Avg CPC $4.20

Chart shows:
- September trend line (gray)
- October trend line (blue)
- Visual proof of 16% CPC reduction
```

**Action**: Track improvement over time

---

### Multi-Client Comparison

**Method**: Export chart for each client, compare

**Example**:
```
Client A chart: CTR trending up
Client B chart: CTR trending down
Client C chart: CTR flat
```

**Action**: Identify best performers to study, worst to fix

---

### Event Annotation

**Method**: Note important dates on charts

**Example**:
```
Oct 1: New campaign launched (spike)
Oct 15: Competitor sale (drop)
Oct 20: Budget increased (recovery)
```

**Action**: Correlate performance to events

---

## Tips & Best Practices

### Start Simple

**First visit**:
1. View Cost + Clicks only
2. Use daily aggregation
3. Last 30 days

**Get familiar** before adding complexity

---

### Use Chart for Questions

**Not sure why cost increased?**
→ Chart Cost + Impressions + Clicks
→ See which drove the increase

**Not sure why conversions dropped?**
→ Chart Conversions + Clicks + CTR
→ Identify the funnel step that broke

**Chart answers "why" questions visually**

---

### Review Weekly

**Every Monday**:
1. Open chart
2. Set date range: Last 7 days vs previous 7 days
3. Look for changes
4. Investigate anomalies

**Time**: 2 minutes per client

---

### Combine with Metrics Cards

**Workflow**:
1. Metrics cards → spot the change
2. Chart → understand when it happened
3. Drill into data → fix the issue

**Example**:
```
Metric card: CTR dropped 20%
Chart: Shows drop started Oct 10
Investigation: Ad disapproved on Oct 10
```

---

### Document Insights

**When you see important patterns**:
1. Export chart
2. Add notes about what you learned
3. Save in client folder
4. Reference in next review

**Builds institutional knowledge**

---

## Common Questions

**Q: Can I compare two date ranges side-by-side?**
A: Not directly in the chart. Export both and compare externally, or use metrics cards' comparison feature.

**Q: Why does my chart look different from Google Ads?**
A: Check that date ranges match exactly. Also verify timezone settings.

**Q: Can I add a fourth metric?**
A: No, maximum is 3 to keep chart readable. Remove one to add another.

**Q: Why is my chart empty?**
A: No data for selected date range and metrics. Check if client has been synced for this period.

**Q: Can I see hourly data?**
A: No, finest granularity is daily. Google Ads has hourly data but we aggregate to daily.

**Q: How do I print charts?**
A: Export as PDF, then print the PDF file.

**Q: Can I customize chart colors?**
A: Not currently. Colors are assigned automatically based on metric type.

---

## Troubleshooting

### Problem: Chart shows no data

**Diagnostics**:
1. Check date range - does client have data for this period?
2. Check last sync date - is data synced?
3. Check selected metrics - are they available for this campaign type?

**Solution**:
- Sync client first
- Adjust date range to known data period
- Choose different metrics

---

### Problem: Lines look flat/identical

**Cause**: Metrics on same scale showing similar values

**Example**:
```
Clicks: 100-110 (range of 10)
Impressions: 10,000-10,100 (range of 100)

Both on left axis, impressions appear flat
```

**Solution**:
- Use dual axes (put one metric on right axis)
- Choose metrics with different scales

---

### Problem: Too noisy to see trends

**Cause**: Daily aggregation on long date range

**Solution**:
1. Switch to weekly aggregation
2. Or reduce date range to 14-30 days

---

## Next Steps

Master data visualization with these guides:

- **[Client Details Page](02-client-details-page.html)** - All Overview tab features
- **[Metrics Glossary](07-metrics-glossary.html)** - Understand every metric
- **[Understanding Dashboard](../phase-1-essential/04-understanding-dashboard.html)** - Dashboard-level charts

---

**Ready to visualize your data?** Go to Client Details → Overview tab

**Want to compare multiple clients?** Export charts for each, analyze side-by-side

**Need help interpreting patterns?** Contact support at support@aiperfoads.xyz

**Last Updated**: October 4, 2025
