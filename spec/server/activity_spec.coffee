require './spec_helper'
Activity = require '../../app/server/models/activity'

describe 'Activity', ->
  beforeEach ->
    @activity = new Activity

  it 'should validate presence of title', (done) ->
    @activity.save (result) ->
      result.errors.should.have.property('title')
      done()

  it 'should validate presence of cluster', (done) ->
    @activity.save (result) ->
      result.errors.should.have.property('cluster')
      done()
