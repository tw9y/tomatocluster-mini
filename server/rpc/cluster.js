var Cluster = require('../models/cluster');

exports.actions = function(req, res, ss) {
  req.use('session');

  return {

    /**
     * Creates a new Cluster and returns it's id
     */
    create: function(cluster) {
      var cluster = new Cluster(cluster);
      cluster.save(function(error) {
        if (error) return res(error);
        req.session.channel.reset();
        req.session.channel.subscribe(cluster._id.toString());
        res(null, cluster.toJSON());
      });
    },

    /**
     * Reads the cluster from the provided cluster stub
     */
    read: function(cluster) {
      Cluster.findById(cluster.id, function(error, cluster) {
        if (error) return res(error);
        if (!cluster) return res(new Error("Could not find a cluster with that id"));
        req.session.channel.reset();
        req.session.channel.subscribe(cluster._id.toString());
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
