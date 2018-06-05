# [WIP] lerna-multiple-yarn-worspaces

Example of how to use lerna and yarn for managing multiple workspaces in a full-stack project.

- Contains two workspaces `workspaces/client` and `workspaces/server`.
- The client is bootstrapped with `create-react-app`
- The server is bootstrapped with `generator-express-no-stress`
- Each workspace contains an actual yarn workspace with a `packages/*` structure.
- Each workspace contains two "projects" that have access to each other: A main "app" and a "utils" project with its own `package.json` depenencies etc
- As your app grows, you create more folders inside the `packages` and run `yarn bootstrap` in the root directory to have lerna create the required symlinks.

## Motivation

I had a situation where I used a lerna in combination with a yarn workspace for a project.
It contained a client app created with `create-react-app` - using babel v6 - and, a server app using babel v7.
Several smaller parts got extracted out of the main app projects over the time, some of them shared between client and server, but mostly separate stuff.
The client app used to extract several `client-*` packages that were useless for the server and vice verca.

Folder structure looked something like this:

```
packages/
    client-app
    client-utils
    client-*...
    server-app
    server-utils
    server-*...
    shared-utils
    shared-*...
```

At some point I ran into problems because of the dependency hoisting mechanisms and the fact that I had both babel 6 and 7 in the workspace. Some plugins just got confused.  
While client and server should share a common git repo and certain parts of the code, they should not really share their development environment and tooling, which is unavoidable in the default setup.

The idea was now to have a lerna setup for managing symlinks across sub-projects, but use two separate yarn workspaces for server and client.

## Tutorial

- Create the project folder. This is the root for `lerna`.
- Run `lerna init` inside the folder.
    - Use `npx lerna init` so you don't have to install lerna globally.

```
mkdir lerna-multiple-yarn-worspaces
cd lerna-multiple-yarn-worspaces

npx lerna init
```

Lerna created a `packages` folder and a `lerna.json` file with these contents:

```
{
  "lerna": "2.11.0",
  "packages": [
    "packages/*"
  ],
  "version": "0.0.0"
}
```

We want to use multiple workspaces, each managed by yarn, so change our setup from `packages` to `workspaces`.  
This will also prevent confusion because there will be a `packages` folder in each yarn workspace - nested folders with the same name are confusing.

Rename the packages folder and create our two workspaces.

```
mv packages workspaces
mkdir workspaces/client
mkdir workspaces/server
```

In each workspace, create a minimalistic `package.json`:

workspaces/client/package.json
```
{
  "private": true,
  "name": "@client/workspace",
  "workspaces": ["packages/*"]
}
```

workspaces/server/package.json
```
{
  "private": true,
  "name": "@server/workspace",
  "workspaces": ["packages/*"]
}
```


Now change the packages setting in `lerna.json` of the root folder:

```
{
  "lerna": "2.11.0",
  "packages": [
    "workspaces/client/packages/*",
    "workspaces/server/packages/*"
  ],
  "version": "0.0.0"
}
```

[WIP]