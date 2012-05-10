var Activity = require('../models/activity');

exports.actions = function(req, res, ss) {
  req.use('session');

  return {

    /**
     *
     */
    create: function(activity) {

    },

    read: function(activity) {
      console.log(activity);
    }
  }
};
