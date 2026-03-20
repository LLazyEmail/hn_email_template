#!/usr/bin/env sh

filename=$1

if [ -n "$filename" ]; then
  jest --testPathPattern="$filename\.test\.js" --passWithNoTests
else
  jest ./tests/unit/ ./tests/integration/ --passWithNoTests
fi