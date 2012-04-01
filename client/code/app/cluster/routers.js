var views = require('./views');

module.exports = {
  /**
   * Router for app
   */
  AppRouter: Backbone.Router.extend({

    initialize: function() {
      clusterView = new views.ClusterView({ el: $('#cluster') });
      startView = new views.StartView({ el: $('#start') });
    },

    routes: {
      ""             : "startRoute",
      "cluster/:id"  : "clusterRoute",
      "*splat"       : "defaultRoute"
    },

    /**
     * The Cluster route are triggered when
     * a person joins a cluster
     */
    clusterRoute: function(id) {
      ss.rpc('cluster.join', id, function(error) {
        if (error) return alert('Error occured... sowwy!');
        clusterView.render();
      });
    },

    /**
     * The Start route are triggered when loading the
     * root page
     */
    startRoute: function() {
      startView.render();
    },

    defaultRoute: function(splat) {
      // Someone tampered with the url... God damn them!
      // Do something!!!
    }
  })
};
