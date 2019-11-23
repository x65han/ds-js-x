rm -rf build/ds/*

# define colors
RED='\033[0;31m'
NC='\033[0m'
GREEN='\033[0;32m'

# Compile ts -> js
tsc

# linked list
cp ds/linked_list/linked_list.js build/ds
cp ds/linked_list/node.js build/ds

# binary search tree
cp ds/bst/bst.js build/ds
cp ds/bst/bst_node.js build/ds

# priority queue
cp ds/priority_queue/priority_queue.js build/ds

# stack
cp ds/stack/stack.js build/ds

# queue
cp ds/queue/queue.js build/ds

# disjointed set
cp ds/disjoint_set/disjoint_set.js build/ds

# done
printf "${RED}Done Building with the following\n${NC}"
for i in `ls build/ds`;do
  printf "${GREEN}${i}${NC}\n";
done;
