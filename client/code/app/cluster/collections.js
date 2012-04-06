var models = require('./models');

module.exports = {
  /**
   * Activity Collection
   */
  ActivityCollection: Backbone.Model.extend({
    model: models.Activity,

    /**
     * Add listeners
     */
    initialize: function() {
    },

    /**
     * Add sync implementation through websocket
     */
    sync: function(method, model, options) {
      if (method == 'create') {
      }

      else if (method == 'read') {

      }

      else if (method == 'update') {
      }

      else if (method == 'delete') {
      }
    }
  }),

  /**
   * User Collection
   */
  UserCollection: Backbone.Model.extend({
    model: models.User
  })
};
