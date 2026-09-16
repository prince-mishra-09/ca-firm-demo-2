const fs = require('fs');
const https = require('https');

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', err => reject(err));
  });
}

async function scrape() {
  try {
    const html = await fetchPage('https://camantra.com/');
    let text = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ' ');
    text = text.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, ' ');
    text = text.replace(/<[^>]+>/g, ' ');
    text = text.replace(/\s+/g, ' ');
    
    // Extract info
    fs.writeFileSync('C:/Users/mrpri/.gemini/antigravity-ide/brain/5fb48a87-715c-44bd-bb89-399343a2f789/scratch/home_text.txt', text);
    
    const linkRegex = /href="([^"]+)"/g;
    let links = new Set();
    let match;
    while ((match = linkRegex.exec(html)) !== null) {
      if (match[1].startsWith('https://camantra.com/')) {
        links.add(match[1]);
      }
    }
    fs.writeFileSync('C:/Users/mrpri/.gemini/antigravity-ide/brain/5fb48a87-715c-44bd-bb89-399343a2f789/scratch/home_links.txt', Array.from(links).join('\n'));
    console.log("Done");
  } catch (err) {
    console.error(err);
  }
}
scrape();
