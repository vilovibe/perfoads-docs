# Google Accounts

The Google Accounts page shows all Google accounts you've connected to PerfoAds and manages access to your Google Ads data.

## What Are Google Accounts?

A Google account is the Gmail or Google Workspace account you use to access Google Ads. You need to connect these accounts to PerfoAds so it can sync your advertising data.

## Account Discovery

When you connect a Google account, PerfoAds automatically:

1. **Discovers all accessible Google Ads accounts** linked to that Google account
2. **Shows you which accounts were found**
3. **Lets you select which ones to sync**

You don't need to manually add each Google Ads account - PerfoAds finds them automatically.

## Connecting a Google Account

1. Go to **Google Accounts** in the sidebar
2. Click **"Connect Google Account"**
3. Sign in with your Google credentials
4. Grant PerfoAds permission to access Google Ads data
5. Your account appears in the list immediately

### What Permissions Are Needed?

PerfoAds requests permission to:
- ✅ Read Google Ads data (campaigns, performance, metrics)
- ✅ View account information (to identify which Ads accounts exist)

PerfoAds **CANNOT**:
- ❌ Make changes to your Google Ads campaigns
- ❌ Access your Gmail or other Google services
- ❌ Spend your ad budget or create new campaigns

## Account Status

Each connected account shows:

### Active Account (Green Checkmark)
Everything is working. Data is syncing normally.

### Authentication Issue (Yellow Warning)
The account connection needs to be refreshed. Click "Reconnect" to fix.

### Access Revoked (Red Error)
You've removed PerfoAds access from your Google account settings. Reconnect to restore access.

## Disconnecting a Google Account

Click the **"Disconnect"** button next to any account to:
- Remove PerfoAds access to that Google account
- Stop syncing data from associated Google Ads accounts
- Delete the account from your PerfoAds dashboard

**Note**: This does NOT affect your actual Google Ads campaigns. It only disconnects PerfoAds access.

## Reconnecting an Account

If an account shows an authentication issue:

1. Click **"Reconnect"** or **"Refresh"**
2. Sign in with Google again
3. Grant permissions
4. Connection is restored

Common reasons to reconnect:
- Password changed on Google account
- Permissions were accidentally revoked
- Token expired (happens after 6 months of inactivity)

## Multiple Google Accounts

You can connect multiple Google accounts if:
- You manage ads for multiple businesses
- You have separate work and personal Google Ads accounts
- You're an agency with access to client accounts

Each Google account is shown separately with its own "Disconnect" button.

## Account vs Client Difference

**Google Account**: Your Gmail/Google Workspace login (e.g., john@example.com)

**Client**: A specific Google Ads account discovered from your Google account (e.g., "ABC Company - 123-456-7890")

One Google account can have access to multiple Google Ads accounts (clients).

## Troubleshooting Connection Issues

### "No Google Ads accounts found"
Your Google account doesn't have access to any Google Ads accounts. Either:
- Create a Google Ads account first
- Get added as a user to an existing Google Ads account
- Connect a different Google account that has Ads access

### "Authentication failed"
Try these steps:
1. Clear your browser cookies and cache
2. Try connecting in an incognito/private window
3. Make sure you're signing in with the correct Google account
4. Check that you clicked "Allow" when granting permissions

### "Account keeps disconnecting"
If an account frequently needs reconnection:
- Your Google account may have 2-factor authentication issues
- Another admin may be revoking access
- Contact support if the problem persists
