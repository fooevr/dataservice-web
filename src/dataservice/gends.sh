#!/bin/sh
pbjs -t static-module -w commonjs ./*.proto -o ds.js
pbts ds.js -o ds.d.ts
pbjs -t proto3 ./*.proto -o ../../public/main.proto
