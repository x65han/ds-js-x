# sync README.md
cp README.md build/

# publish to npm
cd build/
npm version patch # path, minor, major
npm publish
