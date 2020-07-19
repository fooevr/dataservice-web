#!/bin/sh
#pbjs -t static-module -w commonjs ../protos/*.proto -o ds.js
#pbts ds.js -o ds.d.ts

PROTOC_GEN_TS_PATH="../../node_modules/.bin/protoc-gen-ts"
OUT_DIR="../api"
rm -rf ../api
mkdir ../api
protoc \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out="import_style=commonjs,binary:${OUT_DIR}" \
    --ts_out="service=grpc-web:${OUT_DIR}" \
    --proto_path="../protos" \
    ../protos/*.proto

rm -rf proto
mkdir proto
protoc \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out="import_style=commonjs,binary:./proto" \
    --ts_out="service=grpc-web:./proto" \
    --include_source_info \
    --descriptor_set_out=a.txt \
    ./ChangeDesc.proto

pbjs -t proto3 ../protos/*.proto -o ../../public/main.proto