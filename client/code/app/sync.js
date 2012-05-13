
// Sync
// ------------
// We override backbones default sync function to provide
// sync through socketstream.
Backbone.sync = function(method, model, options) {
  var rpcAction = model.rpcType + '.' + method;
  ss.rpc(rpcAction, model, function(error, res) {
    if (error) return options.error();
    model.set(res);
    options.success();
  });
};
