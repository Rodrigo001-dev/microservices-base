#!/bin/bash
echo "Running startup commands"

yarn prisma migrate deploy
yarn prisma generate
yarn start