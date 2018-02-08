#!/bin/bash

# sh scripts/json/sign-in.sh

curl "http://tic-tac-toe.wdibos.com/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
  "credentials": {
    "email": "j@hi.com",
    "password": "j",
    "password_confirmation": "j"
  }
}'

echo
