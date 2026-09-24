# PerfoAds Help: Feature Map

Which help page covers which part of the app. Use it to find the page to update when the app changes.

Checked against the app on 23 September 2026. The app lives at audit.perfoads.com.

---

## App menu to help pages

| App menu item | App screen | Help page |
|---|---|---|
| Overview | /audit/overview | viewing-performance.md |
| Google Ads Audit > New Audit | /audit/start | getting-started.md, google-ads-audit.md |
| Google Ads Audit > History | /audit/history | google-ads-audit.md |
| Campaign Builder > New Campaign | /audit/campaign-generator | campaign-builder.md |
| Campaign Builder > History | /audit/campaign-history | campaign-builder.md |
| Feed Optimizer | /audit/feed-optimizer | feed-optimizer.md |
| Settings | /audit/settings | settings.md |
| Subscription (PRO badge) | /audit/subscription | billing.md |
| Sign in | /audit/login | getting-started.md, data-privacy.md |

---

## Page by page

### what-is-perfoads.md
- What PerfoAds does, the menu, "you stay in control", guided tours.

### getting-started.md
- Sign in with Google only. No password. 7-day sign-in.
- Plan needed, or a single audit.
- New Audit wizard: connect Google Ads, pick the account, business questions, report in about 30 minutes.
- Access asked for: Google Ads (read and approved changes), Merchant Center (Feed Optimizer only), email.
- How to remove access in the Google account.

### viewing-performance.md (Overview dashboard)
- Account picker, date range (7 / 14 / 30 / 90 days or custom, default 90).
- Campaign table: sort, type filter chips, column views, row details.
- Sparkle on Search and Performance Max rows opens the optimizers.
- With 1 account picked: account actions, Conversions card, Account history.
- Data refresh once a day at 06:00 UTC, "Data through" date, no manual refresh, first load 90 days.
- Remove Client: what is deleted, audit reports kept.
- Metrics table. CTR = clicks / impressions. Conversion rate = conversions / clicks. CPA = cost / conversions. ROAS = conv. value / cost.

### google-ads-audit.md
- Score 0 to 100, Score by area.
- Report tabs: Overview, Google Ads Audit, Action Plan.
- Severity: Critical, High, Medium, Positive.
- Apply fix with preview. Resolved / Dismissed with a note.
- Export PDF (browser print), Share link (read-only, optional end date, can be turned off, copy once).
- Re-audit, 2 audits per account per month.

### search-optimizer.md
- 7 tabs: Recommendations, Ads, Keywords, Search terms, Bid adjustments, Settings, History.
- Analyze uses 1 Search Optimizer run. Apply goes through preview.
- Extensions under the Ads tab.
- Search terms: Promotable, Watching, Wasters, add as keyword, add as negative, Cluster by theme.
- Bid adjustments blocked on Smart Bidding.

### pmax-optimizer.md
- Tabs: Recommendations, Asset Groups, Text Assets, Extensions, Signals, Search Insights, Breakdowns, Products (shop campaigns only), Channels, Placements, Settings, History.
- Analyze, Re-analyze, Fix drawer, Deploy changes.

### feed-optimizer.md
- Needs a Merchant Center account.
- Connect, fetch feed, link Google Ads.
- Grid, drafts, filters, Group variants.
- AI tools: Generate titles, Generate labels, AI attributes, Map Google categories.
- Feed Health, Issues, label drift, feed settings (checked attributes, feed rules, margins).
- Versions and History, one-time Merchant Center setup, Push to GMC, Export (TSV), Withdraw, Reject drafts.
- Allowances: 1,000 titles, 300 label assignments, 300 AI-filled products.

### campaign-builder.md
- Brief chat, Search steps (Account, Brief, Strategy, Keywords, Structure, Ad Copy, Deploy).
- Performance Max steps (Account, Brief, Strategy, Themes, Settings, Assets, Deploy).
- Full preview, campaigns created paused, undo for 30 days, Google Ads Editor file (Search only).
- Drafts and History. 3 builds per account per month.

### changes-and-undo.md
- Settings > Team > Google Ads writes switch (owner, needs an active plan, covers Merchant Center too).
- Preview, approve, history, Rollback within 30 days.
- Limits: 10 changes a minute, 50 a day per account.
- Cannot be undone: removals, older than 30 days, old state not readable, changes made outside PerfoAds. Feed pushes use Withdraw.

### billing.md
- $59 a month first account, $39 each extra, up to 10. Single audit $19.99 once.
- Monthly allowances per account.
- Stripe billing page from Settings > Account > Subscription, or the PRO badge.
- Cancel runs to end of period. Failed payment stops access until paid.

### settings.md (Account and settings)
- Account: profile photo, usage, Subscription, Sign Out.
- Preferences: theme, language (if Polish is on for the team), Alert frequency, Notifications "coming soon".
- Team: create team, invite specialists, assign accounts, Google Ads writes.
- Branding and API Keys: only when switched on for the account.
- Guided tours.

### data-privacy.md
- Only claims backed by the app. Links to the privacy policy at perfoads.com/privacypolicy and privacy@perfoads.com.
- No certification claims, no data export promise, no retention periods (those live in the privacy policy).

---

## Removed pages

| Old page | What happened |
|---|---|
| managing-clients | Removed. The Clients page is gone; accounts live on the Overview. |
| smart-alerts | Removed. |
| ai-chat | Removed. The account chat no longer exists. |
| business-context | Removed. Business details now come from the audit questions. |
| google-accounts | Redirects to getting-started.html. |
| data-syncing | Redirects to viewing-performance.html. |
| user-account | Redirects to settings.html. |
