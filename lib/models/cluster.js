(function() {
  var Cluster, Schema, mongoose;

  mongoose = require('mongoose');

  Schema = mongoose.Schema;

  Cluster = new Schema({
    created_at: {
      type: Date,
      "default": Date.now
    },
    created_by: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      unique: true
    },
    last_activity: {
      type: Date
    }
  });

  Cluster.method('generate_slug', function() {
    return Math.round(new Date().valueOf() * Math.random()).toString();
  });

  Cluster.pre('save', function(next) {
    if (this.slug == null) this.slug = this.generate_slug();
    return next();
  });

  module.exports = mongoose.model('Cluster', Cluster);

}).call(this);
