var ActivityView = require('./activityView');

/**
 * ClusterView
 * Handles ui logic for the Cluster
 */
module.exports = Backbone.View.extend({
  template: ss.tmpl['cluster'],
  className: "container-fluent",

  initialize: function() {
    _.bindAll(this, 'addOne', 'addAll', 'render');
//    this.activities = new collections.ActivityCollection({ cluster: this.model });

    // Attach event listeners to the collection
//    this.activities.bind('add', this.addOne);
//    this.activities.bind('reset', this.addAll);
//    this.activities.bind('all', this.render);

    //this.activities.fetch();
  },

  events: {
    "click .newActivity": "createActivity"
  },

  addOne: function(activity) {
    var view = new ActivityView({ model: activity });
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
    $(this.el).html(this.template.render());
    this.$('.timeline').append(this.users.render().el);
    return this;
  }

});
