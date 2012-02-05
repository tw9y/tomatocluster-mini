require '../spec_helper'
Cluster = require '../../app/server/models/cluster'

describe "Cluster", ->
  beforeEach ->
    @cluster = new Cluster

  it "should validate presence of 'created by'", (done) ->
    @cluster.save (result) =>
      result.errors.should.have.property('created_by')
      done()

  it "generates a slug when created", (done) ->
    @cluster.created_by = '127.0.0.1'
    @cluster.save (error) =>
      @cluster.slug.should.be.ok
      done()
