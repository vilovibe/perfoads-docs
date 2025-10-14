const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

// Configure marked options
marked.setOptions({
  headerIds: false,
  mangle: false
});

// Files that were updated and need HTML regeneration
const updatedFiles = [
  'CHANGELOG.md',
  'phase-1-essential/02-quick-start-guide.md',
  'phase-1-essential/03-adding-first-client.md',
  'phase-1-essential/04-understanding-dashboard.md',
  'phase-3-ai-features/08-business-profile-setup.md',
  'phase-4-advanced/01-global-settings.md',
  'phase-4-advanced/06-troubleshooting-oauth.md'
];

// Extract title from markdown frontmatter or first h1
function extractTitle(markdown) {
  // Check for frontmatter title
  const frontmatterMatch = markdown.match(/^---\s*\ntitle:\s*(.+)\s*\n/m);
  if (frontmatterMatch) {
    return frontmatterMatch[1].trim();
  }

  // Fallback to first H1
  const h1Match = markdown.match(/^#\s+(.+)$/m);
  if (h1Match) {
    return h1Match[1].trim();
  }

  return 'PerfoAds Documentation';
}

// Strip frontmatter from markdown
function stripFrontmatter(markdown) {
  return markdown.replace(/^---\s*\n[\s\S]*?\n---\s*\n/, '');
}

// Generate HTML template
function generateHTML(title, content) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} - PerfoAds Documentation</title>
    <link rel="icon" type="image/png" href="/favicon.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;900&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --footer-bg: #FFFFFF;
            --primary-blue: #126DFB;
            --dark-text: #000000;
            --light-gray: #6B7280;
            --border-gray: #E5E7EB;
            --bg-white: #FFFFFF;
            --bg-gray: #F9FAFB;
        }

        body {
            font-family: 'Inter', sans-serif;
            line-height: 1.6;
            color: var(--dark-text);
            background: var(--bg-white);
            padding-top: 80px;
        }

        h1, h2, h3, h4, h5, h6 {
            font-family: 'Geist', sans-serif;
            font-weight: 700;
            letter-spacing: -0.03em;
        }


        /* Top Header - Landing Page Style */
        .top-header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: 80px;
            background: var(--bg-white);
            border-bottom: 1px solid var(--border-gray);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 270px;
            padding: 0 96px;
            z-index: 1000;
        }

        .header-logo {
            display: flex;
            align-items: center;
            gap: 12px;
            text-decoration: none;
            color: var(--dark-text);
        }

        .header-logo img {
            width: 40px;
            height: 40px;
        }

        .header-logo span {
            font-family: 'Geist', 'Geist Placeholder', sans-serif;
            font-weight: 600;
            font-size: 24px;
            letter-spacing: -0.02em;
        }

        .header-nav {
            display: flex;
            align-items: center;
            gap: 24px;
        }

        .header-nav a {
            font-family: 'Geist', 'Geist Placeholder', sans-serif;
            color: #575757;
            text-decoration: none;
            font-size: 15px;
            font-weight: 400;
            letter-spacing: -0.03em;
            transition: color 0.2s;
        }

        .header-nav a:hover {
            color: var(--dark-text);
        }

        .header-cta {
            padding: 10px 20px;
            background: var(--primary-blue);
            color: white;
            text-decoration: none;
            border-radius: 8px;
            font-family: 'Geist', 'Geist Placeholder', sans-serif;
            font-size: 15px;
            font-weight: 500;
            letter-spacing: -0.03em;
            transition: all 0.2s;
        }

        .header-cta:hover {
            background: #0E5DD6;
            transform: translateY(-1px);
        }

        /* Sidebar Navigation */
        .sidebar {
            position: fixed;
            left: 0;
            top: 80px;
            width: 280px;
            height: calc(100vh - 80px);
            background: var(--bg-white);
            border-right: 1px solid var(--border-gray);
            overflow-y: auto;
            padding: 32px 24px;
        }

        .nav-section {
            margin-bottom: 32px;
        }

        .nav-section h3 {
            font-family: 'Geist', sans-serif;
            font-size: 14px;
            font-weight: 600;
            color: var(--dark-text);
            margin-bottom: 12px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        .nav-links {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .nav-link {
            font-family: 'Inter', sans-serif;
            color: var(--light-gray);
            text-decoration: none;
            font-size: 14px;
            padding: 8px 12px;
            border-radius: 6px;
            transition: all 0.2s;
        }

        .nav-link:hover {
            background: var(--bg-gray);
            color: var(--dark-text);
        }

        .nav-link.active {
            background: var(--bg-gray);
            color: var(--primary-blue);
            font-weight: 500;
        }

        /* Main Content */
        main {
            margin-left: 280px;
            padding: 48px 96px 96px 96px;
            max-width: 1400px;
        }

        .content {
            max-width: 900px;
        }

        .content h1 {
            font-size: 42px;
            margin-bottom: 24px;
            color: var(--dark-text);
        }

        .content h2 {
            font-size: 32px;
            margin-top: 48px;
            margin-bottom: 16px;
            color: var(--dark-text);
        }

        .content h3 {
            font-size: 24px;
            margin-top: 32px;
            margin-bottom: 12px;
            color: var(--dark-text);
        }

        .content p {
            margin-bottom: 16px;
            color: var(--dark-text);
        }

        .content ul, .content ol {
            margin-bottom: 16px;
            padding-left: 24px;
        }

        .content li {
            margin-bottom: 8px;
            color: var(--dark-text);
        }

        .content a {
            color: var(--primary-blue);
            text-decoration: none;
        }

        .content a:hover {
            text-decoration: underline;
        }

        .content code {
            background: var(--bg-gray);
            padding: 2px 6px;
            border-radius: 4px;
            font-family: 'Monaco', 'Courier New', monospace;
            font-size: 14px;
        }

        .content pre {
            background: var(--bg-gray);
            padding: 16px;
            border-radius: 8px;
            overflow-x: auto;
            margin-bottom: 16px;
        }

        .content pre code {
            background: none;
            padding: 0;
        }

        .content blockquote {
            border-left: 4px solid var(--primary-blue);
            padding-left: 16px;
            margin: 16px 0;
            color: var(--light-gray);
        }

        .content hr {
            border: none;
            border-top: 1px solid var(--border-gray);
            margin: 32px 0;
        }

        .content strong {
            font-weight: 600;
            color: var(--dark-text);
        }

        /* Footer - Landing Page Style */
        .footer {
            background: var(--footer-bg);
            border-top: 1px solid var(--border-gray);
            padding: 64px 96px;
            margin-left: 280px;
        }

        .footer-content {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr;
            gap: 64px;
            max-width: 1400px;
        }

        .footer-brand {
            display: flex;
            flex-direction: column;
            gap: 24px;
        }

        .footer-logo {
            display: flex;
            align-items: center;
        }

        .footer-logo h4 {
            font-family: 'Geist', 'Geist Placeholder', sans-serif;
            font-weight: 600;
            font-size: 20px;
            letter-spacing: -0.02em;
        }

        .footer-brand p {
            font-size: 14px;
            color: var(--light-gray);
            line-height: 1.6;
            max-width: 400px;
        }

        .footer-cta {
            align-self: flex-start;
            padding: 12px 24px;
            background: var(--primary-blue);
            color: white;
            text-decoration: none;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 500;
            transition: all 0.2s;
        }

        .footer-cta:hover {
            background: #0E5DD6;
            transform: translateY(-1px);
        }

        .footer-social a {
            color: var(--light-gray);
            text-decoration: none;
            font-size: 14px;
        }

        .footer-social a:hover {
            color: var(--dark-text);
        }

        .footer-section h5 {
            font-family: 'Geist', sans-serif;
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 16px;
            color: var(--dark-text);
        }

        .footer-links {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .footer-links a {
            color: var(--light-gray);
            text-decoration: none;
            font-size: 14px;
            transition: color 0.2s;
        }

        .footer-links a:hover {
            color: var(--dark-text);
        }

        .footer-bottom {
            background: var(--footer-bg);
            text-align: center;
            padding: 24px;
            color: var(--light-gray);
            font-size: 14px;
            border-top: 1px solid var(--border-gray);
            margin-left: 280px;
        }
    </style>
</head>
<body>
    <!-- Top Header -->
    <header class="top-header">
        <a href="/" class="header-logo">
            <img src="/logo.png" alt="PerfoAds">
            <span>PerfoAds</span>
        </a>
        <nav class="header-nav">
            <a href="https://www.perfoads.com/#features">Features</a>
            <a href="https://www.perfoads.com/#benefits">Benefits</a>
            <a href="/">Documentation</a>
            <a href="https://www.perfoads.com/#pricing">Pricing</a>
            <a href="https://www.perfoads.com/#faq">FAQ</a>
            <a href="https://app.perfoads.com" class="header-cta">Start Free Trial</a>
        </nav>
    </header>

    <!-- Sidebar Navigation -->
    <aside class="sidebar">
        <nav>
            <div class="nav-section">
                <h3>Getting Started</h3>
                <div class="nav-links">
                    <a href="/phase-1-essential/01-what-is-perfoads.html" class="nav-link">What is PerfoAds?</a>
                    <a href="/phase-1-essential/02-quick-start-guide.html" class="nav-link">Quick Start Guide</a>
                    <a href="/phase-1-essential/03-adding-first-client.html" class="nav-link">Adding Your First Client</a>
                    <a href="/phase-1-essential/04-understanding-dashboard.html" class="nav-link">Understanding the Dashboard</a>
                    <a href="/phase-1-essential/05-smart-sync-explained.html" class="nav-link">Smart Sync Explained</a>
                </div>
            </div>

            <div class="nav-section">
                <h3>Core Features</h3>
                <div class="nav-links">
                    <a href="/phase-2-core-features/01-client-list-overview.html" class="nav-link">Client List Overview</a>
                    <a href="/phase-2-core-features/02-client-details-page.html" class="nav-link">Client Details Page</a>
                    <a href="/phase-2-core-features/03-bulk-operations.html" class="nav-link">Bulk Operations</a>
                    <a href="/phase-2-core-features/04-sync-system-guide.html" class="nav-link">Sync System Guide</a>
                    <a href="/phase-2-core-features/05-auto-sync-setup.html" class="nav-link">Auto-Sync Setup</a>
                    <a href="/phase-2-core-features/06-sync-logs.html" class="nav-link">Sync Logs</a>
                    <a href="/phase-2-core-features/07-metrics-glossary.html" class="nav-link">Metrics Glossary</a>
                    <a href="/phase-2-core-features/08-performance-charts.html" class="nav-link">Performance Charts</a>
                </div>
            </div>

            <div class="nav-section">
                <h3>AI Features</h3>
                <div class="nav-links">
                    <a href="/phase-3-ai-features/01-smart-alerts-intro.html" class="nav-link">Smart Alerts Introduction</a>
                    <a href="/phase-3-ai-features/02-alert-severity-guide.html" class="nav-link">Alert Severity Guide</a>
                    <a href="/phase-3-ai-features/03-alert-categories.html" class="nav-link">Alert Categories</a>
                    <a href="/phase-3-ai-features/04-accept-decline-workflow.html" class="nav-link">Accept/Decline Workflow</a>
                    <a href="/phase-3-ai-features/05-ai-chat-getting-started.html" class="nav-link">AI Chat - Getting Started</a>
                    <a href="/phase-3-ai-features/06-ai-chat-templates.html" class="nav-link">AI Chat Templates</a>
                    <a href="/phase-3-ai-features/07-ai-context-explained.html" class="nav-link">AI Context Explained</a>
                    <a href="/phase-3-ai-features/08-business-profile-setup.html" class="nav-link">Business Profile Setup</a>
                    <a href="/phase-3-ai-features/09-custom-context-entries.html" class="nav-link">Custom Context Entries</a>
                </div>
            </div>

            <div class="nav-section">
                <h3>Advanced</h3>
                <div class="nav-links">
                    <a href="/phase-4-advanced/01-global-settings.html" class="nav-link">Global Settings</a>
                    <a href="/phase-4-advanced/08-email-alerts-setup.html" class="nav-link">Email Alerts Setup</a>
                    <a href="/phase-4-advanced/05-troubleshooting-sync.html" class="nav-link">Troubleshooting: Sync Issues</a>
                    <a href="/phase-4-advanced/06-troubleshooting-oauth.html" class="nav-link">Troubleshooting: OAuth Issues</a>
                    <a href="/phase-4-advanced/07-troubleshooting-general.html" class="nav-link">Troubleshooting: General</a>
                </div>
            </div>
        </nav>
    </aside>

    <!-- Main Content -->
    <main>
        <div class="content">${content}</div>
    </main>

    <!-- Footer - Landing Page Style -->
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-brand">
                <div class="footer-logo">
                    <img src="/logo.png" alt="PerfoAds" style="width: 32px; height: 32px;">
                    <h4 style="margin: 0; display: inline-block; margin-left: 12px; vertical-align: middle;">PerfoAds</h4>
                </div>
                <p>AI that doesn't just spot trends. It understands your clients' businesses and tells you exactly what matters.</p>
                <a href="https://www.perfoads.com/#pricing" class="footer-cta">Transform my Business</a>
                <div class="footer-social">
                    <a href="https://x.com/">Twitter/X</a>
                </div>
            </div>
            <div class="footer-section">
                <h5>Sections</h5>
                <div class="footer-links">
                    <a href="https://www.perfoads.com/#features">Features</a>
                    <a href="https://www.perfoads.com/#benefits">Benefits</a>
                    <a href="https://www.perfoads.com/#testimonials">Testimonials</a>
                    <a href="https://www.perfoads.com/#pricing">Pricing</a>
                    <a href="https://www.perfoads.com/#faq">FAQ</a>
                </div>
            </div>
            <div class="footer-section">
                <h5>Pages</h5>
                <div class="footer-links">
                    <a href="/">Documentation</a>
                    <a href="https://www.perfoads.com/privacy">Privacy Policy</a>
                    <a href="https://www.perfoads.com/tos">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>

    <div class="footer-bottom">
        All Rights Reserved © 2025 PerfoAds
    </div>

</body>
</html>`;
}

// Process a single markdown file
function processMarkdownFile(mdPath) {
  console.log(`Processing ${mdPath}...`);

  // Read markdown
  const markdown = fs.readFileSync(mdPath, 'utf8');

  // Extract title and strip frontmatter
  const title = extractTitle(markdown);
  const cleanMarkdown = stripFrontmatter(markdown);

  // Convert to HTML
  const htmlContent = marked(cleanMarkdown);

  // Generate full HTML with template
  const fullHTML = generateHTML(title, htmlContent);

  // Write HTML file (same path, .html extension)
  const htmlPath = mdPath.replace('.md', '.html');
  fs.writeFileSync(htmlPath, fullHTML, 'utf8');

  console.log(`✅ Generated ${htmlPath}`);
}

// Main execution
console.log('🔄 Regenerating HTML files from updated markdown...\n');

updatedFiles.forEach(file => {
  const fullPath = path.join(__dirname, file);

  // Skip CHANGELOG.md as it doesn't need HTML version
  if (file === 'CHANGELOG.md') {
    console.log(`⏭️  Skipping ${file} (no HTML version needed)\n`);
    return;
  }

  if (fs.existsSync(fullPath)) {
    processMarkdownFile(fullPath);
  } else {
    console.log(`❌ File not found: ${fullPath}`);
  }
});

console.log('\n✅ HTML regeneration complete!');
