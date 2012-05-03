
/**
 * ActivityView
 * Handles ui logic for each activity
 */
module.exports = Backbone.View.extend({
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
