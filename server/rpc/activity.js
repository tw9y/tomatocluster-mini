var Activity = require('../models/activity');

// Activity Pub/Sub
// ================
// Handles Pub/Sub CRUD through socketstream
exports.actions = function(req, res, ss) {
  req.use('session');

  return {

    create: function(activity) {

    },

    read: function(activity) {
      console.log(activity);
    }
  }
};
