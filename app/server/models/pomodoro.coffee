mongoose = require 'mongoose'
Schema = mongoose.Schema

Pomodoro = new Schema
  started_at: { type: Date, default: Date.now }
