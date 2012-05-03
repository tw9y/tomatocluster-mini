
/**
 * User Model
 */
module.exports = Backbone.Model.extend({
  rpcType: 'user',
  sync: function(method, model, options) {
    this.set('name', 'Markus');
  }
});
