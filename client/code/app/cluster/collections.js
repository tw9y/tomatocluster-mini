var models = require('./models');

/**
 * Activity Collection
 */
exports.ActivityCollection = Backbone.Model.extend({
  model: models.Activity,

  /**
   * Add listeners
   */
  initialize: function(options) {
    _.bindAll(this, 'sync');

    this.cluster = options.cluster;

    // No cluster defined?
    if (typeof(this.cluster) == 'undefined') return;
  },

  /**
   * Add sync implementation through websocket,
   * consider moving this to separate include
   */
  sync: function(method, model, options) {
    // If no cluster is defined for this collection we don't know what to sync
    if (typeof(this.cluster) == 'undefined') return;

    if (method == 'create') {
    }

    else if (method == 'read') {
      console.log(model);
    }

    else if (method == 'update') {
    }

    else if (method == 'delete') {
    }
  }
});

/**
 * ClusterCollection
 */
exports.ClusterCollection = Backbone.Collection.extend({
  model: models.Cluster
});

/**
 * User Collection
 */
exports.UserCollection = Backbone.Collection.extend({
  model: models.User
});
