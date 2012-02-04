mongoose = require 'mongoose'
Schema = mongoose.Schema

Cluster = new Schema
  created_at: { type: Date, default: Date.now }
  created_by: { type: String, required: true }
  last_activity: { type: Date }

module.exports = mongoose.model 'Cluster', Cluster
