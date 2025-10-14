# Email Alerts Setup

Stay informed about performance issues and sync status without constantly checking the dashboard.

---

## What Are Email Alerts?

PerfoAds can send you email notifications when:

- **Critical performance issues** are detected (conversions drop, quality score falls, etc.)
- **Sync failures** occur with Google Ads
- **Daily/Weekly summaries** of all alerts across your clients

---

## Setting Up Email Notifications

### 1. Navigate to Settings

1. Click your profile in the top right
2. Select **Settings**
3. Go to **Notifications** tab

### 2. Add Your Email Address

1. Enter your email address
2. Click **Verify Email**
3. Check your inbox for verification email
4. Click the verification link

✅ Your email is now verified and ready to receive alerts!

---

## Email Alert Types

### 🚨 Critical Alerts (Immediate)

Sent instantly when:
- Conversions drop significantly
- Quality scores fall below threshold
- CTR decreases substantially
- Budget issues detected

**When you'll receive:**
- Immediately when the alert is detected
- Only for HIGH and CRITICAL severity alerts
- Maximum 10 per hour to prevent spam

---

### ⚠️ Sync Failure Alerts (Immediate)

Sent when:
- Google Ads sync fails
- OAuth token expires
- API connection issues occur

**When you'll receive:**
- Immediately when sync fails
- Includes error details and retry instructions
- One alert per sync attempt

---

### 📊 Daily Digest (Scheduled)

Sent once per day:
- Summary of all alerts from the past 24 hours
- Grouped by client for easy scanning
- Sync status summary
- Top performers and decliners

**Default time:** 9:00 AM (configurable)

---

### 📈 Weekly Report (Scheduled)

Sent once per week:
- Performance overview across all clients
- Alert trends and patterns
- Sync health summary
- Action items for the week

**Default time:** Monday 9:00 AM

---

## Customizing Your Preferences

### Alert Frequency

Choose how often you want to receive alerts:

**Instant** (Default)
- Critical alerts sent immediately
- Best for: Agencies managing multiple clients
- Best for: Performance-critical campaigns

**Daily Digest**
- All alerts bundled into one email per day
- Best for: Individual consultants
- Best for: Less time-sensitive campaigns

**Weekly Digest**
- Weekly summary of all activity
- Best for: Long-term campaign management
- Best for: High-level oversight

### Severity Threshold

Control which alerts trigger emails:

- **Info** - All alerts including minor issues
- **Low** - Minor performance changes
- **Medium** - Moderate issues (Default)
- **High** - Significant problems only
- **Critical** - Urgent issues only

💡 **Tip:** Start with "Medium" and adjust based on email volume

---

## Digest Timing

### Set Your Preferred Time

1. Go to **Settings → Notifications**
2. Select **Digest Time**
3. Choose your preferred hour (e.g., 9:00 AM)
4. Select your timezone

📧 Digests will be sent at this time in your timezone

### Timezone Support

PerfoAds supports all major timezones:
- Automatically detects your browser timezone
- Can be manually overridden in settings
- Ensures emails arrive at your preferred time

---

## Sync Notification Options

### Sync Failure Notifications

**Enabled (Default)**
- Get notified immediately when syncs fail
- Includes error details and troubleshooting steps

**Disabled**
- Only see sync status in dashboard
- Suitable if you check dashboard regularly

### Sync Success Digest

**Disabled (Default)**
- No notifications for successful syncs

**Enabled**
- Daily summary of all successful syncs
- Useful for peace of mind and reporting

---

## Managing Email Preferences

### Updating Settings

1. Go to **Settings → Notifications**
2. Modify any preferences
3. Changes take effect immediately
4. No need to re-verify email

### Pausing Notifications

**Temporary Pause:**
1. Toggle **Enable Email Notifications** to OFF
2. No emails will be sent
3. Toggle back ON to resume

**Vacation Mode:**
- Pause notifications before extended absence
- Resume when you return
- All alerts still visible in dashboard

### Unsubscribing

**From Individual Email:**
- Click "Unsubscribe" link at bottom of any email
- Instant unsubscribe, no login required

**From Settings:**
1. Go to **Settings → Notifications**
2. Toggle **Enable Email Notifications** to OFF

**Note:** You can re-subscribe anytime from settings

---

## Email Content Examples

### Critical Alert Email

```
Subject: 🚨 Critical Alert: Griffin Motors - Conversion Drop

Griffin Motors
Conversions dropped 45% compared to last week

Metric Details:
- Current: 12 conversions
- Previous: 22 conversions
- Change: -45.5%
- Period: Last 7 days vs Previous 7 days

[View in Dashboard]

────────────────────────────────
Change notification preferences | Unsubscribe
```

### Sync Failure Email

```
Subject: ⚠️ Sync Failed: Griffin Motors

Sync process failed for Griffin Motors

Error Details:
OAuth token has expired. Please reconnect your Google Ads account.

Last Successful Sync: 2 hours ago

[Reconnect Account] [View Sync Logs]

────────────────────────────────
Change notification preferences | Unsubscribe
```

### Daily Digest Email

```
Subject: 📊 Daily Summary: 5 alerts across 3 clients

Daily Performance Summary
October 5, 2025

🚨 Critical Issues (2)
─────────────────────
Griffin Motors
• Conversion drop: -45% (12 vs 22)

House of Friends
• Quality score drop: 8/10 → 4/10

⚠️ Warnings (3)
─────────────────────
Autoserv
• CTR decrease: -12%
• Impression drop: -8%

17 Piętro
• CPC increase: +15%

📊 Sync Status
─────────────────────
✅ 3 successful syncs
❌ 0 failed syncs

[View All Alerts in Dashboard]

────────────────────────────────
Change notification preferences | Unsubscribe
```

---

## Best Practices

### Avoid Email Overload

✅ **Do This:**
- Use Daily Digest for most alerts
- Set severity threshold to Medium or High
- Reserve Instant alerts for critical clients only
- Use Weekly Report for high-level overview

❌ **Avoid:**
- Instant alerts with severity set to "Info"
- Multiple instant alerts for same issue
- Ignoring emails (adjust settings instead)

### Optimize Alert Value

**For Agencies:**
- Use Instant alerts for enterprise clients
- Daily digest for small/medium clients
- Set different thresholds per client type

**For Consultants:**
- Daily digest for all clients
- High severity threshold
- Weekly reports for client meetings

**For In-House Teams:**
- Instant alerts for critical campaigns
- Weekly reports for stakeholder updates
- Sync failure notifications enabled

### Email Management

**Filtering:** Create email filters for PerfoAds alerts
- Filter by: `from:alerts@perfoads.com`
- Create folders: Critical, Daily Digest, Reports
- Star/flag critical alerts for follow-up

**Mobile Access:**
- Configure email on mobile device
- Quick access to dashboard via CTA buttons
- Review alerts on-the-go

---

## Troubleshooting

### Not Receiving Emails?

**Check Spam Folder:**
1. Look for emails from `alerts@perfoads.com`
2. Mark as "Not Spam"
3. Add to contacts/safe senders

**Verify Email Address:**
1. Go to **Settings → Notifications**
2. Check verification status
3. Re-send verification if needed

**Check Preferences:**
1. Ensure **Enable Email Notifications** is ON
2. Check severity threshold isn't too high
3. Verify alert frequency setting

### Receiving Too Many Emails?

**Adjust Settings:**
1. Switch from Instant to Daily Digest
2. Increase severity threshold (Medium → High)
3. Disable sync success notifications

**Temporary Pause:**
1. Toggle notifications OFF temporarily
2. Re-enable when email volume is manageable

### Emails Delayed?

**Digest Emails:**
- Sent at your configured time
- May be delayed up to 5 minutes during high volume

**Instant Alerts:**
- Usually arrive within 30 seconds
- May be delayed up to 2 minutes during peak times

**Check Status:**
- View **Email Activity Log** in settings
- Shows sent/failed/delayed emails

---

## Privacy & Security

### Data Protection

✅ Your email address is:
- Encrypted in our database
- Never shared with third parties
- Used only for PerfoAds notifications

✅ Email logs are:
- Retained for 30 days
- Can be exported on request
- Deletable from settings

### Compliance

**CAN-SPAM Compliant:**
- Clear sender identification
- One-click unsubscribe in every email
- Physical address in footer
- Immediate unsubscribe processing

**GDPR Compliant:**
- Clear consent for communications
- Right to access email data
- Right to delete email data
- Easy opt-out mechanism

### Unsubscribe Options

**One-Click Unsubscribe:**
- Click link in any email
- No login required
- Instant processing

**Preference Center:**
- Adjust settings instead of full unsubscribe
- Choose what you want to receive
- Pause temporarily vs permanent unsubscribe

---

## FAQ

**Q: Can I use different emails for different alerts?**
A: Currently one email per account. Multiple email support coming soon.

**Q: Can I get SMS or Slack notifications?**
A: Email only for now. SMS and Slack integration planned for future release.

**Q: Will I get emails for every client?**
A: Yes, but you can filter by severity threshold to reduce volume. Per-client preferences coming soon.

**Q: Can I customize email templates?**
A: Not yet. Custom templates for agencies planned for future release.

**Q: What if my email bounces?**
A: You'll see a warning in settings. Update your email address to resume notifications.

**Q: Can I schedule a test email?**
A: Yes! Click "Send Test Email" in Settings → Notifications to preview.

---

## Related Documentation

- [Smart Alerts Introduction](../phase-3-ai-features/01-smart-alerts-intro.md)
- [Alert Severity Guide](../phase-3-ai-features/02-alert-severity-guide.md)
- [Sync System Guide](../phase-2-core-features/04-sync-system-guide.md)
- [Global Settings](01-global-settings.md)

---

**Need help?** Contact support or visit [perfoads.com/support](https://www.perfoads.com/support)
