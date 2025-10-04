---
title: Alert Severity Guide
description: Master the 1-10 severity scale - learn how AI assigns priority, when to act, and how to interpret severity in context
category: ai-features
phase: 3
order: 02
---

# Alert Severity Guide

The severity scale (1-10) tells you how urgently an alert needs attention. Understanding severity helps you prioritize fixes, allocate time effectively, and act on problems before they escalate. This guide breaks down each level with real examples and action timelines.

---

## What You'll Learn

- How AI calculates severity (1-10 scale)
- What each severity level means
- Real examples for every level
- When to act on each priority
- Factors that increase/decrease severity
- How business context affects ratings
- Interpreting severity for your situation

**Time needed**: 10 minutes to read

---

## How Severity Is Calculated

### The AI's Assessment Process

**AI considers 4 factors**:

**1. Financial Impact**
```
High impact = High severity
- Wasting $500/day → Severity 9
- Missing $50/day opportunity → Severity 5
- $5/day inefficiency → Severity 2
```

**2. Urgency**
```
Fast-growing problems = Higher severity
- Budget exhausted 3 days in a row → Severity 8
- CTR declining gradually over 30 days → Severity 5
- Static low Quality Score → Severity 3
```

**3. Scope**
```
More affected = Higher severity
- All campaigns stopped → Severity 10
- 1 of 10 campaigns affected → Severity 6
- 3 of 500 keywords underperforming → Severity 2
```

**4. Business Context**
```
Your goals matter
- If target CPA is $50, actual $51 → Severity 4
- If target CPA is $50, actual $80 → Severity 8
- If no target set → Default severity based on trend
```

[Screenshot: Severity calculation formula visualization]
*Four factors combine to determine priority*

---

## The Complete Severity Scale

### Overview Chart

**Severity 10** 🔴 **CRITICAL** - Act now (within 1 hour)
**Severity 9** 🔴 **CRITICAL** - Act today (within 4 hours)
**Severity 8** 🟠 **HIGH** - Act today (before end of day)
**Severity 7** 🟠 **HIGH** - Act today or tomorrow
**Severity 6** 🟡 **MEDIUM** - Fix this week (1-3 days)
**Severity 5** 🟡 **MEDIUM** - Fix this week (3-7 days)
**Severity 4** 🟡 **LOW** - Address when convenient (this month)
**Severity 3** 🟡 **LOW** - Consider in next optimization round
**Severity 2** 🔵 **INFO** - Track but no urgency
**Severity 1** 🔵 **INFO** - Context only, no action needed

---

## Severity 10: CRITICAL 🔴

### Characteristics

**Impact**: Campaigns completely stopped or major money being wasted
**Urgency**: Immediate action required
**Timeline**: Fix within 1 hour
**Color**: Bright red

---

### Real Examples

**Example 1: All Campaigns Stopped**
```
Severity: 10/10
Category: Technical Issues
Title: All active campaigns are paused

Your Google Ads account shows all 15 campaigns in PAUSED
status. No ads are currently running. This happened at
9:47 AM today.

Possible causes:
- Billing failure
- Policy violation suspension
- Manual pause (accidental?)

Action: Log into Google Ads immediately to diagnose and
restore campaigns.

Impact: $0 spend, $0 revenue until fixed
```

**Example 2: Billing Failure**
```
Severity: 10/10
Category: Technical Issues
Title: Payment method declined - campaigns will pause soon

Google Ads billing failed for payment method ending in 4523.
Campaigns will automatically pause within 24 hours if not
resolved.

Action: Update payment method in Google Ads billing settings
immediately.

Impact: All campaigns at risk of stopping
```

**Example 3: Massive Budget Overspend**
```
Severity: 10/10
Category: Budget Issues
Title: Account spent $4,500 in one day (450% over budget)

Yesterday's spend was $4,500 against a monthly budget of
$3,000. Daily budget limits appear to have failed or were
removed.

Action: Immediately verify budget settings in all campaigns
and pause overspending campaigns if needed.

Impact: Budget exhausted for entire month in one day
```

**When you see severity 10**: Drop everything and fix it now. These issues stop campaigns or waste massive amounts of money.

---

## Severity 9: CRITICAL 🔴

### Characteristics

**Impact**: Significant money being wasted or major performance failure
**Urgency**: Same day action required
**Timeline**: Fix within 4 hours
**Color**: Red

---

### Real Examples

**Example 1: Disapproved Ads**
```
Severity: 9/10
Category: Technical Issues
Title: 14 of 16 ads disapproved - only 2 ads running

Google disapproved 14 ads across 5 campaigns for
"Unacceptable business practices" policy violation.
Only 2 ads remain active.

Impact: Limited ad rotation severely restricting impression
share. Currently showing for only 12% of eligible searches.

Action: Review disapproved ads, identify policy violation,
create compliant replacement ads today.

Estimated loss: ~$800/day in missed revenue
```

**Example 2: Conversion Tracking Broken**
```
Severity: 9/10
Category: Conversion Tracking
Title: Zero conversions recorded in 5 days despite 1,200 clicks

Your campaigns generated 1,200 clicks in the last 5 days
with $2,400 spend, but zero conversions were recorded.

Historical average: 48 conversions per 1,200 clicks

This suggests conversion tracking is broken, not that
conversions stopped happening.

Action: Verify conversion tracking pixel on website. Check
Google Ads conversion tag status.

Impact: Can't optimize campaigns without conversion data.
Likely wasting ~$1,500 on inefficient keywords.
```

**Example 3: Budget Exhaustion**
```
Severity: 9/10
Category: Budget Issues
Title: Daily budget exhausted by 2 PM for 5 consecutive days

Campaign "Brand Keywords" has spent its full $100 daily
budget before 2 PM EST for 5 days straight.

You're missing 10 hours of daily traffic. Historical data
shows 45% of conversions happen between 6-11 PM.

Action: Increase daily budget to $180 or redistribute spend
from underperforming campaigns.

Estimated missed revenue: $400/day
```

**When you see severity 9**: Clear your schedule for the next few hours and fix this today. High financial impact.

---

## Severity 8: HIGH 🟠

### Characteristics

**Impact**: Meaningful money being wasted or performance declining
**Urgency**: Same day action preferred
**Timeline**: Fix before end of business day
**Color**: Orange

---

### Real Examples

**Example 1: CPC Spike**
```
Severity: 8/10
Category: Performance Problems
Title: Average CPC increased 78% in last 7 days

Your average CPC jumped from $4.20 to $7.50 in the past
week with no corresponding improvement in conversion rate
or Quality Score.

Affected campaigns: All search campaigns
Additional cost: ~$350/day vs previous week

Possible causes:
- Increased competition
- Bid strategy change
- Seasonal demand spike

Action: Review bid strategy, check competition, consider
lowering max CPC limits.

Impact: Budget exhausting faster, ROI declining
```

**Example 2: Impression Share Plummet**
```
Severity: 8/10
Category: Performance Problems
Title: Search impression share dropped from 68% to 31%

Your impression share on search network fell by more than
half in the past 10 days.

Primary cause: "Lost IS (rank)" increased to 52% (was 18%)

This means competitors are outbidding you or have better
Quality Scores.

Action: Increase bids by 25% on top keywords or improve
Quality Score through better ad relevance.

Impact: Losing ~$600/day in potential revenue
```

**Example 3: Quality Score Degradation**
```
Severity: 8/10
Category: Quality Score Problems
Title: 25 high-volume keywords dropped to QS 3-4

Your top 25 keywords (60% of total clicks) all saw Quality
Score drop from 7-8 to 3-4 in the past 2 weeks.

This is causing CPCs to increase by an average of $3.20 per
click on these keywords.

Root cause: Recent landing page redesign has poor mobile
experience rating.

Action: Fix landing page mobile experience or create new
mobile-specific landing pages.

Impact: Paying 2x more per click than necessary
```

**When you see severity 8**: Prioritize this over routine tasks. Fix today before it gets worse.

---

## Severity 7: HIGH 🟠

### Characteristics

**Impact**: Performance issues affecting ROI
**Urgency**: Fix within 24 hours
**Timeline**: Today or tomorrow
**Color**: Orange

---

### Real Examples

**Example 1: Declining CTR**
```
Severity: 7/10
Category: Performance Problems
Title: CTR declined 22% over past 14 days

Your click-through rate dropped from 3.8% to 2.96% in the
last two weeks across search campaigns.

This reduces Quality Score and increases CPC over time.

Possible causes:
- Ad copy fatigue (same ads running 6+ months)
- Competitor ads more compelling
- Seasonal shift in search behavior

Action: Refresh ad copy with new headlines and descriptions.
Test different value propositions.

Impact: Lower Quality Score will increase costs by ~15%
```

**Example 2: Uneven Budget Pacing**
```
Severity: 7/10
Category: Budget Issues
Title: Spending 85% of monthly budget in first 15 days

You've spent $2,550 of your $3,000 monthly budget with 15
days remaining in the month.

Current pace: Will exhaust budget by day 18
Optimal pace: $100/day for full month coverage

Action: Reduce daily budgets by 30% across all campaigns
to extend coverage through month end.

Impact: Campaigns will pause mid-month if not adjusted
```

**Example 3: Geographic Inefficiency**
```
Severity: 7/10
Category: Geographic Performance
Title: California has 3x better conversion rate than average

California traffic converts at 8.2% vs 2.7% average across
all other states, yet receives only 20% of budget.

Opportunity: Reallocating 40% more budget to California
could increase overall conversions by ~35%.

Action: Increase location bid adjustments for California
to +60% or create California-specific campaigns.

Impact: Missing $450/week in additional conversions
```

**When you see severity 7**: Schedule time today or first thing tomorrow to address this.

---

## Severity 6: MEDIUM 🟡

### Characteristics

**Impact**: Optimization opportunities or moderate inefficiencies
**Urgency**: Fix this week
**Timeline**: 1-3 days
**Color**: Yellow

---

### Real Examples

**Example 1: Underperforming Ad Groups**
```
Severity: 6/10
Category: Performance Problems
Title: 8 ad groups have zero conversions in 30 days

8 of your 45 ad groups generated 1,240 clicks but zero
conversions in the past month, wasting $1,850.

These ad groups have CTR of 2.1% (normal) but 0% conversion
rate (broken).

Possible issues:
- Wrong landing pages
- Poor keyword-to-page match
- Mobile usability problems

Action: Review each ad group's landing page relevance and
user experience. Pause worst performers.

Impact: Eliminating waste could save $450/week
```

**Example 2: Search Term Waste**
```
Severity: 6/10
Category: Strategy Recommendations
Title: 15 search terms cost $500+ with zero conversions

You're spending on search terms that don't convert:
- "free google ads" - $180 spent, 0 conversions
- "google ads tutorial" - $145 spent, 0 conversions
- "how to google ads" - $95 spent, 0 conversions
... (12 more)

Action: Add these as negative keywords to prevent future
waste.

Impact: Saves ~$500/month going forward
```

**Example 3: Mobile vs Desktop Disparity**
```
Severity: 6/10
Category: Strategy Recommendations
Title: Mobile CPA is $35 vs $68 on desktop

Your mobile campaigns convert at half the cost of desktop:
- Mobile: 4.2% conversion rate, $35 CPA
- Desktop: 2.1% conversion rate, $68 CPA

Yet you're allocating budget evenly across devices.

Action: Increase mobile bid adjustment to +40% to capture
more efficient traffic.

Impact: Could improve overall CPA by 18%
```

**When you see severity 6**: Add to this week's task list. Not urgent but worth addressing soon.

---

## Severity 5: MEDIUM 🟡

### Characteristics

**Impact**: Moderate optimization gains available
**Urgency**: Fix within a week
**Timeline**: 3-7 days
**Color**: Yellow

---

### Real Examples

**Example 1: Ad Schedule Opportunity**
```
Severity: 5/10
Category: Strategy Recommendations
Title: 72% of conversions happen Mon-Fri 9 AM-6 PM

Your conversion data shows strong time-of-day patterns:
- Mon-Fri 9 AM-6 PM: 72% of conversions, 3.8% conv rate
- Evenings/Weekends: 28% of conversions, 1.2% conv rate

Currently running ads 24/7 with no bid adjustments.

Action: Create ad schedule with +30% bid adjustment during
peak hours, -40% during off-peak.

Impact: Could improve ROI by 12-15%
```

**Example 2: Keyword Expansion**
```
Severity: 5/10
Category: Strategy Recommendations
Title: 5 search terms driving 30% of conversions aren't keywords

These search terms are converting well but aren't added as
keywords yet:
- "best google ads consultant near me" - 45 conversions
- "hire google ads expert" - 38 conversions
- "google ads management service" - 29 conversions

Action: Add these as exact match keywords with dedicated
ad groups for better control and Quality Score.

Impact: Better control over top converters, improved QS
```

**Example 3: Extension Opportunity**
```
Severity: 5/10
Category: Strategy Recommendations
Title: No sitelink extensions enabled

Your ads don't have sitelink extensions, which typically
improve CTR by 10-15%.

Competitors in your space all use sitelinks effectively.

Action: Create 4-6 sitelink extensions highlighting key
services/offers.

Impact: Expected CTR lift of 10% = ~80 more clicks/week
```

**When you see severity 5**: Put on this week's optimization list. Good improvements available.

---

## Severity 4: LOW 🟡

### Characteristics

**Impact**: Minor inefficiencies or small optimization gains
**Urgency**: Address when convenient
**Timeline**: This month
**Color**: Light yellow

---

### Real Examples

**Example 1: Low-Volume Keyword Waste**
```
Severity: 4/10
Category: Strategy Recommendations
Title: 40 keywords each spent $5-10 with zero conversions

You have many low-volume keywords that aren't converting:
- Individual spend: $5-12 each
- Total waste: ~$320 over 30 days
- Click volume: 1-3 clicks each

Action: Pause keywords with <5 clicks and 0 conversions in
30 days. They're too low volume to evaluate properly.

Impact: Small ongoing savings
```

**Example 2: Old Ads**
```
Severity: 4/10
Category: Strategy Recommendations
Title: 8 ads have been running unchanged for 6+ months

Your ad creative hasn't been refreshed in over 6 months.

While performance is stable, testing new messaging could
uncover wins. Ads go stale over time.

Action: Create 2-3 new ad variations per ad group to test
new angles.

Impact: Potential 5-10% CTR improvement
```

**Example 3: Quality Score 5 Keywords**
```
Severity: 4/10
Category: Quality Score Problems
Title: 30 keywords have Quality Score of 5

These keywords are "average" but could be better:
- QS 5 keywords: 30 total
- Collective clicks: ~800/month
- If improved to QS 7: Save ~$0.80/click

Action: Improve ad relevance and landing page experience
for these keywords.

Impact: Moderate cost savings if optimized
```

**When you see severity 4**: Batch these into monthly optimization sessions. Not urgent.

---

## Severity 3: LOW 🟡

### Characteristics

**Impact**: Very minor issues or distant opportunities
**Urgency**: Consider in next optimization round
**Timeline**: Next 1-2 months
**Color**: Light yellow

---

### Real Examples

**Example 1: Small Geographic Variances**
```
Severity: 3/10
Category: Geographic Performance
Title: Nevada has 15% higher conversion rate than average

Small sample size (only 25 conversions in 30 days) but
Nevada shows promise:
- Nevada: 4.2% conversion rate
- Average: 3.6% conversion rate

Not enough volume to confidently act on yet.

Action: Monitor for another 30-60 days. If pattern holds,
increase Nevada bids.

Impact: Minimal near-term impact
```

**Example 2: Campaign Naming**
```
Severity: 3/10
Category: Strategy Recommendations
Title: Campaign names don't follow consistent convention

Your campaigns use mixed naming styles:
- "Brand - Exact"
- "brand_broad"
- "Competitor_Campaign"
- "non_brand_test"

This makes reporting and organization harder.

Action: Standardize campaign naming convention for easier
management.

Impact: Organizational benefit only
```

**Example 3: Unused Features**
```
Severity: 3/10
Category: Strategy Recommendations
Title: No callout extensions in use

You could add callout extensions to highlight unique selling
points (free shipping, 24/7 support, etc.).

Minor CTR benefit expected (2-5%).

Action: Add callout extensions when creating next ad batch.

Impact: Small CTR improvement
```

**When you see severity 3**: Note for future reference. Very low priority.

---

## Severity 2: INFO 🔵

### Characteristics

**Impact**: Tracking information, no action needed
**Urgency**: None
**Timeline**: N/A
**Color**: Blue

---

### Real Examples

**Example 1: Positive Trend**
```
Severity: 2/10
Category: Performance Problems
Title: Conversion rate increased 12% this week

Your conversion rate improved from 3.2% to 3.6% in the past
7 days across all campaigns.

No specific change identified - could be seasonal, or recent
optimizations are working.

Action: None required. Continue monitoring.

Impact: Positive, no action needed
```

**Example 2: Data Observation**
```
Severity: 2/10
Category: Geographic Performance
Title: Wyoming has only 3 clicks in 30 days

Very low traffic from Wyoming. This is expected for small
population states.

Action: None. Just context.

Impact: None
```

**Example 3: Seasonal Note**
```
Severity: 2/10
Category: Strategy Recommendations
Title: November has historically highest conversion rate

Looking at historical data, November averages 15% higher
conversion rate than other months (likely holiday shopping).

Action: Plan to increase budgets in November if pattern
continues.

Impact: Future planning information
```

**When you see severity 2**: Read for context. No action required.

---

## Severity 1: INFO 🔵

### Characteristics

**Impact**: Context only
**Urgency**: None
**Timeline**: N/A
**Color**: Light blue

---

### Real Examples

**Example 1: Account Milestone**
```
Severity: 1/10
Category: Performance Problems
Title: Account generated 1,000th conversion this month

Congratulations! Your account just passed 1,000 total
conversions this month.

Historical average: ~850/month

Action: None - just a milestone notification

Impact: Positive context
```

**Example 2: Sync Completed**
```
Severity: 1/10
Category: Technical Issues
Title: Smart Sync completed successfully at 2:15 AM

Your daily sync finished on time with all data updated
successfully.

Action: None

Impact: Confirmation only
```

**Example 3: General Observation**
```
Severity: 1/10
Category: Strategy Recommendations
Title: Your account structure follows best practices

Your campaigns are well-organized with clear naming, proper
ad group themes, and good keyword grouping.

Action: Continue current organization approach

Impact: Positive reinforcement
```

**When you see severity 1**: Nice to know. No action needed.

---

## How Business Context Affects Severity

### Target CPA Impact

**Scenario 1: Conservative Target**
```
Your target CPA: $30
Actual CPA: $35

Alert severity: 7/10 (high)
Reason: 17% over target is significant deviation
```

**Scenario 2: Flexible Target**
```
Your target CPA: $100
Actual CPA: $105

Alert severity: 4/10 (low)
Reason: 5% over target is within acceptable range
```

**Lesson**: Same $5 difference, different severity based on your goals

---

### Budget Size Impact

**Scenario 1: Small Budget**
```
Monthly budget: $500
Daily waste: $15

Alert severity: 8/10 (high)
Reason: $15/day waste = 90% of daily budget
```

**Scenario 2: Large Budget**
```
Monthly budget: $50,000
Daily waste: $15

Alert severity: 3/10 (low)
Reason: $15/day waste = 0.9% of daily budget
```

**Lesson**: Same $15 waste, different severity based on budget scale

---

### Account Maturity Impact

**Scenario 1: New Account (<30 days)**
```
Issue: Low Quality Score on keywords

Alert severity: 5/10 (medium)
Reason: Expected for new accounts, not urgent
```

**Scenario 2: Mature Account (1+ year)**
```
Issue: Low Quality Score on keywords

Alert severity: 7/10 (high)
Reason: Unusual degradation for established account
```

**Lesson**: Same issue, different context changes severity

---

## Interpreting Severity for Your Situation

### Factor 1: Account Size

**Small accounts ($500-$2,000/month)**:
- Severity 6+ = Act quickly
- Severity 4-5 = Monitor
- Severity 1-3 = Ignore unless repeating

**Medium accounts ($2,000-$10,000/month)**:
- Severity 7+ = Act quickly
- Severity 5-6 = Act this week
- Severity 3-4 = Monthly optimization
- Severity 1-2 = Track

**Large accounts ($10,000+/month)**:
- Severity 8+ = Drop everything
- Severity 6-7 = Same day
- Severity 4-5 = This week
- Severity 1-3 = Batch monthly

---

### Factor 2: Agency vs In-House

**Agency (managing 20+ clients)**:
- Focus on severity 7+ only
- Batch severity 5-6 by client
- Ignore severity 1-4 unless recurring

**In-House (1-5 accounts)**:
- Act on severity 5+ promptly
- Review severity 3-4 monthly
- Use severity 1-2 for reporting

---

### Factor 3: Client Expectations

**High-touch clients**:
- Address severity 6+ within 24 hours
- Report on all severity 4+ weekly
- Use lower severity for context

**Hands-off clients**:
- Fix severity 7+ immediately
- Batch severity 5-6 for monthly reports
- Don't report severity 1-4

---

## Tips & Best Practices

### Don't Ignore Low Severity

**Why they matter**:
- Severity 4 today = Severity 7 next week
- Small inefficiencies compound
- Good learning opportunities

**Strategy**:
- Batch fix severity 3-4 monthly
- Track recurring low-severity alerts
- Address patterns even if individually low

---

### Severity Changes Over Time

**Escalation**:
```
Week 1: Severity 5 (Medium)
Week 2: Severity 7 (High) - issue worsening
Week 3: Severity 9 (Critical) - now urgent
```

**Recommendation**: Fix severity 5-6 alerts before they escalate

---

### Context Is Key

**Same alert, different severity**:
- "CPC increased $1" = Severity 8 if CPC was $2 (50% increase)
- "CPC increased $1" = Severity 4 if CPC was $20 (5% increase)

**Always read the full alert** - severity number alone isn't enough

---

### Use Severity to Delegate

**If managing a team**:
- Junior: Fix severity 3-6
- Mid-level: Fix severity 5-8
- Senior: Fix severity 8-10 + strategy

---

## Common Questions

**Q: Can I change alert severity manually?**
A: Not currently. Severity is AI-calculated. Future versions may allow manual overrides.

**Q: Why does AI sometimes rate similar issues differently?**
A: Context matters. Same issue in different campaign sizes, budgets, or goals gets different severity.

**Q: What if I think severity is wrong?**
A: Decline the alert with feedback. AI learns from this and adjusts future ratings.

**Q: Is severity 10 always critical?**
A: Yes. Severity 10 means campaigns stopped or massive waste. Always investigate immediately.

**Q: Should I fix all severity 7+ alerts same day?**
A: Ideally yes, but prioritize based on your capacity and account size. Large agencies may batch by client.

**Q: Do alerts auto-escalate in severity if ignored?**
A: Yes, if the underlying issue worsens. A severity 5 alert today can become severity 8 tomorrow if the problem grows.

---

## Next Steps

Use severity effectively with these guides:

- **[Smart Alerts Intro](01-smart-alerts-intro.html)** - How alerts work
- **[Alert Categories](03-alert-categories.html)** - Types of issues detected
- **[Accept/Decline Workflow](04-accept-decline-workflow.html)** - Acting on alerts
- **[AI Chat](05-ai-chat-getting-started.html)** - Ask AI about alert severity

---

**Need to prioritize?** Sort alerts by severity (high to low)

**Confused about an alert's severity?** Read the full explanation and financial impact

**Want AI to adjust severity?** Provide feedback via accept/decline actions

**Last Updated**: October 4, 2025
