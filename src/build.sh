# Remove old build Files
rm ../build/ds/*.js

# Compile ts -> js
tsc

# Copy Data Structures
for folder in */; do
  # TODO skip node_modules/ folder
  cd $folder
  cp *.js ../../build/ds
  cd ..
done

# Define colors
RED='\033[0;31m'
NC='\033[0m'
GREEN='\033[0;32m'

# Summary
printf "${RED}Done Building with the following\n${NC}"
for i in `ls ../build/ds`; do
  printf "${GREEN}${i}${NC}\n";
done;
