var tf = module.exports = require('./node_build/Release/tensorflow.node')


module.exports.createSession = function(){

  var opts = tf.TF_NewSessionOptions()

  //  , status = tf.TF_NewStatus()
  //  , sess = tf.TF_NewSession(opts, status)

}
