require('../../spec_helper');
var Cluster = require('../../../server/models/cluster.js');

describe("Cluster", function() {
  beforeEach(function() {
    this.cluster = new Cluster();
  });

  it("validates presence of creator", function(next) {
    var _this = this;
    this.cluster.save(function(errors) {
    });
  });
});
