---
title: Troubleshooting General Issues
description: Diagnose and fix common PerfoAds problems including login issues, slow performance, data display problems, and error messages
category: advanced
phase: 4
order: 07
---

# Troubleshooting General Issues

This guide covers common PerfoAds problems beyond sync and OAuth including login issues, slow performance, missing data displays, button clicks not working, and general error messages. Step-by-step solutions help you quickly resolve issues and get back to work.

---

## What You'll Learn

- Diagnosing login problems
- Fixing slow performance issues
- Resolving data display problems
- Troubleshooting unresponsive buttons
- Understanding error messages
- Clearing cache and cookies safely
- Browser compatibility issues
- When to contact support

**Time needed**: 12 minutes to read

---

## Quick Troubleshooting Checklist

**Before Deep Diagnostics, Try These**:

1. **Hard Refresh**: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
2. **Check Internet**: Open another website to verify connection
3. **Clear Cache**: Browser settings → Clear browsing data
4. **Try Different Browser**: Chrome, Firefox, Edge, Safari
5. **Check Browser Console**: F12 → Console tab → Look for red errors

**⏱️ Time**: 2-3 minutes to run all 5 checks

**Fixes**: 60% of issues resolved by these steps alone

[Screenshot: Browser console showing common error vs no errors]
*Red errors in console indicate problems. No errors = healthy*

---

## Problem 1: Can't Log In

### Symptom Set A: Login Button Not Working

**Symptoms**:
- Click **Log In with Google** button
- Nothing happens
- No redirect to Google sign-in

---

#### Cause 1: Popup Blocked

**Diagnostic**: Browser blocked the Google sign-in popup window

**Solution**:

**Chrome**:
1. Look for blocked popup icon in address bar (right side)
2. Click icon
3. Select "Always allow popups from app.aiperfoads.xyz"
4. Retry login

**Firefox**:
1. Preferences → Privacy & Security → Permissions → Popups
2. Add exception for app.aiperfoads.xyz
3. Retry login

**Safari**:
1. Safari → Preferences → Websites → Pop-up Windows
2. For app.aiperfoads.xyz, select "Allow"
3. Retry login

[Screenshot: Browser popup blocker notification]
*Allow popups for PerfoAds to enable Google sign-in*

---

#### Cause 2: Third-Party Cookies Disabled

**Diagnostic**: Browser blocks cookies needed for OAuth

**Solution**:

**Chrome**:
1. Settings → Privacy and Security → Third-party cookies
2. Select "Allow third-party cookies"
3. OR add exception for [*.]googleapis.com and [*.]aiperfoads.xyz
4. Retry login

**Firefox**:
1. Preferences → Privacy & Security
2. Change "Enhanced Tracking Protection" to "Standard"
3. OR add exception for site
4. Retry login

**Safari**:
1. Safari → Preferences → Privacy
2. Uncheck "Prevent cross-site tracking" (temporarily)
3. Login
4. Re-enable after successful login

---

### Symptom Set B: "Session Expired" After Login

**Symptoms**:
- Successfully log in with Google
- Redirect to dashboard
- Immediately see "Session expired, please log in again"

---

#### Cause: Cookie Storage Issue

**Solution**:

**Step 1: Clear Site Data**
1. F12 → Application tab → Storage → Clear site data
2. Refresh page
3. Retry login

**Step 2: Check Cookie Settings**
1. Browser must allow cookies for aiperfoads.xyz
2. Settings → Privacy → Cookies → Allow
3. Retry login

**Step 3: Disable Extensions Temporarily**
1. Privacy extensions (uBlock, Privacy Badger) may interfere
2. Disable extensions
3. Retry login
4. Re-enable after successful login

---

### Symptom Set C: Stuck on "Logging in..."

**Symptoms**:
- Click login button
- Google sign-in popup opens
- Sign in successful
- Redirects back
- Shows "Logging in..." spinner indefinitely

---

#### Cause: Backend Connection Issue

**Solution**:

**Step 1: Wait 30 Seconds**
- Sometimes slow network causes delay
- If resolves: All good

**Step 2: Hard Refresh**
- Ctrl+Shift+R or Cmd+Shift+R
- Clears stuck state

**Step 3: Clear Cookies and Retry**
1. Settings → Privacy → Clear cookies
2. Refresh page
3. Retry login from scratch

**Step 4: Check System Status**
- Visit: https://status.aiperfoads.xyz (if available)
- Or check: https://www.githubstatus.com/ (backend hosted on Render)
- If system down: Wait for resolution

---

## Problem 2: Slow Performance / Pages Load Slowly

### Symptoms

- Pages take >5 seconds to load
- Clicks feel laggy
- Scrolling stutters
- Dashboards slow to render

---

### Cause 1: Too Many Browser Tabs

**Diagnostic**: 20+ browser tabs open

**Solution**:
- Close unused tabs
- Keep <10 tabs open for best performance
- Chrome Task Manager: Shift+Esc → See memory usage

---

### Cause 2: Large Data Set Loading

**Scenario**:
```
Client with:
- 100+ campaigns
- 50,000+ keywords
- Viewing "All Time" date range
```

**Expected**: Pages will load slower (normal behavior)

**Optimization**:
1. Narrow date range (use Last 30 Days instead of All Time)
2. Filter campaigns (show only active campaigns)
3. Paginate keywords (show 100 at a time instead of all)

**Why**: Less data = faster rendering

---

### Cause 3: Browser Cache Bloated

**Solution**: Clear cache

**Chrome**:
1. Settings → Privacy → Clear browsing data
2. Select: Cached images and files
3. Time range: Last 7 days
4. Click Clear data
5. Refresh PerfoAds

**Firefox**:
1. Preferences → Privacy & Security → Cookies and Site Data
2. Click Clear Data
3. Check only "Cached Web Content"
4. Clear
5. Refresh

**Result**: Fresh cache, faster loads

---

### Cause 4: Slow Internet Connection

**Diagnostic**: Run speed test at https://fast.com

**Minimum Required**: 5 Mbps download

**Solution** (if slow):
- Close bandwidth-heavy applications (video streaming, downloads)
- Move closer to Wi-Fi router
- Connect via Ethernet if possible
- Contact ISP if persistently slow

---

## Problem 3: Data Not Displaying

### Symptom Set A: Blank Dashboard (No Data)

**Symptoms**:
- Dashboard shows no metrics
- Empty cards or "No data available"
- Client List empty

---

#### Cause 1: No Clients Added

**Diagnostic**: First-time user or all clients deleted

**Solution**:
1. Go to Client List
2. Click **Add Client** button
3. Follow onboarding wizard
4. See: [Adding First Client](/docs/adding-first-client)

---

#### Cause 2: Filters Excluding All Data

**Diagnostic**: Date range or status filter set too narrow

**Solution**:

1. Check date range selector (top right)
   - If set to custom range with no data: Expand range
2. Check status filter
   - If "Paused Only" selected: Change to "All" or "Active"
3. Check search box
   - If search term entered: Clear it
4. Click "Reset Filters" button (if available)

---

### Symptom Set B: Metrics Show $0 or Zero Values

**Symptoms**:
- Dashboard loads
- All metrics show $0.00, 0 clicks, 0 impressions

---

#### Cause 1: Never Synced

**Diagnostic**: "Last Sync" shows "Never" or very old date

**Solution**:
1. Click client's Actions menu
2. Select **Sync Now**
3. Wait 2-5 minutes
4. Refresh dashboard
5. Data should appear

---

#### Cause 2: Selected Date Range Has No Activity

**Diagnostic**:
```
Viewing: Last 7 days
Client: New account, campaigns launched yesterday
Result: Only 1 day of data, rest shows zeros
```

**Not a Problem**: Account genuinely has no data for most of selected range

**Solution**: Adjust date range to match campaign activity period

---

### Symptom Set C: Some Clients Missing from List

**Symptoms**:
- Added 10 clients
- Client List only shows 8
- Missing clients existed before

---

#### Cause: Archived Clients Hidden

**Solution**:
1. Client List page
2. Look for "Show Archived" toggle or filter
3. Enable "Show Archived"
4. Missing clients appear (with "Archived" badge)

**To Unarchive**:
1. Click archived client
2. Actions → Unarchive
3. Client returns to main list

---

## Problem 4: Buttons Not Working

### Symptom: Click Button, Nothing Happens

**Affected Buttons**: Sync Now, Save Settings, Export, Add Client, etc.

---

### Cause 1: JavaScript Error

**Diagnostic**:
1. Open browser console: F12
2. Click Console tab
3. Click the button that's not working
4. Look for red error messages

**Common Errors**:
```
"Failed to fetch" → Backend connection issue
"Unauthorized" → Session expired, log in again
"Network error" → Internet connection lost
```

**Solution by Error**:
- "Failed to fetch": Check internet, retry
- "Unauthorized": Refresh page, log in again
- Other errors: Screenshot and contact support

---

### Cause 2: Page Not Fully Loaded

**Diagnostic**: Clicked button while page still loading

**Solution**:
- Wait for page to fully load (loading spinner disappears)
- Retry button click

**Prevention**: Don't click buttons immediately after page load. Wait 2-3 seconds.

---

### Cause 3: Session Expired

**Diagnostic**:
```
Button click shows: "Session expired"
Or: Redirects to login page
```

**Solution**:
1. Log in again
2. Return to page
3. Retry action

**Prevention**: Sessions last 30 days. If you see this often, check browser settings allow cookies to persist.

---

## Problem 5: Error Messages

### Error: "Failed to load data. Please try again."

**Meaning**: Backend API request failed

**Solutions**:
1. Refresh page
2. Check internet connection
3. If persists >5 minutes: Contact support (possible backend issue)

---

### Error: "Unauthorized"

**Meaning**: Session invalid or expired

**Solution**:
1. Refresh page
2. If persists: Log out → Log back in
3. Should resolve

---

### Error: "Too many requests"

**Meaning**: Rate limited (clicking too fast or too many API calls)

**Solution**:
1. Wait 1-2 minutes
2. Retry action
3. Avoid rapid-fire button clicks

---

### Error: "Network error"

**Meaning**: Can't reach backend API

**Solutions**:
1. Check internet connection (open another website)
2. Try different network (switch from Wi-Fi to mobile hotspot)
3. Check firewall settings (may be blocking API requests)
4. If persists: Contact IT (corporate firewall may block API domain)

---

### Error: "Something went wrong"

**Meaning**: Generic error (catch-all)

**Solutions**:
1. Hard refresh: Ctrl+Shift+R
2. Check browser console for specific error
3. Clear cache and retry
4. If persists: Contact support with screenshot

---

## Problem 6: Charts Not Displaying

### Symptoms

- Performance charts show blank space
- No data visualization
- Chart placeholders visible but empty

---

### Cause 1: No Data for Date Range

**Diagnostic**: Selected date range has no activity

**Solution**: Expand date range or check campaign launch date

---

### Cause 2: Ad Blocker Interfering

**Diagnostic**: Ad blocker extension blocking chart library

**Solution**:
1. Disable ad blocker for aiperfoads.xyz
2. Refresh page
3. Charts should appear

**Why**: Some ad blockers block charting libraries (false positive)

---

### Cause 3: Browser Compatibility

**Diagnostic**: Using outdated browser version

**Solution**:
- Update browser to latest version
- Supported browsers:
  - Chrome 90+
  - Firefox 88+
  - Safari 14+
  - Edge 90+

---

## Problem 7: Mobile/Responsive Issues

### Symptoms

- Layout broken on tablet or mobile
- Text overlapping
- Buttons not clickable

---

### Cause: Not Optimized for Small Screens Yet

**Current State**: PerfoAds optimized for desktop (1280px+ width)

**Mobile Support**: Limited

**Solution (Temporary)**:
1. Use desktop browser for best experience
2. Tablet in landscape mode: Works better than portrait
3. Mobile: Basic navigation works, but full features require desktop

**Roadmap**: Full mobile optimization planned for Q2 2026

---

## Browser Compatibility

### Fully Supported Browsers

**Recommended**:
- Chrome 90+ (best performance)
- Firefox 88+
- Edge 90+
- Safari 14+

**Known Issues**:
- Internet Explorer: Not supported (use Edge instead)
- Opera: Mostly works (occasional layout glitches)

---

## Clearing Cache and Cookies Safely

### Why Clear Cache?

**Benefits**:
- Fixes stale data display
- Resolves UI glitches
- Speeds up page loads

**Won't Lose**:
- Login session (may need to log in again)
- Saved clients or data
- Settings

---

### How to Clear Cache Without Losing Everything

**Chrome (Safe Method)**:
1. Settings → Privacy → Clear browsing data
2. Time range: Last 7 days (not "All time")
3. Check:
   - ✅ Cached images and files
   - ✅ Cookies and other site data
4. Uncheck:
   - ☐ Browsing history
   - ☐ Download history
5. Click Clear data

**Result**: Fresh cache, but minimal disruption

---

## When to Contact Support

**Contact Support If**:

1. **Login fails** after trying all solutions (3+ attempts)
2. **Persistent errors** that don't resolve with refresh/cache clear
3. **Data inconsistencies** (data in Google Ads but not syncing)
4. **Missing features** (expected buttons or pages not appearing)
5. **System-wide issues** (all users in your team affected)

**Don't Contact Support For**:
- First occurrence of an error (try troubleshooting first)
- Slow internet on your end
- Learning how to use a feature (use documentation)

---

### What to Provide to Support

**Include in Support Request**:

1. **Description**: What were you trying to do?
2. **Error Message**: Exact text (screenshot best)
3. **Browser**: Chrome 120, Firefox 115, etc.
4. **Steps to Reproduce**: What did you click/do before error?
5. **Troubleshooting Tried**: What solutions did you already try?
6. **Impact**: Is this blocking your work?

**Example Good Support Request**:
```
Subject: Can't sync Client ID 123

Description:
Trying to sync "Acme Corp" (Customer ID 123-456-7890).
Click "Sync Now", get error "Failed to fetch".

Error Screenshot: [attached]

Browser: Chrome 120 on Windows 11

Steps Tried:
- Refreshed page
- Cleared cache
- Tried different browser (Firefox, same error)
- OAuth status shows Connected

Impact: Blocking. Client needs updated data for meeting today.
```

---

## Preventive Maintenance Tips

### Weekly Checks

**Every Monday** (5 minutes):
1. Check OAuth status: Settings → Google Ads Connections
2. Verify last sync times: Client List → "Last Sync" column
3. Spot-check 2-3 clients for data freshness

**Catches Issues Early**: Before they become urgent problems

---

### Monthly Browser Cleanup

**First of Month** (10 minutes):
1. Clear browser cache (last 30 days)
2. Update browser to latest version
3. Review and disable unused extensions
4. Check storage usage (if getting low, clear old downloads)

**Benefit**: Consistent performance, fewer errors

---

### Keep Browser Updated

**Auto-Update On**: Modern browsers auto-update, ensure this is enabled

**Why**: Security patches, performance improvements, bug fixes

**Check Version**:
- Chrome: chrome://settings/help
- Firefox: firefox → Help → About Firefox
- Safari: Updates with macOS

---

## Common Questions

**Q: Why do I need to clear cache so often?**
A: You shouldn't need to regularly. Only when issues arise. If clearing cache fixes issues repeatedly, contact support (may indicate deeper problem).

**Q: Will clearing cookies log me out of everything?**
A: Yes, from sites stored in that time range. Selective clearing (last 7 days) minimizes impact.

**Q: Can I use PerfoAds on multiple devices?**
A: Yes. Login works across desktop, laptop, tablet. Settings sync across devices.

**Q: What if I forgot which Google account I used to log in?**
A: Check browser saved passwords or contact support with account details for verification.

**Q: Is there a status page for system outages?**
A: Check https://status.render.com (our hosting provider) for infrastructure status.

---

## Next Steps

Resolve specific issues with these specialized guides:

- **[Troubleshooting Sync Issues](/docs/troubleshooting-sync)** - Fix data sync problems
- **[Troubleshooting OAuth](/docs/troubleshooting-oauth)** - Fix Google Ads connection
- **[Understanding Dashboard](/docs/understanding-dashboard)** - Learn dashboard features
- **[Quick Start Guide](/docs/quick-start-guide)** - Basic usage guide

---

**Try quick fixes first** before deep troubleshooting

**Check browser console** for specific error messages

**Contact support** if issue persists after trying documented solutions

**Last Updated**: October 4, 2025
