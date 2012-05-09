
/**
 * View that handles the navbar
 */
module.exports = Backbone.View.extend({
  el: $('.navbar'),

  initialize: function() {
    _.bindAll(this, 'render');
    app.currentUser.bind('change', render);
    this.name = this.$('.user-name');
  },

  events: {
    "click .user-name": "editUser"
  },

  editUser: function(evt) {
    alert('should display some kind of editor');
  },

  render: function() {
    this.$('.user-name').text(app.currentUser.get('name'));
    return this;
  }

});
