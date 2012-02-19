mongoose = require 'mongoose'
crypto = require 'crypto'
Schema = mongoose.Schema

Cluster = new Schema
  created_at: { type: Date, default: Date.now }
  created_by: { type: String, required: true }
  slug: { type: String, unique: true }
  last_activity: { type: Date }

Cluster.method 'generate_slug', ->
  identifier = new Date().valueOf() + @created_by
  crypto.createHmac('md5', identifier).digest('hex')

Cluster.pre 'save', (next) ->
  @slug = @generate_slug() unless @slug?
  next()

module.exports = mongoose.model 'Cluster', Cluster
