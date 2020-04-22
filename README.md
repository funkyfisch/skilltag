# skilltag

[![funkyfisch](https://circleci.com/gh/funkyfisch/skilltag.svg?style=shield)](https://circleci.com/gh/funkyfisch/skilltag?branch=master)

A web application to keep track of members of your community/organization, and
quickly find the right person for the job at any time.

[Live Demo](https://skilltag-demo.herokuapp.com)

## Description

You can add members to your instance and assign different skills/titles to them.
Later, at any point, anyone in your organization can quickly look up people
relevant to a skill or task and connect with them fast, without having to go
through layers of contacts just to find the proper individual for the task.

This is mostly aimed at large interconnected organization or a distributed
open source community, when it's not always easy to remember who is good at
what. The goal is to improve productivity in those organizations by cutting
down the time spent on searching for individuals for assistance or for being
assigned something.

You can deploy your own instance of the app on-premise or in the cloud.

## Prerequisites

 - A server machine
 - Docker and docker-compose
 - This repo

## Project setup

### Edit and source the .env file...

Before you deploy, you need to decide on certain things.
 - The port on which the UI will be served
 - Couchdb administration credentials (username and password)
 - The port on which the couchdb instance will be listening at

After deciding, edit the .env file accordingly by un-commenting all the lines
containing the environment variables and choosing the values you need.

Finally, make these variables available to your environment by exporting them
all at once:

```bash
set -o allexport; source .env; set +o allexport;
```

### ...or export the variables directly in the shell

You can also choose to directly export the variables in the shell, without
having to source the environment file. Remember to reference the .env file
so you do not forget any of the variables!

### Deploy your instance

Using docker-compose and the variables defined above, we can now deploy our own
instance:

```bash
docker-compose up -d
```

This should:
 - Build the app docker image and start it up
 - Create and start an instance of couchdb

That's all! You should have a fully working instance right now and can proceed
to add your first fellow colleague/team member.


## Development

You customize the app to your liking before you deploy your own instance, or you
can also contribute to the upstream.

### Prerequisites

In addition to docker and docker-compose, you will need the following:
 - npm and nodejs
 - vue-cli installed globally.

A possibility to develop within Docker is to be added in the future.

### Setup the environment variables

The variables mentioned [in here](#edit-and-source-the-env-file) need to be
defined to your liking, and thats how you have your development environment
ready. Your development app will be listening on localhost:UI_PORT and you
can connect it to either a local couchdb instance or a remote by setting
COUCHDB_HOST.

Before going any further, make sure you navigate to the "ui" folder.

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run serve
```

You can now start editing code and you can see the changes in the browser as
soon as you save your work!

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```
