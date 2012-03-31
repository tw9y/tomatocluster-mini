
exports.actions = function(req, res, ss) {
  req.use('session');

  return {
    /**
     * Creates a new Cluster and returns it's id
     */
    create: function() {
      var clusterId = 435342;
      req.session.channel.subscribe(clusterId);
      res(clusterId);
    },

    /**
     * Subscribes the current session to the provided cluster id
     */
    join: function(clusterId) {
      req.session.channel.subscribe(clusterId);
      res(true);
    }
  }
}
