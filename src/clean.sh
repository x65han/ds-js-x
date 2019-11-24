function cleanGenerated() {
    rm -f *.js
    rm -f *.js.map
}

# clean src/
cleanGenerated

# clean tests/
cd tests
cleanGenerated
