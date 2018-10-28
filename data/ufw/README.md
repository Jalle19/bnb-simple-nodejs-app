# ufw

`ufw` is a simple and easy-to use firewall that's available at least in Ubuntu.

## Installation

```bash
sudo apt-get install ufw
```

This step may not be required, sometimes ufw is installed out of the box.

## Add some rules

To allow SSH and HTTP traffic, run the following:

```bash
sudo ufw allow 22
sudo ufw allow 80
```

## Enable the firewall

By default the firewall is disabled. Once you're sure you won't lock yourself out when you turn it on, run the following:

```bash
sudo ufw enable
```

## Check status

To see the list of rules and whether the firewall is enabled or not, run the following:

```bash
sudo ufw status
```

This will output something like this:

```
Status: active

To                         Action      From
--                         ------      ----
22                         ALLOW       Anywhere                  
80                         ALLOW       Anywhere                  
22 (v6)                    ALLOW       Anywhere (v6)             
80 (v6)                    ALLOW       Anywhere (v6)
```
