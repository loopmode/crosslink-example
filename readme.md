# crosslink-example

Example of how to use `yarn` and `crosslink` to manage multiple workspaces in a full-stack project.

- Contains three workspaces `workspaces/client`, `workspaces/server` and `workspaces/common`.
- The client is bootstrapped with `create-react-app`
- The server is bootstrapped with `generator-express-no-stress`
- Each workspace contains an actual yarn workspace with a `packages/*` structure.
- `client` packages can access all other `client` packages and all `common` packages
- `server` packages can access all other `server` packages and all `common` packages

## Installation

Clone this repo. Run `yarn setup` or launch `setup.sh`.