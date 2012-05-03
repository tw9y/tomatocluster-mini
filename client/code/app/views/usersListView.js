

/**
 * View that handles active users
 */
module.exports = Backbone.View.extend({
  template: ss.tmpl['cluster-users'],
  tagName: "ul",
  className: "users",

  initialize: function() {
  },

  render: function() {
    $(this.el).html(this.template.render({users: [{name: 'markus'}, {name: 'kristian'}]}));
    return this;
  }
});
