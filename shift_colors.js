const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

function hexToHSL(H) {
  let r = 0, g = 0, b = 0;
  if (H.length == 4) {
    r = "0x" + H[1] + H[1];
    g = "0x" + H[2] + H[2];
    b = "0x" + H[3] + H[3];
  } else if (H.length == 7) {
    r = "0x" + H[1] + H[2];
    g = "0x" + H[3] + H[4];
    b = "0x" + H[5] + H[6];
  }
  r /= 255; g /= 255; b /= 255;
  let cmin = Math.min(r,g,b),
      cmax = Math.max(r,g,b),
      delta = cmax - cmin,
      h = 0, s = 0, l = 0;
  if (delta == 0) h = 0;
  else if (cmax == r) h = ((g - b) / delta) % 6;
  else if (cmax == g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;
  h = Math.round(h * 60);
  if (h < 0) h += 360;
  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  return {h, s: s * 100, l: l * 100};
}

function HSLToHex(h, s, l) {
  s /= 100;
  l /= 100;
  let c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs((h / 60) % 2 - 1)),
      m = l - c/2,
      r = 0, g = 0, b = 0;
  if (0 <= h && h < 60) { r = c; g = x; b = 0; }
  else if (60 <= h && h < 120) { r = x; g = c; b = 0; }
  else if (120 <= h && h < 180) { r = 0; g = c; b = x; }
  else if (180 <= h && h < 240) { r = 0; g = x; b = c; }
  else if (240 <= h && h < 300) { r = x; g = 0; b = c; }
  else if (300 <= h && h < 360) { r = c; g = 0; b = x; }
  r = Math.round((r + m) * 255).toString(16);
  g = Math.round((g + m) * 255).toString(16);
  b = Math.round((b + m) * 255).toString(16);
  if (r.length == 1) r = "0" + r;
  if (g.length == 1) g = "0" + g;
  if (b.length == 1) b = "0" + b;
  return "#" + r + g + b;
}

function processColor(hex) {
  if (hex.toUpperCase() === '#FFFFFF' || hex.toUpperCase() === '#000000') return hex;
  const hsl = hexToHSL(hex);
  
  // If hue is in the Green/Teal range (70 to 190)
  if (hsl.h >= 70 && hsl.h <= 190 && hsl.s > 5) {
    hsl.h = 229; // Shift to Blue
    // Slightly boost saturation to match the vibrant blue
    hsl.s = Math.min(100, hsl.s * 1.1);
    return HSLToHex(hsl.h, hsl.s, hsl.l).toUpperCase();
  }
  
  // If hue is in the Orange/Amber/Yellow range (30 to 65)
  if (hsl.h >= 25 && hsl.h <= 65 && hsl.s > 5) {
    hsl.h = 46; // Shift to Yellow (#ffc600 is H:46)
    hsl.s = Math.min(100, hsl.s * 1.2);
    return HSLToHex(hsl.h, hsl.s, hsl.l).toUpperCase();
  }
  
  return hex;
}

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
    let originalContent = content;
    
    // Replace hex colors
    content = content.replace(/#[0-9a-fA-F]{6}/g, match => processColor(match));
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Color shifted: ${filePath}`);
    }
  }
});
console.log('Color shift complete!');
