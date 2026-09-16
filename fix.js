const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;
      
      // Fix py-24 md:py-32
      content = content.replace(/className="([^"]*)py-24 md:py-32([^"]*)"/g, 'className="$1py-16 md:py-24 lg:py-32$2"');
      
      // Fix py-24
      content = content.replace(/className="([^"]*)py-24([^"]*)"/g, 'className="$1py-16 md:py-24$2"');
      
      // Fix text-5xl md:text-6xl
      content = content.replace(/text-5xl md:text-6xl/g, 'text-4xl md:text-5xl lg:text-6xl');
      content = content.replace(/text-4xl md:text-5xl/g, 'text-3xl md:text-4xl lg:text-5xl');
      content = content.replace(/text-3xl md:text-4xl/g, 'text-2xl md:text-3xl lg:text-4xl');
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content);
        console.log("Updated", fullPath);
      }
    }
  }
}

processDir('./src');
console.log('Padding and typography scaling updated.');
