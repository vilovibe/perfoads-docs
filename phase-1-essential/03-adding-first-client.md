---
title: Adding Your First Client
description: Complete walkthrough for adding and configuring a client in PerfoAds, including OAuth setup, account selection, and initial sync
category: getting-started
phase: 1
order: 03
---

# Adding Your First Client

This guide walks you through every step of adding a client to PerfoAds. You'll connect your Google Ads account, choose which accounts to manage, set up client details, and run your first sync. By the end, you'll have a complete client profile with live data.

---

## What You'll Learn

- How to connect Google Ads accounts (direct or via MCC)
- Choosing the right account type for your setup
- Filling in client business profile for better AI insights
- Running your first data sync
- Understanding what happens during sync

**Time needed**: 10-15 minutes per client

---

## Before You Start

### Access Requirements

You need one of these:

**Option 1: Direct Account Access**
- Google account with admin or standard access to the Google Ads account
- The account should be active with running campaigns

**Option 2: MCC (Manager) Account Access**
- Access to a Google Ads Manager account (MCC)
- The client account linked to your MCC
- Manager account credentials

### What to Have Ready

- **Client business name** - How you'll identify them in the system
- **Website URL** - Their business website (optional but helpful)
- **Monthly budget** - Approximate ad spend per month
- **Business goals** - What they're trying to achieve (optional but improves AI insights)

[Screenshot: Checklist of items to prepare before adding client]
*Having this info ready makes setup faster and more complete*

---

## Understanding Account Types

Before you start, it helps to know which type of access you have:

### Direct Access Accounts

**What it is**: You log in directly to a single Google Ads account.

**How it works**:
- One Google account = one Ads account
- You see one account in the account selector
- Best for: Freelancers or small agencies managing 1-5 accounts

**Example**: You manage ads for a local bakery. You log in with the bakery's Google account to access their ads.

### MCC (Manager Customer Center) Access

**What it is**: You manage multiple Google Ads accounts through one master account.

**How it works**:
- One Google account = access to many client accounts
- You see all linked accounts in the account selector
- Best for: Agencies managing 5+ client accounts

**Example**: Your agency has 20 clients. You log into your agency MCC account and see all 20 client accounts.

[Screenshot: Account selector showing MCC with multiple client accounts]
*MCC users see all linked client accounts in one list*

**Not sure which you have?** Log into Google Ads. If you see multiple accounts in a dropdown, you have MCC access.

---

## Step 1: Start the Add Client Process

From your PerfoAds dashboard:

1. Click **Add Client** in the top right corner
2. The account selector screen appears

[Screenshot: Empty client dashboard with "Add Client" button highlighted]
*Starting point - click Add Client to begin*

---

## Step 2: Connect Your Google Account (First Time Only)

If this is your first time, you'll need to authorize PerfoAds:

1. Click **Connect with Google**
2. Select your Google account from the list
3. Review the permissions requested:
   - Read Google Ads data
   - View basic profile info (name, email)
4. Click **Allow**

[Screenshot: Google OAuth permission screen showing requested permissions]
*Google asks you to approve access - this is secure and normal*

**What permissions does PerfoAds get?**
- **Read-only access** to your Google Ads data
- **Cannot make changes** to campaigns, bids, or budgets
- **Cannot spend money** on your behalf
- **Basic profile info** (name, email) for your account

**Security note**: PerfoAds uses OAuth, Google's secure authentication. We never see your Google password.

**Already connected?** You'll skip this step and go straight to account selection.

---

## Step 3: Select the Google Ads Account

Now you'll see a list of all Google Ads accounts you have access to.

### For Direct Access Users

You'll see:
- One or a few accounts
- Account name and customer ID
- Current status (active, suspended, etc.)

[Screenshot: Account selector showing 1-3 direct access accounts]
*Choose the account you want to manage*

### For MCC Users

You'll see:
- All client accounts linked to your MCC
- Account names and customer IDs
- Which accounts are already added to PerfoAds (grayed out)
- Status for each account

[Screenshot: Account selector showing MCC with 15+ client accounts, some already added]
*MCC users see their full client list - already-added accounts are grayed out*

### Selecting Your Account

1. Scroll through the list if you have many accounts
2. Use the search box to filter by name or customer ID
3. Click the account you want to add
4. The account highlights and you move to the next step

**Pro Tip**: The customer ID (10-digit number like 123-456-7890) uniquely identifies each account.

---

## Step 4: Fill in Client Details

Now you'll set up the client profile. This information helps the AI give better insights.

### Required Fields

**Client Name**
- A friendly name to identify the client
- Shows up in your client list
- Example: "ACME Corp" or "Bakery - Main St"

**Google Ads Customer ID**
- Auto-filled from your selection
- Don't change this unless you know what you're doing

[Screenshot: Add Client form with required fields highlighted]
*Only client name is required - everything else is optional but helpful*

### Optional But Recommended Fields

**Website URL**
- The client's business website
- Example: `https://www.acmecorp.com`
- **Why it helps**: AI can reference their business when analyzing campaigns

**Monthly Budget**
- Approximate monthly ad spend
- Enter as a number (e.g., 5000 for $5,000/month)
- **Why it helps**: AI alerts you if spending looks too high or low

**Industry**
- What type of business (e.g., "E-commerce", "Legal Services", "Restaurant")
- **Why it helps**: AI understands industry benchmarks and norms

**Business Goals**
- What the client wants to achieve
- Examples:
  - "Increase online sales by 20%"
  - "Generate more qualified leads"
  - "Build brand awareness in local market"
- **Why it helps**: AI recommendations align with these goals

[Screenshot: Add Client form with all optional fields filled in]
*More details = better AI insights and recommendations*

### Advanced Settings (Expandable)

Click **Advanced Settings** to see:

**Auto-Sync Schedule**
- Enable/disable automatic daily syncing
- Set preferred sync time (default: 2:00 AM)
- **Recommendation**: Leave enabled for fresh data

**Alert Preferences**
- Which types of AI alerts to receive
- Severity threshold (only show high/critical vs. all)
- **Recommendation**: Start with all alerts, adjust later

**Data Retention**
- How many days of data to keep (default: 90 days)
- **Recommendation**: Keep 90 days for trend analysis

[Screenshot: Advanced settings section expanded]
*Advanced settings are optional - defaults work well for most users*

---

## Step 5: Create the Client

1. Review all the information you entered
2. Click **Create Client**
3. You'll see a success message
4. The client appears in your client list

[Screenshot: Success message after creating client]
*Client created successfully - now ready for first sync*

**What happens next?**
- Client appears in your list with "Never synced" status
- Auto-sync schedule is set (if enabled)
- System is ready to pull data

---

## Step 6: Run Your First Sync

Now let's get some data.

### Starting the Sync

1. Find your new client in the list
2. Click the three-dot menu (⋮) next to their name
3. Select **Smart Sync**

[Screenshot: Client list with Actions menu open, Smart Sync option highlighted]
*Smart Sync pulls all data for the first time*

### What Gets Synced

During the first sync, the system pulls:

**Campaign Data**
- All campaigns (active, paused, removed)
- Campaign settings and budgets
- Campaign-level performance metrics

**Ad Group Data**
- All ad groups within campaigns
- Targeting settings
- Ad group performance

**Keyword Data**
- All keywords and match types
- Bids and quality scores
- Keyword performance metrics

**Ad Creative Data**
- All ads (responsive search, expanded text, etc.)
- Ad copy and descriptions
- Ad performance

**Conversion Data**
- Conversion actions configured in Google Ads
- Conversion metrics and values
- Conversion tracking status

**Performance Metrics**
- Last 90 days of data
- Impressions, clicks, conversions
- Cost and ROI metrics

[Screenshot: Sync progress showing different data types being pulled]
*First sync pulls everything - you'll see progress for each data type*

### How Long It Takes

**Small accounts** (1-10 campaigns):
- 2-4 minutes

**Medium accounts** (10-50 campaigns):
- 4-8 minutes

**Large accounts** (50-200 campaigns):
- 8-15 minutes

**Very large accounts** (200+ campaigns):
- 15-30 minutes

**Why the variation?** More campaigns, ad groups, and keywords = more data to pull.

### During the Sync

You'll see:
- Progress bar showing percentage complete
- Current data type being synced
- Estimated time remaining

**Can you navigate away?** Yes! The sync runs in the background. Come back anytime to check progress.

[Screenshot: Sync in progress at 60%, showing "Syncing keywords..."]
*Sync keeps running even if you leave the page*

---

## Step 7: Verify the Sync Completed

When sync finishes:

1. You'll see a green checkmark next to the client
2. Status changes to "Last synced: Just now"
3. Client detail page now shows data

### Checking the Data

Click on the client name to open their detail page.

**What you should see**:
- Overview metrics (spend, clicks, conversions)
- Campaign list with performance
- Performance charts with 90 days of data
- AI alerts (if any issues found)

[Screenshot: Client detail page after first sync, showing populated data]
*After sync, you see all campaigns, metrics, and AI insights*

### If Sync Failed

**Symptom**: Red X icon, status says "Sync failed"

**Common causes**:
1. **Permission issue** - Account access was revoked
2. **Google Ads suspended** - Account is paused or suspended
3. **API limit reached** - Too many syncs in one day (rare)

**How to fix**:
1. Check Sync Logs page for error details
2. Verify you still have access to the Google Ads account
3. Try syncing again
4. If it keeps failing, contact support

[Screenshot: Failed sync showing error message]
*Sync errors show detailed messages - check Sync Logs for more info*

---

## Step 8: Set Up Business Context (Optional but Powerful)

Want better AI recommendations? Add business context.

### Why Context Matters

The AI analyzes your data, but it doesn't know:
- What makes a "good" conversion for this business
- Industry-specific challenges
- Client's budget constraints
- Seasonal patterns

**Example without context**:
AI suggests: "Increase bids on keyword X"

**Example with context**:
AI suggests: "Increase bids on keyword X, but stay within your $5K monthly budget. This aligns with your goal to generate more qualified leads in the legal services industry."

### Adding Context

1. Go to client detail page
2. Click **Business Profile** tab
3. Fill in:
   - **Industry details** (what they sell, target audience)
   - **Geographic focus** (local, national, international)
   - **Conversion value** (what's a lead/sale worth?)
   - **Budget constraints** (hard limits, seasonal changes)
   - **Competitive landscape** (main competitors, market position)

[Screenshot: Business Profile form with example entries]
*The more context you provide, the smarter the AI recommendations become*

**Pro Tip**: Come back and update this as you learn more about the client's business.

---

## What Happens After Setup

### Automatic Daily Syncs

If you enabled auto-sync (default):
- System syncs once per day at your chosen time
- Only pulls new data since last sync (Smart Sync is fast)
- Takes 2-4 minutes for most accounts
- Happens automatically - no action needed

**Change sync schedule**: Go to Settings → Sync Schedule

### AI Analysis Begins

After first sync, the AI starts working:

1. **Scans for optimization opportunities**
   - Budget waste on low performers
   - Missing conversion tracking
   - Poor quality scores
   - Better bidding strategies

2. **Creates Smart Alerts**
   - Ranked by severity (low, medium, high, critical)
   - Grouped by category (budget, performance, technical)
   - Actionable recommendations

3. **Enables AI Chat**
   - Ask questions about the account
   - Get insights based on real data
   - Explore trends and patterns

[Screenshot: Smart Alerts dashboard showing 5 new alerts for newly added client]
*AI finds optimization opportunities right after first sync*

### You Can Now

- **View performance trends** - See charts for spend, clicks, conversions
- **Explore campaigns** - Drill down into ad groups and keywords
- **Get AI insights** - Chat with AI about the account
- **Accept/decline alerts** - Review AI recommendations
- **Export reports** - Generate client-ready reports

---

## Tips & Best Practices

### When Adding Multiple Clients

**Batch your setup**: Add all clients in one session. It's faster than doing them one at a time.

**Stagger sync times**: Don't sync all clients at once. Space out auto-sync times to avoid hitting API limits.

**Example schedule**:
- Client A: 2:00 AM
- Client B: 2:30 AM
- Client C: 3:00 AM

### Client Naming Conventions

Use consistent naming to stay organized:

**Good examples**:
- "ACME Corp - Main Account"
- "Bakery - Downtown Location"
- "Law Firm - Smith & Associates"

**Avoid**:
- "Client 1", "Client 2" (not descriptive)
- "Test", "Demo" (confusing)
- Long names (harder to scan)

### Filling Out Business Profile

**Do it right away**: Fresh context helps AI from day one.

**Be specific**: "Generate qualified leads" is better than "Get more business".

**Include numbers**: "Increase sales by 20%" is better than "Increase sales".

**Update regularly**: Business goals change - keep the profile current.

### Managing MCC Accounts

**Add clients gradually**: Don't add 50 clients at once. Start with 5-10, learn the system, then add more.

**Prioritize high-spend accounts**: Add your biggest clients first - they benefit most from AI optimization.

**Use folders** (coming soon): Organize clients by industry, team, or region.

---

## Common Questions

**Q: Can I add the same Google Ads account twice?**
A: No. Each Google Ads customer ID can only be added once. If you try, you'll see a message saying the account already exists.

**Q: What if I manage accounts for a client through their Google login?**
A: You have two options:
1. Log into PerfoAds with their Google account
2. Ask them to add you as a user in their Google Ads account, then log in with your own account

**Q: Can I change the client name later?**
A: Yes! Click the client, then click Edit to update name, website, budget, or any other field.

**Q: Do I need to add business context right away?**
A: No, but it's recommended. You can always add it later. The AI works without it, but gives better recommendations with it.

**Q: What happens if I lose access to the Google Ads account?**
A: Syncing will fail. You'll see an error message. You can remove the client or reconnect with a different Google account that has access.

**Q: Can I sync on-demand, or is it only automatic?**
A: Both! Auto-sync runs daily, but you can manually sync anytime from the client list or detail page.

**Q: How often should I manually sync?**
A: Only when you need fresh data before a client call or after making changes in Google Ads. Daily auto-sync is usually enough.

---

## Troubleshooting

### Problem: "Account already exists" error

**Symptom**: After selecting an account, you see "This account is already added"

**Cause**: The Google Ads customer ID is already in your client list

**Solution**:
1. Go to your client list
2. Search for the customer ID or account name
3. If you want to re-add it, delete the existing entry first
4. Then add it again

### Problem: "No accounts found" when selecting

**Symptom**: After connecting Google, the account list is empty

**Cause**: Your Google account doesn't have access to any Google Ads accounts

**Solution**:
1. Verify you logged in with the correct Google account
2. Check that account has Google Ads access (direct or MCC)
3. Try logging out and back in
4. Contact support if issue persists

### Problem: Sync fails immediately

**Symptom**: Sync starts but fails within seconds with "Permission denied"

**Cause**: Account permissions changed after you selected it

**Solution**:
1. Go to Settings → Connected Accounts
2. Click **Reconnect Google Ads**
3. Grant all requested permissions
4. Try syncing the client again

### Problem: Sync takes forever

**Symptom**: Sync stuck at same percentage for 10+ minutes

**Cause**: Very large account or API slowness

**Solution**:
1. Check your internet connection
2. Wait 15-20 minutes (large accounts can take this long)
3. If still stuck after 30 minutes, cancel and retry
4. Contact support if consistently slow

### Problem: Wrong account was added

**Symptom**: You selected the wrong Google Ads account

**Solution**:
1. Go to client detail page
2. Click three-dot menu → Delete Client
3. Confirm deletion
4. Add the correct account again

---

## Next Steps

Now that your first client is set up, here's what to explore:

- **[Understanding the Dashboard](04-understanding-dashboard.html)** - Learn what every metric and chart means
- **[Smart Sync Explained](05-smart-sync-explained.html)** - How the sync system works behind the scenes
- **[Smart Alerts Intro](../phase-3-ai-features/01-smart-alerts-intro.html)** - Start acting on AI recommendations
- **[Client Details Page](../phase-2-core-features/02-client-details-page.html)** - Explore everything on the client page

---

**Ready to add more clients?** Click **Add Client** and repeat the process!

**Want to customize sync settings?** Go to Settings → Sync Schedule

**Need help?** Contact support at support@aiperfoads.xyz

**Last Updated**: October 4, 2025
