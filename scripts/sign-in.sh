#!/bin/bash

# sh scripts/json/sign-in.sh

curl "http://tic-tac-toe.wdibos.com/sign-in" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
  "credentials": {
    "email": "an@example.email",
    "password": "an example password"
  }
}'

echo
