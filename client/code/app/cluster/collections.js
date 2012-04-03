var models = require('./models');

module.exports = {
  /**
   * Activity Collection
   */
  ActivityCollection: Backbone.Model.extend({
    model: models.Activity,

    initialize: function() {
      ss.event.on('activityCreated', function(activity) {

      });
    }
  }),

  UserCollection: Backbone.Model.extend({
    model: models.User
  })
};
