---
title: AI Context Explained
description: Understand what data AI can see, how context improves recommendations, and why business profiles matter for better AI insights
category: ai-features
phase: 3
order: 07
---

# AI Context Explained

Context is the information AI uses to understand your business and provide relevant recommendations. The more context AI has - business goals, target audience, optimization history - the better its insights become. This guide explains what context is, what data AI accesses, and how to improve it.

---

## What You'll Learn

- What context means for AI
- Complete list of data sources AI uses
- How context improves recommendations
- Business Profile importance
- Optimization history tracking
- How to improve AI context
- Context privacy and security

**Time needed**: 10 minutes to read

---

## What Is Context?

**Definition**: All information AI can access to understand your business, campaigns, and goals

**Why it matters**:
- Without context: Generic recommendations
- With context: Tailored to your specific business

**Example**:

**Without context**:
```
AI: "Your CPA is $50. That's higher than average."
```

**With context** (AI knows your target CPA is $45):
```
AI: "Your CPA is $50, which is 11% above your target of $45.
This gap is costing approximately $280/month in efficiency
losses. I recommend improving Quality Score on your top
5 keywords to bring CPA back to target."
```

[Screenshot: Context data sources diagram]
*AI synthesizes data from 12 different sources*

---

## The 12 Data Sources

### 1. Campaign Performance Data

**What AI sees**:
- Campaign names, types, status
- Daily/monthly spend
- Clicks, impressions, conversions
- CTR, CPC, conversion rate
- Impression share data
- Budget settings
- Bidding strategies

**Data freshness**: Last Smart Sync (shown in chat)

**How AI uses it**:
- Identify underperforming campaigns
- Compare campaign efficiency
- Recommend budget reallocation
- Detect trend anomalies

---

### 2. Ad Group & Keyword Data

**What AI sees**:
- All ad groups and structure
- All keywords and match types
- Quality Scores
- Keyword-level performance
- Search term data (matched queries)
- Negative keyword lists

**How AI uses it**:
- Find wasted keyword spend
- Recommend keyword expansion
- Identify negative keyword opportunities
- Analyze Quality Score issues

---

### 3. Ad Copy & Creative

**What AI sees**:
- All ad headlines and descriptions
- Ad status (approved, disapproved, pending)
- Ad performance by variant
- Extension usage
- Image ads (if Shopping/Display)

**How AI uses it**:
- Suggest ad copy improvements
- Identify policy violations
- Recommend A/B test variations
- Compare ad performance

---

### 4. Conversion Tracking

**What AI sees**:
- Conversion actions defined
- Conversion counts and values
- Attribution windows
- Conversion rates by campaign/keyword
- Time to conversion data

**How AI uses it**:
- Calculate accurate ROI metrics
- Identify high-converting traffic sources
- Recommend conversion optimization
- Track optimization impact

---

### 5. Geographic Data

**What AI sees**:
- Performance by state/city
- Location bid adjustments
- Geo targeting settings
- Regional conversion rates

**How AI uses it**:
- Find best-performing locations
- Recommend geo bid adjustments
- Identify expansion opportunities
- Detect regional inefficiencies

---

### 6. Device & Time Data

**What AI sees**:
- Performance by device (mobile, desktop, tablet)
- Performance by day of week
- Performance by hour of day
- Device bid adjustments
- Ad schedule settings

**How AI uses it**:
- Optimize ad scheduling
- Recommend device bid adjustments
- Identify best performance times
- Suggest budget pacing changes

---

### 7. Budget Tracking

**What AI sees**:
- Monthly budget targets
- Daily spend patterns
- Budget utilization percentage
- Budget pacing trends
- Campaign-level budgets

**How AI uses it**:
- Alert on budget exhaustion
- Recommend budget increases
- Identify budget waste
- Optimize budget distribution

---

### 8. Active AI Alerts

**What AI sees**:
- All current alerts
- Alert severity levels
- Alert categories
- Past accept/decline history

**How AI uses it**:
- Reference alerts in conversation
- Explain alert reasoning
- Prioritize recommendations
- Learn from your feedback

---

### 9. Business Profile ⭐

**What AI sees** (if you fill it out):
- Industry vertical
- Business type (B2B, B2C, local, e-commerce)
- Company size
- Target audience description
- Business goals
- Target CPA/ROAS
- Monthly budget
- Website URL
- Main products/services

**How AI uses it**:
- Calibrate "good" vs "bad" performance
- Understand strategic constraints
- Provide industry-specific advice
- Set appropriate severity levels

**Critical**: This is the most important context source

---

### 10. Optimization History

**What AI sees**:
- Changes you've made
- When optimizations were implemented
- Performance before/after changes
- Alert accept/decline patterns
- Conversation summaries

**How AI uses it**:
- Don't repeat failed recommendations
- Build on successful optimizations
- Understand your preferences
- Track optimization impact

---

### 11. Custom Context Entries

**What AI sees** (if you add custom notes):
- Client-specific instructions
- Strategic priorities
- Constraints and limitations
- Campaign goals
- Special considerations

**Examples**:
```
"Client is rebranding next month - don't recommend
major campaign restructures until after rebrand"

"Target audience is enterprise, not SMB - filter
recommendations accordingly"

"Client prefers manual bidding - don't suggest
automation"
```

**How AI uses it**:
- Tailor recommendations to your specific situation
- Avoid conflicting with known constraints
- Respect strategic priorities

---

### 12. Website Analysis (During Onboarding)

**What AI sees** (one-time during client setup):
- Website content analysis
- Product/service offerings
- Value propositions
- Target audience indicators
- Competitor positioning
- Industry category

**How AI uses it**:
- Understand business model
- Suggest relevant keywords
- Recommend campaign structure
- Identify unique selling points

---

## How Context Improves Recommendations

### Example 1: CPA Evaluation

**Without Business Profile**:
```
Your question: "Is my CPA of $42 good?"

AI: "A CPA of $42 is moderate. Industry average varies
by vertical. You should compare to your specific goals."

(Generic answer - not helpful)
```

**With Business Profile** (target CPA: $35):
```
Your question: "Is my CPA of $42 good?"

AI: "Your CPA of $42 is 20% above your target of $35.
This represents approximately $420/month in lost efficiency.

To bring CPA down to target, I recommend:
1. Improve Quality Score (currently 5.2, should be 7+)
2. Add 12 negative keywords I identified
3. Pause 3 underperforming ad groups

These changes should reduce CPA by ~18%, bringing you
to $34.40."

(Specific, actionable, quantified)
```

---

### Example 2: Budget Recommendations

**Without Monthly Budget Context**:
```
AI: "You could increase budget to capture more traffic."

(Vague, may not be feasible)
```

**With Monthly Budget** ($5,000/month specified):
```
AI: "You're currently spending $3,800 of your $5,000
monthly budget (76% utilization). This leaves $1,200
on the table.

I recommend reallocating this $1,200 to:
- Brand Campaign: +$800 (budget-limited, high ROI)
- Non-Brand Campaign: +$400 (room for expansion)

Expected result: +35 conversions/month without exceeding
your total budget."

(Specific, respects constraints, quantified impact)
```

---

### Example 3: Strategic Alignment

**Without Industry Context**:
```
AI: "Consider expanding to Shopping campaigns."

(May not apply to your business)
```

**With Industry** (Professional Services / B2B):
```
AI: "Given your professional services B2B business model,
Shopping campaigns are not applicable (you don't sell
physical products).

Instead, I recommend:
1. LinkedIn Ads for B2B targeting
2. Remarketing to nurture leads through long sales cycle
3. Thought leadership content campaigns

These align better with B2B service sales."

(Industry-appropriate, strategic)
```

---

## Business Profile: The Most Important Context

### Why It Matters

**Business Profile unlocks**:
- Accurate performance benchmarks
- Industry-specific recommendations
- Goal-aligned optimization
- Appropriate severity ratings

**ROI of 10 minutes to fill out**:
- 3-5x more relevant recommendations
- Fewer generic suggestions
- Better alert accuracy
- Faster decision-making

---

### Key Business Profile Fields

**Target CPA** (critical):
```
Without: AI can't judge if $50 CPA is good or bad
With: AI knows if you're above/below target
```

**Monthly Budget** (critical):
```
Without: AI might suggest $10K/month strategies
With: AI respects your $2K/month reality
```

**Business Goals** (important):
```
Without: AI optimizes for clicks
With: AI optimizes for your actual goals (leads, sales, calls)
```

**Target Audience** (important):
```
Without: AI suggests broad targeting
With: AI recommends audience-aligned strategies
```

**Industry** (helpful):
```
Without: AI gives generic advice
With: AI provides industry best practices
```

---

## Optimization History: AI Learning

### How It Works

**Every change you make is tracked**:
```
Oct 1: Increased Brand Campaign budget $100→$150
Result: +22 conversions, CPA stayed same ($42→$41)
AI learns: Budget increases work for this client

Oct 8: Tried Display Campaign
Result: 5 conversions, $95 CPA (vs $42 average)
AI learns: Display doesn't work for this client

Oct 15: Added 15 negative keywords
Result: CTR +12%, wasted spend -$280/month
AI learns: Negative keywords are high-impact here
```

**Future recommendations improve**:
```
AI won't suggest: Display campaigns (learned it failed)
AI will suggest: More negative keyword reviews (learned it works)
AI will suggest: Budget increases (learned they're effective)
```

---

### Accept/Decline Feedback Loop

**When you accept alerts**:
- AI notes what was valuable
- Similar alerts get higher priority
- Recommendation style reinforced

**When you decline alerts**:
- AI notes what wasn't useful
- Similar alerts get lower priority
- Recommendation style adjusted

**Over time**: AI becomes personalized to your preferences

---

## Custom Context Entries

### What They Are

**Free-text notes** you can add about client-specific considerations

**Examples**:

**Strategic constraints**:
```
"Client is switching from products to services next quarter.
Don't recommend Shopping campaigns."
```

**Special targeting**:
```
"Focus on enterprise buyers ($1M+ company size).
Avoid small business targeting."
```

**Temporary situations**:
```
"Website is being redesigned Oct 15-25.
Pause conversion tracking alerts during this period."
```

**Budget context**:
```
"Budget will 3x in Q4 for holiday season.
Plan expansion strategies now."
```

**Preference notes**:
```
"Client prefers manual bidding for control.
Don't suggest automated strategies."
```

---

### When to Use Custom Context

**Use when**:
- AI doesn't have a structured field for your situation
- Temporary constraints exist
- Strategic priorities are unique
- Client has strong preferences
- Special circumstances apply

**Don't use for**:
- Information that belongs in Business Profile
- Data AI already has (campaign performance)
- Things that change frequently

---

## Context Privacy & Security

### What Is Private

**Your data stays in your account**:
- Other users cannot see your client data
- Other users cannot see your conversations
- Other users cannot see your custom context

**Your accept/decline feedback**:
- Only affects your account's AI behavior
- Contributes to aggregate model improvement (anonymized)
- Never identifies you or your clients

---

### What AI Cannot See

**Completely private**:
- Google Ads login credentials
- Payment information
- User passwords
- Other clients (in per-client chat)
- Unrelated user data

**External data**:
- Google Analytics (not integrated)
- CRM data (not integrated)
- Email marketing data
- Social media data

---

## Improving AI Context

### Fill Out Business Profile (10 minutes)

**Highest impact action**:
1. Go to Client Details → Settings
2. Fill out business profile fields
3. Save

**Immediate benefit**: Next AI conversation 3-5x better

---

### Add Custom Context (5 minutes)

**For unique situations**:
1. Go to Client Details → Context tab
2. Add custom context entry
3. Describe special considerations

**Example**:
```
Title: "Seasonal Budget Strategy"
Note: "Client doubles budget Nov-Dec for holiday season.
Any expansion recommendations should account for this."
```

---

### Keep Optimizations Documented

**Track what you do**:
- Accept alerts when you implement recommendations
- Note major changes in custom context
- AI learns faster with clear feedback

---

### Regular Data Syncs

**Fresh data = better context**:
- Set up auto-sync (daily recommended)
- Manual sync before important decisions
- Context is only as good as data recency

---

## Common Questions

**Q: Can AI see my other clients in per-client chat?**
A: No. Per-client chat is sandboxed to that client only. Global chat can discuss all clients.

**Q: Does filling out Business Profile cost anything?**
A: No. It's included and highly recommended for better AI.

**Q: Can I delete or edit custom context?**
A: Yes. Go to Context tab, edit or delete any entry anytime.

**Q: How often should I update Business Profile?**
A: When goals change (new target CPA, budget increase, strategy shift).

**Q: Does AI remember conversations forever?**
A: Conversations auto-summarize after 10 messages. Full history kept for 90 days.

**Q: Can I export my context data?**
A: Business Profile and custom context can be exported as part of client data export.

---

## Troubleshooting

### Problem: AI gives generic recommendations

**Cause**: Missing Business Profile

**Solution**:
1. Fill out Business Profile (especially target CPA, budget, goals)
2. Wait for next conversation
3. AI will immediately use new context

---

### Problem: AI suggests things that don't apply

**Cause**: Missing industry or business type context

**Solution**:
1. Update Business Profile with industry
2. Add custom context note explaining business model
3. Example: "B2B SaaS, not e-commerce - don't suggest Shopping"

---

### Problem: AI recommends things you already tried

**Cause**: Optimization history not captured

**Solution**:
- Accept alerts when you implement them
- Add custom context note about past attempts
- Example: "Tried Display campaigns Q1 2025 - poor ROI, don't suggest again"

---

## Next Steps

Maximize AI effectiveness with these guides:

- **[Business Profile Setup](/docs/business-profile-setup)** - Complete Business Profile guide
- **[Custom Context Entries](/docs/custom-context-entries)** - Advanced context management
- **[AI Chat Getting Started](/docs/ai-chat-getting-started)** - Use AI Chat effectively
- **[Smart Alerts](/docs/smart-alerts-intro)** - How context improves alerts

---

**Fill out Business Profile now** for immediate improvement

**Add custom context** for unique situations

**Keep context updated** as business evolves

**Last Updated**: October 4, 2025
