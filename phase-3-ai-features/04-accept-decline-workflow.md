---
title: Accept/Decline Workflow
description: Master the alert action workflow - when to accept, when to decline, how feedback trains AI, and tracking alert outcomes
category: ai-features
phase: 3
order: 04
---

# Accept/Decline Workflow

Every alert requires a decision: accept the recommendation, decline it, or mark as acknowledged. Your choices train the AI to generate better alerts over time and create a history of optimizations made. This guide shows you how to evaluate alerts and choose the right action.

---

## What You'll Learn

- The 3 alert actions (Accept, Decline, Acknowledge)
- When to use each action
- How feedback trains AI
- What happens after you accept/decline
- Tracking alert outcomes
- Best practices for alert decisions
- Common decision scenarios

**Time needed**: 8 minutes to read

---

## The 3 Alert Actions

### Quick Reference

**Accept** ✅
- "I agree with this recommendation"
- "I will/did implement this fix"
- Marks alert as resolved
- Trains AI this was valuable

**Decline** ❌
- "This recommendation doesn't apply"
- "I disagree with severity/analysis"
- Dismisses alert
- Trains AI this wasn't valuable

**Acknowledge** 👁️
- "I've read this, no action needed yet"
- Keeps alert active
- No AI feedback
- For tracking only

[Screenshot: Alert action buttons]
*Three buttons for every alert decision*

---

## Accept Action ✅

### When to Accept

**Accept an alert when**:
- You agree with the recommendation
- You plan to implement the suggested fix
- You already implemented the fix
- The analysis is accurate
- Severity rating is appropriate

**Examples of when to accept**:
```
Alert: "Daily budget exhausted by 2 PM"
Your thought: "Yes, I'll increase budget to $150"
Action: Accept ✅
```

```
Alert: "15 ads disapproved for policy violation"
Your thought: "True, I just fixed them in Google Ads"
Action: Accept ✅
```

```
Alert: "CTR declined 22% in past 14 days"
Your thought: "Accurate, I'll refresh ad copy"
Action: Accept ✅
```

---

### What Happens When You Accept

**Immediate effects**:
1. Alert marked as "Resolved"
2. Removed from active alerts list
3. Added to Alert History
4. Timestamp recorded
5. Your user ID associated with resolution

**AI learning**:
- AI notes this alert type was valuable to you
- Similar alerts get slightly higher priority in future
- Alert category becomes more prominent
- Severity calibration improves

**Tracking**:
- Alert outcome recorded
- Implementation date logged
- Can reference in client reports
- Builds optimization history

[Screenshot: Accept confirmation message]
*Confirmation shows alert was resolved*

---

### Good Reasons to Accept

**1. You'll implement the fix**
```
Alert: "Add these 8 search terms as negative keywords"
You: Planning to add them today
Action: Accept ✅
```

**2. You already fixed it**
```
Alert: "3 ads disapproved"
You: Already created replacement ads in Google Ads
Action: Accept ✅
```

**3. The insight is valuable**
```
Alert: "Texas converts 45% better than other states"
You: Great insight, will increase Texas bids
Action: Accept ✅
```

**4. Severity is appropriate**
```
Alert: Severity 8 - "Budget exhausted by 2 PM daily"
You: Agree this is high priority
Action: Accept ✅
```

**5. Recommendation aligns with strategy**
```
Alert: "Switch to Target CPA bidding"
You: Was already considering this
Action: Accept ✅
```

---

## Decline Action ❌

### When to Decline

**Decline an alert when**:
- Recommendation doesn't fit your strategy
- Alert analysis is inaccurate
- Severity is wrong (too high or too low)
- Recommendation is not actionable
- Context is missing that changes meaning

**Examples of when to decline**:
```
Alert: "Campaign spending only 40% of budget"
Your thought: "Intentional - testing phase"
Action: Decline ❌
```

```
Alert: Severity 8 - "CPC increased 15%"
Your thought: "15% isn't severity 8, more like 5"
Action: Decline ❌
```

```
Alert: "Switch to automated bidding"
Your thought: "Client prefers manual control"
Action: Decline ❌
```

---

### What Happens When You Decline

**Immediate effects**:
1. Alert dismissed
2. Removed from active alerts
3. Added to Alert History as "Declined"
4. Timestamp and reason recorded

**AI learning**:
- AI notes this alert type wasn't valuable
- Similar alerts get lower priority in future
- Severity calibration adjusts downward
- Alert category becomes less prominent
- Recommendation style may change

**Important**: Declining helps AI learn your preferences

[Screenshot: Decline confirmation with optional feedback]
*Optional feedback helps AI learn faster*

---

### Good Reasons to Decline

**1. Doesn't match strategy**
```
Alert: "Increase budget from $500 to $800"
You: Client capped budget at $500 max
Action: Decline ❌
```

**2. Missing context**
```
Alert: "Zero conversions in past 5 days"
You: We intentionally paused campaigns for rebrand
Action: Decline ❌
```

**3. Severity incorrect**
```
Alert: Severity 9 - "5 keywords have QS of 6"
You: QS of 6 is fine, not severity 9
Action: Decline ❌
Feedback: "Severity too high for this issue"
```

**4. Already addressed**
```
Alert: "Add sitelink extensions"
You: Sitelinks were added last week, AI hasn't synced yet
Action: Decline ❌
Feedback: "Already implemented"
```

**5. Recommendation not actionable**
```
Alert: "Consider testing video ads"
You: Client has no video assets
Action: Decline ❌
Feedback: "Not feasible for this client"
```

---

### Providing Feedback on Decline

**Optional but recommended**:

When you decline, you can add a note explaining why:

**Feedback options**:
- "Already implemented"
- "Doesn't match strategy"
- "Severity too high"
- "Severity too low"
- "Inaccurate analysis"
- "Not actionable"
- "Missing context"
- Custom note (free text)

**Why feedback matters**:
- AI learns faster with specific reasons
- Helps calibrate future alerts
- Improves relevance for your use case

[Screenshot: Decline feedback form]
*Help AI learn by explaining why you declined*

---

## Acknowledge Action 👁️

### When to Acknowledge

**Acknowledge an alert when**:
- You've read it but need time to decide
- Want to track it but not act yet
- Need to discuss with client first
- Gathering more info before deciding
- Will address later this week

**Examples**:
```
Alert: "Consider expanding to shopping campaigns"
Your thought: "Interesting, need to research first"
Action: Acknowledge 👁️
```

```
Alert: "California has 2x better conversion rate"
Your thought: "Want to verify with client before budget shift"
Action: Acknowledge 👁️
```

---

### What Happens When You Acknowledge

**Immediate effects**:
1. Alert stays active
2. Marked as "Acknowledged" with badge
3. Remains in your active alerts list
4. No AI feedback sent

**Use case**: Temporary action while you gather info or wait

**Tip**: Come back and Accept or Decline within a few days

[Screenshot: Acknowledged alert with badge]
*Acknowledged alerts stay visible until final decision*

---

## Decision Process

### Step-by-Step Workflow

**For every alert**:

**Step 1: Read Full Alert**
- Don't judge on title alone
- Read detailed explanation
- Review recommended action
- Check affected campaigns/keywords

**Step 2: Verify Analysis**
```
Questions to ask:
- Is the data accurate?
- Does the trend make sense?
- Is severity appropriate?
- Am I missing context?
```

**Step 3: Check Actionability**
```
Can I actually implement this?
- Do I have authority?
- Do I have resources?
- Does it fit strategy?
- Is timing right?
```

**Step 4: Make Decision**
```
Will implement: Accept ✅
Won't implement: Decline ❌
Need more time: Acknowledge 👁️
```

**Step 5: Take Action (if Accept)**
```
- Go to Google Ads
- Implement recommendation
- Document what you did
- Monitor results
```

[Screenshot: Decision flowchart]
*Follow this flow for every alert*

---

## Common Decision Scenarios

### Scenario 1: Budget Exhaustion Alert

**Alert**:
```
Severity: 8/10
Category: Budget Issues
Title: Daily budget exhausted by 1 PM

Recommended Action: Increase budget from $80 to $120
```

**Decision tree**:
```
Can you increase budget?
├─ Yes, and ROI is good → Accept ✅, implement
├─ No, budget locked → Decline ❌ "Budget limit from client"
└─ Maybe, need client approval → Acknowledge 👁️, ask client
```

---

### Scenario 2: Quality Score Alert

**Alert**:
```
Severity: 7/10
Category: Quality Score Problems
Title: 12 keywords have QS of 3-4

Recommended Action: Create dedicated ad groups with
keyword-specific ads
```

**Decision tree**:
```
Do you have time to restructure?
├─ Yes, worth the effort → Accept ✅, schedule work
├─ No, not high enough priority → Decline ❌ "Lower priority"
└─ Maybe, need to see full list → Acknowledge 👁️, review keywords
```

---

### Scenario 3: Ad Copy Refresh

**Alert**:
```
Severity: 6/10
Category: Performance Problems
Title: CTR declined 18% - ad fatigue likely

Recommended Action: Refresh ad copy with new headlines
```

**Decision tree**:
```
Is CTR decline real?
├─ Yes, and significant → Accept ✅, write new ads
├─ No, seasonal expected → Decline ❌ "Seasonal variation"
└─ Not sure, check Google Ads → Acknowledge 👁️, verify data
```

---

### Scenario 4: Strategic Recommendation

**Alert**:
```
Severity: 5/10
Category: Strategy Recommendations
Title: High-performing search terms not in keyword list

Recommended Action: Add these 6 terms as exact match keywords
```

**Decision tree**:
```
Are these terms truly valuable?
├─ Yes, great finds → Accept ✅, add to keyword list
├─ No, low volume / irrelevant → Decline ❌ "Not valuable"
└─ Some yes, some no → Acknowledge 👁️, review each individually
```

---

## Tracking Alert Outcomes

### Alert History

**Location**: Client Details → AI Alerts Tab → Alert History

**What it shows**:
- All past alerts (90 days)
- Your accept/decline decisions
- Date of each decision
- Current status of issue
- Performance impact (if measurable)

**Use cases**:
- Show client improvements made
- Track optimization progress
- Review past recommendations
- Identify recurring issues
- Build case studies

[Screenshot: Alert History view with outcomes]
*Complete record of all alerts and decisions*

---

### Performance Tracking

**For accepted alerts**, track:

**Before implementation**:
- Baseline metrics (CTR, CPC, conv rate, etc.)
- Date issue identified
- Severity rating

**After implementation**:
- New metrics after fix
- Date implemented
- Measurable improvement

**Example**:
```
Alert: "Increase Texas bid adjustment to +60%"
Accepted: Oct 15, 2025

Before (Oct 1-14):
- Texas conversions: 45
- Texas CPA: $32
- Texas spend: $1,440

After (Oct 16-29):
- Texas conversions: 68 (+51%)
- Texas CPA: $29 (-9%)
- Texas spend: $1,972 (+37%)

Result: Alert recommendation improved performance ✅
```

---

## AI Learning from Your Feedback

### How Feedback Improves Alerts

**Short-term learning** (your account):
- Accepted categories get more weight
- Declined categories get less weight
- Severity calibrates to your preferences
- Recommendation style adjusts

**Example**:
```
You Accept: 8 budget alerts
You Decline: 1 budget alert

AI learns: Budget alerts are valuable to you
Future: More budget alerts, higher severity
```

**Long-term learning** (all users):
- Patterns across all users improve model
- Common declines reduce that alert type
- Common accepts strengthen that pattern
- Alert quality improves system-wide

**Important**: Your feedback is valuable data

---

### Feedback Privacy

**Your decisions are private**:
- Only affect your account's AI
- Not shared with other users
- Not used to identify you
- Helps your AI get smarter

**Aggregate learning**:
- Your feedback contributes to overall model
- But always anonymized
- Improves platform for everyone

---

## Best Practices

### Be Honest with Feedback

**Don't accept just to clear alerts**:
- AI needs honest feedback
- False accepts = worse future alerts
- Hurt long-term alert quality

**Don't decline everything**:
- If you decline 90% of alerts, signal is lost
- AI can't learn what you actually want
- Alerts become less useful

**Ideal acceptance rate**: 40-60%

---

### Provide Reasons When Declining

**Helps AI learn faster**:
```
Decline with "Doesn't match strategy" →
AI learns to consider business model

Decline with "Severity too high" →
AI calibrates severity downward

Decline with "Already implemented" →
AI syncs tracking better
```

**1-2 sentences is enough** - no essay needed

---

### Act on Accepted Alerts

**Don't accept without implementing**:
- Accept = commitment to action
- If you won't do it, decline it
- Builds trust in your decisions

**Track implementation**:
- Note what you changed
- Monitor impact
- Report to client

---

### Review Weekly

**Every Monday**:
1. Check new alerts (5 min)
2. Accept/Decline high severity (10 min)
3. Acknowledge medium severity (2 min)
4. Revisit acknowledged alerts (3 min)

**Total time**: 20 minutes per client per week

---

### Batch Similar Alerts

**Don't decide one by one if similar**:

**Example**:
```
You have 5 alerts about low QS keywords

Approach:
1. Read all 5 alerts
2. Decide on QS improvement strategy
3. Accept all 5 at once
4. Batch-fix QS issues together
```

**Efficiency**: Faster decisions, consistent action

---

## Common Questions

**Q: What if I accept but don't implement?**
A: Alert is resolved in system but your account doesn't improve. Better to decline honestly.

**Q: Can I undo an accept/decline decision?**
A: Not currently. Be thoughtful before clicking. Future versions may allow undo.

**Q: How long do I have to decide?**
A: No time limit. Alerts stay active until you accept/decline. Acknowledged alerts persist indefinitely.

**Q: Does declining an alert hurt my account?**
A: No. Declining teaches AI what's not relevant to you. It improves future alerts.

**Q: Should I decline alerts I can't afford to implement?**
A: Yes. Decline with feedback "Budget constraints" or "Not feasible". AI learns about your limitations.

**Q: What if alert is partly right?**
A: Accept if you'll implement the core recommendation, even if you disagree with minor points.

**Q: Can I accept an alert without taking action immediately?**
A: Yes, but not recommended. Better to Acknowledge if you need time, then Accept when you implement.

---

## Troubleshooting

### Problem: Too many low-priority alerts

**Cause**: AI hasn't learned your preferences yet

**Solution**:
1. Decline low-priority alerts consistently
2. Add feedback: "Too low priority"
3. Accept only high-impact alerts
4. AI will adjust within 2-4 weeks

---

### Problem: Missing alerts on important issues

**Cause**: You declined similar alerts previously

**Solution**:
1. Accept more alerts in that category
2. Provide feedback when declining
3. Force Full Analysis to refresh
4. AI will increase category priority

---

### Problem: Severity ratings seem off

**Cause**: AI doesn't know your business goals

**Solution**:
1. Fill out Business Profile (target CPA, budget, goals)
2. Decline alerts with "Severity too high/low" feedback
3. Accept alerts with appropriate severity
4. AI calibrates to your targets

---

## Next Steps

Optimize alert usage with these guides:

- **[Smart Alerts Intro](/docs/smart-alerts-intro)** - How alerts work overall
- **[Alert Severity](/docs/alert-severity-guide)** - Understanding the 1-10 scale
- **[Alert Categories](/docs/alert-categories)** - All 8 categories explained
- **[AI Chat](/docs/ai-chat-getting-started)** - Ask AI about specific alerts

---

**Review your active alerts** and make accept/decline decisions

**Check Alert History** to see your optimization track record

**Provide feedback when declining** to train AI faster

**Last Updated**: October 4, 2025
