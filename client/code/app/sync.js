
/*
 * Overrides Backbones default syncing
 */
Backbone.sync = function(method, model, options) {
  var rpcFunc = model.rpcType + '.' + method;
  console.log(rpcFunc);
  ss.rpc(rpcFunc, model, function(error, res) {
    if (error) return options.fail();
    model.set(res);
    options.success();
  });
};
