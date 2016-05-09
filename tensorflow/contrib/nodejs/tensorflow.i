%{
#include "tensorflow/core/public/version.h"
#include "tensorflow/core/public/tensor_c_api.h"
#include "tensorflow/core/platform/env.h"
#include "tensorflow/core/public/session.h"

extern const char version[] = TF_VERSION_STRING;


extern void destruct(void * data, size_t len, void * arg);
%}

%include "../../core/public/version.h"
extern const char version[] = TF_VERSION_STRING;

%include cpointer.i
%pointer_functions(long long, longlongp);
%typemap(in) void* = char*;

%constant void TF_Destructor(void*, size_t, void*) = destruct;
%inline %{
  void destruct(void * data, size_t len, void * arg){};
%}




%include "../../core/public/tensor_c_api.h"

%include "./session.i"
