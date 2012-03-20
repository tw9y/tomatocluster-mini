var mongoose = require('mongoose'),
    crypto = require('crypto');

var Cluster = new mongoose.Schema({
  created_at: { type: Date, default: Date.now },
  created_by: { type: String, required: true },
  slug: { type: String, unique: true },
  last_activity: { type: Date }
});

Cluster.method('generate_slug', function() {
  return new Date().valueOf().toString();
});

Cluster.pre('save', function(next) {
  if (!this.slug) this.slug = this.generate_slug();
  next();
});

module.exports = mongoose.model('Cluster', Cluster);
