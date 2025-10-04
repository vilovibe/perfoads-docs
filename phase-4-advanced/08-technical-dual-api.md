---
title: Technical - Dual API Architecture
description: Technical reference for developers - how PerfoAds handles both direct Google Ads API access and MCC-managed accounts with different field naming conventions
category: advanced
phase: 4
order: 08
---

# Technical Reference: Dual API Architecture

**Audience**: Developers, technical users, integrators

PerfoAds uses two different Google Ads API implementations to handle direct-access accounts and MCC-managed accounts. This creates a dual API architecture where response formats differ (camelCase vs snake_case). This technical guide explains the architecture, why it exists, and how the system handles both formats.

---

## What You'll Learn

- The two API implementations
- Why dual architecture exists
- camelCase vs snake_case field naming
- How sync handles both formats
- Code patterns for dual format handling
- API client selection logic
- Troubleshooting dual API issues
- Migration considerations

**Time needed**: 15 minutes to read

**Prerequisite Knowledge**: Basic understanding of APIs, JSON, and field naming conventions

---

## The Two API Implementations

### Implementation 1: Direct Access (Opteo/google-ads-api)

**Library**: `google-ads-api` npm package from Opteo organization

**GitHub**: https://github.com/Opteo/google-ads-api

**Authentication**: Direct OAuth to individual Google Ads accounts

**Response Format**: **camelCase** field names

**Example Response**:
```javascript
{
  campaign: {
    id: "123456789",
    name: "Brand Campaign",
    status: "ENABLED"
  },
  adGroup: {
    id: "987654321",
    name: "Brand Keywords"
  },
  metrics: {
    clicks: "150",
    impressions: "5000",
    costMicros: "50000000"
  }
}
```

**Used For**: Accounts with direct OAuth access (user directly grants access)

**Example Clients**: Individual advertisers, small agencies with direct account access

---

### Implementation 2: MCC-Managed (Custom GoogleAdsDirectAPI)

**Library**: Custom `GoogleAdsDirectAPI` class (internal, makes direct HTTP calls)

**Location**: `src/services/GoogleAdsDirectAPI.ts`

**Authentication**: Requires `login-customer-id` header for MCC authentication

**Response Format**: **snake_case** field names

**Example Response**:
```javascript
{
  campaign: {
    id: "123456789",
    name: "Brand Campaign",
    status: "ENABLED"
  },
  ad_group: {
    id: "987654321",
    name: "Brand Keywords"
  },
  metrics: {
    clicks: "150",
    impressions: "5000",
    cost_micros: "50000000"
  }
}
```

**Used For**: Accounts managed through Manager Customer Center (MCC)

**Example Clients**: Enterprise accounts, agency clients managed under MCC account

---

## Why Dual Architecture Exists

### Problem Statement

**Google Ads API Field Naming**:
- Official Google Ads API: Returns **snake_case** fields
- Opteo library: Transforms to **camelCase** for JavaScript conventions

**Account Access Patterns**:
- Some accounts: Direct OAuth access (use Opteo library)
- Other accounts: MCC-managed (require login-customer-id, use direct API)

**Architecture Decision**: Support both to handle all account types without forcing users to restructure their Google Ads organization

---

### Use Cases

**Direct Access Scenario**:
```
User: Small business owner
Google Ads: Single account, direct access
OAuth: Grants access directly to their account
API: Opteo library → camelCase responses
```

**MCC-Managed Scenario**:
```
User: Digital agency
Google Ads: MCC with 50 managed client accounts
OAuth: Grants access to MCC
API: Custom class with login-customer-id → snake_case responses
```

---

## Field Naming Differences

### Common Fields: camelCase vs snake_case

| Data Type | camelCase (Direct) | snake_case (MCC) |
|-----------|-------------------|------------------|
| Campaign | `campaign` | `campaign` |
| Ad Group | `adGroup` | `ad_group` |
| Ad Group Ad | `adGroupAd` | `ad_group_ad` |
| Responsive Search Ad | `responsiveSearchAd` | `responsive_search_ad` |
| Metrics | `metrics` | `metrics` |
| Cost Micros | `metrics.costMicros` | `metrics.cost_micros` |
| Click Type | `clickType` | `click_type` |
| Conversion Action | `conversionAction` | `conversion_action` |

---

### Real-World Example

**Same Data, Different Format**:

**Direct API (camelCase)**:
```javascript
{
  adGroup: {
    id: "12345",
    name: "Brand Keywords",
    status: "ENABLED"
  },
  adGroupAd: {
    id: "67890",
    status: "ENABLED"
  },
  responsiveSearchAd: {
    headlines: [
      { text: "Best Product Ever" },
      { text: "Shop Now" }
    ],
    descriptions: [
      { text: "Free shipping on all orders" }
    ]
  }
}
```

**MCC API (snake_case)**:
```javascript
{
  ad_group: {
    id: "12345",
    name: "Brand Keywords",
    status: "ENABLED"
  },
  ad_group_ad: {
    id: "67890",
    status: "ENABLED"
  },
  responsive_search_ad: {
    headlines: [
      { text: "Best Product Ever" },
      { text: "Shop Now" }
    ],
    descriptions: [
      { text: "Free shipping on all orders" }
    ]
  }
}
```

**Identical Data**: Only field names differ

---

## How Sync Handles Both Formats

### Defensive Field Access Pattern

**The Problem**: Can't assume which format response will be in

**The Solution**: Check both formats, use whichever exists

**Code Pattern**:
```javascript
// ❌ WRONG - Breaks for one or the other
const adGroupId = row.adGroup.id;  // Breaks for MCC
const adGroupId = row.ad_group.id; // Breaks for Direct

// ✅ CORRECT - Works for both
const adGroup = row.adGroup || row.ad_group;
const adGroupId = adGroup?.id;
```

---

### Real Code Examples

**Example 1: Accessing Ad Group**:
```javascript
// Sync code handling both formats
const processAdGroup = (row) => {
  // Try camelCase first, fall back to snake_case
  const adGroup = row.adGroup || row.ad_group;

  if (!adGroup) {
    console.error('No ad group found in response');
    return null;
  }

  return {
    id: adGroup.id,
    name: adGroup.name,
    status: adGroup.status
  };
};
```

**Example 2: Accessing Nested Fields**:
```javascript
// Accessing responsive search ad headlines
const getHeadlines = (ad) => {
  // Check both possible locations
  const rsa = ad?.responsiveSearchAd || ad?.responsive_search_ad;

  if (!rsa || !rsa.headlines) {
    return [];
  }

  return rsa.headlines.map(h => h.text);
};
```

**Example 3: Metrics**:
```javascript
// Accessing cost (micros to dollars conversion)
const getCost = (metrics) => {
  // Try both field names
  const costMicros = metrics?.costMicros || metrics?.cost_micros;

  if (!costMicros) return 0;

  // Convert micros to dollars
  return parseInt(costMicros) / 1000000;
};
```

---

## API Client Selection Logic

### How System Chooses Which API to Use

**Decision Tree**:
```
Client Added
  ↓
Does client have login_customer_id configured?
  ↓
  YES → Use MCC API (Custom GoogleAdsDirectAPI)
    ↓
    Response: snake_case fields

  NO → Use Direct API (Opteo google-ads-api)
    ↓
    Response: camelCase fields
```

---

### Configuration

**Client Model** (database):
```javascript
{
  id: 123,
  customer_id: "123-456-7890",
  login_customer_id: "999-888-7777" // If set: MCC mode
}
```

**Sync Logic**:
```javascript
const getApiClient = (client) => {
  if (client.login_customer_id) {
    // MCC-managed account
    return new GoogleAdsDirectAPI({
      customer_id: client.customer_id,
      login_customer_id: client.login_customer_id
    });
  } else {
    // Direct access account
    return new GoogleAdsAPI({
      customer_id: client.customer_id
    });
  }
};
```

---

## Handling Both Formats in Code

### Pattern 1: Dual Field Check

**Use When**: Accessing top-level fields

```javascript
// Access campaign
const campaign = row.campaign || row.campaign; // Same name, no issue
const adGroup = row.adGroup || row.ad_group;   // Different names
const adGroupAd = row.adGroupAd || row.ad_group_ad;
```

---

### Pattern 2: Nested Field Check

**Use When**: Accessing deeply nested fields

```javascript
// Access ad type-specific data
const rsa = ad?.responsiveSearchAd || ad?.responsive_search_ad;
const headlines = rsa?.headlines || [];

// Access metrics
const metrics = row.metrics || {};
const clicks = metrics.clicks;  // Same name both formats
const cost = metrics.costMicros || metrics.cost_micros;
```

---

### Pattern 3: Normalization Helper

**Use When**: Processing many records

```javascript
// Normalize response to consistent format
const normalizeAdGroup = (row) => {
  const source = row.adGroup || row.ad_group;

  return {
    id: source.id,
    name: source.name,
    status: source.status,
    campaign_id: (row.campaign || row.campaign).id
  };
};

// Now work with normalized data
const adGroups = rawData.map(normalizeAdGroup);
```

---

## Troubleshooting Dual API Issues

### Problem: Field Not Found Error

**Symptom**:
```
TypeError: Cannot read property 'id' of undefined
Error accessing: row.adGroup.id
```

**Diagnosis**: Code assumes one format, data is in other format

**Fix**:
```javascript
// Change from:
const id = row.adGroup.id;

// To:
const adGroup = row.adGroup || row.ad_group;
const id = adGroup?.id;
```

---

### Problem: Data Syncs for Some Clients, Fails for Others

**Symptom**:
```
Client A (direct access): Sync works
Client B (MCC-managed): Sync fails with field access errors
```

**Diagnosis**: Code not handling both formats

**Fix**: Review sync code, add dual format handling to all field accesses

---

### Problem: Metrics Missing for MCC Accounts

**Symptom**:
```
Direct accounts: All metrics present
MCC accounts: metrics.costMicros undefined
```

**Diagnosis**: Using camelCase field name for MCC response

**Fix**:
```javascript
// Change from:
const cost = metrics.costMicros;

// To:
const cost = metrics.costMicros || metrics.cost_micros;
```

---

## Best Practices

### 1. Always Use Dual Field Check

**Rule**: Never access `row.adGroup` directly. Always check both.

**Pattern**:
```javascript
// ✅ GOOD
const adGroup = row.adGroup || row.ad_group;
if (adGroup) {
  // Use adGroup
}

// ❌ BAD
if (row.adGroup) {  // Breaks for MCC
  // Use row.adGroup
}
```

---

### 2. Use Optional Chaining

**Leverage `?.` operator**:

```javascript
// ✅ SAFE
const headlines = ad?.responsiveSearchAd?.headlines ||
                  ad?.responsive_search_ad?.headlines ||
                  [];

// ❌ RISKY
const headlines = ad.responsiveSearchAd.headlines; // Crashes if null
```

---

### 3. Normalize Early

**Pattern**: Convert to consistent format as soon as data arrives

```javascript
// In sync layer
const normalizeResponse = (row) => {
  return {
    campaign: {
      id: row.campaign?.id,
      name: row.campaign?.name
    },
    adGroup: {
      id: (row.adGroup || row.ad_group)?.id,
      name: (row.adGroup || row.ad_group)?.name
    },
    metrics: {
      clicks: row.metrics?.clicks,
      cost: row.metrics?.costMicros || row.metrics?.cost_micros
    }
  };
};
```

**Benefit**: Rest of codebase works with consistent format

---

## Testing Both Formats

### Unit Test Pattern

```javascript
describe('Sync Dual API Handling', () => {
  it('should handle camelCase (Direct API) format', () => {
    const row = {
      campaign: { id: "123", name: "Test" },
      adGroup: { id: "456", name: "Test Group" },
      metrics: { clicks: "100", costMicros: "5000000" }
    };

    const result = processSyncRow(row);
    expect(result.adGroupId).toBe("456");
    expect(result.cost).toBe(5.00);
  });

  it('should handle snake_case (MCC API) format', () => {
    const row = {
      campaign: { id: "123", name: "Test" },
      ad_group: { id: "456", name: "Test Group" },
      metrics: { clicks: "100", cost_micros: "5000000" }
    };

    const result = processSyncRow(row);
    expect(result.adGroupId).toBe("456");
    expect(result.cost).toBe(5.00);
  });
});
```

---

## Migration and Future Considerations

### Potential Future Normalization

**Option**: Normalize all responses to single format (camelCase) at API layer

**Benefit**: Rest of codebase simpler, no dual checks

**Cost**: Additional processing layer, potential performance impact

**Decision**: Not implemented yet. Current dual-check approach works reliably.

---

### If Google Ads API Changes

**Scenario**: Google updates API, changes field naming

**Impact**: Would affect custom MCC implementation, not Opteo library

**Mitigation**: Version lock on Google Ads API, test before upgrading

---

## Common Questions

**Q: Can I convert all MCC accounts to direct access to avoid this?**
A: Not always. MCC structure often required for agency setups, billing, and permissions.

**Q: Does dual API affect performance?**
A: Minimal. Dual field check is fast. Main performance factor is network latency to Google Ads API.

**Q: Will this architecture change in future?**
A: Possibly normalize at sync layer for simpler downstream code. But dual format support will remain.

**Q: How do I know which API a client uses?**
A: Check `login_customer_id` field. If set: MCC API. If null: Direct API.

**Q: Can I force a client to use one API or the other?**
A: Set or unset `login_customer_id` in client configuration. But must match actual Google Ads account setup.

---

## Technical Deep Dive: MCC Authentication

### How MCC Authentication Differs

**Direct Access**:
```
Request Headers:
- Authorization: Bearer [oauth-token]
- developer-token: [google-ads-dev-token]

Request:
GET /v21/customers/123-456-7890/campaigns
```

**MCC Access**:
```
Request Headers:
- Authorization: Bearer [oauth-token]
- developer-token: [google-ads-dev-token]
- login-customer-id: 999-888-7777  ← MCC ID

Request:
GET /v21/customers/123-456-7890/campaigns
```

**Key Difference**: `login-customer-id` header authenticates as MCC, then accesses managed account

---

## Next Steps

Understand the technical architecture with these guides:

- **[Technical Architecture](/docs/technical-architecture)** - Complete system architecture overview
- **[Technical Security](/docs/technical-security)** - Security implementation details
- **[Troubleshooting Sync](/docs/troubleshooting-sync)** - Debug sync issues related to API formats
- **[Smart Sync Explained](/docs/smart-sync-explained)** - How sync uses both APIs

---

**Always use dual field checks** when accessing API responses

**Test with both formats** to ensure compatibility

**Normalize early** to simplify downstream processing

**Last Updated**: October 4, 2025
