var ClusterCollection = require('../collections/clusterCollection')
  , NavigationView = require('./navigationView')
  , StartView = require('./startView');

/*
 * AppView is our topmost level ui component
 */
module.exports = Backbone.View.extend({
  el: $('#tomatocluster'),

  initialize: function() {
    _.bindAll(this, 'clusterAdded');
    this.clusters = new ClusterCollection;
    this.clusters.bind('add', this.clusterAdded);
    this.navigation = new NavigationView;
    this.startView = new StartView;
  },

  clusterAdded: function(cluster) {
  }
});
