var ClusterCollection = require('../collections/clusterCollection')
  , NavigationView = require('./navigationView')
  , StartView = require('./startView')
  , ClusterView = require('./clusterView')
  , User = require('../models/user');

// App View
// --------
// The App View is our top most ui component.

module.exports = Backbone.View.extend({
  el: $('#tomatocluster'),

  initialize: function() {
    _.bindAll(this, 'clusterAdded');
    this.currentUser = new User;
    this.clusters = new ClusterCollection;
    this.clusters.bind('add', this.clusterAdded);
  },

  clusterAdded: function(cluster) {
    var clusterView = new ClusterView({ model: cluster });
    this.$el.append(clusterView.render().el);
  },

  // Creates the sub views
  render: function() {
    this.navigation = new NavigationView;
    this.startView = new StartView;
  }
});
