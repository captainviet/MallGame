#!/bin/sh

echo "\nCopying assets from Unity project to dev server...\n"
cp -r ~/Documents/unity.nosync/disk/MallGame_WebGL/* static/
echo "\nAssets copied.\n"
cp static/index.html.bak static/index.html
git st
git aa
git cm "Deployment tag: $@"
echo "\nPushing assets to production server...\n"
git po
echo "\nAssets pushed.\n"
echo $(gcloud compute ssh instance-2 -- 'cd MallGameServer && git pull && pm2 ls')
echo "\nDeployment finished.\n"
