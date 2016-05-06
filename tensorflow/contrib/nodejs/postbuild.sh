#!/bin/bash
LIB=bazel-out/local_darwin-fastbuild/bin/tensorflow/libtensorflow.so
install_name_tool  -change $LIB "@loader_path/$LIB" ./node_build/Release/tensorflow.node
