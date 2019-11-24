# Remove old build Files
rm -rf ../build/ds/*.js

# Compile ts -> js
tsc

# Copy Data Structures
cp *.js ../build/ds

# Define colors
RED='\033[0;31m'
NC='\033[0m'
GREEN='\033[0;32m'

# Summary
printf "${RED}Done Building with the following\n${NC}"
for i in `ls ../build/ds`; do
  printf "${GREEN}${i}${NC}\n";
done;
