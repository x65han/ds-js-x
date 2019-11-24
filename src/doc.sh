npm run clean
mv typedoc.json typedoc.js
./node_modules/.bin/typedoc
mv typedoc.js typedoc.json

if [ "$1" = "-o" ]; then
    open doc/index.html
fi
