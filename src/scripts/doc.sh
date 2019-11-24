npm run clean
cp scripts/typedoc.js .
./node_modules/.bin/typedoc
rm typedoc.js

if [ "$1" = "-o" ]; then
    open docs/index.html
fi
