# nginx

Our app consists of two parts:

* The NodeJS API, running on port 3000
* The UI, which is a bunch of static files

We want to serve both of these at the same time, but not restrict ourselves to doing everything with ExpressJS. This is why we'll add nginx as a reverse proxy:

* api.example.com will go to the NodeJS app
* example.com and www.example.com will serve the static UI files

## Installation

```bash
sudo apt-get install nginx
```

Nginx has a concept called "sites". We can have as many sites as we want, but in our case we'll use just one. Let's remove the default one first:

```bash
sudo rm /etc/nginx/sites-enabled/default
```

Now, let's symlink our app's own site file:

```bash
sudo ln -s /root/bnb-simple-nodejs-app/data/nginx/bnb-simple-node-app /etc/nginx/sites-enabled/bnb-simple-node-app
```

Verify that the configuration is fine:

```bash
sudo nginx -t
```

If everything is fine we restart nginx to apply the configuration:

```bash
sudo service nginx restart
```
