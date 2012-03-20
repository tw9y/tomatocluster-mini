var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Pomodoro = require('./pomodoro'),
    ObjectId = Schema.ObjectId;

var Activity = new Schema({
  title: { type: String, required: true },
  cluster: { type: ObjectId, required: true },
  pomodoros: { type: [Pomodoro] }
});

module.exports = mongoose.model('Activity', Activity);
