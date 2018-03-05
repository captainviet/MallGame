#!/bin/sh

echo "Copying assets from Unity project to dev server..."
cp -r ~/Documents/unity.nosync/disk/MallGame_WebGL/* static/
echo "Assets copied."
git st
git aa
git cm "Deployment tag: $1"
echo "Pushing assets to production server..."
git po
echo "Assets pushed,"
echo $(gcloud compute ssh instance-2 -- 'cd MallGameServer && git pull && pm2 ls')
echo "Deployment finished."
