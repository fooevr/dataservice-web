#!/bin/sh
pbjs -t static-module -w commonjs ./protos/*.proto -o ds.js
pbts ds.js -o ds.d.ts
pbjs -t proto3 ./protos/*.proto -o ../../public/main.proto
