(function() {
  var Cluster, Schema, crypto, mongoose;

  mongoose = require('mongoose');

  crypto = require('crypto');

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
    return new Date().valueOf().toString();
  });

  Cluster.pre('save', function(next) {
    if (this.slug == null) this.slug = this.generate_slug();
    return next();
  });

  module.exports = mongoose.model('Cluster', Cluster);

}).call(this);
