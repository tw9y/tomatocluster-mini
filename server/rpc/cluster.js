var Cluster = require('../models/cluster');

exports.actions = function(req, res, ss) {
  req.use('session');

  return {

    /**
     * Creates a new Cluster and returns it's id
     */
    create: function(title) {
      var cluster = new Cluster({ title: title });
      cluster.save(function(error) {
        if (error) return res(error);
        res(null, cluster.toJSON());
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
        if (!cluster) return res(new Error("Cluster with that Id doesn't exist"));
        req.session.cluster = cluster._id.toString();
        req.session.channel.subscribe(id);
        res(null, cluster.toJSON());
      });
    },

    /**
     * Unsubscribes a user from a cluster (for example when leaving)
     */
    leave: function(cluster) {
      // Send a message to the otehr subscribers of the cluster
      ss.publish.channel(cluster._id, "userLeave", { user: req.session.userId });

      // Unsubscribe to the cluster
      req.session.channel.unsubscribe(cluster._id);

    }
  }
}
