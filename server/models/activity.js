var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId
  , Pomodoro = require('./pomodoro');

var Activity = new Schema({
    cluster: { type: ObjectId, required: true, index: true }
  , title: { type: String, required: true }
  , pomodoros: { type: [Pomodoro] }
});

module.exports = mongoose.model('Activity', Activity);
