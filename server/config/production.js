var mongoose = require('mongoose');

exports.apply = function(ss) {
  ss.serverPort = 80;
  ss.client.packAssets();
  mongoose.connect('mongodb://localhost/tomatocluster-prod');
};
