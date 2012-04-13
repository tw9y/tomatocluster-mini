var models = require('./models')
  , collections = require('./collections')
  , modals = require('./modals');

/**
 * ActivityView
 * Handles ui logic for each activity
 */
exports.ActivityView = Backbone.View.extend({
  tagName: 'li',
  template: ss.tmpl['cluster-activity'],

  initialize: function() {
    _.bindAll(this, 'render');
  },

  render: function() {
    $(this.el).html(this.template.render(this.model));
    return this;
  }
});

/**
 * ClusterView
 * Handles ui logic for the Cluster
 */
exports.ClusterView = Backbone.View.extend({
  template: ss.tmpl['cluster'],
  className: "container-fluent",

  initialize: function() {
    _.bindAll(this, 'addOne', 'addAll', 'render');
    this.activities = new collections.ActivityCollection({ cluster: this.model });

    // Attach event listeners to the collection
    this.activities.bind('add', this.addOne);
    this.activities.bind('reset', this.addAll);
    this.activities.bind('all', this.render);

    this.activities.fetch();
  },

  events: {
    "click .newActivity": "createActivity"
  },

  addOne: function(activity) {
    var view = new exports.ActivityView({ model: activity });
    this.$('ul.activities').prepend(view.render().el);
  },

  addAll: function() {
    this.$('ul.activities').empty();
    this.activities.each(this.addOne);
  },

  createActivity: function(evt) {
    var activity = this.activities.create();
  },

  render: function() {
    $(this.el).html(this.template.render({ activities: this.activities, cluster: this.cluster }));
    return this;
  }

});

/**
 * View that handles the navbar
 */
exports.NavigationView = Backbone.View.extend({

  initialize: function() {
    _.bindAll(this, 'render');
    this.name = this.$('.user-name');
    this.model.fetch();
    this.model.bind('change', this.render);
  },

  events: {
    "click .user-name": "editUser"
  },

  editUser: function(evt) {
  },

  render: function() {
    var name = this.model.get('name');
    if (name) {
      this.name.text(name);
    }
    return this;
  }

});

/**
 * StartView handles login in the start page
 */
exports.StartView = Backbone.View.extend({

  template: ss.tmpl['start-content'],
  id: "start",
  className: "container-fluent view",

  events: {
    "click #create-cluster": "createCluster"
  },

  createCluster: function(evt) {
    if (this.createModal) this.createModal.remove();
    this.createModal = new modals.NewClusterView();
    this.createModal.render();
  },

  render: function() {
    $(this.el).html(this.template.render());
    return this;
  }
});
