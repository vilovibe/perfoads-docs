# PerfoAds Documentation Feature Map

**Purpose**: Complete mapping of every feature, button, and UI element from production screenshots
**Audience**: Regular users (not developers)
**Approach**: Simple language, one or two sentences per feature

---

## Screenshot Analysis

### Screenshot 1: Client Management Page (Main List View)

**Page Elements:**

1. **Sidebar Navigation**
   - **Clients** (highlighted): Shows all your connected Google Ads accounts in one place.
   - **AI Chat**: Talk to AI about your campaigns and get insights.
   - **Smart Alerts**: See all AI-generated alerts about your campaigns.
   - **Google Accounts**: Manage your connected Google accounts.
   - **Settings**: Update your profile and business information.

2. **Client List Header**
   - **Page Title**: "Client Management" - shows you're looking at all your accounts.
   - **"+ Add Client" button**: Click to connect a new Google Ads account.

3. **Client List Table Columns**
   - **Checkbox**: Select one or more clients to perform actions on multiple accounts.
   - **CLIENT INFO**: Shows client name, account ID, and industry.
   - **PERFORMANCE**: Shows number of active campaigns.
   - **ALERTS**: Color-coded badges showing how many alerts by severity (red=critical, yellow=medium, green=good).
   - **SYNCED DAYS**: How long ago data was synced (e.g., "1 days").
   - **LAST SYNC**: Exact date when data was last updated.
   - **ACTIONS**: Three-dot menu with options for each client.

4. **Client Row Actions Menu** (three-dot menu)
   - **View Details**: Opens the full dashboard for this client.
   - **AI Alerts**: Jump straight to alerts for this client.
   - **AI Chat**: Start chatting with AI about this specific client.
   - **Delete Client**: Remove this client from your account permanently.

5. **Bottom Selection Bar** (appears when clients selected)
   - **"1 client selected"**: Shows how many you've checked.
   - **"Select All (1)" button**: Quickly select every client in the list.
   - **"Clear Selection"**: Uncheck all selected clients.
   - **"Analyze Selected" button**: Run AI analysis on checked clients.
   - **"Delete (1)" button**: Delete all selected clients at once.

6. **User Profile Section** (bottom left)
   - Shows your name and email address.
   - **"Sign Out" button**: Log out of PerfoAds.

---

### Screenshot 2: AI Chat Page (Main Chat Interface)

**Page Elements:**

1. **Chat Header**
   - **"AI Chat Assistant" title**: Shows you're in the chat interface.
   - **Home icon**: Return to main dashboard.
   - **Client Selector Dropdown**: Choose which client you want AI to analyze (shows "VGS TEHNO SIA" as example).

2. **Chat Sidebar** (left panel)
   - **"+ New Chat" button**: Start a fresh conversation with AI.
   - **Token Counter**: Shows how many AI tokens you have left (e.g., "11 tokens / 100k tokens").
   - **Conversation History**: Past chats organized by date (e.g., "YESTERDAY").
   - **Individual Chat Titles**: Each past conversation shows a brief summary of what you asked about.

3. **Quick Actions Panel** (center, when no chat active)
   - **"Full Audit" card**: AI does comprehensive analysis of all campaigns.
   - **"Quick Summary" card**: Get fast overview of top issues.
   - **"Keywords" card**: AI analyzes search terms and suggests keyword opportunities.
   - **"Strategy" card**: Get a 30-day action plan for improving performance.

4. **Chat Input Area** (bottom)
   - **Message Text Box**: Type your question about the client's Google Ads performance.
   - **"Send" button**: Submit your question to AI.
   - **"Hide Sidebar" button**: Collapse the conversation history panel for more room.

---

### Screenshot 3: Smart Alerts Page (All Alerts View)

**Page Elements:**

1. **Alerts Header**
   - **Page Title**: "Smart AI Alerts" with subtitle explaining what alerts are.
   - **"AI Analysis" button**: Run fresh AI analysis across all clients.
   - **"Refresh" button**: Reload the alerts list.

2. **Alert Count Badges** (top)
   - **Blue badge "11"**: Number of info/positive alerts.
   - **Red badge "6"**: Number of critical/urgent alerts.
   - **Yellow badge "2"**: Number of medium priority alerts.
   - **Green badge "3"**: Number of low priority/good performance alerts.

3. **Alert Filters**
   - **"All Clients" dropdown**: Filter alerts by specific client.
   - **"All Types" dropdown**: Filter by alert category (budget, performance, etc.).
   - **"All Status" dropdown**: Show active, dismissed, or resolved alerts.
   - **"All Categories" dropdown**: Filter by issue type.
   - **Search box**: Find alerts by typing keywords.
   - **"Newest First" dropdown**: Sort alerts by date, priority, etc.
   - **Results counter**: Shows "11 results" matching your filters.

4. **Alert List Items**
   - **Color dot indicator**: Red (critical), yellow (warning), green (good), blue (info).
   - **Client name**: Which account this alert is about.
   - **Alert title**: Brief description of the issue or opportunity.
   - **Category badges**: Tags showing what data this alert relates to (e.g., "Conversion Rate", "CPA").
   - **Time stamp**: How long ago this alert was created (e.g., "2d ago").
   - **Status label**: "active", "dismissed", or "resolved".
   - **Arrow icon**: Click to expand and see full alert details.

---

### Screenshot 4: Alert Detail View (Expanded Alert)

**Page Elements:**

1. **Alert Expansion Panel**
   - **Alert title**: Full description of the issue.
   - **Category tags**: All related metrics shown as clickable tags.
   - **Time indicator**: When this alert was created.

2. **AI ANALYSIS Section**
   - **Analysis text**: AI's detailed explanation of what it found wrong and why it matters.
   - Explains the data in plain language your client would understand.

3. **BUSINESS IMPACT Section**
   - **Impact statement**: How this issue affects revenue, conversions, or costs.
   - Quantifies the potential improvement (e.g., "increase traffic by 30-40%").

4. **RECOMMENDATIONS Section**
   - **Bulleted action items**: Specific steps you should take to fix the issue.
   - Each recommendation is clear and actionable (not vague advice).

5. **Action Buttons** (bottom)
   - **"Dismiss" button**: Mark this alert as not relevant (it goes away).
   - **"Resolve" button**: Mark this alert as fixed (confirms you took action).

---

### Screenshot 5: Client Dashboard (Main Client View)

**Page Elements:**

1. **Client Header**
   - **"Back to Clients" button**: Return to client list.
   - **Client Name Dropdown**: Switch between different clients quickly.
   - **"Refresh" button**: Reload the latest data.
   - **Sync icon**: Manually trigger a data sync (if available).

2. **CLIENT INFORMATION Panel** (left sidebar)
   - **Industry**: What type of business this client runs.
   - **Markets**: Geographic regions they target.
   - **Website**: Clickable link to their actual website.
   - **Budget indicator**: Visual bar showing budget usage percentage.
   - **"Business Profile" button**: Edit client's business information for AI context.

3. **Conversions Section** (left sidebar)
   - **Total Conversions**: Count and value of all conversions.
   - **Total row**: Summary of conversion data.

4. **Active Alerts List** (left sidebar)
   - **Alert count badges**: Shows how many of each severity level (1 red, 2 yellow, 3 green).
   - **Alert preview items**: Mini list showing first few alerts with icons and titles.
   - **"+1 more alerts" link**: Expand to see all alerts for this client.

5. **Performance Metrics Panel** (top, center)
   - **Date Range**: "Last 90 days" with date picker to change time period.
   - **"Data up to" label**: Shows how current the data is.
   - **View toggle buttons**: Switch between "Area" chart view, "Bar" chart view, "Day", "Week" views.
   - **Settings icon**: Customize which metrics to display.

6. **Metric Cards** (top row)
   - **Spend card**: Total money spent (blue, shows currency amount).
   - **Conversions card**: Total conversions achieved (yellow/gold).
   - **CPA card**: Cost per acquisition.
   - **Conv Rate card**: Conversion rate percentage.
   - **Clicks card**: Total number of clicks.
   - **CTR card**: Click-through rate percentage.
   - **CPC card**: Cost per click.
   - **IS card**: Impression share percentage.

7. **Tab Navigation** (below metrics)
   - **"Charts" tab**: View performance graphs over time.
   - **"Smart Alerts" tab**: See alerts specific to this client (shows count badge).
   - **"Smart Chat" tab**: Open AI chat about this client.
   - **"Campaigns" tab**: View campaign performance data (shows count badge).
   - **"Context" tab**: Manage business context for AI (shows count badge).

8. **Smart Alerts Tab Content** (when selected)
   - Shows same alert list as main alerts page but filtered to this client only.
   - Expandable alert cards with full details visible.

---

### Screenshot 6: Charts Tab View

**Page Elements:**

1. **Performance Chart** (main area)
   - **Dual-line graph**: Two colored lines showing different metrics over time (e.g., Spend vs Conversions).
   - **X-axis**: Dates spanning the selected time range.
   - **Y-axis labels**: One on left (Spend), one on right (Conversions) for different scales.
   - **Interactive tooltip**: Hover over lines to see exact values at specific dates.

2. **Chart Controls** (top)
   - Same metric cards and date range selector as main dashboard.
   - **View options**: Area, Bar, Day, Week buttons to change visualization.

---

### Screenshot 7: Smart Chat Tab (Within Client Dashboard)

**Page Elements:**

1. **Chat Interface** (same as main AI Chat page)
   - **"+ New Chat" button**: Start new conversation about this specific client.
   - **Token counter**: Shows remaining AI usage.
   - **Conversation history**: Past chats with this client's context.

2. **Quick Actions** (shown when no active chat)
   - **"Full Audit" card**: Comprehensive campaign analysis.
   - **"Quick Summary" card**: Fast overview of top issues.
   - **"Keywords" card**: Search term analysis.
   - **"Strategy" card**: 30-day action plan.

3. **Chat Input**
   - **Message box**: Ask questions about this client's performance.
   - **"Send" button**: Submit question.
   - **"Hide Sidebar" button**: Collapse history panel.

---

### Screenshot 8: Campaigns Tab View

**Page Elements:**

1. **Campaign List**
   - **Campaign card**: Expandable panel for each campaign.
   - **Campaign name**: Shows actual Google Ads campaign name.
   - **Status badge**: "ACTIVE" (green) or other status.
   - **"Search" button**: Open search term analysis for this campaign.

2. **Campaign Card Details** (when expanded)
   - **Budget info**: Daily budget and number of ad groups/keywords.
   - **Performance metrics**: Spend, Conversions, CPA, Conv Rate, Clicks, CTR, CPC, Impression Share.
   - Each metric shows value and percentage (e.g., "100%" meaning full data visibility).

3. **Impression Share Analysis**
   - **Search IS**: Your share of search impressions.
   - **Top IS**: Percentage shown in top positions.
   - **"Lost to budget" metric**: Impressions missed due to budget limits (shown in red).
   - **"Lost to rank" metric**: Impressions missed due to ad rank (shown in orange/yellow).

4. **Quality Analysis**
   - **Quality Score**: Rating out of 10 with visual bar indicator (e.g., "4/10" with yellow bars).
   - **Ad Relevance**: How relevant ads are (shows "Average").
   - **Landing Page**: Landing page quality rating (shows "Average").
   - **Expected CTR**: Expected click-through rate (shows "Average").

5. **Campaign Strategy Info**
   - **Bidding Strategy**: Shows strategy type (e.g., "Max Conversions").
   - **Campaign Type**: Ad format type (e.g., "SEARCH").

---

### Screenshot 9: Context Tab View

**Page Elements:**

1. **Context Management Interface**
   - **"Add New Context Entry" form**: Create new business context for AI to use.

2. **Add Context Form Fields**
   - **Content text area**: Large box to type optimization notes, client feedback, or performance insights.
   - **Type buttons**: Select category - "Optimization", "Strategy", "Feedback", "Insight", "General".
   - **Priority buttons**: Choose importance level - "Critical", "High", "Normal", "Low", "Archive".
   - **Tags field**: Add comma-separated keywords (e.g., "keywords, budget, Q4").
   - **Author field**: Your name (auto-filled).
   - **"Add Entry" button**: Save this context for AI to use.

3. **Context History Section**
   - **"Context History (2)" title**: Shows how many context entries exist.
   - **Context Entry Cards**: Past entries displayed with colored left border based on priority.

4. **Context Entry Card Elements**
   - **Type badge**: Category label (e.g., "Strategy Note") with priority color (e.g., "Critical" in red).
   - **Tags**: Comma-separated keywords shown as text.
   - **Content preview**: First few lines of the context text.
   - **Metadata line**: Author name and timestamp (e.g., "By me - 13.10.2025, 19:25:54").
   - **Edit icon**: Modify this context entry.
   - **Delete icon**: Remove this context entry.

---

### Screenshot 10: Google Accounts Page

**Page Elements:**

1. **Google Accounts Header**
   - **Page title**: "Google Ads Accounts"
   - **Last refreshed timestamp**: Shows when accounts were last checked (with "cached" indicator).
   - **"Run Discovery" button**: Search for new Google Ads accounts you have access to.
   - **"Settings" button**: Manage OAuth connection settings.
   - **"Refresh" button**: Reload account list from Google.

2. **Account Tabs**
   - **"All Accounts" tab**: Shows every account discovered (with count badge, e.g., "5").
   - **"Clients" tab**: Only accounts you've added as clients (with count badge, e.g., "1").
   - **"Available" tab**: Accounts you can add but haven't yet (with count badge, e.g., "4").

3. **Account List Table**
   - **Checkbox**: Select accounts to add multiple at once.
   - **Google icon**: Shows this is a Google Ads account.
   - **ACCOUNT NAME**: Display name and hierarchy (e.g., "Client: VGS TEHNO SIA").
   - **ACCOUNT ID**: Unique Google Ads customer ID.
   - **TYPE**: Account type (shows "unknown" if not yet determined).
   - **"View" button**: Opens this account's dashboard (only for accounts already added as clients).

4. **Account Discovery Message**
   - Info text: "Accounts are automatically refreshed during daily sync at 3:00 AM"

---

### Screenshot 11: Settings Page - Business Profile Tab

**Page Elements:**

1. **Settings Sidebar Navigation**
   - **"Business Profile" tab**: Your company and account information (selected/highlighted).
   - **"Email Notifications" tab**: Configure alert emails (shows "Coming Soon" badge).
   - **"Sync Settings" tab**: Control when data syncs happen.
   - **"Google Ads Connections" tab**: Manage OAuth connections.
   - **"Danger Zone" tab**: Account deletion and critical settings.

2. **Business Profile Form**
   - **Section title**: "Business Profile" with subtitle explaining it's your business info.

3. **Form Fields**
   - **Company Name**: Text field for your company name.
   - **Account Name**: Text field for your account display name.
   - **Country**: Dropdown to select your country.
   - **Email**: Your login email (pre-filled, usually not editable).
   - **Company Logo / Profile Picture**: Upload area for your logo (supports JPG, PNG, GIF, recommended 200x200px).
   - **"Choose File" button**: Select image file from your computer.

4. **Subscription Management Section**
   - **Info text**: Explains you can manage subscription, payment method, or change plan via LemonSqueezy.
   - **"Manage Subscription" button**: Opens LemonSqueezy customer portal in new tab.

5. **Save Button**
   - **"Save Profile" button**: Saves all changes to your business profile.

---

### Screenshot 12: Settings Page - Email Notifications Tab

**Page Elements:**

1. **Email Notifications Header**
   - **Section title**: "Email Notifications" with "Coming Soon" badge.
   - **Status message**: "Email notifications will be available in a future update"

2. **Notification Type Options** (preview of future feature)
   - **Sync Completed**: Checkbox option with description "Get notified when data sync finishes successfully".
   - **Sync Failed**: Checkbox option with description "Get alerted when sync encounters errors".
   - **Alerts Triggered**: Checkbox option with description "Important notifications about your campaigns".
   - **Daily Summary**: Checkbox option with description "Daily performance overview email".
   - **Weekly Summary**: Checkbox option with description "Weekly performance report every Monday".

3. **Save Button** (grayed out)
   - **"Available Soon" button**: Currently disabled as feature isn't active yet.

---

## Documentation Structure Based on Features

### Section 1: Getting Started
- **What is PerfoAds**: Explain the AI-powered Google Ads management platform.
- **Connecting Your First Account**: How to use "Run Discovery" and OAuth to connect Google Ads.
- **Understanding the Dashboard**: Overview of main interface and navigation.

### Section 2: Managing Clients
- **Client List View**: How to see all your accounts in one place.
- **Adding Clients**: Using Google Account Discovery to add accounts.
- **Client Information**: What each column means (performance, alerts, sync status).
- **Bulk Actions**: Selecting multiple clients and performing actions.
- **Deleting Clients**: How to remove accounts you no longer want to track.

### Section 3: Viewing Performance
- **Client Dashboard**: Overview of the main client view.
- **Performance Metrics**: Explanation of Spend, Conversions, CPA, CPC, CTR, etc.
- **Date Range Selection**: How to change time period for data.
- **Charts Tab**: Reading the performance graphs.
- **Campaign Details**: Understanding campaign cards and metrics.
- **Quality Score**: What quality score means and why it matters.
- **Impression Share**: Understanding lost impressions (budget vs rank).

### Section 4: AI Features
- **Smart Alerts**: How AI finds issues and opportunities.
- **Alert Severity Levels**: What the colors mean (red=critical, yellow=medium, green=good).
- **Reading an Alert**: Understanding AI analysis, business impact, and recommendations.
- **Dismissing vs Resolving**: When to use each action.
- **Alert Filters**: How to find specific types of alerts.

### Section 5: AI Chat
- **Starting a Conversation**: How to use the "New Chat" button.
- **Quick Actions**: What each template does (Full Audit, Quick Summary, Keywords, Strategy).
- **Asking Questions**: How to get AI insights about specific metrics or campaigns.
- **Conversation History**: Finding and resuming past chats.
- **Token Usage**: Understanding your AI usage limits.

### Section 6: Business Context
- **What is Context**: Why AI needs to know about your business.
- **Adding Context Entries**: Using the form to add notes.
- **Context Types**: When to use Optimization, Strategy, Feedback, Insight, or General.
- **Priority Levels**: Choosing Critical, High, Normal, Low, or Archive.
- **Tags**: How to make context searchable.
- **Context History**: Viewing, editing, and deleting past entries.

### Section 7: Account Management
- **Google Accounts Page**: Seeing all available accounts.
- **Account Discovery**: Finding new accounts automatically.
- **Adding Accounts as Clients**: Converting available accounts to active clients.
- **Account Tabs**: Understanding All Accounts, Clients, and Available tabs.

### Section 8: Settings
- **Business Profile**: Updating company name, country, and logo.
- **Subscription Management**: Using the Manage Subscription button to access LemonSqueezy.
- **Email Notifications**: What's coming in future updates (currently unavailable).
- **Saving Changes**: How to save profile updates.

### Section 9: Data Syncing
- **Automatic Sync**: Data refreshes daily at 3:00 AM automatically.
- **Sync Status**: Reading "Last Sync" and "Synced Days" indicators.
- **Manual Refresh**: Using refresh buttons to reload data.

### Section 10: User Account
- **Profile Display**: Seeing your name and email in bottom left.
- **Signing Out**: How to log out safely.

---

## Features NOT to Document (Not Visible to Regular Users)

- Manual sync controls (admin-only)
- Sync Settings tab (not shown in screenshots)
- Google Ads Connections details (not shown)
- Danger Zone tab (not shown)
- Backend infrastructure
- Database details
- API configurations
- Admin features

---

## Key Documentation Priorities

### Must Explain Clearly:
1. **Alert severity colors** - Users need to know red=urgent, yellow=important, green=good
2. **Dismiss vs Resolve** - Big difference, must be clear
3. **Context purpose** - Why adding context improves AI insights
4. **Quick Actions** - What each template analyzes
5. **Performance metrics** - Simple definitions (CPA, CTR, IS, etc.)
6. **Account Discovery** - How to find and add Google Ads accounts
7. **Subscription button** - Where to manage billing and plans

### Keep Simple:
- Don't explain how AI works internally
- Don't explain sync technical details
- Don't explain database or infrastructure
- Use plain language (not marketing jargon)
- One or two sentences per feature maximum

---

**Ready for Documentation Writing**: ✅
**Total Features Mapped**: 100+
**Screenshots Analyzed**: 12/12
**Missing Features**: None (all visible features documented)