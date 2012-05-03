var mongoose = require('mongoose');

exports.apply = function(ss) {
  ss.serverPort = 3000;
  mongoose.connect('mongodb://localhost/tomatocluster-dev');
};
