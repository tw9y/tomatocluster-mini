var models = require('./models')
  , collections = require('./collections');

module.exports = {

  /**
   * Activity View
   */
  ActivityView: Backbone.View.extend({
    render: function() {
      return this;
    }
  }),

  /**
   * Cluster View
   * Handles all UI interaction in the Cluster
   */
  ClusterView: Backbone.View.extend({

    initialize: function() {
      this.activities = new collections.ActivityCollection();
    },

    events: {
      "click button": "createActivity"
    },

    createActivity: function(evt) {
      ss.rpc('cluster.activity.create', function() {
      });
    },

    render: function() {
      $(this.el).show();
      return this;
    }
  }),

  /**
   * Start View
   */
  StartView: Backbone.View.extend({

    events: {
      "click button": "createCluster"
    },

    createCluster: function(evt) {
      // Call the Server and Create new Cluster
      ss.rpc('cluster.create', function(id) {
        // Navigate to the newly created cluster
        app.navigate('cluster/'+id, { trigger: true });
      });
    },

    render: function() {
      $(this.el).show();
      return this;
    }
  })
};
