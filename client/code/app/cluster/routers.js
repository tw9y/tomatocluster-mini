var views = require('./views')
  , models = require('./models');

/**
 * Router for app
 */
exports.AppRouter = Backbone.Router.extend({

  /**
   * Create a Navigation View on initialization
   * since that's the only view that's persistant 
   * all the time
   */
  initialize: function() {
    navigationView = new views.NavigationView({ 
      el: $('.navbar'),
      model: new models.User()
    });
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
        model: new models.Cluster(cluster)
      });
      if (typeof(startView) !== 'undefined') startView.remove();
      $('body').append(clusterView.render().el);
    });
  },

  /**
   * The Start route are triggered when loading the
   * root page
   */
  startRoute: function() {
    if (typeof(startView) !== 'undefined') startView.remove();
    startView = new views.StartView();
    $('body').append(startView.render().el);
  },

  defaultRoute: function(splat) {
    this.navigate('/', { trigger: true });
  }
});
