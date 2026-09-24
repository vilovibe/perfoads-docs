# Feed Optimizer

The Feed Optimizer improves the product feed you use for Google Shopping and Performance Max. It writes better product titles, sets custom labels, fills in missing product details and checks your feed for problems.

## What you need

- A Google Merchant Center account with your products in it.
- Access to that Merchant Center account from the Google login you use for PerfoAds.

## Get started

1. Click **Feed Optimizer** in the menu.
2. Click **Connect Merchant Center** and pick your account and feed.
3. Click **Fetch feed** to load your products.
4. Link your Google Ads account, so PerfoAds can see how each product sells.

## Your products

Every product is 1 row, with its title, custom labels and results.

- Click a title to edit it. Unsaved changes show a "draft" badge.
- Use the chips and filters to show only products with problems, only drafts, or only 1 label.
- Turn on **Group variants** to fold sizes and colours under their main product.

## AI tools

All AI actions are in the **AI tools** menu. Run them on the whole feed or only on the rows you select.

- **Generate titles:** clearer product titles that match what people search for.
- **Generate labels:** custom labels 0 to 4, for example by best sellers or by margin. Use them to split your campaigns.
- **AI attributes:** fill in missing details like colour, size and description.
- **Map Google categories:** give a Google product category to products that miss one.

## Feed Health and Issues

**Feed Health** checks your feed against Google Shopping's rules. You see what Google would flag, so you can fix it before it costs you.

Open **Issues** to see which products fail which check.

## Label drift

A product's best label can change, for example when its sales go up. PerfoAds calls this drift. A banner lets you **Approve** the new labels or **Reject** them.

## Feed settings

The gear button holds 3 things:

- **Checked attributes:** what Feed Health checks.
- **Feed rules:** simple rules, for example "label out of stock products" or "leave them out of the push".
- **Margins:** your profit margin per category, so labels can follow profit and not only sales.

## Save a version

Save a named version of your titles and labels before a big change. Open **History** to compare or restore an earlier version.

## Send your changes

**One-time setup.** Merchant Center needs 1 extra data source that PerfoAds writes into. In Merchant Center, add a source with "Add product data using API", name it PerfoAds, and tick your main feed. The app shows these steps.

Then you have 2 choices:

- **Push to GMC:** your new titles and labels replace the old ones in Google.
- **Export:** download a file (TSV) and upload it yourself.

**To go back:** click **Withdraw** on a product, or **Withdraw all from GMC** (GMC means Google Merchant Center) to remove every PerfoAds change from Merchant Center. Your drafts stay in PerfoAds. Google needs a few minutes to process it.

**Reject drafts** clears all changes you have not pushed yet. It does not touch Merchant Center.

## Monthly allowance

Per account, each month, your plan includes:

- 1,000 product titles written by AI
- 300 custom label assignments
- 300 products with AI-filled details

See [Billing](/billing.html).
