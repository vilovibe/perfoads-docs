---
title: AI Chat Getting Started
description: Learn how to use AI Chat powered by Claude Sonnet 4 - ask questions, get insights, analyze performance, and optimize campaigns with AI assistance
category: ai-features
phase: 3
order: 05
---

# AI Chat Getting Started

AI Chat gives you a conversational interface with Claude Sonnet 4, fully aware of your client's Google Ads data, business profile, and optimization history. Ask questions, get analysis, and receive strategic recommendations - all in natural language. This guide shows you how to start conversations and use AI Chat effectively.

---

## What You'll Learn

- What AI Chat can do
- How to start a conversation
- Using Quick Action templates
- Understanding streaming responses
- What data AI can see (full context list)
- Conversation management
- Export and sharing conversations
- Cost optimization features

**Time needed**: 10 minutes to read

---

## What Is AI Chat?

**Definition**: Real-time conversational AI assistant powered by Claude Sonnet 4, trained on your client's Google Ads performance data, business profile, and optimization history.

**What it does**:
- Answers questions about campaigns
- Analyzes performance trends
- Suggests optimizations
- Explains metrics
- Provides strategic guidance
- Troubleshoots issues
- Generates reports

**What makes it special**:
- Full access to your client data
- Context-aware responses
- Streaming (real-time) answers
- Conversation memory
- Auto-summarization for efficiency

[Screenshot: AI Chat interface]
*Clean conversation interface with streaming responses*

---

## Where to Access AI Chat

### Per-Client Chat

**Location**: Client Details → AI Chat Tab

**Context**: AI knows about THIS CLIENT only

**Use when**:
- Asking about specific campaign performance
- Client-specific optimization questions
- Analyzing this client's data
- Preparing client reports

**Example questions**:
- "Why did CPC increase last week?"
- "Which campaigns are underperforming?"
- "Summarize this month's performance"

---

### Global AI Chat

**Location**: Main Navigation → AI Chat

**Context**: AI can discuss ANY client or general topics

**Use when**:
- Comparing multiple clients
- General Google Ads questions
- Platform how-to questions
- Strategy discussions across portfolio

**Example questions**:
- "Compare performance of ACME Corp vs Bakery Inc"
- "How do I set up Smart Bidding?"
- "Best practices for Quality Score improvement"

---

## Starting Your First Conversation

### Step 1: Navigate to AI Chat

**Per-client**:
1. Open client details page
2. Click "AI Chat" tab
3. See conversation interface

**Global**:
1. Click "AI Chat" in main navigation
2. See conversation interface

---

### Step 2: Type Your Question

**Good first questions**:
```
"What are the top 3 issues in this account?"
"Summarize this month's performance"
"Why is my CPC increasing?"
"Which campaigns need attention?"
"What optimizations should I prioritize?"
```

**Tips for good questions**:
- Be specific about time frame ("last week", "this month")
- Ask one thing at a time
- Provide context when needed
- Use natural language (no special syntax)

---

### Step 3: Watch Response Stream

**How streaming works**:
- AI starts responding immediately
- Text appears word-by-word in real-time
- No waiting for complete answer
- Can stop generation anytime

**Benefits**:
- See AI thinking process
- Faster perceived response time
- Stop if going wrong direction

[Screenshot: Streaming response in progress]
*Responses appear in real-time as AI generates them*

---

### Step 4: Continue Conversation

**AI remembers context**:
```
You: "Which campaign spent the most last week?"
AI: "Brand Campaign spent $1,450 last week..."

You: "What was its conversion rate?"
AI: "Brand Campaign had a 4.2% conversion rate..."
     (AI knows you're still asking about Brand Campaign)
```

**Conversation memory**:
- Remembers last 10 messages
- Auto-summarizes older messages to save tokens
- Maintains context throughout session

---

## Quick Action Templates

### What Are Templates?

**Pre-written prompts** for common tasks

**Benefits**:
- Faster than typing
- Proven to work well
- Learn good question patterns
- Consistent results

**Location**: Above chat input, as clickable buttons

[Screenshot: Quick Action template buttons]
*Click templates for instant questions*

---

### Available Templates

**Performance Summary**
```
Template: "Summarize this month's performance"

AI Response includes:
- Total spend, clicks, conversions
- Key metrics (CTR, CPC, conv rate)
- Month-over-month comparison
- Top performing campaigns
- Issues detected
```

**Top Issues**
```
Template: "What are the top 3 issues to fix?"

AI Response includes:
- 3 most critical problems
- Severity and impact
- Recommended fixes
- Priority order
```

**Budget Analysis**
```
Template: "Analyze budget pacing"

AI Response includes:
- Monthly spend vs budget
- Daily burn rate
- Projected month-end spend
- Budget utilization percentage
- Recommendations for adjustment
```

**Optimization Priorities**
```
Template: "What should I optimize first?"

AI Response includes:
- Prioritized optimization list
- Expected impact of each
- Effort required
- Quick wins highlighted
```

**Campaign Comparison**
```
Template: "Compare campaign performance"

AI Response includes:
- Side-by-side metrics
- Best and worst performers
- Efficiency analysis
- Budget reallocation suggestions
```

**Keyword Analysis**
```
Template: "Find wasted keyword spend"

AI Response includes:
- Keywords with high spend, zero conversions
- Recommended negative keywords
- Estimated monthly savings
```

---

### Custom Templates (Coming Soon)

**Planned feature**:
- Create your own templates
- Save frequently asked questions
- Share templates with team
- Import community templates

---

## Understanding AI's Context

### What Data AI Can See

**Complete context** (per-client chat only):

**1. Campaign Data (last 30 days)**:
- All campaigns (name, type, status, budget)
- Performance metrics (clicks, cost, impressions, conversions)
- CTR, CPC, conversion rate, cost per conversion
- Impression share data
- Quality Scores

**2. Ad Group Data**:
- All ad groups
- Ad group performance
- Ad group structure

**3. Keyword Data**:
- All keywords
- Match types
- Quality Scores
- Performance by keyword
- Search term data

**4. Ad Copy**:
- All ads (text, responsive search ads)
- Ad status (approved, disapproved)
- Ad performance

**5. Conversion Data**:
- Conversion actions
- Conversion counts
- Conversion values
- Attribution data

**6. Geographic Data**:
- Performance by location
- Top states/cities
- Location bid adjustments

**7. Device Data**:
- Performance by device (mobile, desktop, tablet)
- Device bid adjustments

**8. Time Data**:
- Performance by day of week
- Performance by hour
- Ad schedule settings

**9. Budget Tracking**:
- Daily spend
- Monthly spend
- Budget pacing
- Budget vs target

**10. Business Profile**:
- Industry
- Business type
- Target audience
- Business goals
- Target CPA/ROAS
- Monthly budget
- Website URL

**11. Optimization History**:
- Past changes made
- Alert accept/decline history
- Conversation summaries

**12. Active Alerts**:
- All current AI alerts
- Severity levels
- Alert categories

[Screenshot: Context badge showing "12 data sources"]
*AI has access to comprehensive account data*

---

### What AI Cannot See

**Data NOT available**:
- Other clients (in per-client chat)
- Google Ads account settings (only data)
- Billing information
- User passwords/credentials
- Google Analytics data (not integrated)
- Email content
- Real-time data (last sync date shown)

**Why it matters**: AI works from synced data, not live Google Ads

---

## Conversation Features

### Stop Generation

**When to use**:
- AI going in wrong direction
- Answer is too long
- You got what you needed early
- Want to rephrase question

**How**:
- Click "Stop Generating" button while AI is typing
- Response stops immediately
- Conversation saved at that point

---

### Auto-Summarization

**What it is**: AI automatically summarizes older conversations to save tokens and reduce cost

**How it works**:
```
After 10 messages:
- AI summarizes first 5 messages into 1 paragraph
- Keeps last 5 messages full
- Maintains key context
- Reduces token usage by 60-80%
```

**Benefits**:
- Longer conversations possible
- Lower costs
- Maintains context
- Automatic (no user action needed)

**Example**:
```
Original 5 messages (2,500 tokens):
You: "What's my top campaign?"
AI: "Your top campaign is..."
You: "What's its CTR?"
AI: "The CTR is..."
You: "How can I improve it?"
AI: "To improve CTR..."

Summarized (500 tokens):
"User asked about top campaign (Brand Campaign), its CTR
(4.2%), and how to improve it. I recommended refreshing
ad copy and testing new headlines."

Savings: 2,000 tokens (80% reduction)
```

[Screenshot: Auto-summarization notification]
*Notification when conversation is auto-summarized*

---

### Conversation Management

**Viewing conversations**:
- See all past conversations
- Filter by date
- Search conversation content

**Continuing conversations**:
- Resume previous conversation
- AI remembers context
- Add to existing thread

**Starting fresh**:
- Click "New Conversation"
- Clears context
- Fresh start for new topic

---

## Exporting Conversations

### Export Options

**Formats**:
- Markdown (.md)
- Plain text (.txt)
- PDF (formatted)

**What's included**:
- Full conversation
- Timestamps
- Client name
- Date range of data discussed
- Auto-summary (if applied)

**Use cases**:
- Share with client
- Add to reports
- Document optimization decisions
- Training materials

---

### How to Export

**Steps**:
1. Open conversation
2. Click "Export" button
3. Choose format
4. File downloads

**File naming**:
```
{ClientName}_AIChat_{Date}.{format}

Example:
ACME_Corp_AIChat_2025-10-04.pdf
```

[Screenshot: Export dialog with format options]
*Export for client reports or documentation*

---

## Cost Optimization

### Token Usage

**What are tokens**: Units of text AI processes

**Typical conversation**:
- Your message: 50-200 tokens
- AI response: 300-800 tokens
- Total per exchange: 350-1,000 tokens

**Cost** (approximate):
- Claude Sonnet 4: $3 per 1M input tokens, $15 per 1M output tokens
- Average conversation: $0.005-$0.015
- 100 conversations: $0.50-$1.50

**Auto-summarization saves 60-80% on long conversations**

---

### Best Practices for Efficiency

**1. Be specific**:
```
❌ Bad: "Tell me about my account"
   (AI generates long, generic response = 1,500 tokens)

✅ Good: "What was my CPC last week vs this week?"
   (AI gives focused answer = 400 tokens)
```

**2. One question at a time**:
```
❌ Bad: "Analyze all campaigns, compare to last month,
         find issues, and recommend fixes"
   (AI generates massive response = 3,000 tokens)

✅ Good: "Compare this month vs last month performance"
   (Follow up with specific questions)
```

**3. Use templates**:
- Pre-optimized prompts
- Consistent, efficient responses
- No trial-and-error phrasing

**4. Stop if unnecessary**:
- Don't let AI generate 500 words if you got answer in first 100
- Use "Stop Generating"

---

## Example Conversations

### Example 1: Performance Analysis

```
You: "Why did my CPC increase 30% last week?"

AI: "Your CPC increased from $4.20 to $5.46 (30% jump)
over the past 7 days. Here's the analysis:

Primary Causes:
1. Quality Score dropped on 8 high-volume keywords from
   7-8 to 4-5 (accounts for ~60% of the increase)
2. Increased competition in Brand Campaign (Auction
   Insights shows 2 new competitors)
3. Shift to mobile traffic (mobile has 40% higher CPC)

Recommended Actions:
1. Improve Quality Score by updating ad relevance
2. Add new ad variations to compete with new entrants
3. Consider mobile bid adjustment of -15%

Would you like me to break down any of these in detail?"
```

---

### Example 2: Optimization Guidance

```
You: "What should I optimize first?"

AI: "Based on your account data, here are the top 3
optimizations with highest impact:

1. Fix Budget Exhaustion (Estimated impact: +$1,200/mo revenue)
   - Brand Campaign exhausts budget by 2 PM daily
   - Missing 45% of daily conversion opportunities
   - Action: Increase budget from $100 to $145/day

2. Add Negative Keywords (Estimated savings: $650/mo)
   - 23 search terms spent $650 with 0 conversions
   - All are informational queries, not buyer intent
   - Action: Add provided list as negative keywords

3. Improve Quality Score (Estimated savings: $420/mo)
   - 15 keywords dropped from QS 7 to QS 4
   - Causing 65% CPC increase on these keywords
   - Action: Refresh ad copy to improve relevance

Would you like the detailed fix steps for any of these?"
```

---

### Example 3: Monthly Summary

```
You: "Summarize this month's performance"

AI: "October 2025 Performance Summary for ACME Corp:

Overall Metrics:
- Spend: $4,250 (85% of $5,000 budget)
- Clicks: 1,840
- Conversions: 92
- Revenue: $18,400

Key Performance Indicators:
- CTR: 3.2% (↓ 0.3% vs Sept)
- CPC: $2.31 (↑ 15% vs Sept)
- Conversion Rate: 5.0% (↑ 0.4% vs Sept)
- CPA: $46.20 (↑ 12% vs Sept)
- ROAS: 4.3 (↓ 0.4 vs Sept)

Top Campaigns:
1. Brand Campaign: 45 conversions, $32 CPA
2. Non-Brand: 28 conversions, $51 CPA
3. Competitor: 19 conversions, $62 CPA

Issues Detected:
- CPC increasing across all campaigns
- Budget underspend (15% under target)

Recommendations:
- Address CPC increase through QS improvement
- Increase budgets to capture full opportunity

Would you like to drill into any specific area?"
```

---

## Tips & Best Practices

### Ask Follow-Up Questions

**Don't stop at first answer**:
```
AI: "Your CTR is 3.2%"
You: "Is that good?"
AI: "3.2% is slightly below industry average..."
You: "How do I improve it?"
AI: "To improve CTR..."
```

**Conversation flow is powerful**

---

### Provide Time Frames

**Be specific about dates**:
```
❌ Vague: "How's my performance?"
✅ Specific: "How was my performance last week vs this week?"

❌ Vague: "Is my CPC high?"
✅ Specific: "What was my CPC in September vs October?"
```

---

### Use for Reporting

**Generate client reports**:
```
You: "Create a summary I can send to my client about this month"

AI: (Generates client-friendly summary)

You: "Export this as PDF"
```

---

### Ask "Why" and "How"

**Go deeper**:
```
AI: "Your conversion rate dropped"
You: "Why did it drop?"
AI: "Likely due to landing page change..."
You: "How do I fix that?"
AI: "Recommend A/B testing..."
```

---

### Validate AI Responses

**AI is smart but not perfect**:
- Double-check metrics in Google Ads
- Verify AI's data is current (check last sync date)
- Test recommendations on small scale first
- AI uses synced data, not real-time

---

## Common Questions

**Q: Is my conversation private?**
A: Yes. Only you can see your conversations. Not shared with other users.

**Q: How often is data updated?**
A: AI uses data from last Smart Sync. Check last sync date in client details.

**Q: Can AI make changes to my Google Ads account?**
A: No. AI can only analyze and recommend. You implement changes in Google Ads.

**Q: Does AI remember conversations across sessions?**
A: Yes. Return to a conversation and AI remembers context.

**Q: Can AI see my other clients (in per-client chat)?**
A: No. Per-client chat is sandboxed to that client only.

**Q: How much does AI Chat cost?**
A: Included in platform. Token costs are minimal (~$0.01 per conversation average).

**Q: Can I delete conversations?**
A: Yes. Click "Delete" on any conversation. Permanent deletion.

---

## Troubleshooting

### Problem: AI gives inaccurate data

**Diagnostics**:
1. Check last sync date
2. Verify data in Google Ads directly
3. Compare AI's numbers to dashboard

**Solution**:
- Run Smart Sync to refresh data
- Ask AI about specific date range
- Report if data seems consistently wrong

---

### Problem: AI response is too generic

**Cause**: Question too broad

**Solution**:
```
Instead of: "Optimize my account"
Try: "What are top 3 wasted keyword spend opportunities?"
```

Be specific for specific answers

---

### Problem: Conversation too long, losing context

**Symptom**: AI forgetting earlier context

**Solution**:
- Start new conversation for new topic
- Auto-summarization helps but has limits
- Break complex topics into separate conversations

---

## Next Steps

Master AI Chat with these guides:

- **[AI Chat Templates](06-ai-chat-templates.html)** - All templates explained
- **[AI Context Explained](07-ai-context-explained.html)** - What data AI sees
- **[Business Profile Setup](08-business-profile-setup.html)** - Give AI more context
- **[Smart Alerts](01-smart-alerts-intro.html)** - AI's proactive insights

---

**Start your first conversation** - ask "Summarize this month's performance"

**Try Quick Action templates** for common questions


**Last Updated**: October 4, 2025
