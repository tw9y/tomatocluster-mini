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
    // Occurs when someone visits a cluster route
    read: function(cluster) {
      Cluster.findById(cluster._id, function(error, cluster) {
        if (error) return res(error);
        if (!cluster) return res("Could not find a cluster with that id");

        // Subscribe to the channel and publish a event
        var channelId = cluster._id.toString();
        req.session.channel.reset();
        // Publish the event that a user has joined
        // before subscribing the user self.
        ss.publish.channel(channelId, 'cluster.userJoined', req.session.user);
        req.session.channel.subscribe(channelId);
        res(null, cluster.toJSON());
      });
    },

    leave: function(cluster) {
      // Send a message to the otehr subscribers of the cluster
      ss.publish.channel(cluster._id, "cluster.userLeft", req.session.user);

      // Unsubscribe to the cluster
      req.session.channel.unsubscribe(cluster._id);
    }
  }
}
