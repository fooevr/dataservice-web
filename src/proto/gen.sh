#!/bin/sh
pbjs -t static-module -w commonjs ./*.proto -o ../scripts/proto/proto.js
pbts ../scripts/proto/proto.js -o ../scripts/proto/proto.d.ts
pbjs -t proto3 ./*.proto -o ../../public/main.proto