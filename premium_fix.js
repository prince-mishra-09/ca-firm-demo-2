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
      
      // Fix stacked padding anomalies
      content = content.replace(/py-16 md:py-16 md:py-24 lg:py-32/g, 'py-12 md:py-20');
      content = content.replace(/py-16 md:py-24 lg:py-32/g, 'py-12 md:py-20');
      
      // Remove bubbly radii
      content = content.replace(/rounded-2xl/g, 'rounded-sm');
      content = content.replace(/rounded-xl/g, 'rounded-sm');
      
      // Remove shadows
      content = content.replace(/shadow-2xl/g, '');
      content = content.replace(/shadow-xl/g, '');
      content = content.replace(/shadow-lg/g, '');
      content = content.replace(/shadow-md/g, '');
      content = content.replace(/shadow-sm/g, '');
      
      content = content.replace(/hover:shadow-lg/g, '');
      content = content.replace(/hover:shadow-md/g, '');
      content = content.replace(/hover:shadow/g, '');
      
      content = content.replace(/ shadow /g, ' ');
      content = content.replace(/"shadow"/g, '""');
      content = content.replace(/ shadow"/g, '"');
      
      // Remove gradients
      content = content.replace(/bg-gradient-to-tr from-primary\/90 to-primary\/40/g, 'bg-primary/95');
      
      // Clean up multiple spaces that might result from replacing with empty strings
      content = content.replace(/  +/g, ' ');

      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content);
        console.log("Updated", fullPath);
      }
    }
  }
}

processDir('./src');
console.log('Premium aesthetic cleanup applied.');
