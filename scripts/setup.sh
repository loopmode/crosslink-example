#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )/.."
TIMESTAMP=$(date "+%Y-%m-%d_%H-%M-%S")

START_TIME=$SECONDS

echo ""
echo "───────────────── [setup.sh] $TIMESTAMP ─────────────────"
echo ""
 

echo ""
echo "[setup.sh] workspaces/client"
echo ""
cd $DIR/workspaces/client
yarn install

echo ""
echo "[setup.sh] workspaces/server"
echo ""
cd $DIR/workspaces/server
yarn install


ELAPSED_TIME=$(($SECONDS - $START_TIME))
echo ""
echo "───────────────── [/setup.sh] Done in $ELAPSED_TIME seconds ─────────────────"
echo ""
