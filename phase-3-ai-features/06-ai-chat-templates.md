---
title: AI Chat Templates Guide
description: Complete reference for all Quick Action templates - what each does, when to use them, example outputs, and customization tips
category: ai-features
phase: 3
order: 06
---

# AI Chat Templates Guide

Quick Action templates are pre-written prompts that trigger specific AI analyses. Instead of typing questions, click a template button for instant insights. This guide covers all available templates, their outputs, and when to use each one.

---

## What You'll Learn

- All available templates explained
- Example outputs for each template
- When to use each template
- How to customize template responses
- Creating your own workflows
- Template best practices

**Time needed**: 8 minutes to read

---

## Template Categories

**Performance & Reporting** (4 templates)
- Performance Summary
- Month Comparison
- Campaign Analysis
- Export Report

**Optimization** (5 templates)
- Top Issues
- Optimization Priorities
- Quick Wins
- Wasted Spend
- Quality Score Review

**Budget & Spend** (3 templates)
- Budget Analysis
- Spend Trends
- Budget Recommendations

**Strategic** (3 templates)
- Strategy Review
- Competitor Insights
- Growth Opportunities

---

## Performance Summary

### What It Does

Generates comprehensive performance overview for selected time period

**Triggers prompt**:
```
"Summarize this month's Google Ads performance including
key metrics, trends, and notable changes"
```

---

### Example Output

```
October 2025 Performance Summary for ACME Corp

Overview:
- Total Spend: $4,850 (97% of $5,000 budget)
- Clicks: 2,140
- Impressions: 68,500
- Conversions: 98
- Revenue: $19,600

Key Metrics:
- CTR: 3.1% (industry avg: 3.5%)
- CPC: $2.27 (↑ 12% vs Sept)
- Conversion Rate: 4.6% (↓ 0.3% vs Sept)
- CPA: $49.50 (↑ 15% vs Sept)
- ROAS: 4.04 (↓ 0.5 vs Sept)

Top Campaigns:
1. Brand Campaign - 42 conv, $38 CPA ⭐
2. Non-Brand Search - 31 conv, $52 CPA
3. Competitor - 15 conv, $71 CPA
4. Display - 10 conv, $85 CPA

Trends:
↗ Conversion volume up 8%
↗ CPC increasing (quality score decline)
↘ ROAS declining (efficiency drop)
→ Budget utilization good

Action Items:
1. Address CPC increase (QS improvement needed)
2. Pause Display (inefficient)
3. Shift budget from Competitor to Brand
```

---

### When to Use

- **Weekly reviews**: Check progress
- **Client meetings**: Quick overview
- **Monthly reporting**: Starting point for reports
- **New client takeover**: Initial assessment

---

### Customization

**Modify time frame**:
```
Template: "Summarize this month..."
Custom: "Summarize last week's performance"
```

**Focus on specific area**:
```
Custom: "Summarize Brand Campaign performance this month"
```

---

## Month Comparison

### What It Does

Compares current month to previous month with detailed variance analysis

**Triggers prompt**:
```
"Compare this month's performance to last month, highlighting
significant changes and trends"
```

---

### Example Output

```
October vs September 2025 Comparison

Spend & Volume:
- Spend: $4,850 vs $4,200 (+15.5%)
- Clicks: 2,140 vs 2,380 (-10.1%)
- Impressions: 68,500 vs 71,200 (-3.8%)
- Conversions: 98 vs 91 (+7.7%)

Efficiency Metrics:
- CTR: 3.1% vs 3.3% (-6.1%)
- CPC: $2.27 vs $1.76 (+29.0%) ⚠️
- Conv Rate: 4.6% vs 3.8% (+21.1%) ✅
- CPA: $49.50 vs $46.15 (+7.3%)
- ROAS: 4.04 vs 4.52 (-10.6%)

Biggest Changes:
1. CPC spiked 29% - Quality Score dropped from 7.2 to 5.8
2. Conversion rate improved 21% - New landing page working
3. Spend increased 15% - Intentional budget increase

Winners:
✅ Brand Campaign: +35% conversions
✅ Landing page: +21% conv rate

Losers:
❌ Display Campaign: -45% ROAS
❌ Overall CPC: +29% (quality issue)

Recommendation: The conversion rate improvement is excellent,
but CPC increase is eating into gains. Priority should be
Quality Score recovery.
```

---

### When to Use

- **Month-end reviews**: Performance trends
- **Strategy planning**: Identify what's working/not working
- **Client reporting**: Show progress or decline
- **Troubleshooting**: When metrics shift unexpectedly

---

## Top Issues

### What It Does

Identifies 3 most critical problems requiring immediate attention

**Triggers prompt**:
```
"What are the top 3 most urgent issues in this account
that I should fix first?"
```

---

### Example Output

```
Top 3 Issues to Fix (Prioritized by Impact)

Issue #1: Budget Exhaustion (Severity: 8/10)
Impact: Missing $1,500/month in revenue

Brand Campaign exhausts its $120 daily budget by 1:30 PM
every day for the past week.

Analysis:
- Showing for only 6.5 hours instead of 24 hours
- Missing 42% of daily conversion opportunities
- Evening hours (6-11 PM) have 38% of conversions

Fix: Increase Brand Campaign budget from $120 to $175/day
OR reduce bids by 25% to extend budget coverage

Expected Result: +45 conversions/month, +$900 revenue/month

---

Issue #2: Quality Score Decline (Severity: 7/10)
Impact: Wasting $650/month on inflated CPCs

18 high-volume keywords dropped from QS 7-8 to QS 4-5
in past 2 weeks.

This caused CPC to increase by 58% on these keywords:
- Previous avg CPC: $2.80
- Current avg CPC: $4.42
- Extra cost: $650/month

Root Cause: Landing page redesign has poor mobile experience

Fix: Improve mobile page speed and usability OR revert to
previous landing page

Expected Result: QS returns to 7-8, CPC drops 40%

---

Issue #3: Wasted Search Term Spend (Severity: 6/10)
Impact: Throwing away $420/month

14 search terms spent $420 with zero conversions:
- "free google ads help" - $95, 0 conv
- "google ads tutorial" - $78, 0 conv
- "how to use google ads" - $62, 0 conv
... (11 more)

These are informational queries, not buyer intent.

Fix: Add these 14 terms as negative keywords

Expected Result: Save $420/month, reallocate to converters
```

---

### When to Use

- **Account audits**: First thing to check
- **New client**: Immediate wins
- **Performance drops**: Diagnose problems
- **Daily check-ins**: Quick health scan

---

## Optimization Priorities

### What It Does

Creates prioritized list of all optimization opportunities with estimated impact

**Triggers prompt**:
```
"List all optimization opportunities in order of priority,
with estimated impact and effort required"
```

---

### Example Output

```
Optimization Priorities (Sorted by ROI)

High Priority (Do This Week):

1. Add Negative Keywords
   Effort: 15 minutes | Impact: Save $420/month
   - 14 non-converting search terms identified
   - Add to negative keyword list
   - Expected savings: $420/month

2. Fix Budget Exhaustion
   Effort: 5 minutes | Impact: +$900/month revenue
   - Increase Brand Campaign budget $120→$175
   - Capture evening traffic
   - Expected result: +45 conv/month

3. Pause Display Campaign
   Effort: 2 minutes | Impact: Save $280/month
   - Display has $85 CPA vs $50 target
   - Only 10 conversions in 30 days
   - Reallocate $280/month to Search

Medium Priority (Do This Month):

4. Improve Quality Score
   Effort: 4 hours | Impact: Save $650/month
   - Fix mobile landing page experience
   - Expected CPC reduction: 40%

5. Ad Copy Refresh
   Effort: 2 hours | Impact: +15% CTR (estimated)
   - Current ads running 8+ months
   - Test new headlines and CTAs

6. Expand to Shopping
   Effort: 8 hours | Impact: +20% revenue (potential)
   - Product feed setup required
   - Untapped channel opportunity

Low Priority (Nice to Have):

7. Ad Schedule Optimization
   Effort: 1 hour | Impact: 8% efficiency gain
   - 78% of conversions Mon-Fri 9-6
   - Adjust bids by time of day

8. Geographic Expansion
   Effort: 30 minutes | Impact: +5% reach
   - Test 3 new states with low competition

Total Potential Impact: +$2,250/month with 16 hours effort
```

---

### When to Use

- **Monthly planning**: Build optimization roadmap
- **Team delegation**: Assign tasks by effort
- **Client presentations**: Show action plan
- **Priority conflicts**: Decide what to work on first

---

## Quick Wins

### What It Does

Identifies easy optimizations with immediate impact (low effort, high return)

**Triggers prompt**:
```
"What are the easiest optimizations I can make right now
that will have immediate positive impact?"
```

---

### Example Output

```
Quick Wins (< 30 minutes each)

Win #1: Pause 3 Wasteful Keywords (2 minutes)
Impact: Save $180/month

These 3 keywords each spent $60+ with 0 conversions:
- "google advertising cost" (Broad match)
- "ads online" (Broad match)
- "internet marketing" (Broad match)

Action: Pause these 3 keywords now
Result: Immediate $180/month savings

---

Win #2: Add Sitelink Extensions (15 minutes)
Impact: +12% CTR (industry benchmark)

Your ads don't have sitelink extensions. Competitors do.

Action:
1. Create 4 sitelinks (Services, Pricing, Contact, About)
2. Add to all campaigns
3. Expected CTR lift: 10-15%

Result: ~80 more clicks/month, ~4 more conversions

---

Win #3: Increase Texas Bid Adjustment (5 minutes)
Impact: +8 conversions/month

Texas converts at 2.1x the rate of other states:
- Texas conv rate: 7.2%
- Other states: 3.4%
- Texas gets only 15% of budget

Action: Set Texas location bid adjustment to +50%
Result: More budget flows to best-converting state

---

Win #4: Fix One Disapproved Ad (10 minutes)
Impact: Restore 25% of impression share

1 of your 4 ads in Brand Campaign is disapproved for
"Unsupported claim" - you said "Best" without proof.

Action: Remove "Best" from ad copy, resubmit
Result: Ad rotation improved, better impression share

---

Total Time: 32 minutes
Total Impact: $180 savings + 12 more conversions/month
```

---

### When to Use

- **Time pressure**: Need fast results
- **Client demos**: Show immediate value
- **Low motivation**: Easy wins build momentum
- **New team members**: Simple tasks to learn system

---

## Wasted Spend

### What It Does

Identifies where money is being wasted and how to stop it

**Triggers prompt**:
```
"Analyze where money is being wasted in this account
and recommend specific fixes"
```

---

### Example Output

```
Wasted Spend Analysis ($1,850/month identified)

Waste Category #1: Non-Converting Search Terms ($820/month)

28 search terms spent money with 0 conversions:
- "free google ads" - $145, 35 clicks, 0 conv
- "google ads account" - $98, 24 clicks, 0 conv
- "google advertising free" - $87, 21 clicks, 0 conv
... (25 more terms)

Fix: Add all 28 as exact match negative keywords
Savings: $820/month

---

Waste Category #2: Poor Performing Campaigns ($580/month)

Display Campaign performance:
- Spend: $580/month
- Conversions: 7 (CPA $82.85 vs target $50)
- ROAS: 1.8 (below breakeven)

Fix: Pause Display Campaign, reallocate to Search
Savings: $580/month (redirected to profitable channels)

---

Waste Category #3: Low Quality Score Keywords ($450/month)

12 keywords with QS 3-4 paying premium CPCs:
- Average CPC: $6.20
- If QS was 7: Would pay ~$3.10
- Overpaying by: $3.10/click
- Monthly extra cost: $450

Fix: Improve ad relevance and landing pages for these 12
Savings: $450/month once QS improves

---

Total Waste: $1,850/month (38% of total spend)
Quick Action Items: Add negatives, pause Display (30 min work)
Immediate Savings: $1,400/month
```

---

### When to Use

- **Budget constraints**: Find money to reallocate
- **ROI pressure**: Need to improve efficiency fast
- **Audits**: Identify inefficiencies
- **Monthly reviews**: Track waste over time

---

## Budget Analysis

### What It Does

Comprehensive budget pacing, utilization, and recommendation report

**Triggers prompt**:
```
"Analyze budget pacing and utilization, recommend
adjustments if needed"
```

---

### Example Output

```
Budget Analysis for October 2025

Monthly Budget: $5,000
Current Spend (Oct 1-22): $3,600
Days Remaining: 9
Projected Month-End: $4,850 (97% utilization)

Pacing Assessment: ✅ GOOD
You're on track to use 97% of budget (optimal: 95-100%)

Daily Breakdown:
- Target daily: $161/day (to hit $5,000)
- Actual average: $164/day
- Variance: +2% (within acceptable range)

By Campaign:
1. Brand Campaign: Budget-limited ⚠️
   - Budget: $120/day
   - Exhausts by: 1:30 PM daily
   - Impression share lost (budget): 35%
   - Recommendation: Increase to $175/day

2. Non-Brand: Under-utilizing
   - Budget: $80/day
   - Avg spend: $58/day (73% utilization)
   - Recommendation: Increase bids or expand keywords

3. Competitor: Properly paced ✅
   - Budget: $50/day
   - Avg spend: $48/day (96% utilization)

4. Display: Properly paced but poor ROI ⚠️
   - Budget: $30/day
   - Avg spend: $29/day
   - Recommendation: Pause and reallocate

Overall Recommendation:
Redistribute budgets:
- Brand: $120 → $175 (+$55)
- Non-Brand: $80 → $95 (+$15)
- Competitor: $50 → $50 (no change)
- Display: $30 → $0 (-$30)

New daily total: $320/day = $9,920/month
If keeping $5K/month cap: Reduce Competitor to $20/day
```

---

### When to Use

- **Monthly**: Budget health check
- **Mid-month**: Adjust if off-pace
- **Month-end**: Ensure full spend
- **Budget planning**: Optimize allocation

---

## Strategy Review

### What It Does

High-level strategic assessment with recommendations for improvement

**Triggers prompt**:
```
"Review my overall Google Ads strategy and recommend
strategic improvements or changes"
```

---

### Example Output

```
Strategic Review for ACME Corp

Current Strategy Assessment:

Account Structure: ✅ GOOD
- Well-organized campaigns by intent (brand, non-brand, competitor)
- Clean ad group themes
- Proper keyword grouping

Bidding Strategy: ⚠️ NEEDS IMPROVEMENT
- Using Manual CPC on all campaigns
- Recommendation: Switch Brand & Non-Brand to Target CPA
- Rationale: 150+ conv/month qualifies for automation

Targeting: ⚠️ ROOM FOR EXPANSION
- Currently US-only, all states
- Analysis shows Texas, California perform 2x better
- Recommendation: Create geo-specific campaigns for top states

Ad Creative: ⚠️ STALE
- Ads unchanged for 8+ months
- CTR declining (was 4.1%, now 3.2%)
- Recommendation: Refresh with new messaging quarterly

Extensions: ❌ MISSING OPPORTUNITIES
- No call extensions
- No price extensions
- Only basic sitelinks
- Recommendation: Full extension build-out

Conversion Tracking: ✅ EXCELLENT
- Multiple conversion actions tracked
- Proper attribution setup
- Value tracking enabled

Strategic Gaps:
1. No Shopping campaigns (lost e-commerce opportunity)
2. No remarketing (leaving money on table)
3. No YouTube/video presence
4. No ad schedule optimization

Strategic Recommendations:

Priority 1 (This Quarter):
- Switch to Target CPA bidding
- Create geo-specific campaigns
- Refresh all ad copy
- Add full extension suite

Priority 2 (Next Quarter):
- Launch Shopping campaigns
- Set up remarketing
- Test YouTube video ads
- Implement ad scheduling

Priority 3 (6+ Months):
- Explore Performance Max
- Test new audiences
- Expand to new geos internationally
```

---

### When to Use

- **Quarterly reviews**: Big-picture assessment
- **Strategy planning**: Set direction
- **New client**: Understand current approach
- **Stagnant performance**: Need fresh perspective

---

## Tips & Best Practices

### Combine Templates

**Use in sequence**:
```
1. "Performance Summary" (get overview)
2. "Top Issues" (find problems)
3. "Optimization Priorities" (plan fixes)
4. "Quick Wins" (execute fast wins)
```

---

### Customize After Template

**Start with template, then refine**:
```
Click: "Wasted Spend"
AI responds with waste analysis

Follow up: "Show me the full list of negative keywords to add"
AI provides complete exportable list
```

---

### Save Custom Versions (Coming Soon)

**Planned feature**:
```
Create: "My Weekly Review Template"
Combines: Performance Summary + Top Issues + Quick Wins
Save as: Custom template for one-click weekly reviews
```

---

## Common Questions

**Q: Can I edit templates?**
A: Not yet. Custom templates coming soon.

**Q: Do templates cost more tokens?**
A: No. Templates are optimized to use fewer tokens than manual questions.

**Q: Can I use templates on global AI Chat?**
A: Yes, but some (like Performance Summary) need a client context to work.

**Q: Which template should I use first?**
A: "Performance Summary" - gives you overview to understand what's next.

---

## Next Steps

- **[AI Chat Getting Started](05-ai-chat-getting-started.html)** - How to use AI Chat
- **[AI Context Explained](07-ai-context-explained.html)** - What data AI sees
- **[Business Profile](08-business-profile-setup.html)** - Improve AI context

---

**Try "Performance Summary"** for your first template

**Use "Quick Wins"** when you need fast results

**Combine templates** for comprehensive analysis

**Last Updated**: October 4, 2025
