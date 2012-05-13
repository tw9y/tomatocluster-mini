var mongoose = require('mongoose');

exports.apply = function(ss) {
  ss.serverPort = 80;
  ss.client.packAssets();
  ss.session.store.use('redis');
  mongoose.connect('mongodb://localhost/tomatocluster-prod');
};
