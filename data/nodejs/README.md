# nodejs

In order to run any NodeJS applications we must first install NodeJS, as well as the Yarn package manager in our case

## Installation

You can just run `sudo apt-get install nodejs`, but it's hard to tell which version you're going to get. It's better to follow the official instructions on https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions.

### Actual installation

This is copy-pasted from the official guide linked above:

```bash
wget -qO- https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install -y build-essential
```

Once installed, `node --version` should print something like `v10.12.0`.

### Installing Yarn

Run the following:

```
sudo npm install -g yarn
```

Once installed, `yarn --version` should print something like `1.10.1`.
