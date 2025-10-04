---
title: Troubleshooting OAuth
description: Fix Google Ads OAuth connection issues including expired tokens, permission errors, and account access problems
category: advanced
phase: 4
order: 06
---

# Troubleshooting OAuth

OAuth connects PerfoAds to your Google Ads accounts securely. When OAuth breaks, syncs fail and data stops updating. This guide helps you diagnose and fix OAuth issues including expired tokens, permission errors, missing accounts, and connection failures. Follow step-by-step solutions to restore Google Ads access.

---

## What You'll Learn

- Understanding OAuth status indicators
- Diagnosing OAuth problems quickly
- Fixing expired or invalid tokens
- Resolving permission errors
- Troubleshooting missing accounts
- Reconnecting OAuth correctly
- Preventing future OAuth issues
- When OAuth auto-heals vs requires intervention

**Time needed**: 10 minutes to read

---

## OAuth Quick Health Check

**Check OAuth Status First**:

1. Go to Settings → Google Ads Connections
2. Look for status indicator:

**✅ Healthy**:
```
Status: Connected
Token Valid: 45 days remaining
Last Refresh: 2 hours ago
```

**⚠️ Warning**:
```
Status: Connected
Token Valid: 3 days remaining (expiring soon)
Last Refresh: 15 days ago
```

**❌ Critical**:
```
Status: Disconnected
Token Valid: Expired
Last Refresh: Failed
```

[Screenshot: OAuth status showing healthy, warning, and critical states]
*Green = healthy, Yellow = needs attention soon, Red = broken now*

---

## What Is OAuth?

**Simple Explanation**: OAuth is how PerfoAds gets permission to read your Google Ads data without needing your password.

**How It Works**:
1. You click "Connect Google Ads"
2. Google asks: "Allow PerfoAds to access your Google Ads accounts?"
3. You click "Allow"
4. Google gives PerfoAds a special access token
5. Token is valid for 60 days (Google auto-refreshes it)

**Self-Healing**: System automatically refreshes tokens before expiration. You usually don't need to do anything.

**When It Breaks**: Google account password changed, permissions revoked, or token expires unexpectedly.

---

## Problem 1: OAuth Shows "Disconnected"

### Symptoms

- OAuth status: ❌ Disconnected
- All syncs failing with "Invalid credentials" or "OAuth error"
- Red X icon next to Google Ads Connections

---

### Cause 1: Token Expired

**Diagnostic**:
```
OAuth Status: Disconnected
Token Valid: Expired
Error: "Refresh token expired or revoked"
```

**Why It Happens**:
- Token reached 60-day limit without refresh
- Auto-refresh failed due to Google account change
- User revoked app permissions manually

**Solution**:

**Step 1: Reconnect OAuth**
1. Go to Settings → Google Ads Connections
2. Click **Reconnect OAuth** button
3. You'll redirect to Google sign-in

**Step 2: Choose Correct Google Account**
- Use the Google account that has access to your Google Ads accounts
- If you manage multiple Google accounts, choose the right one
- Not sure? Check Google Ads → Settings → Account Access

**Step 3: Grant Permissions**
- Google shows: "PerfoAds wants to access your Google Ads"
- Review permissions (read-only access to campaigns, keywords, metrics)
- Click **Allow**

**Step 4: Verify Connection**
1. Redirects back to PerfoAds
2. OAuth Status should now show: ✅ Connected
3. Click **Refresh Discovery** to find accounts

**Step 5: Test**
1. Go to Client List
2. Pick a client
3. Actions → Sync Now
4. Sync should complete successfully

**Expected Timeline**: 2-3 minutes total

---

### Cause 2: Google Account Password Changed

**Diagnostic**:
```
OAuth Status: Disconnected
Recent Event: Changed Google password last week
```

**Why It Happens**: Google security policy revokes OAuth tokens when password changes

**Solution**: Same as Cause 1 (Reconnect OAuth)

**Prevention**: After changing Google password, immediately reconnect OAuth in PerfoAds

---

### Cause 3: App Permissions Revoked

**Diagnostic**:
```
OAuth Status: Disconnected
User manually removed PerfoAds from Google account permissions
```

**Where This Happens**: Google Account → Security → Third-party apps → PerfoAds → Remove Access

**Solution**: Reconnect OAuth (same steps as Cause 1)

**Prevention**: Don't revoke app access in Google unless you no longer use PerfoAds

---

## Problem 2: OAuth Connected But Accounts Missing

### Symptoms

- OAuth status: ✅ Connected
- Syncs work for some clients
- Other Google Ads accounts not showing in dropdown when adding client

---

### Cause 1: Stale Discovery Cache

**Explanation**: Discovery cache lists available accounts. Cached for 24 hours.

**Scenario**:
```
Yesterday: Had access to 5 Google Ads accounts
Today: Gained access to 6th account
Dropdown: Still only shows 5 accounts
```

**Solution**:

1. Go to Settings → Google Ads Connections
2. Click **Refresh Discovery** button
3. Wait 5-10 seconds
4. Discovery runs and finds all accounts you have access to
5. Go to Add Client dropdown
6. New account should now appear

**When to Refresh Discovery**:
- After gaining access to new Google Ads account
- After OAuth reconnection
- If account list looks outdated

---

### Cause 2: Missing Account Access

**Diagnostic**:
```
Account expected but not showing after Discovery refresh
```

**Check Google Ads Access**:

1. Log into Google Ads: https://ads.google.com
2. Click account switcher (top left)
3. Can you see the missing account?

**If Yes (you see it)**:
- Refresh Discovery in PerfoAds
- Should appear now

**If No (you don't see it)**:
- You don't have access
- Contact account owner to grant access
- Account owner: Google Ads → Settings → Account Access → Add User

**Access Level Required**: Standard or Admin (read-only insufficient for sync)

---

### Cause 3: Wrong Google Account Used for OAuth

**Scenario**:
```
Google Ads Account A: Managed by google-user-1@company.com
Google Ads Account B: Managed by google-user-2@company.com

OAuth Connected With: google-user-1@company.com

Result:
- Account A visible ✅
- Account B missing ❌
```

**Solution**:

**Option 1: Reconnect OAuth with Correct Account**
1. Disconnect OAuth
2. Reconnect
3. Choose google-user-2@company.com
4. Now Account B visible

**Option 2: Grant Access to Other Google Account** (recommended)
1. Log into Google Ads Account B
2. Settings → Account Access
3. Add google-user-1@company.com as Standard or Admin
4. Now both accounts visible with one OAuth connection

---

## Problem 3: Permission Denied Errors

### Symptoms

- OAuth: ✅ Connected
- Sync fails with "Permission denied" or "Insufficient permissions"
- Account appears in dropdown but sync doesn't work

---

### Cause: Read-Only Access

**Google Ads Access Levels**:
- **Admin**: Full access
- **Standard**: Can view and edit (what PerfoAds needs)
- **Read-only**: Can only view (insufficient)

**Diagnostic**:
```
Sync Error: "Permission denied for customer XXX-XXX-XXXX"
Access Level: Read-only
```

**Solution**:

1. Contact Google Ads account owner
2. Request upgrade from Read-only to Standard access
3. Account owner:
   - Google Ads → Settings → Account Access
   - Find your email
   - Change access level to Standard
   - Save
4. In PerfoAds:
   - Wait 5 minutes for Google to propagate change
   - Retry sync
   - Should work now

**Why Standard Required**: PerfoAds needs Standard to access full performance data and metrics

---

## Problem 4: Token Expiring Soon Warning

### Symptoms

- OAuth status: ⚠️ Connected (warning)
- Message: "Token expires in X days"
- X < 7 days

---

### This is Normal (Self-Healing)

**What It Means**: System will auto-refresh token before expiration

**Your Action Required**: None (usually)

**How Self-Healing Works**:
```
Day 0: Token valid for 60 days
Day 53: System detects 7 days remaining
Day 54: System auto-refreshes token
Day 54: New token valid for 60 more days
```

---

### When to Act

**If Warning Persists >3 Days**:
```
Day 1: Warning "7 days remaining"
Day 4: Still shows "4 days remaining" (auto-refresh hasn't happened)
```

**Manual Refresh**:
1. Settings → Google Ads Connections
2. Click **Reconnect OAuth** (pre-emptive refresh)
3. Complete OAuth flow
4. Token renewed for 60 days

**Why Manual**: Auto-refresh occasionally fails. Better safe than sorry.

---

## Problem 5: OAuth Works But Sync Still Fails

### Symptoms

- OAuth: ✅ Connected
- Token: Valid
- Discovery: Accounts found
- Sync: Still failing with errors

---

### Possible Causes

**Not an OAuth Issue**:
1. Customer ID incorrect → Fix: Update Customer ID in Client Settings
2. Google Ads account suspended → Fix: Resolve suspension with Google
3. Rate limiting → Fix: Wait and retry
4. Network issues → Fix: Check internet connection

**See**: [Troubleshooting Sync Issues](/docs/troubleshooting-sync) for non-OAuth sync problems

---

## Reconnecting OAuth: Best Practices

### Step-by-Step Guide

**Step 1: Prepare**
- Know which Google account has access to your Google Ads accounts
- Have that Google account's password ready
- Close other Google account sessions (avoid wrong account selection)

**Step 2: Disconnect Old OAuth** (optional but recommended)
1. Settings → Google Ads Connections
2. Click **Disconnect** button
3. Confirm disconnection

**Step 3: Reconnect OAuth**
1. Click **Connect Google Ads** button
2. Select Google account (choose carefully!)
3. Google asks for permissions
4. Review permissions (should be read-only access)
5. Click **Allow**

**Step 4: Verify**
1. Redirects to PerfoAds
2. Check OAuth status: ✅ Connected
3. Check token valid: "60 days" or similar

**Step 5: Refresh Discovery**
1. Click **Refresh Discovery**
2. Wait for completion
3. Accounts list populates

**Step 6: Test Sync**
1. Go to Client List
2. Select a client
3. Actions → Sync Now
4. Verify sync completes successfully

**Total Time**: 3-5 minutes

[Screenshot: OAuth reconnection flow from start to finish]
*Follow these steps for successful OAuth reconnection*

---

## Understanding OAuth Scopes

### What Permissions Does PerfoAds Need?

**Required Scopes** (Google's terminology):

1. **`https://www.googleapis.com/auth/adwords`**
   - Read access to Google Ads data
   - Required for syncing campaigns, keywords, performance

**What PerfoAds Does NOT Have**:
- Cannot modify campaigns
- Cannot change bids
- Cannot pause/enable ads
- Cannot create campaigns
- Cannot access billing info
- Cannot access other Google services (Gmail, Drive, etc.)

**Read-Only Access**: PerfoAds can only read data, never modify your Google Ads account

---

## Preventing OAuth Issues

### Best Practices

**1. Don't Change Google Password Without Updating OAuth**
```
Bad: Change Google password → Forget to reconnect OAuth → OAuth breaks 3 days later
Good: Change Google password → Immediately reconnect OAuth in PerfoAds
```

**2. Monitor OAuth Health Monthly**
```
Monthly Checklist:
- Settings → Google Ads Connections
- Check OAuth status: Should be ✅ Connected
- Check token expiration: Should show 30+ days
- If <30 days: System should auto-refresh soon, monitor
```

**3. Don't Revoke App Access in Google**
```
Google Account → Security → Third-party apps → PerfoAds
Do Not Click: "Remove Access" (unless you're done using PerfoAds)
```

**4. Use Dedicated Google Account for Automation**
```
Personal Account: john.personal@gmail.com
Business Account: john@agency.com (use this for OAuth)

Why: Business account less likely to change, more stable
```

---

## When OAuth Auto-Heals

### Self-Healing Scenarios

**Auto-Fixed** (no action required):
- Token approaching expiration (refreshes at 7 days remaining)
- Temporary Google API issues (retries automatically)
- Network blips during token refresh (retries)

**Your Intervention Required**:
- Token already expired (must reconnect)
- Google password changed (must reconnect)
- App permissions revoked (must reconnect)
- Wrong Google account used (must reconnect with correct account)

**How to Tell**: If OAuth status shows ❌ Disconnected, you must act. If ⚠️ Warning, system likely handling it.

---

## Error Messages Decoded

### "Invalid grant"

**Meaning**: Refresh token no longer valid

**Fix**: Reconnect OAuth

**Common Cause**: Google password changed or token expired

---

### "Access denied"

**Meaning**: User declined OAuth permissions or insufficient access level

**Fix**:
- Reconnect OAuth and click "Allow" this time
- OR request Standard access level for account

---

### "Redirect URI mismatch"

**Meaning**: OAuth callback URL doesn't match registered URL (rare)

**Fix**: Contact support (this is a configuration issue on PerfoAds's side)

---

### "Invalid client"

**Meaning**: PerfoAds's Google OAuth credentials invalid (extremely rare)

**Fix**: Contact support immediately (system-wide OAuth issue)

---

## Advanced Troubleshooting

### Check Google Account Permissions

**View Apps with Access**:

1. Go to: https://myaccount.google.com/permissions
2. Find "PerfoAds" in list
3. Check:
   - Access granted? (should be)
   - Permissions: "See your Google Ads data"
   - Last accessed: Should be recent

**If Not Listed**: OAuth not connected, reconnect

**If Listed But Sync Failing**: Remove access, then reconnect OAuth fresh

---

### Browser Console Errors

**For Advanced Users**:

1. Open browser console: F12
2. Go to Console tab
3. Click "Connect Google Ads"
4. Watch for errors during OAuth flow
5. Common errors:
   - Popup blocked: Allow popups for this site
   - Cookies disabled: Enable cookies
   - CORS error: Contact support

---

## Common Questions

**Q: How often do I need to reconnect OAuth?**
A: Almost never. System auto-refreshes tokens. Only reconnect if status shows ❌ Disconnected.

**Q: Can I use multiple Google accounts for OAuth?**
A: Only one OAuth connection at a time. Choose account with access to most Google Ads accounts.

**Q: What if I don't see "Allow" button during OAuth?**
A: Google may show "Cancel" only if app already has access. Check Settings → Google Ads Connections for status.

**Q: Does reconnecting OAuth affect existing clients?**
A: No. Clients remain, data preserved. Only connection refreshes.

**Q: Can I revoke OAuth access temporarily?**
A: Yes, but all syncs will fail until reconnected. Not recommended unless you're stopping use of PerfoAds.

**Q: What data does PerfoAds store?**
A: Only the OAuth token (securely encrypted) and your Google Ads data after sync. PerfoAds never stores your Google password.

---

## When to Contact Support

**Contact Support If**:

1. **Reconnected OAuth 3+ times** but still shows Disconnected
2. **"Invalid client" error** (system-wide OAuth issue)
3. **Accounts not appearing** after multiple Discovery refreshes and verified access
4. **OAuth flow broken** (redirects fail, errors during authorization)
5. **Token won't refresh** despite being <7 days from expiration

**Provide to Support**:
- Screenshot of OAuth status
- Error message (exact text)
- Steps you've tried
- Google account email (used for OAuth)

---

## Next Steps

Fix Google Ads connection issues with these guides:

- **[Troubleshooting Sync Issues](/docs/troubleshooting-sync)** - Fix sync problems after OAuth working
- **[Smart Sync Explained](/docs/smart-sync-explained)** - How sync works with OAuth
- **[Global Settings](/docs/global-settings)** - Configure OAuth and connections
- **[Adding First Client](/docs/adding-first-client)** - OAuth setup during client onboarding

---

**Monitor OAuth monthly** to catch issues before they break

**Reconnect immediately** after changing Google password

**Use stable Google account** for business automation

**Last Updated**: October 4, 2025
