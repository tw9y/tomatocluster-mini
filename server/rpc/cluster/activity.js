var Activity = require('../../models/activity');

/*
 * Exports the Actions
 */
exports.actions = function(req, res, ss) {
  req.use('session');

  return {
    /**
     * Creates a new Activity
     */
    create: function(backboneActivity) {
      var activity = new Activity(backboneActivity);
      activity.cluster = req.session.cluster;
      activity.save(function(error) {
        if (error) res(error);
        ss.publish.channel(req.session.cluster, 'activityCreated', { something: true });
        res();
      });
    }
  };
};
