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
    join: function(id) {
      // Resets all channels, atm you can only subscribe in one
      // channel.
      req.session.channel.reset();
      Cluster.findById(id, function(error, cluster) {
        if (error) return res(error);
        if (!cluster) return res("Unable to join cluster, because it doesn't exist");

        req.session.cluster = cluster._id.toString();
        req.session.channel.subscribe(id);
        res(null, cluster.toJSON());
      });
    }
  }
}
