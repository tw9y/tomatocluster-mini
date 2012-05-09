
/**
 * User Model
 */
module.exports = Backbone.Model.extend({
  idAttribute: '_id',
  rpcType: 'user',
  sync: function(method, model, options) {
    this.set('name', 'Markus');
  }
});
