
/**
 *
 */
var ClusterStore = function() {
};

_.extend(ClusterStore.prototype, {
  create: function(cluster, options) {
  },

  find: function(cluster, options) {
  },

  findAll: function() {
  }
});

// Override Backbone sync
Backbone.sync = function(method, model, options) {
  var res, store;
  store = model.store || model.collection.store;

  switch(method) {
    case "read":
      if (model.id) return store.find(model, options);
      else return store.findAll(options);
    case "create": return store.create(model, options);
    case "update": return store.update(model, options);
    case "delete": return store.delete(model, options);
  }
};

exports.clusterStore = new ClusterStore;
