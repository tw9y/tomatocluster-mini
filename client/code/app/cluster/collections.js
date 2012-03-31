var models = require('./models');

module.exports = {
  /**
   * Activity Collection
   */
  ActivityCollection: Backbone.Model.extend({
    model: models.Activity
  })
};
