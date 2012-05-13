var AppView = require('./views/appView')
  , User = require('./models/user')
  , Cluster = require('./models/cluster');

// Router
// ------
// The router handles our routes for the application.

// Extends Backbone Router
module.exports = Backbone.Router.extend({

  // Register our routes and their callback
  routes: {
    ""             : "startRoute",
    "clusters/:id"  : "clusterRoute",
    "*splat"       : "defaultRoute"
  },

  // Callback for when an individual cluster route
  // is triggered.
  clusterRoute: function(id) {
    var cluster = new Cluster({ '_id': id });
    cluster.fetch();
    app.clusters.add(cluster);
  },

  startRoute: function() {
    
  },

  defaultRoute: function(splat) {
    this.navigate('/', { trigger: true });
  }
});
