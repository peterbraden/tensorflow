var tf = module.exports = require('./node_build/Release/tensorflow.node')

// Throw an error if the status isn't TF_OK
tf.checkOk = function(status) {
  var code = tf.TF_GetCode(status);
  if (code !== tf.TF_OK) {
    throw new Error(tf.TF_Message(status));
  }
}

module.exports.createSession = function(){

  var opts = tf.TF_NewSessionOptions()
    , status = tf.TF_NewStatus()
    , sess = tf.TF_NewSession(opts, status)

  tf.checkOk(status)

  return sess
}

module.exports.createStringTensor = function(value){
  var dims = tf.new_longlongp()
  tf.longlongp_assign(dims, 0)

  return tf.TF_NewTensor(
      tf.TF_STRING
    , dims
    , 0
    , value
    , value.length
    , tf.TF_Destructor
    , '');
}
