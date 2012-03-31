var views = require('./views');

module.exports = {
  /**
   * Router for app
   */
  AppRouter: Backbone.Router.extend({

    routes: {
      "": "startRoute",
      "cluster/:id": "clusterRoute",
      "*splat": "defaultRoute"
    },

    clusterRoute: function(id) {
      if (!window.clusterView) window.clusterView = new views.ClusterView();
    },

    startRoute: function() {
      if (!window.startView) window.startView = new views.StartView();
    },

    defaultRoute: function(splat) {
      // Someone tampered with the url... God damn them!
      // Do something!!!
    }
  })
};
