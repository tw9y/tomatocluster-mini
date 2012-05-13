var ActivityView = require('./activityView')
  , ActivityCollection = require('../collections/activityCollection');

// Activity View
// -------------

module.exports = Backbone.View.extend({
  template: ss.tmpl['cluster'],
  className: "container-fluent",

  initialize: function() {
    _.bindAll(this, 'addOne', 'addAll', 'userJoined', 'render');

    // Create an *ActivityCollection* for this cluster
    this.activities = new ActivityCollection({ cluster: this.model });
    this.activities.bind('add', this.addOne);
    this.activities.bind('reset', this.addAll);
    this.activities.bind('all', this.render);
    //this.activities.fetch();

    // Listen to Pub/Sub Events
    ss.event.on('cluster.userJoined', this.userJoined);
  },

  events: {
    "click .newActivity": "createActivity"
  },

  userJoined: function( user, channelName ) {
    console.log('event running: ' + channelName + ' : ' + this.model.id);
    if ( channelName != this.model.id ) return;
    console.log('someone joined');
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
    $(this.el).html(this.template.render({}));
    return this;
  }

});
