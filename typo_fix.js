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
      
      // Fix typography stacking anomalies
      content = content.replace(/text-2xl md:text-3xl lg:text-4xl lg:text-5xl lg:text-6xl/g, 'text-4xl md:text-5xl lg:text-6xl');
      content = content.replace(/text-3xl md:text-4xl lg:text-5xl lg:text-6xl lg:text-7xl/g, 'text-5xl md:text-6xl lg:text-7xl');
      content = content.replace(/text-2xl md:text-3xl lg:text-4xl lg:text-5xl/g, 'text-3xl md:text-4xl lg:text-5xl');
      content = content.replace(/lg:text-4xl lg:text-5xl/g, 'lg:text-5xl');
      content = content.replace(/lg:text-3xl lg:text-4xl/g, 'lg:text-4xl');

      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content);
        console.log("Updated", fullPath);
      }
    }
  }
}

processDir('./src');
console.log('Typography stacking fixed.');
