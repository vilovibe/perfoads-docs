---
title: Global Settings
description: Configure account-wide settings for Business Profile, sync scheduling, Google Ads connections, and user preferences
category: advanced
phase: 4
order: 01
---

# Global Settings

Global Settings is your control panel for account-wide configuration. Here you'll set up your Business Profile, configure sync schedules, manage Google Ads connections, and control user preferences that apply across all clients. This guide shows you every global setting and how to use it.

---

## What You'll Learn

- Accessing Global Settings
- Business Profile configuration
- Sync Settings management
- Google Ads Connections overview
- Email Notification preferences (coming soon)
- When to use global vs per-client settings
- Best practices for each setting

**Time needed**: 12 minutes to read

---

## What Are Global Settings?

**Definition**: Account-wide configurations that apply to all clients unless overridden by per-client settings

**Location**: Navigate to `/settings` from the main navigation menu

**Purpose**:
- Set default sync behavior for all clients
- Configure business information for AI context
- Manage Google Ads OAuth connections
- Control notification preferences

[Screenshot: Global Settings page overview showing all sections]
*The Settings page organizes options into clear sections*

---

## Accessing Global Settings

**How to Navigate**:

1. Click **Settings** in the main navigation (top right)
2. You'll land on the Global Settings page
3. Settings are organized into collapsible sections

**Sections**:
- Business Profile
- Sync Settings
- Google Ads Connections
- Email Notifications (coming soon)

---

## Section 1: Business Profile

### What Is It?

**Purpose**: Company information and business context that AI uses to provide better recommendations

**Why It Matters**: AI Alert severity and AI Chat recommendations are calibrated based on your business profile. The more complete your profile, the better AI performs (3-5x improvement).

---

### Business Profile Fields

#### Company Name

**What**: Your agency or company name

**Used For**:
- Display in interface
- Client-facing reports
- Email communications

**Example**: `Digital Marketing Pros`, `Smith Agency`

---

#### Company Logo

**What**: Your company logo (PNG, JPG, SVG)

**Used For**:
- Branding in interface
- Client reports
- Exported documents

**Specs**:
- Max file size: 2MB
- Recommended: 200x200 pixels minimum
- Supports: PNG, JPG, SVG

**How to Upload**:
1. Click **Upload Logo** button
2. Select image file from your computer
3. Logo appears immediately after upload

---

#### Industry

**What**: Your primary business vertical

**Options**:
- Marketing Agency
- In-House Marketing Team
- E-commerce Business
- Lead Generation
- SaaS Company
- Local Services
- Other

**Why It Matters**: AI uses industry context to provide relevant benchmarks and recommendations

---

#### Business Goals

**What**: Your primary objectives for using PerfoAds

**Purpose**: AI prioritizes recommendations aligned with your goals

**Examples**:
```
"Maximize ROAS for e-commerce clients"
"Generate qualified B2B leads under $80 CPA"
"Scale monthly ad spend from $50K to $150K"
"Improve Quality Scores across all accounts"
```

**Best Practice**: Be specific. Vague goals like "improve performance" are less useful than "reduce CPA by 15% while maintaining lead volume."

---

#### Target Audience

**What**: Description of your typical clients or customer base

**Purpose**: AI recommendations consider your audience type

**Examples**:
```
"SMB local service businesses ($2K-$10K/month budgets)"
"Enterprise B2B SaaS companies"
"E-commerce brands selling consumer goods"
"Professional services (lawyers, accountants, consultants)"
```

---

#### Company Size

**What**: Number of employees in your organization

**Options**:
- Solo (1 person)
- Small (2-10 people)
- Medium (11-50 people)
- Large (51-200 people)
- Enterprise (201+ people)

**Why It Matters**: Affects recommendations for workflow automation and team collaboration features

---

### Editing Business Profile

**Steps**:

1. Navigate to Settings → Business Profile
2. Click **Edit Profile** button
3. Update fields you want to change
4. Click **Save Changes**

**Changes Take Effect**: Immediately for all AI interactions

[Screenshot: Business Profile edit form with all fields]
*Complete your Business Profile for better AI performance*

---

## Section 2: Sync Settings

### What Are Sync Settings?

**Purpose**: Control when and how often Google Ads data syncs for all clients

**Applies To**: All clients by default (unless overridden per-client)

**Key Settings**:
- Auto-Sync enable/disable
- Sync time selection
- Timezone configuration

---

### Auto-Sync Toggle

**What**: Automatically sync all clients once per day

**Options**:
- **Enabled** (default): All clients sync daily at selected time
- **Disabled**: Only manual sync available

**When to Disable**:
- Testing new clients before adding to auto-sync
- Managing sync manually for specific workflows
- Temporarily pausing all automated syncs

**How to Toggle**:
1. Go to Settings → Sync Settings
2. Toggle **Enable Auto-Sync** switch
3. Save (changes apply next sync cycle)

---

### Sync Time Selection

**What**: Choose what time of day auto-sync runs

**Default**: 2:00 AM (local timezone)

**Options**: Any hour from 12:00 AM to 11:00 PM

**How to Choose Best Time**:

**Good Times**:
- **2:00 AM - 6:00 AM**: Off-peak hours, no user activity
- **During business downtime**: When you won't be viewing reports

**Bad Times**:
- **9:00 AM - 5:00 PM**: Business hours when users view dashboards
- **During active campaign management**: Sync may cause delays

**Best Practice**: Choose a time 1-2 hours before your first check-in of the day. If you review accounts at 8 AM, set sync for 6 AM.

---

### Timezone Configuration

**What**: Timezone used for sync scheduling and timestamp display

**Detection**: Automatically detected from browser

**Override**: Can manually select different timezone

**Common Scenarios**:
```
Browser timezone: PST (California)
Sync time: 2:00 AM PST
All clients sync at 2:00 AM Pacific time
```

**International Agencies**: If managing clients across timezones, choose your primary office location timezone for consistency.

---

### Sync Settings Examples

**Example 1: Standard Agency Setup**
```
Auto-Sync: Enabled
Sync Time: 3:00 AM
Timezone: EST (New York)

Result: All clients sync at 3 AM Eastern daily
```

**Example 2: Manual Management**
```
Auto-Sync: Disabled
Sync Time: N/A
Timezone: CST

Result: No automated syncs, manual sync only
```

**Example 3: International Agency**
```
Auto-Sync: Enabled
Sync Time: 1:00 AM
Timezone: GMT (London)

Result: All clients sync at 1 AM GMT daily
```

---

## Section 3: Google Ads Connections

### What Is This Section?

**Purpose**: View and manage Google Ads account OAuth connections

**Shows**:
- OAuth connection status
- Connected Google Ads accounts
- Account discovery status
- Token health

---

### OAuth Status

**What You See**:
- ✅ **Connected**: OAuth working, token valid
- ⚠️ **Expiring Soon**: Token refresh needed within 7 days
- ❌ **Disconnected**: OAuth failed or revoked

**Actions Available**:
- **Reconnect OAuth**: Re-authorize Google Ads access
- **Refresh Discovery**: Rediscover available accounts

---

### Account Discovery

**What**: Process that finds all Google Ads accounts you have access to

**When It Runs**:
- After OAuth connection
- When you click **Refresh Discovery**
- Automatically every 7 days

**Discovery Cache**: Results are cached for 24 hours to avoid hitting Google's API limits

**How to Refresh**:
1. Go to Settings → Google Ads Connections
2. Click **Refresh Discovery**
3. Wait 5-10 seconds for completion
4. New accounts appear in dropdown when adding clients

---

### Connection Health

**Health Indicators**:

**Healthy** ✅:
- OAuth connected
- Token valid for 30+ days
- Recent successful API calls

**Needs Attention** ⚠️:
- Token expiring within 7 days
- Some API calls failing
- Discovery cache stale

**Unhealthy** ❌:
- OAuth disconnected
- Token expired or revoked
- All API calls failing

**How to Fix Issues**: See [Troubleshooting OAuth](/docs/troubleshooting-oauth) guide

[Screenshot: Google Ads Connections section showing healthy connection]
*Green checkmark indicates healthy OAuth connection*

---

## Section 4: Email Notifications

**Status**: Coming Soon

**Planned Features**:
- Daily digest emails (summary of alerts)
- Critical alert notifications
- Sync failure notifications
- Weekly performance summaries

**When Available**: Q1 2026 (tentative)

---

## Global vs Per-Client Settings

### When to Use Global Settings

**Use for**:
- Defaults that apply to most/all clients
- Business-wide information (company name, logo)
- Standard sync time for most accounts
- General industry and audience

**Example**: Agency managing 50 clients with similar needs

---

### When to Use Per-Client Settings

**Use for**:
- Clients with unique sync requirements
- Different sync times (e.g., e-commerce client needs morning sync)
- Custom notification preferences
- Special handling exceptions

**Example**: One client requires 6 AM sync instead of default 2 AM

**Priority**: Per-client settings always override global settings

**Learn More**: See [Per-Client Settings](/docs/per-client-settings) guide

---

## Best Practices

### Complete Your Business Profile

**Why**: AI performance improves 3-5x with complete profile

**Priority Fields**:
1. Business Goals (required for AI calibration)
2. Target Audience (required for relevant recommendations)
3. Industry (required for benchmarks)
4. Company Size (optional but helpful)

**Time Investment**: 10 minutes upfront, months of better AI insights

---

### Choose Sync Time Strategically

**Consider**:
- When do you first check accounts? (sync 1-2 hours before)
- When is system least busy? (off-peak hours best)
- Client timezone differences? (choose your primary timezone)

**Avoid**:
- Peak business hours (9 AM - 5 PM)
- Right before important client calls
- Times when you're actively managing campaigns

---

### Review Settings Quarterly

**What to Check**:
- Business Goals still accurate?
- Company Size changed?
- Sync time still optimal?
- OAuth connections healthy?

**When**: Every 3 months or when business changes significantly

---

### Keep OAuth Healthy

**Monitor**:
- Check connection status monthly
- Watch for "expiring soon" warnings
- Refresh discovery if new accounts added

**Proactive Maintenance**:
- Reconnect OAuth before token expires
- Run discovery refresh after granting new account access
- Document OAuth reconnection process for team

---

## Common Questions

**Q: What happens if I change sync time?**
A: New time takes effect next sync cycle. If you change from 2 AM to 6 AM today, tonight's sync will still run at 2 AM. Tomorrow it runs at 6 AM.

**Q: Can I set different sync times for different clients?**
A: Yes, via per-client settings. Global setting is the default; per-client settings override.

**Q: How often should I update Business Profile?**
A: Update when business goals change, company grows, or you shift target audience. Typically quarterly.

**Q: Does changing Business Profile affect existing AI alerts?**
A: No. Only future AI analysis uses updated profile. Existing alerts remain unchanged.

**Q: What if my OAuth expires?**
A: System automatically attempts to refresh. If refresh fails, you'll see a warning. Click "Reconnect OAuth" to re-authorize.

**Q: Can multiple team members access Global Settings?**
A: Yes, all users can view. Only admin users can modify (role-based permissions).

---

## Troubleshooting

### Problem: OAuth shows "Disconnected"

**Symptoms**:
- Red X next to OAuth status
- "Reconnect OAuth" button visible
- Sync operations failing

**Solution**:
1. Click **Reconnect OAuth** button
2. Complete Google authorization flow
3. Verify connection shows ✅ Connected
4. Run discovery refresh

**If Still Failing**: See [Troubleshooting OAuth](/docs/troubleshooting-oauth)

---

### Problem: Sync time not changing

**Symptoms**:
- Changed sync time in settings
- Sync still running at old time

**Solution**:
- Changes take effect **next sync cycle**, not immediately
- Check you saved after changing time
- Verify timezone is correct (wrong timezone = wrong time)

---

### Problem: Business Profile not saving

**Symptoms**:
- Click Save, but form resets
- Changes don't persist

**Solution**:
1. Check browser console for errors (F12)
2. Verify you're connected to internet
3. Try refreshing page and editing again
4. Clear browser cache if persists

---

### Problem: Discovery shows old accounts

**Symptoms**:
- Added new Google Ads accounts
- Not appearing in client dropdown

**Solution**:
1. Go to Settings → Google Ads Connections
2. Click **Refresh Discovery**
3. Wait 10 seconds
4. Check dropdown again (new accounts should appear)

**Cache Note**: Discovery is cached 24 hours. Refresh manually to see new accounts immediately.

---

## Next Steps

Configure account-wide settings with these guides:

- **[Per-Client Settings](/docs/per-client-settings)** - Override global defaults for specific clients
- **[Auto-Sync Setup](/docs/auto-sync-setup)** - Detailed sync scheduling guide
- **[Business Profile Setup](/docs/business-profile-setup)** - Complete your profile for better AI
- **[Troubleshooting OAuth](/docs/troubleshooting-oauth)** - Fix Google Ads connection issues

---

**Configure Global Settings now** for consistent account-wide defaults

**Complete Business Profile** for 3-5x better AI performance

**Set optimal sync time** to keep data fresh without disruption

**Last Updated**: October 4, 2025
