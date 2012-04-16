var sync = require('./sync');

/**
 * Activity Model
 */
exports.Activity = Backbone.Model.extend({
});

/**
 * Cluster Model
 */
exports.Cluster = Backbone.Model.extend({
  store: sync.clusterStore
});

/**
 * User Model
 */
exports.User = Backbone.Model.extend({
});
