const fs = require('fs');
const { marked } = require('marked');

const template = fs.readFileSync('TEMPLATE.html', 'utf8');
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
  const html = template.replace('{{PAGE_TITLE}}', title).replace('{{MAIN_CONTENT}}', content);
  const htmlFile = file.replace('.md', '.html');
  // Highlight this page in the sidebar ("/" is the index page's link).
  const navHref = htmlFile === 'index.html' ? '/' : '/' + htmlFile;
  const withActive = html.replace(`href="${navHref}" class="nav-link"`, `href="${navHref}" class="nav-link active"`);
  fs.writeFileSync(htmlFile, withActive);
  console.log('✅', htmlFile);
});

console.log('\n✅ All HTML files regenerated!');
