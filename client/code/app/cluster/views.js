var models = require('./models')
  , collections = require('./collections');

/**
 * ActivityView
 * Handles ui logic for each activity
 */
exports.ActivityView = Backbone.View.extend({
});

/**
 * ClusterView
 * Handles ui logic for the Cluster
 */
exports.ClusterView = Backbone.View.extend({

  initialize: function() {
    this.activities = new collections.ActivityCollection();
    this.activities.fetch();
  },

  events: {
    "click button": "createActivity"
  },

  createActivity: function(evt) {
  },

  hide: function(options) {
    this.$el.hide();
  },

  show: function(options) {
    this.$el.show();
  }

});

/**
 * Object that encapsulates modals
 * in the application
 */
exports.modal = {

  show: function(tmplName, values, options) {
    var html = ss.tmpl[tmplName].render(values);
    this.current = $(html).appendTo('body').modal();
  }

};

exports.NavigationView = Backbone.View.extend({
});

exports.StartView = Backbone.View.extend({

  events: {
    "click button": "createCluster"
  },

  createCluster: function(evt) {
    exports.modal.show('user-define');
    return;

    // Call the Server and Create new Cluster
    ss.rpc('cluster.create', function(id) {
      // Navigate to the newly created cluster
      app.navigate('cluster/'+id, { trigger: true });
    });
  },

  hide: function(options) {
    this.$el.hide();
  },

  show: function(options) {
    this.$el.show();
  }

});
