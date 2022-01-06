#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -abortgit commit -m 'deploy'

git push -f git@github.com:daxton47/hess-demo.git main:gh-pages

cd -