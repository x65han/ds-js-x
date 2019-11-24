# compile
tsc

# run tests
for folder in */; do
    cd $folder
    TEST=test
    if [ -d "$TEST" ]; then
        echo Path: ${folder}
        cd $TEST
        for i in Test-*.js; do
            echo $i
            node $i
        done;
        cd ..
        printf "\n"
    fi
    cd ..
done
