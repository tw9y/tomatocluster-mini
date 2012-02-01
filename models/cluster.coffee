mongoose = require 'mongoose'
Schema = mongoose.Schema

Cluster = new Schema
  created_at: Date
  created_by: String

mongoose.model 'Cluster', Cluster
