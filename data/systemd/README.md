# systemd

We want to automatically run the NodeJS API in the background all the time, with automatic restarts and all that. The way that requires the least amount of extra software is to use `systemd`, which is available out of the box on all modern Linux distributions

Each "service" in systemd is defined by a "unit" file

## Enable our unit file

```bash
sudo systemctl enable /root/bnb-simple-nodejs-app/data/systemd/bnb-simple-node-api.service
```

## Start the service

```bash
sudo systemctl start bnb-simple-node-api
```

Before the service can actually start properly you need to make sure NodeJS is installed and you've run `yarn install` from the project directory.

You can verify the service is running using (doesn't require sudo):

```bash
systemctl status bnb-simple-node-api
```

## Check log out

```bash
sudo journalctl -u bnb-simple-node-api -f
```
