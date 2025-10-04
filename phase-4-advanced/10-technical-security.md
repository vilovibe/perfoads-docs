---
title: Technical - Security Implementation
description: Technical reference for developers - comprehensive security architecture including authentication, authorization, data protection, and best practices
category: advanced
phase: 4
order: 10
---

# Technical Reference: Security Implementation

**Audience**: Developers, security engineers, technical users, system administrators

PerfoAds implements multiple layers of security including OAuth 2.0 authentication, JWT-based sessions, httpOnly cookies, SQL injection prevention, rate limiting, and data encryption. This technical guide documents the complete security architecture, implementation details, and best practices.

---

## What You'll Learn

- Authentication architecture (OAuth + JWT)
- Authorization and access control
- API security (rate limiting, CORS, headers)
- Data protection (encryption, storage)
- SQL injection prevention
- Session management
- Security best practices
- Compliance considerations
- Threat mitigation strategies
- Security testing guidelines

**Time needed**: 18 minutes to read

**Prerequisite Knowledge**: Security fundamentals, OAuth 2.0, JWT, HTTPS

---

## Security Architecture Overview

### Layered Security Model

```
┌──────────────────────────────────────────────────┐
│  Layer 1: Network Security                      │
│  - HTTPS/TLS 1.3                                 │
│  - Secure headers (Helmet.js)                    │
│  - CORS restrictions                             │
└──────────────────────────────────────────────────┘
                      ↓
┌──────────────────────────────────────────────────┐
│  Layer 2: Authentication                         │
│  - Google OAuth 2.0                              │
│  - JWT tokens                                    │
│  - httpOnly cookies                              │
└──────────────────────────────────────────────────┘
                      ↓
┌──────────────────────────────────────────────────┐
│  Layer 3: Authorization                          │
│  - User ownership validation                     │
│  - Resource-level permissions                    │
│  - Admin role checks                             │
└──────────────────────────────────────────────────┘
                      ↓
┌──────────────────────────────────────────────────┐
│  Layer 4: Data Security                          │
│  - Parameterized queries (SQL injection)         │
│  - Input validation & sanitization               │
│  - Data encryption at rest (database)            │
└──────────────────────────────────────────────────┘
                      ↓
┌──────────────────────────────────────────────────┐
│  Layer 5: Application Security                   │
│  - Rate limiting                                 │
│  - Error handling (no data leakage)              │
│  - Logging and monitoring                        │
└──────────────────────────────────────────────────┘
```

---

## Authentication System

### OAuth 2.0 Flow

**Provider**: Google OAuth 2.0

**Scopes Required**:
- `https://www.googleapis.com/auth/userinfo.email` - User email
- `https://www.googleapis.com/auth/userinfo.profile` - User name, avatar
- `https://www.googleapis.com/auth/adwords` - Google Ads API access

**Flow Diagram**:
```
1. User clicks "Log in with Google"
   ↓
2. Redirect to Google OAuth:
   GET https://accounts.google.com/o/oauth2/v2/auth
   ?client_id=[CLIENT_ID]
   &redirect_uri=https://api.aiperfoads.xyz/api/oauth/callback
   &response_type=code
   &scope=email profile adwords
   ↓
3. User grants permissions
   ↓
4. Google redirects to callback:
   GET /api/oauth/callback?code=[AUTH_CODE]
   ↓
5. Backend exchanges code for tokens:
   POST https://oauth2.googleapis.com/token
   Body: {
     code: [AUTH_CODE],
     client_id: [CLIENT_ID],
     client_secret: [CLIENT_SECRET],
     redirect_uri: [REDIRECT_URI],
     grant_type: "authorization_code"
   }
   ↓
6. Google responds:
   {
     access_token: "ya29.a0...",
     refresh_token: "1//...",
     expires_in: 3600,
     scope: "email profile adwords",
     token_type: "Bearer"
   }
   ↓
7. Backend:
   - Fetches user info from Google
   - Creates/updates user in database
   - Encrypts and stores OAuth tokens
   - Generates JWT
   - Sets httpOnly cookie
   ↓
8. Redirects to frontend dashboard
```

---

### JWT Implementation

**Library**: `jsonwebtoken`

**Algorithm**: HS256 (HMAC with SHA-256)

**Secret**: 256-bit random string (stored in environment variable `JWT_SECRET`)

**Payload**:
```javascript
{
  userId: 123,
  email: "user@example.com",
  role: "user",  // or "admin"
  iat: 1696435200,  // Issued at
  exp: 1699027200   // Expires (30 days from issued)
}
```

**Signing**:
```javascript
import jwt from 'jsonwebtoken';

const token = jwt.sign(
  {
    userId: user.id,
    email: user.email,
    role: user.role
  },
  process.env.JWT_SECRET,
  { expiresIn: '30d' }
);
```

**Verification**:
```javascript
import jwt from 'jsonwebtoken';

const decoded = jwt.verify(token, process.env.JWT_SECRET);
// If valid: decoded contains payload
// If invalid/expired: throws error
```

---

### Cookie-Based Session Management

**Why httpOnly Cookies**:
- Not accessible via JavaScript (XSS protection)
- Automatically sent with requests (no manual headers)
- Secure flag ensures HTTPS-only transmission
- SameSite prevents CSRF attacks

**Cookie Settings**:
```javascript
res.cookie('auth_token', jwtToken, {
  httpOnly: true,      // Not accessible via JavaScript
  secure: true,        // HTTPS only
  sameSite: 'lax',     // CSRF protection
  maxAge: 30 * 24 * 60 * 60 * 1000,  // 30 days in milliseconds
  domain: '.aiperfoads.xyz'      // Works for app and api subdomains
});
```

**Session Lifetime**: 30 days

**Refresh Strategy**: User must log in again after 30 days (no automatic refresh)

---

## Authorization and Access Control

### Resource Ownership Validation

**Pattern**: Every resource belongs to a user

**Enforcement**: Backend validates user owns resource before allowing access

**Example** (Get Client):
```javascript
app.get('/api/clients/:id', authenticateToken, async (req, res) => {
  const clientId = req.params.id;
  const userId = req.user.userId; // From JWT

  // Fetch client with user_id check
  const client = await db.query(
    'SELECT * FROM clients WHERE id = $1 AND user_id = $2',
    [clientId, userId]
  );

  if (!client.rows.length) {
    // Either doesn't exist OR belongs to different user
    return res.status(404).json({ error: 'Client not found' });
  }

  res.json(client.rows[0]);
});
```

**Result**: Users can only access their own clients, never other users' data

---

### Admin Role Check

**Admin-Only Endpoints**: `/api/admin/*`

**Middleware**:
```javascript
const requireAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Admin access required' });
  }
  next();
};

// Usage
app.get('/api/admin/users', authenticateToken, requireAdmin, async (req, res) => {
  // Only admins can access
});
```

---

### Protected Fields

**User Cannot Modify**:
- `role` (admin vs user)
- `isAdmin` flag
- `user_id` (ownership)
- `created_at` timestamps

**Input Filtering**:
```javascript
app.patch('/api/user/profile', authenticateToken, async (req, res) => {
  // Whitelist allowed fields
  const allowedFields = ['name', 'company', 'timezone'];
  const updates = {};

  for (const field of allowedFields) {
    if (req.body[field] !== undefined) {
      updates[field] = req.body[field];
    }
  }

  // Ignore any attempt to update 'role', 'isAdmin', etc.
  await db.query(
    'UPDATE users SET name = $1, company = $2, timezone = $3 WHERE id = $4',
    [updates.name, updates.company, updates.timezone, req.user.userId]
  );

  res.json({ success: true });
});
```

---

## API Security

### Rate Limiting

**Library**: `express-rate-limit`

**Global Limit**: 100 requests per 15 minutes per IP

**Implementation**:
```javascript
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Max 100 requests per window
  message: 'Too many requests, please try again later',
  standardHeaders: true, // Return rate limit info in headers
  legacyHeaders: false
});

app.use('/api/', limiter);
```

**Sensitive Endpoints** (stricter limits):
```javascript
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5, // Only 5 login attempts per 15 min
  message: 'Too many login attempts, please try again later'
});

app.use('/api/auth/google', authLimiter);
```

---

### CORS (Cross-Origin Resource Sharing)

**Purpose**: Control which domains can make API requests

**Configuration**:
```javascript
import cors from 'cors';

const corsOptions = {
  origin: [
    'https://app.aiperfoads.xyz',  // Production frontend
    'http://localhost:3001'             // Local dev frontend
  ],
  credentials: true, // Allow cookies
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
```

**Effect**: Only requests from specified origins accepted

---

### Security Headers (Helmet.js)

**Library**: `helmet`

**Headers Set**:
```javascript
import helmet from 'helmet';

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"]
    }
  },
  hsts: {
    maxAge: 31536000, // 1 year
    includeSubDomains: true,
    preload: true
  },
  frameguard: { action: 'deny' }, // Prevent clickjacking
  noSniff: true,                    // Prevent MIME sniffing
  xssFilter: true                   // Enable XSS filter
}));
```

**Result**:
- CSP prevents injection attacks
- HSTS enforces HTTPS
- Frameguard prevents clickjacking
- XSS filter adds browser-level protection

---

## Data Protection

### SQL Injection Prevention

**Method**: Parameterized queries (never string concatenation)

**❌ VULNERABLE**:
```javascript
// NEVER DO THIS
const userId = req.params.id;
const query = `SELECT * FROM users WHERE id = ${userId}`;
const result = await db.query(query);
```

**Exploit**:
```
Request: GET /api/users/1; DROP TABLE users; --
Result: Entire users table deleted
```

---

**✅ SECURE**:
```javascript
// ALWAYS DO THIS
const userId = req.params.id;
const query = 'SELECT * FROM users WHERE id = $1';
const result = await db.query(query, [userId]);
```

**Why Safe**: Database treats `userId` as data, not SQL code

**All Queries Use Parameterization**: Every database query in PerfoAds uses `$1`, `$2` placeholders

---

### Input Validation and Sanitization

**Validation**: Ensure input matches expected format

**Sanitization**: Remove or escape dangerous characters

**Example** (Creating Client):
```javascript
import validator from 'validator';

app.post('/api/clients', authenticateToken, async (req, res) => {
  const { name, customer_id, website } = req.body;

  // Validation
  if (!name || name.trim().length === 0) {
    return res.status(400).json({ error: 'Client name required' });
  }

  if (!customer_id || !/^\d{3}-\d{3}-\d{4}$/.test(customer_id)) {
    return res.status(400).json({
      error: 'Invalid customer ID format (XXX-XXX-XXXX)'
    });
  }

  if (website && !validator.isURL(website)) {
    return res.status(400).json({ error: 'Invalid website URL' });
  }

  // Sanitization
  const sanitizedName = validator.escape(name.trim());
  const sanitizedCustomerId = customer_id.trim();

  // Safe to insert
  await db.query(
    'INSERT INTO clients (name, customer_id, website, user_id) VALUES ($1, $2, $3, $4)',
    [sanitizedName, sanitizedCustomerId, website, req.user.userId]
  );

  res.json({ success: true });
});
```

---

### Encryption

**Data at Rest**:
- Database: Supabase provides encryption at rest (AES-256)
- OAuth Tokens: Encrypted before storing in database
- Passwords: Bcrypt hashed (if using password auth)

**Encryption Example** (OAuth Tokens):
```javascript
import crypto from 'crypto';

const ENCRYPTION_KEY = Buffer.from(process.env.ENCRYPTION_KEY, 'hex');
const IV_LENGTH = 16;

function encrypt(text) {
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv('aes-256-cbc', ENCRYPTION_KEY, iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return iv.toString('hex') + ':' + encrypted.toString('hex');
}

function decrypt(text) {
  const parts = text.split(':');
  const iv = Buffer.from(parts.shift(), 'hex');
  const encryptedText = Buffer.from(parts.join(':'), 'hex');
  const decipher = crypto.createDecipheriv('aes-256-cbc', ENCRYPTION_KEY, iv);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}

// Usage
const encryptedToken = encrypt(oauthRefreshToken);
await db.query('UPDATE users SET oauth_refresh_token = $1 WHERE id = $2', [encryptedToken, userId]);
```

**Data in Transit**:
- HTTPS/TLS 1.3 for all communication
- No plaintext transmission

---

## Session Management

### Session Lifecycle

**Creation**:
1. User logs in via Google OAuth
2. Backend generates JWT with 30-day expiration
3. JWT stored in httpOnly cookie
4. Cookie sent with every request

**Validation**:
```javascript
// Middleware on every protected route
const authenticateToken = (req, res, next) => {
  const token = req.cookies.auth_token;

  if (!token) {
    return res.status(401).json({ error: 'Not authenticated' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user info to request
    next();
  } catch (error) {
    return res.status(403).json({ error: 'Invalid or expired token' });
  }
};
```

**Expiration**:
- Automatic after 30 days
- Manual via logout (cookie deleted)

**Logout**:
```javascript
app.post('/api/auth/logout', (req, res) => {
  res.clearCookie('auth_token', {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    domain: '.aiperfoads.xyz'
  });
  res.json({ success: true });
});
```

---

### Session Security

**CSRF Protection**: SameSite cookie attribute (`lax`)

**Session Fixation Prevention**: New JWT generated on each login

**Concurrent Sessions**: Allowed (user can be logged in on multiple devices)

---

## Error Handling and Information Disclosure

### Secure Error Responses

**❌ BAD** (leaks implementation details):
```javascript
app.get('/api/clients/:id', async (req, res) => {
  try {
    const client = await db.query('SELECT * FROM clients WHERE id = $1', [req.params.id]);
    res.json(client.rows[0]);
  } catch (error) {
    // Exposes database error to user
    res.status(500).json({ error: error.message });
  }
});
```

**Error Exposed**:
```json
{
  "error": "relation \"clients\" does not exist at character 15"
}
```

**Security Issue**: Attacker learns database schema details

---

**✅ GOOD** (generic error message):
```javascript
app.get('/api/clients/:id', async (req, res) => {
  try {
    const client = await db.query('SELECT * FROM clients WHERE id = $1', [req.params.id]);
    if (!client.rows.length) {
      return res.status(404).json({ error: 'Client not found' });
    }
    res.json(client.rows[0]);
  } catch (error) {
    // Log detailed error server-side
    console.error('Database error:', error);

    // Return generic error to client
    res.status(500).json({ error: 'Internal server error' });
  }
});
```

**Result**: User sees generic message, detailed error logged server-side for debugging

---

## Threat Mitigation

### XSS (Cross-Site Scripting)

**Attack**: Injecting malicious scripts into app

**Example**:
```javascript
// User inputs: <script>alert('XSS')</script>
// If rendered without escaping: Script executes
```

**Mitigation**:
1. **Input Sanitization**: Escape user input before storing
2. **Output Encoding**: React auto-escapes output (safe by default)
3. **CSP Headers**: Content Security Policy blocks inline scripts
4. **httpOnly Cookies**: Prevents script access to session token

---

### CSRF (Cross-Site Request Forgery)

**Attack**: Malicious site makes authenticated request on behalf of user

**Example**:
```html
<!-- Malicious site -->
<img src="https://api.aiperfoads.xyz/api/clients/1/delete" />
<!-- If user is logged in, request succeeds -->
```

**Mitigation**:
1. **SameSite Cookies**: Cookie only sent for same-site requests
2. **CORS**: API only accepts requests from allowed origins
3. **State-Changing Operations**: Use POST/DELETE (not GET)

---

### SQL Injection

**Attack**: Injecting SQL commands via user input

**Mitigation**: 100% parameterized queries (covered earlier)

---

### Brute Force Attacks

**Attack**: Automated login attempts to guess passwords

**Mitigation**:
1. **Rate Limiting**: Max 5 login attempts per 15 minutes
2. **OAuth Only**: No passwords to brute force
3. **Google's Protection**: Google OAuth has built-in brute force protection

---

### Man-in-the-Middle (MITM)

**Attack**: Intercepting communication between client and server

**Mitigation**:
1. **HTTPS/TLS 1.3**: All communication encrypted
2. **HSTS Header**: Forces browser to use HTTPS
3. **Certificate Pinning**: (Not implemented, but option for future)

---

## Compliance and Best Practices

### GDPR Compliance

**Data Collected**:
- User email (from Google OAuth)
- User name (from Google OAuth)
- Google Ads data (synced from user's accounts)

**User Rights**:
- **Right to Access**: Users can export their data
- **Right to Deletion**: Users can delete account and all data
- **Right to Portability**: Export available

**Data Retention**:
- Active users: Indefinite
- Deleted accounts: Immediate deletion (no grace period currently)

---

### OWASP Top 10 Coverage

**1. Broken Access Control**: ✅ Ownership validation on all resources

**2. Cryptographic Failures**: ✅ HTTPS, encrypted OAuth tokens, parameterized queries

**3. Injection**: ✅ Parameterized queries prevent SQL injection

**4. Insecure Design**: ✅ Security considered in architecture

**5. Security Misconfiguration**: ✅ Helmet.js, CORS, secure defaults

**6. Vulnerable Components**: ✅ Regular dependency updates

**7. Identification and Authentication Failures**: ✅ OAuth 2.0, JWT, httpOnly cookies

**8. Software and Data Integrity Failures**: ✅ Code review, testing

**9. Security Logging and Monitoring**: ⚠️ Basic logging (could improve)

**10. Server-Side Request Forgery**: ✅ No SSRF vectors (no user-provided URLs fetched server-side)

---

## Security Testing

### Automated Testing

**Dependency Scanning**: `npm audit`

**Run**: `npm audit` before deployments

**Fix**: `npm audit fix` for automatic patches

---

### Manual Security Checklist

**Pre-Deployment**:
- [ ] All secrets in environment variables (not hardcoded)
- [ ] HTTPS enforced
- [ ] httpOnly cookies enabled
- [ ] CORS configured correctly
- [ ] Rate limiting active
- [ ] Input validation on all user inputs
- [ ] Parameterized queries for all SQL
- [ ] Error messages don't leak implementation details
- [ ] Admin endpoints protected with role check
- [ ] Resource ownership validated

---

## Common Questions

**Q: Why JWT instead of server-side sessions?**
A: Stateless, scales horizontally without session store, works across frontend/backend domains.

**Q: Why 30-day session expiration?**
A: Balance between security (shorter = better) and UX (longer = less re-login). 30 days is industry standard.

**Q: Is OAuth refresh token stored securely?**
A: Yes, encrypted with AES-256 before database storage.

**Q: Can users have multiple sessions?**
A: Yes, JWT allows concurrent sessions across devices.

**Q: What if JWT secret is compromised?**
A: Rotate secret immediately, all existing JWTs invalidated, users must re-login.

**Q: Is rate limiting per-user or per-IP?**
A: Per-IP currently. Future: Per-user for authenticated endpoints.

---

## Next Steps

Complete security understanding with these guides:

- **[Technical Architecture](/docs/technical-architecture)** - System architecture overview
- **[Technical Dual API](/docs/technical-dual-api)** - API implementation details
- **[Troubleshooting OAuth](/docs/troubleshooting-oauth)** - OAuth security troubleshooting
- **[Global Settings](/docs/global-settings)** - OAuth and security settings

---

**Security is ongoing** - regular updates, audits, and improvements required

**Defense in depth** - multiple layers protect against single-point failures

**Report security issues** immediately to security@aiperfoads.xyz

**Last Updated**: October 4, 2025
