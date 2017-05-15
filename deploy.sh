#!/bin/bash

cd /Users/geeku/Projects/Geeku/firebase-start/firebase-with-react
yarn run build
cd ..
git add .
git commit -m "$1"
git push