var mongoose = require('mongoose');

exports.apply = function(ss) {
  ss.client.packAssets();
  mongoose.connect('mongodb://localhost/tomatocluster-prod');
};
