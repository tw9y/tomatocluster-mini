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
   * View that handles the navigation
   */
  NavigationView: Backbone.View.extend({
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
      var activity = new models.Activity({ title: 'Demo' });
      ss.rpc('cluster.activity.create', activity.toJSON(), function(error) {
        if (error) return alert("An error occured");
      });
    },

    hide: function(options) {
      $(this.el).hide();
    },

    show: function(options) {
      $(this.el).show();
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

    hide: function(options) {
      $(this.el).hide();
    },

    show: function(options) {
      $(this.el).show();
    }
  })
};
