
/*
 * Overrires Backbones default syncing
 */
Backbone.sync = function(method, model, options) {
  options.success();

  switch(method) {
    case "read":
      return;
    case "create":
      return;
    case "update":
      return;
    case "delete":
      return;
  }
};
