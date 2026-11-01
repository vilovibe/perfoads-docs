const fs = require('fs');
const { marked } = require('marked');

const template = fs.readFileSync('TEMPLATE.html', 'utf8');

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
const mdFiles = fs.readdirSync('.').filter(f =>
  f.endsWith('.md') &&
  f !== 'README.md' &&
  f !== 'CHANGELOG.md' &&
  f !== 'DOCUMENTATION_FEATURE_MAP.md'
);

console.log('🔄 Regenerating all HTML files from TEMPLATE.html...\n');

mdFiles.forEach(file => {
  const md = fs.readFileSync(file, 'utf8');
  const title = (md.match(/^#\s+(.+)$/m) || ['', 'Documentation'])[1];
  const content = marked.parse(md);
  const html = template.replace('{{PAGE_TITLE}}', title).replace('{{PAGE_DESCRIPTION}}', pageDescription(content)).replace('{{MAIN_CONTENT}}', content);
  const htmlFile = file.replace('.md', '.html');
  // Highlight this page in the sidebar ("/" is the index page's link).
  const navHref = htmlFile === 'index.html' ? '/' : '/' + htmlFile;
  const withActive = html.replace(`href="${navHref}" class="nav-link"`, `href="${navHref}" class="nav-link active"`);
  fs.writeFileSync(htmlFile, withActive);
  console.log('✅', htmlFile);
});

console.log('\n✅ All HTML files regenerated!');
