# Changelog

All notable changes to this project will be documented in this file.

## [Feature Updates] - October 14, 2025

### Added
- **LemonSqueezy Subscription System**: Full subscription management integration
- **Manage Subscription Button**: Now located in Settings → Business Profile tab
- **OAuth Disconnect Feature**: Remove and reconnect Google Ads accounts in Settings
- **Multi-Currency Support**: Automatic currency detection during OAuth setup
- **Admin Bypass Feature**: Admin users can skip subscription checks for testing
- **Admin Dashboard Improvements**: Enhanced admin-only features and controls

### Changed
- **Subscription Management Location**: Moved button from navigation to Settings → Business Profile tab
- **OAuth Self-Healing**: Improved token expiry checks with enhanced retry logic
- **Currency Handling**: Removed PLN hardcoding - supports all major currencies
- **Context Management**: Fixed button states and added color-coded priority indicators

### Fixed
- **Context Button State**: No longer gets stuck in "Adding..." state
- **Account Currency**: Now automatically saved during OAuth account creation
- **Next.js 15 Compatibility**: Fixed cookies() API breaking changes
- **Color-Coded Priorities**: Context History now shows visual priority indicators
- **Token Expiry Logic**: Enhanced OAuth token validation

### Documentation Updates Completed
- Global Settings guide with subscription management section
- Business Profile setup with subscription button documentation
- Quick Start Guide with subscription tiers and context management
- OAuth troubleshooting with disconnect workflow (planned)

---

## [Documentation] - 2025-10-05

### Added
- Email Alerts Setup guide (phase-4-advanced/08-email-alerts-setup.md)
  - Comprehensive guide for configuring email notifications
  - Alert types and preferences explained
  - Best practices and troubleshooting

---

## [Deployed] - 2025-10-05

### Added
- Complete header and footer to index.html landing page
- Unified header/footer styling across all 27 documentation pages

### Changed
- Increased header gap from 100px to 270px for better spacing between navigation elements
- Updated footer logo styling to match header logo:
  - Font weight: 700 → 600
  - Added Geist font family
  - Added letter-spacing: -0.02em for improved typography
- Adjusted sidebar positioning to accommodate new header

### Deployment
- Documentation site deployed and live at docs.perfoads.com
- Separate repository from main PerfoAds application
