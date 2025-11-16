const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'client/public');
const images = fs.readdirSync(publicDir).filter(file => 
  file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')
);

console.log('🖼️  Optimizing images to WebP format...\n');

async function optimizeImages() {
  for (const image of images) {
    try {
      const inputPath = path.join(publicDir, image);
      const outputPath = path.join(publicDir, image.replace(/\.(png|jpg|jpeg)$/, '.webp'));
      
      const stats = fs.statSync(inputPath);
      const originalSize = (stats.size / 1024).toFixed(2);
      
      await sharp(inputPath, { limitInputPixels: false })
        .webp({ quality: 85, effort: 6 })
        .toFile(outputPath);
      
      const newStats = fs.statSync(outputPath);
      const newSize = (newStats.size / 1024).toFixed(2);
      const savings = ((1 - newStats.size / stats.size) * 100).toFixed(1);
      
      console.log(`✅ ${image}`);
      console.log(`   ${originalSize} KB → ${newSize} KB (${savings}% smaller)\n`);
    } catch (err) {
      console.log(`⚠️  Skipping ${image}: ${err.message}\n`);
    }
  }
  console.log('✨ Image optimization complete!');
}

optimizeImages().catch(err => {
  console.error('❌ Fatal error:', err);
  process.exit(1);
});
