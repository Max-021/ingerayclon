#!/usr/bin/env sh
# abort on errors
set -e
# build
npm run build
# navigate into the build output directory
cd dist
# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:achani2497/ingeray_frontend.git master:gh-pages
cd -
clear
echo "Live on: https://achani2497.github.io/ingeray_frontend/"