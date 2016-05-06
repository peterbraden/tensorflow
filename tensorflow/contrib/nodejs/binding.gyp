{
  'targets': [{ 
    'target_name': 'tensorflow', 
    'sources': ['generated/tensorflow_wrap.cxx'],
    
    'link_settings': {
      'libraries': [
          "-ltensorflow"
        ],
      'ldflags': [
          "-L<!(python -c 'import os,sys; print os.path.realpath(sys.argv[1])' ../../../../tensorflow/bazel-bin/tensorflow)"
          "-Wl,-rpath,../../../../tensorflow/bazel-bin/tensorflow",
        ]
    },

    'include_dirs' : [ 

      "../../..",

      # Include NAN
      "<!(node -e \"require('nan')\")"
    ],

    "conditions": [
      [ "OS==\"mac\"", {
        "xcode_settings": {
          "OTHER_CFLAGS": [
            "-mmacosx-version-min=10.7",
            "-std=c++",
            "-stdlib=libc++",
          ],
          "OTHER_LDFLAGS": [
            '-stdlib=libc++',
            "-L<!(python -c 'import os,sys; print os.path.realpath(sys.argv[1])' ../../../../tensorflow/bazel-bin/tensorflow)"
          ],
          "OTHER_CPLUSPLUSFLAGS": [
            '-std=c++11',
            '-stdlib=libc++',
            '-v'
          ],
          "GCC_ENABLE_CPP_RTTI": "YES",
          "GCC_ENABLE_CPP_EXCEPTIONS": "YES",
          'MACOSX_DEPLOYMENT_TARGET': '10.9',
        },
      }]
    ],
    'cflags': [
    ],
    "cflags!": [
      "-fno-exceptions"
    ],
    'cflags_cc!': [
      "-fno-rtti", "-fno-exceptions" 
    ]
  }]
}
