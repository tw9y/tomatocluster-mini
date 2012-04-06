var views = require('./views')
  , models = require('./models');

/**
 * Router for app
 */
exports.AppRouter = Backbone.Router.extend({

  initialize: function() {
    navigationView = new views.NavigationView({ el: $('.navbar') });
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
    ss.rpc('cluster.join', id, function(error, cluster) {
      if (error) return alert('Error occured... sowwy!');
      clusterView = new views.ClusterView({
        el: $('#cluster'),
        model: new models.Cluster(cluster)
      });
      startView.hide();
      clusterView.show();
    });
  },

  /**
   * The Start route are triggered when loading the
   * root page
   */
  startRoute: function() {
    startView = new views.StartView({ el: $('#start') });
    startView.show();
  },

  defaultRoute: function(splat) {
    this.navigate('/', { trigger: true });
  }
});
