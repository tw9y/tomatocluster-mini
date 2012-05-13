var Cluster = require('../models/cluster');

// Cluster Pub/Sub
// ---------------

// Implements CRUD actions for the Cluster model
exports.actions = function(req, res, ss) {
  req.use('session');

  return {

    // # Create
    create: function(cluster) {
      var cluster = new Cluster(cluster);
      cluster.save(function(error) {
        if (error) return res(error);
        req.session.channel.reset();
        req.session.channel.subscribe(cluster._id.toString());
        res(null, cluster.toJSON());
      });
    },

    // # Read
    read: function(cluster) {
      Cluster.findById(cluster.id, function(error, cluster) {
        if (error) return res(error);
        if (!cluster) return res(new Error("Could not find a cluster with that id"));

        // Subscribe to the channel and publish a event
        var channelId = cluster._id.toString();
        req.session.channel.reset();
        req.session.channel.subscribe(channelId);
        ss.publish.channel(channelId, 'cluster.userJoined', req.session.user);
        res(null, cluster.toJSON());
      });
    },

    /**
     * Unsubscribes a user from a cluster (for example when leaving)
     */
    leave: function(cluster) {
      // Send a message to the otehr subscribers of the cluster
      ss.publish.channel(cluster._id, "cluster.userLeft", req.session.user);

      // Unsubscribe to the cluster
      req.session.channel.unsubscribe(cluster._id);
    }
  }
}
