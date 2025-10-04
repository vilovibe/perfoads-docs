---
title: Custom Context Entries
description: Advanced context management with custom notes - handle unique situations, temporary constraints, and client-specific strategies
category: ai-features
phase: 3
order: 09
---

# Custom Context Entries

Custom Context Entries are free-form notes you add to give AI information that doesn't fit in structured Business Profile fields. Use them for temporary situations, unique constraints, strategic priorities, or anything AI should know that isn't captured elsewhere. This guide shows you how to use custom context effectively.

---

## What You'll Learn

- What custom context is and when to use it
- How to create effective context entries
- Real examples for common scenarios
- Best practices for context management
- When to use custom vs Business Profile
- Organizing and maintaining context

**Time needed**: 8 minutes to read

---

## What Are Custom Context Entries?

**Definition**: Free-text notes (title + description) that provide AI with additional business context not captured in structured Business Profile fields

**Format**:
```
Title: Short summary (5-10 words)
Note: Detailed explanation (1-3 paragraphs)
```

**Purpose**:
- Handle unique client situations
- Document temporary constraints
- Record strategic decisions
- Preserve institutional knowledge

[Screenshot: Custom Context Entry form]
*Simple title + note format for any context*

---

## When to Use Custom Context

### Use custom context when:

**✅ Temporary situations**:
```
Example: "Website redesign Oct 15-30 - pause conversion alerts"
```

**✅ Unique business constraints**:
```
Example: "Client can only handle 40 leads/month due to capacity"
```

**✅ Strategic preferences**:
```
Example: "Client prefers manual bidding for control - no automation suggestions"
```

**✅ Past attempts and failures**:
```
Example: "Tried Display campaigns Q1 2024 - 12% ROAS, don't suggest again"
```

**✅ Client communication preferences**:
```
Example: "Client checks account daily - explanations should be simple, non-technical"
```

**✅ Seasonal considerations**:
```
Example: "Budget triples Nov-Dec for holiday season - plan expansion now"
```

---

### Don't use custom context for:

**❌ Data that belongs in Business Profile**:
```
Bad: Custom note about target CPA
Good: Fill out Target CPA field in Business Profile
```

**❌ Information AI already has**:
```
Bad: "Campaign performance declining"
Good: AI already sees performance data
```

**❌ Frequently changing data**:
```
Bad: "This week's budget is $800"
Good: Use structured budget fields
```

**❌ Instructions for yourself**:
```
Bad: "Remember to check this Friday"
Good: Use external task manager
```

---

## Creating Custom Context Entries

### How to Add Context

**Steps**:
1. Go to Client Details → Context Tab
2. Click "Add Custom Context Entry"
3. Fill out form:
   - Title: Short summary
   - Note: Detailed explanation
4. Click Save

**Visibility**: AI sees all custom context entries in every conversation

---

### Writing Effective Context

**Good title format**:
```
✅ "Website Redesign Timeline"
✅ "Preferred Bidding Strategy"
✅ "Q4 Budget Increase"
✅ "Geographic Expansion Plan"
```

**Bad title format**:
```
❌ "Note 1"
❌ "Important"
❌ "Read this"
❌ "Context"
```

**Good note format**:
- **First sentence**: What AI should know
- **Second sentence**: Why it matters
- **Third sentence**: How to act on it (if applicable)

**Example**:
```
Title: "Seasonal Budget Strategy"

Note: "Client triples budget to $15K/month during Nov-Dec
for holiday shopping season (normal budget is $5K/month).
Any expansion recommendations between Aug-Oct should account
for this planned Q4 scale-up. Don't suggest major structural
changes in Oct that won't work at 3x scale."
```

---

## Common Use Cases & Examples

### Use Case 1: Temporary Technical Issues

**Scenario**: Website under construction, conversions will be weird

**Custom Context**:
```
Title: "Website Migration in Progress"

Note: "Client is migrating to new e-commerce platform Oct 10-20.
Conversion tracking will be unstable during this period. If zero
conversions are detected Oct 10-20, this is expected and not a
tracking failure. Resume normal conversion monitoring after Oct 21.
Expect 3-5 days for tracking to stabilize post-migration."
```

**AI will**:
- Not generate conversion tracking failure alerts Oct 10-20
- Explain zero conversions as expected if asked
- Resume normal monitoring after Oct 21

---

### Use Case 2: Strategic Constraints

**Scenario**: Client has strong preference against certain strategies

**Custom Context**:
```
Title: "Manual Bidding Preference"

Note: "Client is former Google Ads expert and strongly prefers
manual bidding for full control. Has tried Target CPA twice
(2022, 2023) and was unhappy with results both times. Do not
recommend automated bidding strategies. Focus optimization
recommendations on bid adjustments, Quality Score, and keyword
management within manual CPC framework."
```

**AI will**:
- Never suggest Target CPA or automated bidding
- Focus on manual optimization tactics
- Respect client's informed preference

---

### Use Case 3: Capacity Limitations

**Scenario**: Business can't handle unlimited leads

**Custom Context**:
```
Title: "Lead Capacity Limit"

Note: "Client's sales team can only handle 60 qualified leads
per month (current staffing of 2 salespeople). Exceeding this
leads to poor follow-up and wasted leads. If campaigns are
generating >60 leads/month, recommend reducing spend or
increasing lead quality filters, not scaling up. Client plans
to hire 3rd salesperson in Q1 2026, at which point capacity
increases to ~90 leads/month."
```

**AI will**:
- Optimize for lead quality, not volume
- Not suggest scaling if at 60 leads/month
- Consider capacity in all recommendations
- Remember Q1 2026 capacity increase

---

### Use Case 4: Past Failed Experiments

**Scenario**: Tried something, didn't work, don't want to repeat

**Custom Context**:
```
Title: "Display Campaign History"

Note: "Tested Display campaigns extensively Q4 2024 with $2,800
total spend across 3 different approaches: standard Display,
responsive Display ads, and image ads. Best result was 1.8 ROAS
(vs 4.2 on Search). Client decided Display doesn't work for this
B2B service business model. Do not suggest Display campaigns
unless client's business model changes significantly. YouTube
pre-roll was also tested (2.1 ROAS) - similar conclusion."
```

**AI will**:
- Not waste time suggesting Display
- Reference this history if asked about channel expansion
- Understand Display was properly tested, not dismissed prematurely

---

### Use Case 5: Geographic Strategy

**Scenario**: Specific geographic priorities

**Custom Context**:
```
Title: "Geographic Expansion Roadmap"

Note: "Currently serving Texas only. Expansion plan: Add Oklahoma
and Louisiana in Q1 2026, then Arkansas and New Mexico in Q2 2026.
Do not recommend geographic expansion before Q1 2026 - client
needs to hire regional sales reps first. When Q1 2026 approaches,
proactively suggest Oklahoma and Louisiana campaign setup. Client
is NOT interested in Midwest or East Coast expansion."
```

**AI will**:
- Not suggest random geographic expansion
- Proactively suggest OK/LA campaigns in Q1 2026
- Respect expansion timeline and regional focus

---

### Use Case 6: Seasonal Business Patterns

**Scenario**: Business has strong seasonality

**Custom Context**:
```
Title: "Tax Season Demand Pattern"

Note: "Client is tax preparation service with extreme seasonality.
Jan-April: 85% of annual revenue, high demand, budget is $12K/mo.
May-Dec: Low demand, budget drops to $2K/mo for brand maintenance.
During off-season, recommendations should focus on brand awareness
and efficiency, not growth or expansion. Ramp-up planning should
begin in October for upcoming tax season."
```

**AI will**:
- Understand Jan-April vs May-Dec dynamics
- Adjust recommendations by season
- Not suggest expansion in May (low season)
- Suggest tax season prep in October

---

### Use Case 7: Client Communication Style

**Scenario**: Client has specific preferences for reports/communication

**Custom Context**:
```
Title: "Client Communication Preferences"

Note: "Client is non-technical small business owner who gets
overwhelmed by jargon. Keep all explanations simple and focused
on business impact (revenue, costs, customers) rather than metrics
(CTR, Quality Score, impression share). Client checks account 2-3
times per week and asks many questions, so responses should be
concise and action-oriented. Prefers phone calls over email for
anything urgent."
```

**AI will**:
- Use simple language in responses
- Focus on business outcomes, not technical metrics
- Provide concise, action-oriented recommendations
- Consider client's hands-on approach

---

### Use Case 8: Competitive Intelligence

**Scenario**: Specific competitor information that affects strategy

**Custom Context**:
```
Title: "Competitor Tracking"

Note: "Main competitor (ABC Plumbing) launched aggressive Google
Ads campaign in July 2025 with 2-3x our budget. They're bidding
on our brand terms. Our strategy: Defend brand terms at top
position (don't let budget limit brand impression share), but
don't get into bidding war on generic terms where they outspend
us 3:1. Focus our budget on long-tail service-specific keywords
where we can compete effectively."
```

**AI will**:
- Understand competitive dynamics
- Prioritize brand defense
- Focus on long-tail rather than head terms
- Explain strategic decisions in this context

---

## Organizing Custom Context

### Best Practices

**One entry per topic**:
```
✅ Good: 5 entries for 5 distinct topics
❌ Bad: 1 entry covering 5 unrelated topics
```

**Clear, searchable titles**:
```
✅ "Q4 Holiday Budget Increase"
✅ "Website Redesign Oct 2025"
❌ "Important note about client"
❌ "Remember this"
```

**Keep entries current**:
```
Old entry: "Website redesign Oct 10-20" (it's now November)
Action: Delete outdated entry
```

**Date temporary entries**:
```
✅ "Website Redesign Oct 10-20, 2025"
(Clearly temporary, easy to identify for deletion)
```

---

### When to Delete Context

**Delete when**:
- Situation resolved (website live, migration done)
- No longer relevant (past experiments from 2+ years ago)
- Information now in Business Profile (moved target CPA there)
- Strategy changed (no longer avoiding Display)

**Review quarterly**:
- Read all custom context entries
- Delete outdated ones
- Update entries that changed
- Add new entries for new situations

---

## Custom Context vs Business Profile

### Use Business Profile for:
- ✅ Structured data (industry, business type, target CPA)
- ✅ Permanent business characteristics
- ✅ Core goals and targets
- ✅ Quantified metrics

### Use Custom Context for:
- ✅ Temporary situations
- ✅ Strategic nuances
- ✅ Past attempts/failures
- ✅ Unique constraints
- ✅ Anything that doesn't fit structured fields

**Example**:

**Business Profile**:
```
Target CPA: $65
Monthly Budget: $8,500
Business Type: B2B Lead Generation
```

**Custom Context**:
```
Title: "Lead Quality Issues Q3 2025"

Note: "Experienced lead quality drop in Q3 when CPA went below
$55. Leads below $55 CPA tend to be tire-kickers without budget.
Optimal CPA range is $60-70 for qualified leads. Don't push
CPA below $55 even if technically possible."
```

**Together**: AI knows target is $65 (from profile) and why pushing lower than $55 is bad (from custom context)

---

## Advanced: Context for Team Collaboration

### Documenting Decisions

**Use custom context to preserve "why"**:
```
Title: "Why We Don't Use Broad Match"

Note: "Tested broad match keywords extensively in Q2 2024 with
$1,200 spend across 3 campaigns. Search term report showed
85% irrelevant queries despite negative keyword list of 200+
terms. Wasted ~$1,000 before reverting to phrase and exact.
Broad match doesn't work for our niche B2B service. Stick with
phrase and exact only."
```

**Benefit**: New team members understand decisions without repeating experiments

---

### Onboarding New Team Members

**Custom context serves as runbook**:
```
1. Read Business Profile (what/who/goals)
2. Read all Custom Context (why/constraints)
3. Ask AI Chat for summary
4. You're 80% onboarded
```

**Saves**: Hours of knowledge transfer

---

## Tips & Best Practices

### Be Specific with Dates

**Vague**: "Recent experiment failed"
**Specific**: "Tried Shopping campaigns Oct 2024 - ROAS 1.9 (vs target 4.5)"

**Why**: Specific dates help decide when to revisit

---

### Explain the "Why"

**What**: "Don't suggest Display"
**Why**: "Display tested Q4 2024, best result 1.8 ROAS vs 4.2 on Search"

**Why it matters**: AI understands reasoning, can adapt if circumstances change

---

### Update When Situations Change

**Old entry**:
```
"Client can't afford >$5K/month budget"
```

**6 months later, client grows**:
```
Update entry:
"Budget increased to $8K/month as of March 2026. Client open
to further increases if ROAS maintains 4.5+."
```

---

### Use for Experiments

**Track current tests**:
```
Title: "Call-Only Ads Test (Oct 2025)"

Note: "Testing call-only ads in separate campaign with $500/month
budget. Test runs Oct 1-31. Success criteria: <$60 CPA for phone
calls, minimum 30 calls. If successful, expand to $1,500/mo in
Nov. If unsuccessful, pause and reallocate to search."
```

**AI can**:
- Reference experiment if you ask about performance
- Remind you of success criteria
- Suggest next steps based on results

---

## Common Questions

**Q: How many custom context entries should I have?**
A: Typically 2-6 per client. If you have 15+, some are probably outdated.

**Q: Can I edit context entries after creating them?**
A: Yes. Edit or delete anytime from Context tab.

**Q: Does AI remember deleted context?**
A: No. Once deleted, AI no longer sees it.

**Q: Should I document every optimization I make?**
A: No. AI tracks optimizations via alert accept/decline. Use custom context for unique situations only.

**Q: Can I export custom context?**
A: Yes, as part of client data export.

**Q: What if custom context conflicts with Business Profile?**
A: Custom context takes precedence (it's more specific). But ideally, keep them aligned.

---

## Troubleshooting

### Problem: AI ignores custom context

**Diagnostics**:
1. Verify context entry was saved
2. Check if AI can see it (ask "What custom context do you have?")
3. Ensure context is clear and specific

**Common causes**:
- Context too vague ("Be careful with budget")
- Context contradicts structured data
- Context buried in long paragraph

**Solution**: Rewrite for clarity, put key points in first sentence

---

### Problem: Too much context, AI overwhelmed

**Symptom**: AI responses become generic or miss key points

**Cause**: 10+ context entries creating noise

**Solution**:
1. Delete outdated entries
2. Consolidate related entries
3. Keep only essential 3-5 entries

---

### Problem: Context becoming outdated

**Symptom**: Entries from 2+ years ago still listed

**Solution**:
- Quarterly review of all context
- Delete anything >6 months old unless still relevant
- Add dates to temporary entries

---

## Real-World Examples

### Example 1: Agency Managing Multiple Clients

```
Title: "Reporting Schedule"

Note: "This client receives detailed monthly reports by email
(sent 3rd business day of month) plus brief weekly check-ins
every Monday at 10 AM CT via phone. Client prefers proactive
communication about issues - call immediately if CPA exceeds
$80 or budget exhausts early. Do not wait for scheduled check-in
to raise urgent issues."
```

---

### Example 2: Startup with Changing Strategy

```
Title: "Product Pivot Q4 2025"

Note: "Client is pivoting from B2C direct sales to B2B SaaS model
effective November 1, 2025. Current campaigns (Shopping, Display)
will be paused Oct 31. New Search campaigns launching Nov 1
targeting enterprise decision-makers. Do not suggest optimizations
for current B2C campaigns after Oct 15 - focus is on new B2B
strategy planning."
```

---

### Example 3: Client with Strong Opinions

```
Title: "Client Preferences and History"

Note: "Client is very data-driven and questions all recommendations.
Always provide specific numbers, comparisons, and expected outcomes.
Client previously worked with another agency (2022-2024) that
promised 'guaranteed ROI' and underdelivered - now skeptical of
overpromising. Underpromise and overdeliver. Client appreciates
transparency about risks and limitations."
```

---

## Next Steps

Master AI context with these guides:

- **[AI Context Explained](/docs/ai-context-explained)** - How all context works together
- **[Business Profile Setup](/docs/business-profile-setup)** - Structured context fields
- **[AI Chat Getting Started](/docs/ai-chat-getting-started)** - Using AI with context
- **[Smart Alerts](/docs/smart-alerts-intro)** - Context improves alert relevance

---

**Add your first custom context entry** for any unique client situation

**Review quarterly** to keep context current and relevant

**Use strategically** - quality over quantity

**Last Updated**: October 4, 2025
