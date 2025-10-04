---
title: Alert Categories Guide
description: Complete reference for all 8 alert categories - what each detects, real examples, troubleshooting steps, and optimization strategies
category: ai-features
phase: 3
order: 03
---

# Alert Categories Guide

Every alert belongs to one of 8 categories that group similar issues together. Understanding categories helps you quickly identify problem types, apply familiar solutions, and filter alerts by your area of focus. This guide covers all 8 categories with real examples and fix strategies.

---

## What You'll Learn

- All 8 alert categories explained
- What triggers each category
- Real examples for every category
- Common fixes and solutions
- How to filter by category
- Category-specific best practices
- Troubleshooting by category type

**Time needed**: 15 minutes to read

---

## The 8 Alert Categories

### Quick Reference

1. **Budget Issues** 💰 - Budget pacing, exhaustion, overspend, underspend
2. **Performance Problems** 📉 - CTR, CPC, conversion rate, ROAS declining
3. **Technical Issues** ⚠️ - Ads disapproved, tracking broken, system errors
4. **Strategy Recommendations** 🎯 - Optimization opportunities, best practices
5. **Quality Score Problems** ⭐ - Low QS, relevance issues, landing page problems
6. **Conversion Tracking** 🎯 - Tracking failures, attribution issues, conversion gaps
7. **Geographic Performance** 🌍 - Location insights, geo targeting optimization
8. **Bidding Strategy** 💡 - Bid strategy changes, automation opportunities

[Screenshot: Alert categories filter menu]
*Filter alerts by category to focus on specific areas*

---

## 1. Budget Issues 💰

### What This Category Detects

**All budget-related problems**:
- Daily budget exhausted too early
- Monthly budget pacing issues
- Overspending budgets
- Underspending budgets (wasted opportunity)
- Budget-limited impression share
- Uneven spending patterns

**Why it matters**: Budget issues either waste money or leave money on the table

---

### Common Budget Issue Alerts

#### Example 1: Early Budget Exhaustion
```
Severity: 8/10
Category: Budget Issues
Title: Campaign budget depleted by 3 PM daily

Your "Brand Campaign" spends its full $80 daily budget by
2:45 PM EST on average over the last 5 days.

Traffic analysis shows:
- 6 AM-3 PM: 1,250 impressions, $80 spent
- 3 PM-midnight: 0 impressions, $0 spent (budget exhausted)

Historical data: 38% of your conversions happen 6-11 PM

Recommended Action: Increase daily budget to $135 to cover
evening traffic, or reduce bids by 25% to extend budget.

Impact: Missing ~$320/week in evening conversions
```

**Fix**:
1. Increase budget if ROI is good
2. OR reduce bids to make budget last longer
3. OR use ad scheduling to concentrate spend on best hours

---

#### Example 2: Budget Underspend
```
Severity: 6/10
Category: Budget Issues
Title: Spending only 45% of allocated monthly budget

Your $5,000 monthly budget shows only $2,250 spent with
12 days remaining (expect to spend ~$3,200 total).

Cause: Daily budgets set too low at $80/day. Should be
~$165/day to spend full monthly allocation.

Recommended Action: Increase daily budgets across campaigns
to utilize full monthly budget.

Impact: Missing ~$1,800 in monthly ad spend that could
generate estimated 45 additional conversions
```

**Fix**:
1. Increase daily budgets proportionally
2. Expand keyword targeting to capture more traffic
3. Increase bids to be more competitive

---

#### Example 3: Impression Share Lost to Budget
```
Severity: 7/10
Category: Budget Issues
Title: Losing 42% impression share due to budget limits

Your campaigns show "Search IS Lost (budget)" at 42%,
meaning you could get 42% more impressions with higher
budget.

Current: Showing for 58% of eligible searches
Potential: Could show for 100% of searches

Estimated missed opportunity: ~180 conversions/month

Recommended Action: Increase budgets by 70% to capture
full impression share, or prioritize best-performing
campaigns.

Impact: Budget limiting reach and revenue
```

**Fix**:
1. Increase budgets on high-ROI campaigns
2. Pause low-performing campaigns to free up budget
3. Shift budget from Display to Search if Search is limited

---

### Budget Issues Best Practices

**Daily monitoring**:
- Check budget pacing each morning
- Adjust if spending too fast or slow
- Monitor impression share lost to budget

**Monthly planning**:
- Set daily budgets at 110% of target (allows for variance)
- Review mid-month pacing
- Adjust for seasonality

**Budget allocation**:
- Prioritize proven performers
- Don't spread budget too thin
- Minimum $20/day per campaign

---

## 2. Performance Problems 📉

### What This Category Detects

**All performance degradation**:
- CTR declining
- CPC increasing
- Conversion rate dropping
- ROAS falling
- Impression share decreasing
- Engagement metrics declining

**Why it matters**: Performance problems directly reduce ROI

---

### Common Performance Problem Alerts

#### Example 1: Declining CTR
```
Severity: 7/10
Category: Performance Problems
Title: CTR dropped 28% in past 2 weeks

Your average click-through rate fell from 4.2% to 3.0%
across all search campaigns.

This reduces Quality Score, which increases CPCs, creating
a negative spiral.

Possible causes:
- Ad fatigue (same ads running 8+ months)
- New competitors with better ads
- Seasonal shift in user behavior

Recommended Action: Refresh ad copy. Create 3 new ad
variations per ad group with updated messaging.

Impact: Lower CTR = higher CPCs = 15-20% cost increase
```

**Fix**:
1. Write new ad copy with fresh angles
2. Test different headlines and descriptions
3. Update calls-to-action
4. Add emotional hooks or urgency

---

#### Example 2: CPC Spike
```
Severity: 8/10
Category: Performance Problems
Title: Average CPC increased 63% without performance gain

Your CPC jumped from $3.80 to $6.20 over 10 days with no
corresponding improvement in conversion rate.

Affected: All campaigns
Additional cost: ~$420/week vs previous average

Likely causes:
- Increased competition (new competitor launched)
- Quality Score decline
- Bid strategy became more aggressive

Recommended Action: Review Search Term report for new
competition. Consider lowering max CPC limits or pausing
if ROI is negative.

Impact: Budget exhausting faster, lower ROI
```

**Fix**:
1. Check competitor activity in Auction Insights
2. Review and improve Quality Score
3. Lower max CPC caps if ROI is suffering
4. Switch to Target CPA if using manual bidding

---

#### Example 3: Conversion Rate Decline
```
Severity: 7/10
Category: Performance Problems
Title: Conversion rate fell from 5.2% to 3.1% in 14 days

Your conversion rate dropped 40% in two weeks despite
stable traffic quality (CTR unchanged).

This suggests landing page or offer problem, not traffic
quality issue.

Recent changes detected:
- Landing page redesign deployed 16 days ago
- New checkout flow implemented

Recommended Action: A/B test current vs previous landing
page. Review analytics for drop-off points in new checkout
flow.

Impact: 40% fewer conversions from same traffic = major
revenue loss
```

**Fix**:
1. Rollback recent landing page changes
2. Check page load speed (slow = fewer conversions)
3. Test different offers/CTAs
4. Review mobile experience specifically

---

### Performance Problems Best Practices

**Weekly reviews**:
- Compare week-over-week metrics
- Catch declining trends early
- Act before 20% change threshold

**Root cause analysis**:
- Don't just fix symptoms
- Find underlying cause
- Track correlation to changes you made

**Benchmark comparison**:
- Compare to your historical average
- Compare to industry benchmarks
- Track seasonality patterns

---

## 3. Technical Issues ⚠️

### What This Category Detects

**All technical failures**:
- Ads disapproved
- Tracking pixel errors
- Conversion tag problems
- Extension errors
- Landing page technical issues
- Feed errors (Shopping)
- Account suspension warnings

**Why it matters**: Technical issues can completely stop campaigns

---

### Common Technical Issue Alerts

#### Example 1: Ad Disapprovals
```
Severity: 9/10
Category: Technical Issues
Title: 9 of 12 ads disapproved for policy violation

Google disapproved 9 ads across your account for
"Misleading content" policy violation.

Affected campaigns: Brand, Competitor, Non-Brand
Active ads remaining: 3 (severely limits ad rotation)

Disapproval reason: Claims like "Best in Industry" and
"#1 Rated" require substantiation with third-party proof.

Recommended Action:
1. Remove unsupported claims from ad copy
2. Add disclaimers or third-party ratings
3. Create replacement ads with compliant messaging

Impact: Limited ad pool restricts impression share to ~15%
```

**Fix**:
1. Review Google Ads policy center for specific violation
2. Edit ads to be compliant (remove claims, add proof)
3. Request re-review in Google Ads
4. Create new compliant ads as backup

---

#### Example 2: Conversion Tracking Broken
```
Severity: 9/10
Category: Technical Issues
Title: Zero conversions recorded in 6 days

Your campaigns show 0 conversions in the past 6 days
despite 1,850 clicks and normal traffic patterns.

Historical baseline: ~95 conversions per 1,850 clicks

This strongly suggests conversion tracking is broken,
not that conversions actually stopped.

Diagnostic steps:
1. Check if Google Ads conversion tag is on site
2. Verify tag is firing (use Google Tag Assistant)
3. Check for recent website changes that removed tag

Recommended Action: Contact developer to verify conversion
tracking implementation immediately.

Impact: Can't optimize without conversion data. Likely
wasting spend on non-converting keywords.
```

**Fix**:
1. Use Google Tag Assistant to check tag status
2. Verify tag placement on thank-you/confirmation page
3. Test conversion with live purchase/form fill
4. Check if recent site update broke tag

---

#### Example 3: Landing Page Issues
```
Severity: 7/10
Category: Technical Issues
Title: Landing page returns 404 error for top ad group

Your highest-volume ad group "Best Seller Products" is
sending traffic to a landing page that returns 404 error.

Affected:
- 850 clicks in past 3 days = $1,700 wasted
- 0 conversions (impossible to convert on 404 page)

Cause: Product page moved or deleted without updating ads

Recommended Action: Update all ads in this ad group with
correct landing page URL immediately.

Impact: 100% waste on this ad group traffic
```

**Fix**:
1. Verify correct landing page URL
2. Update all ads with fixed URL
3. Check other ad groups for similar issues
4. Set up monitoring for 404 errors

---

### Technical Issues Best Practices

**Daily checks**:
- Review ad approval status
- Monitor conversion tracking daily
- Check for sudden conversion drops

**Preventive measures**:
- Test landing pages before launching
- Keep backup of ad copy before policy checks
- Monitor Google Ads policy updates

**Quick response**:
- Fix technical issues within hours
- Technical problems escalate quickly
- Every hour = more wasted spend

---

## 4. Strategy Recommendations 🎯

### What This Category Detects

**All optimization opportunities**:
- Bid strategy improvements
- Ad schedule optimization
- Geographic targeting adjustments
- Keyword expansion opportunities
- Match type recommendations
- Extension additions
- Audience targeting suggestions

**Why it matters**: Strategic improvements unlock efficiency gains

---

### Common Strategy Recommendation Alerts

#### Example 1: Ad Schedule Opportunity
```
Severity: 6/10
Category: Strategy Recommendations
Title: 78% of conversions occur Mon-Fri 9 AM-6 PM

Analysis of 450 conversions over 30 days shows clear
time-of-day patterns:

High-performing hours (9 AM-6 PM Mon-Fri):
- 78% of conversions
- 6.2% conversion rate
- $38 CPA

Low-performing hours (evenings/weekends):
- 22% of conversions
- 1.8% conversion rate
- $94 CPA

Currently running ads 24/7 with no bid adjustments.

Recommended Action: Implement ad schedule with +40% bid
adjustment 9 AM-6 PM Mon-Fri, -50% other times.

Impact: Estimated 18% CPA improvement by concentrating
spend on best hours
```

**Fix**:
1. Create ad schedule in campaign settings
2. Increase bids during peak hours
3. Decrease bids during off-hours
4. Monitor for 2 weeks and adjust

---

#### Example 2: Negative Keyword Opportunity
```
Severity: 6/10
Category: Strategy Recommendations
Title: 18 search terms cost $1,200+ with zero conversions

You're spending on non-converting search terms:
- "free google ads templates" - $285, 0 conv
- "google ads tutorial youtube" - $195, 0 conv
- "how to set up google ads" - $165, 0 conv
... (15 more similar terms)

These are informational queries, not buyer intent.

Recommended Action: Add these 18 terms as exact match
negative keywords to prevent future waste.

Impact: Saves ~$1,200/month going forward
```

**Fix**:
1. Export Search Terms report
2. Identify zero-conversion terms with >$50 spend
3. Add as negative keywords at campaign level
4. Review monthly for new waste

---

#### Example 3: Keyword Expansion
```
Severity: 5/10
Category: Strategy Recommendations
Title: 8 high-performing search terms not added as keywords

These search terms are converting well but aren't in your
keyword list yet:

- "google ads consultant near me" - 32 conv, $28 CPA
- "hire google ads expert" - 28 conv, $31 CPA
- "google ads management pricing" - 19 conv, $35 CPA

Adding these as exact match keywords gives you better
control, improves Quality Score, and lowers CPCs.

Recommended Action: Create dedicated ad groups for these
high-converters with exact match keywords.

Impact: Better control over top traffic sources, likely
15-20% CPA improvement on these terms
```

**Fix**:
1. Create new ad groups for each theme
2. Add as exact match keywords
3. Write highly relevant ads
4. Use specific landing pages

---

### Strategy Recommendations Best Practices

**Monthly optimization**:
- Review strategy alerts monthly
- Test top 3 recommendations
- Track impact of changes

**Prioritization**:
- Focus on recommendations with >10% impact
- Test one change at a time
- Measure results before next change

**Long-term planning**:
- Strategy alerts = roadmap
- Queue low-priority recommendations
- Revisit quarterly

---

## 5. Quality Score Problems ⭐

### What This Category Detects

**All Quality Score issues**:
- Low Quality Score keywords (1-4)
- Expected CTR problems
- Ad relevance issues
- Landing page experience warnings
- Quality Score degradation trends

**Why it matters**: Low QS = 2-3x higher CPCs

---

### Common Quality Score Problem Alerts

#### Example 1: Low Quality Score Keywords
```
Severity: 7/10
Category: Quality Score Problems
Title: 15 high-volume keywords have Quality Score 3-4

Your top keywords by traffic volume have poor Quality
Scores:

Keywords with QS 3-4:
- "google ads service" (QS 3) - 850 clicks/mo, $8.50 CPC
- "ppc management" (QS 4) - 720 clicks/mo, $7.20 CPC
... (13 more)

Average CPC impact: Paying 2.2x more than QS 7-8 keywords

If these were QS 7+: Average CPC would be ~$3.80
Current: Average CPC is $8.20

Recommended Action: Improve ad relevance by creating
dedicated ad groups with highly relevant ads for each
keyword theme.

Impact: Potential savings of $2,900/month with QS improvement
```

**Fix**:
1. Create single-keyword ad groups (SKAGs)
2. Write ads with keyword in headline
3. Improve landing page relevance
4. Match landing page headline to ad

---

#### Example 2: Landing Page Experience
```
Severity: 6/10
Category: Quality Score Problems
Title: 22 keywords flagged for "Below average" landing page experience

Google rates your landing page experience as "Below average"
for 22 keywords, citing:

Issues detected:
- Mobile load time >4 seconds
- Pop-ups on mobile
- Thin content
- Navigation unclear

This drags down Quality Score to 4-5 on affected keywords.

Recommended Action:
1. Improve mobile page speed (compress images, minimize CSS)
2. Remove mobile pop-ups
3. Add more content to landing page
4. Simplify navigation

Impact: Landing page experience is 1/3 of QS calculation
```

**Fix**:
1. Run Google PageSpeed Insights
2. Fix technical issues (speed, mobile usability)
3. Add content to meet user intent
4. Remove aggressive pop-ups
5. Test on mobile device

---

### Quality Score Problems Best Practices

**QS monitoring**:
- Check Quality Score weekly
- Track changes over time
- Act when QS drops below 5

**Improvement focus**:
- Expected CTR (30% of QS): Improve ad copy
- Ad Relevance (30% of QS): Match ad to keyword
- Landing Page (30% of QS): Fix page experience

**Measurement**:
- QS improvements take 2-4 weeks to reflect
- Track CPC changes as QS improves
- Document what fixes worked

---

## 6. Conversion Tracking 🎯

### What This Category Detects

**All conversion tracking issues**:
- Zero conversions recorded
- Conversion tracking errors
- Unusual conversion patterns
- Attribution problems
- Conversion value discrepancies

**Why it matters**: Can't optimize what you can't measure

---

### Common Conversion Tracking Alerts

#### Example 1: Conversion Tracking Broken
```
Severity: 9/10
Category: Conversion Tracking
Title: No conversions in 5 days despite normal traffic

5 days of zero conversions with 1,450 clicks suggests
tracking failure, not actual lack of conversions.

Traffic quality unchanged:
- CTR: 3.8% (normal)
- Bounce rate: Normal per analytics
- Time on site: Normal

Historical baseline: ~72 conversions per 1,450 clicks

Diagnostic: Conversion tag likely missing or broken

Recommended Action: Verify Google Ads conversion tag is
installed and firing correctly. Use Google Tag Assistant
to test.

Impact: Flying blind without conversion data
```

**Fix**: (Same as Technical Issues example above)

---

### Conversion Tracking Best Practices

**Daily verification**:
- Check conversion count daily
- Sudden zero = investigate immediately
- Compare to website analytics

**Multiple attribution**:
- Set up multiple conversion actions
- Track micro-conversions (form views, etc.)
- Don't rely on single conversion point

---

## 7. Geographic Performance 🌍

### What This Category Detects

**All location insights**:
- High-performing locations
- Underperforming regions
- Location bid adjustment opportunities
- Geographic expansion possibilities
- Local targeting refinements

**Why it matters**: Location targeting impacts efficiency

---

### Common Geographic Performance Alerts

#### Example 1: High-Performing State
```
Severity: 6/10
Category: Geographic Performance
Title: Texas converts at 45% lower CPA than average

Texas performance (230 conversions, 30-day sample):
- Conversion rate: 7.2%
- CPA: $32
- Revenue: $15,680

All other states average:
- Conversion rate: 4.1%
- CPA: $58
- Revenue: $8,240 (per equivalent clicks)

Currently: Texas gets 18% of budget
Opportunity: Could allocate 35% to Texas

Recommended Action: Increase Texas location bid adjustment
to +60% or create Texas-specific campaigns.

Impact: Shifting budget to Texas could reduce overall CPA
by 22%
```

**Fix**:
1. Set location bid adjustment for Texas: +60%
2. Monitor for 2 weeks
3. Consider creating Texas-specific campaigns
4. Research why Texas performs better

---

### Geographic Performance Best Practices

**Monthly geo review**:
- Check location reports
- Identify best/worst performers
- Adjust bids accordingly

**Sample size**:
- Need 30+ conversions to trust data
- Small sample = don't make big changes
- Wait for statistical significance

---

## 8. Bidding Strategy 💡

### What This Category Detects

**All bidding strategy insights**:
- Manual vs automated bidding
- Bid strategy performance
- Target CPA/ROAS recommendations
- Bid adjustment opportunities
- Portfolio bid strategy suggestions

**Why it matters**: Right bid strategy saves time and improves performance

---

### Common Bidding Strategy Alerts

#### Example 1: Automation Opportunity
```
Severity: 5/10
Category: Bidding Strategy
Title: High-volume campaign suitable for Target CPA

Your "Brand Campaign" has ideal conditions for automated
bidding:

Qualifications met:
- 150+ conversions in last 30 days ✓
- Consistent conversion volume ✓
- Stable CPA ($42-$48 range) ✓

Currently using: Manual CPC
Recommended: Target CPA bidding

Benefits of switching:
- Automated bid optimization
- 24/7 bid adjustments
- Reduced management time
- Typical 10-15% CPA improvement

Recommended Action: Switch to Target CPA with target of $45
(your current average).

Impact: Saves management time, likely improves efficiency
```

**Fix**:
1. Switch campaign to Target CPA
2. Set target at current average CPA
3. Allow 2-week learning period
4. Monitor and adjust target based on results

---

### Bidding Strategy Best Practices

**Strategy selection**:
- Manual CPC: For new campaigns (<30 conv/mo)
- Target CPA: For conversion-focused campaigns (30+ conv/mo)
- Target ROAS: For e-commerce with revenue tracking
- Maximize Conversions: For lead gen with flexible CPA

**Monitoring**:
- Let automated strategies learn (14-30 days)
- Don't change target CPA daily
- Review weekly, adjust monthly

---

## Filtering Alerts by Category

### How to Use Category Filters

**Location**: Client Details → AI Alerts Tab → Category Filter

**Process**:
1. Click "All Categories" dropdown
2. Select specific category
3. Alerts filter to show only that category
4. Clear filter to see all alerts again

**Use cases**:

**Focus on budget** (before month-end):
```
Filter: Budget Issues
Review all budget alerts
Fix pacing problems
Ensure full spend
```

**Technical audit** (weekly):
```
Filter: Technical Issues
Check for disapprovals
Verify tracking working
Fix errors immediately
```

**Monthly optimization** (strategy session):
```
Filter: Strategy Recommendations
Queue all recommendations
Prioritize by potential impact
Implement top 3
```

[Screenshot: Category filter in use]
*Filter by category to focus optimization efforts*

---

## Category Patterns and Trends

### Common Combinations

**Budget + Performance**:
```
Budget exhausting early + CPC increasing = Competition spike
Action: Increase budget OR lower bids
```

**Technical + Conversion Tracking**:
```
Ads disapproved + Zero conversions = Multiple problems
Action: Fix ads first, then verify tracking
```

**Quality Score + Performance**:
```
Low QS + High CPC + Low CTR = Ad relevance problem
Action: Rewrite ads, improve landing page
```

---

### Recurring Category Patterns

**If you see same category weekly**:
- Budget Issues repeating = Under-funded campaigns
- Performance Problems repeating = Competitive market
- Quality Score repeating = Fundamental relevance issues
- Technical Issues repeating = Process problem (need QA)

**Action**: Fix root cause, not symptoms

---

## Tips & Best Practices

### Category-Specific Days

**Monday: Technical Issues**
- Check for weekend disapprovals
- Verify tracking after weekend
- Fix before week starts

**Wednesday: Performance Problems**
- Mid-week performance review
- Catch declining trends
- Adjust for rest of week

**Friday: Budget Issues**
- Check monthly pacing
- Adjust before weekend
- Prepare for next week

**Monthly: Strategy Recommendations**
- Last Friday of month
- Review all strategic alerts
- Plan next month improvements

---

### Don't Ignore Categories

**Every category matters**:
- Technical = Foundation (fix first)
- Performance = Immediate impact (fix second)
- Budget = Efficiency (fix third)
- Strategy = Long-term (plan fourth)

**Skip categories = miss opportunities**

---

### Category Expertise

**Build expertise by category**:
- Master Technical Issues (save campaigns)
- Master Budget Issues (optimize spend)
- Master Performance Problems (improve ROI)
- Master Strategy Recommendations (unlock growth)

**Become the go-to expert** for each category

---

## Common Questions

**Q: Can one alert be in multiple categories?**
A: No, each alert has exactly one category assigned by AI.

**Q: Which category is most important?**
A: Technical Issues (stops campaigns), then Performance Problems (costs money), then others.

**Q: Can I customize which categories appear?**
A: Not currently. All 8 categories are standard. Custom categories planned for future.

**Q: Why don't I see all 8 categories?**
A: You only see categories with active alerts. Well-optimized accounts may only show 3-4 categories.

**Q: Which category should I check daily?**
A: Technical Issues and Conversion Tracking. Others can be weekly/monthly.

**Q: Do categories affect severity?**
A: No. Severity is independent of category. Technical Issues can be severity 2 or 10.

---

## Next Steps

Master alert categories with these guides:

- **[Smart Alerts Intro](/docs/smart-alerts-intro)** - How alerts work
- **[Alert Severity](/docs/alert-severity-guide)** - The 1-10 scale explained
- **[Accept/Decline Workflow](/docs/accept-decline-workflow)** - Acting on alerts
- **[AI Chat](/docs/ai-chat-getting-started)** - Ask AI about specific categories

---

**Filter alerts by category** to focus your optimization efforts

**Track recurring categories** to identify systemic issues

**Master one category at a time** to build comprehensive expertise

**Last Updated**: October 4, 2025
