
/**
 * View that handles the navbar
 */
module.exports = Backbone.View.extend({
  el: $('.navbar'),

  initialize: function() {
    _.bindAll(this, 'render');
    this.name = this.$('.user-name');
  },

  events: {
    "click .user-name": "editUser"
  },

  editUser: function(evt) {
    alert('should display some kind of editor');
  },

  render: function() {
    var name = app.currentUser.get('name');
    if (name) {
      this.name.text(name);
    }
    return this;
  }

});
