./doc.sh
cp scripts/* docs
cd docs
npm install
git init
git commit -m `date +'%m/%d/%Y %H:%M:%S:%3N'`

heroku git:remote -a ds-js-x
git push heroku master -f
heroku open
