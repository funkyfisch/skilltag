#!/bin/bash
set -euo pipefail
IFS=$'\n\t'

./node_modules/serve/bin/serve.js \
  -l "tcp://${HOST}:${PORT}" dist \
  || echo "You need to install serve first!"
