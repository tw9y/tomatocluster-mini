
/**
 * A modal window displayed when creating a new cluster
 */
exports.NewClusterView = Backbone.View.extend({
  template: ss.tmpl['cluster-new'],

  events: {
    "click button.continue": "continue",
    "keypress input": "createOnEnter"
  },

  initialize: function() {
    _.bindAll(this, 'render', 'continue', 'createOnEnter');
  },

  continue: function(evt) {
    navigationView.model.set('name', this.name.val());
    var _this = this;
    ss.rpc('cluster.create', this.clusterName.val(), function(error, cluster) {
      if (error) return alert('An error occured');
      app.navigate('/cluster/' + cluster._id, { trigger: true });
      _this.modal.modal('hide');
    });
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
