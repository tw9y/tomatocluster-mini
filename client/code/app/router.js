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
    app.clusters.add(cluster);
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
