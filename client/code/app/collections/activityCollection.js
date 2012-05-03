var Activity = require('../models/activity');

/**
 * Activity Collection
 */
module.exports = Backbone.Model.extend({
  model: Activity,

  initialize: function(options) {
    this.cluster = options.cluster;
  }
});
