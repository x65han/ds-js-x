./node_modules/.bin/typedoc

if [ "$1" = "-o" ]; then
    open docs/index.html
fi
