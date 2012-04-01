var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var Pomodoro = new Schema({
    startedAt: { type: Date, default: Date.now, required: true }
});

module.exports = Pomodoro;
