# sync README.md
cp README.md build/

# publish to npm
cd build/
npm version patch # path, minor, major
npm publish
open https://www.npmjs.com/package/ds-js-x
