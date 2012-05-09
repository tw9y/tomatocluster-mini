var ClusterCollection = require('../collections/clusterCollection')
  , NavigationView = require('./navigationView')
  , StartView = require('./startView')
  , User = require('../models/user');

/*
 * AppView is our topmost level ui component
 */
module.exports = Backbone.View.extend({
  el: $('#tomatocluster'),

  initialize: function() {
    _.bindAll(this, 'clusterAdded');
    this.currentUser = new User;
    this.clusters = new ClusterCollection;
    this.navigation = new NavigationView;
    this.startView = new StartView;
  }
});
