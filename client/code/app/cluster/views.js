var models = require('./models'),
    collections = require('./collections');

module.exports = {

  /**
   * Activity View
   */
  ActivityView: Backbone.View.extend({
    enterFocusMode: function() {
    }
  }),

  /**
   * Cluster View
   * Handles all UI interaction in the Cluster
   */
  ClusterView: Backbone.View.extend({
    el: $('#cluster'),

    initialize: function() {
      this.activities = new collections.ActivityCollection();
    },

    events: {
    },

    leave: function(evt) {
      ss.rpc('cluster.leave');
    }
  }),

  /**
   * Start View
   */
  StartView: Backbone.View.extend({
    el: $('#start'),

    events: {
      "click button": "createCluster"
    },

    createCluster: function(evt) {
      // Call the Server and Create new Cluster
      ss.rpc('cluster.create', function(id) {
        // Navigate to the newly created cluster
        app.navigate('cluster/'+id, { trigger: true });
      });
    }
  })
};
