
// New Cluster View
// ----------------
// Backbone view that handles the creation of a cluster. Displayed
// as a Twitter Bootstrap modal.
module.exports = Backbone.View.extend({
  template: ss.tmpl['cluster-new'],

  // Define the events in our view
  events: {
    "click button.continue" : "create",
    "keypress input"        : "createOnEnter"
  },

  initialize: function() {
    _.bindAll(this, 'render', 'create', 'created', 'createOnEnter');
  },

  // Starts creating a cluster.
  create: function(evt) {
    app.currentUser.set('name', this.$('#user-name').val());
    var cluster = app.clusters.create({ title: this.$('#cluster-name').val() }, {
      wait: true,
      success: this.created
    });
  },

  // We want confirmation from the server in this case
  // because we need the generated id
  created: function(cluster) {
    router.navigate('/clusters/' + cluster.id);
    this.modal.modal('hide');
  },

  // Listen to 'enter' button
  createOnEnter: function(evt) {
    if (evt.keyCode == 13) this.create(evt);
  },

  render: function() {
    $(this.el).html(this.template.render());
    this.$el.appendTo('body');
    this.modal = this.$('.modal').modal();
    this.$('#user-name').focus();
    return this;
  }
});
