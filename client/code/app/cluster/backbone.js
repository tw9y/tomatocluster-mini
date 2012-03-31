var ui;

module.exports = ui = {
  /**
   * Router for app
   */
  AppRouter: Backbone.Router.extend({
    initialize: function() {
      window.clusterView = new ui.ClusterView();
      window.startView = new ui.StartView();
    },

    routes: {
      "cluster/:id": "clusterRoute",
      "*actions": "defaultRoute"
    },

    clusterRoute: function(id) {
    },

    defaultRoute: function(actions) {
    }
  }),

  /**
   * Activity Model
   */
  Activity: Backbone.Model.extend({
  }),

  /**
   * Activity Collection
   */
  ActivityCollection: Backbone.Model.extend({
  }),

  /**
   * Cluster View
   * Handles all UI interaction in a Cluster
   */
  ClusterView: Backbone.View.extend({
    el: $('#cluster'),

    events: {
    },

    leave: function(evt) {
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
