var test = require('tape')
  , tensorflow = require('../index')
  , fs = require('fs')
  , tf = tensorflow

test('Tensorflow Version', function(t){
  t.equal(tensorflow.version, '0.8.0')
  t.end()
})


test('Create session', function(t){
  var session = tensorflow.createSession()
  t.ok(session)

  t.end()
})

test('Create Tensor', function(t) {
  var a = tf.createStringTensor("Hello World") 
  t.ok(a)
  t.end()
})

test('Hello World', function(t){
  var a = tf.createStringTensor("Hello World") 
    , session = tensorflow.createSession()
    , out = session.run(a)

    t.equal(out, 'Hello, World');
    t.end()
})
