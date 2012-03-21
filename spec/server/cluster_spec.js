require('../spec_helper');
var Cluster = require('../../app/server/models/cluster');

describe("Cluster", function() {
  beforeEach(function() {
    this.cluster = new Cluster();
  });

  it("should validate precence of 'created by'", function(done) {
    var _this = this;
    this.cluster.save(function(result) {
      result.errors.should.have.property('created_by');
      done();
    });
  });

  it("generates a slug when created", function(done) {
    var _this = this;
    this.cluster.created_by = '127.0.0.1';
    this.cluster.save(function(result) {
      _this.cluster.slug.should.be.ok;
      done();
    });
  });

  it("only generates a slug the first time it's saved", function(done) {
    var _this = this;
    this.cluster.created_by = '127.0.0.1';
    this.cluster.save(function(error) {
      var slug = _this.cluster.slug;

      _this.cluster.save(function(error) {
        _this.cluster.slug.should.equal(slug);
        done();
      });
    });
  });
});
