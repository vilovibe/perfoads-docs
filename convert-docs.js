const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

// Configure marked options
marked.setOptions({
  headerIds: false,
  mangle: false
});

// All markdown files to convert
const docsToConvert = [
  'what-is-perfoads.md',
  'managing-clients.md',
  'viewing-performance.md',
  'smart-alerts.md',
  'ai-chat.md',
  'business-context.md',
  'google-accounts.md',
  'settings.md',
  'data-syncing.md',
  'user-account.md'
];

// Extract title from markdown (first H1)
function extractTitle(markdown) {
  const h1Match = markdown.match(/^#\s+(.+)$/m);
  if (h1Match) {
    return h1Match[1].trim();
  }
  return 'PerfoAds Documentation';
}

// Meta description: the page's first paragraph as plain text, max 155 characters.
function pageDescription(contentHtml) {
  const m = contentHtml.match(/<p>([\s\S]*?)<\/p>/);
  if (!m) return '';
  let text = m[1]
    .replace(/<[^>]+>/g, '')
    .replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
  if (text.length > 155) {
    text = text.slice(0, 152);
    text = text.slice(0, text.lastIndexOf(' ')).replace(/[\s,;:.]+$/, '') + '...';
  }
  return text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Read template once
const template = fs.readFileSync(path.join(__dirname, 'TEMPLATE.html'), 'utf8');

// Process each markdown file
console.log('🔄 Converting markdown files to HTML...\n');

docsToConvert.forEach(mdFile => {
  const mdPath = path.join(__dirname, mdFile);

  if (!fs.existsSync(mdPath)) {
    console.log(`❌ File not found: ${mdFile}`);
    return;
  }

  console.log(`Processing ${mdFile}...`);

  // Read markdown
  const markdown = fs.readFileSync(mdPath, 'utf8');

  // Extract title
  const title = extractTitle(markdown);

  // Convert markdown to HTML
  const htmlContent = marked(markdown);

  // Replace placeholders in template
  let html = template
    .replace('{{PAGE_TITLE}}', title)
    .replace('{{PAGE_DESCRIPTION}}', pageDescription(htmlContent))
    .replace('{{MAIN_CONTENT}}', htmlContent);

  // Add active class to current page in navigation
  const currentHref = `/${mdFile.replace('.md', '.html')}`;
  html = html.replace(
    new RegExp(`href="${currentHref}" class="nav-link"`, 'g'),
    `href="${currentHref}" class="nav-link active"`
  );

  // Write HTML file
  const htmlPath = path.join(__dirname, mdFile.replace('.md', '.html'));
  fs.writeFileSync(htmlPath, html, 'utf8');

  console.log(`✅ Generated ${mdFile.replace('.md', '.html')}`);
});

console.log('\n✅ HTML conversion complete!');
console.log(`📄 Created ${docsToConvert.length} HTML files`);
