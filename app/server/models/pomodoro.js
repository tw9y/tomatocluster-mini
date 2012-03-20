var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Pomodoro = new Schema({
  started_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Pomodoro', Pomodoro);
