#!/bin/bash

# sh scripts/json/sign-in.sh

curl "http://tic-tac-toe.wdibos.com/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
  "credentials": {
    "email": "and@example.email",
    "password": "an example password",
    "password_confirmation": "an example password"
  }
}'

echo
