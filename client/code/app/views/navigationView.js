
/**
 * View that handles the navbar
 */
module.exports = Backbone.View.extend({
  el: $('.navbar'),

  initialize: function() {
    _.bindAll(this, 'render', 'clusterAdded');
    app.currentUser.bind('change', this.render);
    app.clusters.bind('add', this.clusterAdded);
    this.name = this.$('.user-name');
  },

  events: {
    "click .user-name": "editUser"
  },

  clusterAdded: function(cluster) {
    console.log('hello');
  },

  editUser: function(evt) {
    alert('should display some kind of editor');
  },

  render: function() {
    this.$('.user-name').text(app.currentUser.get('name'));
    return this;
  }

});
