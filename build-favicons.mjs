import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { Resvg } from '@resvg/resvg-js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname);
const svgPath = join(root, 'favicon-sigforge.svg');

const sizes = [16, 32, 48, 180, 192, 512];

const svg = readFileSync(svgPath, 'utf8');

for (const size of sizes) {
  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: size },
  });
  const pngData = resvg.render();
  const png = pngData.asPng();
  const out = join(root, `favicon-${size}.png`);
  writeFileSync(out, png);
  console.log(`Written ${out}`);
}

console.log('Done. favicon-16.png, favicon-32.png, favicon-48.png, favicon-180.png, favicon-192.png, favicon-512.png');
