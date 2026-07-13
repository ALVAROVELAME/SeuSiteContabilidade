import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();

const images = [
  {
    url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=90&w=1800&fit=crop',
    output: 'src/assets/images/hero/hero-contabilidade.webp',
    width: 1800,
  },
  {
    url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=90&w=1400&fit=crop',
    output: 'src/assets/images/sobre/equipe-contabil.webp',
    width: 1400,
  },
  {
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=90&w=1400&fit=crop',
    output: 'src/assets/images/proposta/dashboard-financeiro.webp',
    width: 1400,
  },
  {
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=90&w=1400&fit=crop',
    output: 'src/assets/images/trajetoria/reuniao-corporativa.webp',
    width: 1400,
  },
  {
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=90&w=420&fit=crop&crop=faces',
    output: 'src/assets/images/depoimentos/amanda-silva.webp',
    width: 420,
  },
  {
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=90&w=420&fit=crop&crop=faces',
    output: 'src/assets/images/depoimentos/ricardo-mendes.webp',
    width: 420,
  },
  {
    url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=90&w=900&fit=crop&sig=1',
    output: 'src/assets/images/blog/planejamento-tributario.webp',
    width: 900,
  },
  {
    url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=90&w=900&fit=crop&sig=2',
    output: 'src/assets/images/blog/simples-nacional.webp',
    width: 900,
  },
  {
    url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=90&w=900&fit=crop&sig=3',
    output: 'src/assets/images/blog/fluxo-de-caixa.webp',
    width: 900,
  },
  {
    url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=90&w=1600&fit=crop',
    output: 'src/assets/images/cta/consultoria-contabil.webp',
    width: 1600,
  },
];

async function download(url) {
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0',
    },
  });

  if (!response.ok) {
    throw new Error(`Falha ao baixar ${url}: ${response.status} ${response.statusText}`);
  }

  return Buffer.from(await response.arrayBuffer());
}

for (const image of images) {
  const input = await download(image.url);
  const outputPath = path.join(root, image.output);
  await mkdir(path.dirname(outputPath), { recursive: true });

  const webp = await sharp(input)
    .rotate()
    .resize({ width: image.width, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toBuffer();

  await writeFile(outputPath, webp);
  console.log(`Imagem criada: ${image.output}`);
}

const heroPath = path.join(root, 'src/assets/images/hero/hero-contabilidade.webp');
const ogPath = path.join(root, 'public/images/og-contabilidade.webp');
await mkdir(path.dirname(ogPath), { recursive: true });
await sharp(heroPath)
  .resize(1200, 630, { fit: 'cover' })
  .webp({ quality: 82 })
  .toFile(ogPath);
console.log('Imagem criada: public/images/og-contabilidade.webp');
