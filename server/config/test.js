var mongoose = require('mongoose');

exports.apply = function(ss) {
  ss.serverPort = 3001;
  mongoose.connect('mongodb://localhost/tomatocluster-test');
};
