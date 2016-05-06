#!/bin/bash

BASEDIR=`python -c 'import os,sys; print os.path.realpath(sys.argv[1])' ../../../../tensorflow`
BZL_OUT="$BASEDIR/bazel-out"
LIB="$BZL_OUT/local_darwin-fastbuild/bin/tensorflow/libtensorflow.so"
DIR=`pwd`


echo $LIB $BASEDIR
mkdir -p node_build/Release
ln -s $BZL_OUT node_build/Release
