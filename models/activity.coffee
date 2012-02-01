mongoose = require 'mongoose'
Schema = mongoose.Schema

Activity = new Schema
  title: String

mongoose.model 'Activity', Activity
