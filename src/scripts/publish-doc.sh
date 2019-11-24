rm -rf docs/
./scripts/doc.sh
cp scripts/* docs
cd docs
rm *.sh
npm install
git init
git add .
git commit -m "`date`"

heroku git:remote -a ds-js-x
git push heroku master -f
heroku open
