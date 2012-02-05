(function() {
  var nowjs;

  nowjs = require('now');

  module.exports = {
    initialize: function(app) {
      this.everyone = nowjs.initialize(app);
      return this.everyone.now.save = function(method, model, success) {
        return success();
      };
    }
  };

}).call(this);
