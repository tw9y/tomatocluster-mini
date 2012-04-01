var Cluster = require('../models/cluster');

exports.actions = function(req, res, ss) {
  req.use('session');

  return {

    /**
     * Creates a new Cluster and returns it's id
     */
    create: function() {
      var cluster = new Cluster({ createdBy: 'demo' });
      cluster.save(function(error) {
        res(cluster._id.toString());
      });
    },

    /**
     * Subscribes the current session to the provided cluster id
     */
    join: function(clusterId) {
      // Resets all channels, atm you can only subscribe in one
      // channel.
      req.session.channel.reset();
      Cluster.find({ _id: clusterId }, function(error, cluster) {
        if (error) return res("An error occured");
        if (!cluster) return res("Unable to join cluster, because it doesn't exist");
        req.session.channel.subscribe(clusterId);
        res();
      });
    }
  }
}
