# bnb-simple-nodejs-app

Demonstration for Beer & Banter. See the individual READMEs in the `data/` directory for more detailed information.

## Agenda

In this talk we demonstrate how to set up a basic app on a VPS. We'll briefly touch the following points:

* Creating a server
* Creating a user (only root available out of the box)
* Configure a firewall
* Run our NodeJS API as a service
* Serve our UI using nginx, with a reverse proxy for the NodeJS API
* (very) Basic deployment script

This document will maybe be updated after the presentation so work out any eventual kinks.

## Goals

A web site on http://example.com that uses an API running at http://api.example.com.
