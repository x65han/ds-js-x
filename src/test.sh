for folder in */; do
    cd $folder
    TEST=test
    if [ -d "$TEST" ]; then
        echo Data Structure = ${folder}
        cd $TEST
        for i in *.ts; do
            echo $i
            ts-node $i
        done;
        cd ..
    fi
    cd ..
done
