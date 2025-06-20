bun build ./src/main.tsx --outdir=public
bun run compile-scss.js

cp public/main.css ../main.css
cp public/main.js ../main.js
