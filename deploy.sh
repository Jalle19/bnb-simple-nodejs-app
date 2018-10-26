#!/usr/bin/env bash

# Show what is being executed
set -o xtrace

# Pull latest changes
cd /home/ubuntu/bnb-simple-nodejs-app
git pull

# Build
cd api/
yarn
cd ../ui/
yarn
yarn build

# Restart services
sudo systemctl daemon-reload
sudo systemctl restart bnb-simple-node-api
sudo service nginx reload
