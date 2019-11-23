rm -rf build/src/*

# define colors
RED='\033[0;31m'
NC='\033[0m'
GREEN='\033[0;32m'

# Compile ts -> js
cd src
tsc
cd ..

# Remove old build Files
rm build/ds/*.js

# linked list
cp src/linked_list/linked_list.js build/ds
cp src/linked_list/node.js build/ds

# binary search tree
cp src/bst/bst.js build/ds
cp src/bst/bst_node.js build/ds

# priority queue
cp src/priority_queue/priority_queue.js build/ds

# stack
cp src/stack/stack.js build/ds

# queue
cp src/queue/queue.js build/ds

# disjointed set
cp src/disjoint_set/disjoint_set.js build/ds

# done
printf "${RED}Done Building with the following\n${NC}"
for i in `ls build/ds`;do
  printf "${GREEN}${i}${NC}\n";
done;
