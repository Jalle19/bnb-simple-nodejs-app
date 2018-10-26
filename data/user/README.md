# Adding a default user

In the server we use in the demonstration there is only the `root` account. It is a bad idea to run everything as root, so we'll have to add a user manually.

## Create a user

Let's add a user that cannot log in via password (we'll only be using SSH keys):

```bash
adduser ubuntu --disabled-password
```

## Copy the authorized key from root to ubuntu

Since we logged in as `root` using our SSH key, we need to copy that one over to our newly created user so we can log in:

```bash
cp -a /root/.ssh/ /home/ubuntu/
```

Let's also copy the Bash configuration since the Hetzner default is pretty nice:

```bash
cp /root/.bashrc /home/ubuntu
```

Now that we've copied over the files, they're still owned by `root`. We need to change the ownership

```bash
chown -R ubuntu:ubuntu /home/ubuntu
```

## Add sudo access for the new user

By default the new user can't do anything that requires root access. We can change that by adding the user to the `sudo` group (everyone who is a member of that group can use sudo):

```bash
adduser ubuntu sudo
```

Normally this would be fine, but sudo asks for a password when we try to use it, and we created a user with the password disabled. To fix this, we need to allow sudo access without a password. Run `visudo` and change the following:

```
%sudo	ALL=(ALL:ALL) ALL
```

To this:

```
%sudo	ALL=(ALL:ALL) NOPASSWD: ALL
```

If you're logged in as the `ubuntu` user, log out and log back in. Now you should have sudo powers.
