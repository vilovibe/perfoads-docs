# Changes and undo

PerfoAds can make changes to your Google Ads account. It only does so after you see a preview and approve the change. Most changes can be undone for 30 days.

## Changes are off until you turn them on

When you start, PerfoAds cannot change anything in your account. The account owner turns changes on:

1. Go to **Settings**, then **Team**.
2. Find **Google Ads writes** and click to turn it on.
3. Read the short list of rules, tick "I understand and want to enable writes", and click **Enable writes**.

You need an active plan for changes to work. Turn the switch off at any time to block all changes for your whole team.

This switch also covers changes the Feed Optimizer sends to Merchant Center.

## How a change works

1. You click a button like **Apply fix**, **Apply**, **Deploy changes** or a setting in an optimizer.
2. PerfoAds shows a preview: what will change, from what, to what.
3. You approve it. Only then is it sent to Google Ads.
4. The change is saved in the history, with an undo button where possible.

Nothing runs on its own.

## Safety limits

- At most 10 changes a minute and 50 a day per account.
- Bid adjustments are blocked on campaigns with automatic (Smart) bidding, because Google ignores them there.
- You get a warning before a big budget change.

## Where to find past changes

- **History tab** in the [Search Optimizer](/search-optimizer.html) and the [Performance Max Optimizer](/pmax-optimizer.html): changes to that campaign.
- **Account history** on the [Overview](/viewing-performance.html), when 1 account is picked: all changes to that account, including campaigns made with the [Campaign Builder](/campaign-builder.html).

## Did it work?

14 days and 28 days after a change, PerfoAds compares the days after it with the same number of days before it. You see the result as a label on the change in the History tab:

- **Worked:** the change did what it was meant to. For a negative keyword: the money saved on the blocked searches was worth more than the sales lost. For a bid or target change: the campaign reached its target. For a budget change or a pause: cost per conversion (or return on ad spend) held or got better.
- **Didn't work:** the numbers got worse, or the blocked searches still cost as much.
- **Too early to tell:** not enough clicks or conversions yet. PerfoAds tries again for a few more days.
- **Can't tell:** another budget, bidding or on/off change, or a conversion tracking change, landed in the same weeks, so the result cannot be pinned on this change.

Hover over the label to see the numbers. Changes you undo do not get a label. This costs nothing and uses no AI.

## How to undo

Find the change in the history and click **Rollback**. PerfoAds puts things back the way they were.

You can undo a change for 30 days after it was made.

## What cannot be undone

- **Removals.** Removing a keyword, an ad, an ad group or a campaign is permanent. The preview warns you first.
- **Changes older than 30 days.**
- **Changes where the old setting could not be read.** For example, if PerfoAds could not read your old locations before removing them. The history then says so, and you re-add them by hand.
- **Changes made outside PerfoAds**, for example directly in Google Ads.

Feed changes work differently. To undo a push to Merchant Center, use **Withdraw** in the [Feed Optimizer](/feed-optimizer.html).
