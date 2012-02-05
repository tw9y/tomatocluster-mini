(function() {
  var Activity, ObjectId, Pomodoro, Schema, mongoose;

  mongoose = require('mongoose');

  Schema = mongoose.Schema;

  Pomodoro = require('./pomodoro');

  ObjectId = Schema.ObjectId;

  Activity = new Schema({
    title: {
      type: String,
      required: true
    },
    cluster: {
      type: ObjectId,
      required: true
    },
    pomodoros: {
      type: [Pomodoro]
    }
  });

  module.exports = mongoose.model('Activity', Activity);

}).call(this);
