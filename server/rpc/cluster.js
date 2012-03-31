
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
    }
  }
}
