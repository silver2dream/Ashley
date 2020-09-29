#!/bin/bash

echo ---- Gen gRPC Begin ----

SCRIPTPATH=$(readlink -f "$0")
BASEDIR=$(dirname $SCRIPTPATH)
SRCDIR=${BASEDIR}/../shared
CLIENT_OUTDIR=${BASEDIR}/../frontend/app/src/proto
SERVER_OUTDIR=${BASEDIR}/../backend/app/proto
PROTOC_GEN_TS_PATH="${BASEDIR}/../frontend/app/node_modules/.bin/protoc-gen-ts"
# PROTOC_GEN_TS_PATH="/projects/ashley/frontend/app/node_modules/.bin/protoc-gen-ts"

if [ ! -d "${CLIENT_OUTDIR}" ];then
	mkdir -p ${CLIENT_OUTDIR}
elif [ ! -d "${SERVER_OUTDIR}" ]; then
	mkdir -p ${SERVER_OUTDIR}
fi

# gen server code
protoc --go_out=plugins=grpc:${SERVER_OUTDIR} --proto_path=${SRCDIR} ${SRCDIR}/*.proto

# gen client code
protoc \
	--plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
	--js_out="import_style=commonjs,binary:${CLIENT_OUTDIR}" \
	--ts_out="service=grpc-web:${CLIENT_OUTDIR}" \
	--proto_path=${SRCDIR} ${SRCDIR}/*.proto
echo ---- Gen gRPC End ----