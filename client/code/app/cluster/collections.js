var models = require('./models');

module.exports = {
  /**
   * Activity Collection
   */
  ActivityCollection: Backbone.Model.extend({
    model: models.Activity,

    initialize: function() {
      var _this = this;
      ss.event.on('activityCreated', function(activity, channelName) {
        _this.add(activity);
      });
    }
  }),

  /**
   * User Collection
   */
  UserCollection: Backbone.Model.extend({
    model: models.User
  })
};
