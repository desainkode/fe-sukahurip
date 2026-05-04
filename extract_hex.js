const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');
const hexColors = new Set();

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir(directoryPath, function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.css')) {
    let content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/#[0-9a-fA-F]{6}/g);
    if (matches) {
      matches.forEach(m => hexColors.add(m.toUpperCase()));
    }
  }
});
console.log(Array.from(hexColors).sort().join('\n'));
