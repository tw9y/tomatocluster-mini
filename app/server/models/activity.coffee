mongoose = require 'mongoose'
Schema = mongoose.Schema
Pomodoro = require './pomodoro'
ObjectId = Schema.ObjectId

Activity = new Schema
  title: { type: String, required: true }
  cluster: { type: ObjectId, required: true }
  pomodoros: { type: [Pomodoro] }

mongoose.model 'Activity', Activity
