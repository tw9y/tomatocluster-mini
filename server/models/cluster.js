var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

/**
 * Mongo Model representing a Cluster
 */
var Cluster = new Schema({
    createdAt: { type: Date, default: Date.now }
  , createdBy: { type: String, required: true }
  , lastActivity: { type: Date }
});

Cluster.method('ActiveActivities', function() {
});

// Create the model and export it at the same time
module.exports = mongoose.model('Cluster', Cluster);
