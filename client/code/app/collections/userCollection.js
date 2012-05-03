var User = require('../models/user');

/**
 * User Collection
 */
exports.UserCollection = Backbone.Collection.extend({
  model: User
});
