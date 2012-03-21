require('../spec_helper');
var Activity = require('../../app/server/models/activity');

describe("Activity", function() {
  beforeEach(function() {
    this.activity = new Activity();
  });

  it("should validate presence of title", function(done) {
    this.activity.save(function(result) {
      result.errors.should.have.property('title');
      done();
    });
  });

  it("should validate presence of cluster", function(done) {
    this.activity.save(function(result) {
      result.errors.should.have.property('cluster');
      done();
    });
  });
});
