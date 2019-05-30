const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/app-b/runtime-es2015.js',
    './dist/app-b/polyfills-es2015.js',
    './dist/app-b/scripts.js',
    './dist/app-b/main-es2015.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/app-b.js');
  await fs.copyFile(
    './dist/app-b/styles.css',
    'elements/styles.css'
  );
})();