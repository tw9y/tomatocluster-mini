var models = require('./models')
  , sync = require('./sync');

/**
 * Activity Collection
 */
exports.ActivityCollection = Backbone.Model.extend({
  model: models.Activity,

  initialize: function(options) {
    this.cluster = options.cluster;
  }
});

/**
 * ClusterCollection
 */
exports.ClusterCollection = Backbone.Collection.extend({
  model: models.Cluster,
  store: sync.clusterStore
});

/**
 * User Collection
 */
exports.UserCollection = Backbone.Collection.extend({
  model: models.User
});
