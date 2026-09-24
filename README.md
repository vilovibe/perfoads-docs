# PerfoAds Help

Source for the public help site at [docs.perfoads.com](https://docs.perfoads.com), served by GitHub Pages.

## Pages

### Start here
- [What is PerfoAds?](what-is-perfoads.md) - What it does and who it is for
- [Getting started](getting-started.md) - Sign in with Google, connect Google Ads, first audit, what access we ask for

### The tools
- [Overview dashboard](viewing-performance.md) - Campaign table, sparkle button, data updates, what the numbers mean
- [Google Ads Audit report](google-ads-audit.md) - Score, findings, action plan, PDF, share link
- [Search Optimizer](search-optimizer.md) - The 7 tabs of the Search campaign workspace
- [Performance Max Optimizer](pmax-optimizer.md) - The tabs of the Performance Max workspace
- [Feed Optimizer](feed-optimizer.md) - Titles, custom labels, attributes, categories, push and export
- [Campaign Builder](campaign-builder.md) - Search and Performance Max wizards

### Safety and data
- [Changes and undo](changes-and-undo.md) - Approval, history, rollback, what cannot be undone
- [Data and privacy](data-privacy.md) - What we can see and change, removing data

### Your account
- [Billing](billing.md) - Prices, monthly allowances, Stripe billing page
- [Account and settings](settings.md) - Account, Preferences, Team, Branding, API Keys

`index.md` is the help home page.

Old URLs `google-accounts.html`, `data-syncing.html` and `user-account.html` are small hand-written redirect pages to the pages that replaced them.

## Build

```bash
npm install
node regenerate-all.js
```

`regenerate-all.js` turns every `.md` file in this folder (except `README.md`, `CHANGELOG.md` and `DOCUMENTATION_FEATURE_MAP.md`) into an `.html` file, using `TEMPLATE.html`. The sidebar lives in `TEMPLATE.html`. Commit the `.md` and the generated `.html` together.

To add a page: write `new-page.md`, add it to the sidebar in `TEMPLATE.html` and to `index.md`, then run the build.

To remove a page: delete its `.md` and `.html`, and take it out of `TEMPLATE.html` and `index.md`.

## Writing rules

- Plain English for shop owners. Short sentences, 1 idea each.
- Numbers as digits.
- No em dashes.
- No internal names, no AI model names or versions.
- Only write what the app really does today. Check the app before you write.
- Use the button and tab names exactly as the app shows them.

## Links

- App: [audit.perfoads.com](https://audit.perfoads.com/audit/login)
- Website: [perfoads.com](https://perfoads.com)
- Help: [docs.perfoads.com](https://docs.perfoads.com)

Last updated: September 2026
