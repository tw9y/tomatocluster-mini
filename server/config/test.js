var mongoose = require('mongoose');

exports.apply = function(ss) {
  mongoose.connect('mongodb://localhost/tomatocluster-test');
};
