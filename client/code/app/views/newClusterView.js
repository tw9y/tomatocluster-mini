

/**
 * NewClusterView
 * A modal window displayed when creating a new cluster
 */
module.exports = Backbone.View.extend({
  template: ss.tmpl['cluster-new'],

  events: {
    "click button.continue": "continue",
    "keypress input": "createOnEnter"
  },

  initialize: function() {
    _.bindAll(this, 'render', 'continue', 'createOnEnter', 'clusterCreated');
    app.clusters.bind('add', this.clusterCreated);
  },

  continue: function(evt) {
    app.currentUser.set('name', this.name.val());
    var cluster = app.clusters.create({ title: this.clusterName.val() }, { wait: true });
    this.modal.modal('hide');
  },

  clusterCreated: function(cluster) {
    router.navigate('/cluster/' + cluster.id);
  },

  createOnEnter: function(evt) {
    if (evt.keyCode == 13) this.continue(evt);
  },

  render: function() {
    $(this.el).html(this.template.render());
    this.name = this.$('#user-name');
    this.clusterName = this.$('#cluster-name');
    this.$el.appendTo('body');
    this.modal = this.$('.modal').modal();
    this.name.focus();
    return this;
  }
});
