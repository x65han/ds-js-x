# compile
tsc

# go to tests/ folder
cd tests/

# run tests
for i in Test-*.js; do
    echo $i
    node $i
done;
