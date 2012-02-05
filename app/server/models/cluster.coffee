mongoose = require 'mongoose'
Schema = mongoose.Schema

Cluster = new Schema
  created_at: { type: Date, default: Date.now }
  created_by: { type: String, required: true }
  slug: { type: String, unique: true }
  last_activity: { type: Date }

Cluster.method 'generate_slug', ->
  time = Math.round(new Date().valueOf() * Math.random()).toString()
  new Buffer(time).toString('base64')

Cluster.pre 'save', (next) ->
  @slug = @generate_slug() unless @slug?
  next()

module.exports = mongoose.model 'Cluster', Cluster
