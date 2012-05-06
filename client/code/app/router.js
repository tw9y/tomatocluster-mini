var AppView = require('./views/appView')
  , User = require('./models/user')
  , Cluster = require('./models/cluster');

/**
 * Router for the application
 */
module.exports = Backbone.Router.extend({

  /*
   * Register our supported routes
   */
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
    var cluster = new Cluster({ id: id });
    cluster.fetch();
    this.clusters.add(cluster);

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
    
  },

  defaultRoute: function(splat) {
    this.navigate('/', { trigger: true });
  }
});
