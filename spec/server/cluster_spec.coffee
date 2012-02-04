require './spec_helper'
Cluster = require '../../app/server/models/cluster'

describe "Cluster", ->
  beforeEach ->
    @cluster = new Cluster

  it "should validate presence of 'created by'", (done) ->
    @cluster.save (result) ->
      result.errors.should.have.property('created_by')
      done()
