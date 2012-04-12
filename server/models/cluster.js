var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

/**
 * Mongo Model representing a Cluster
 */
var Cluster = new Schema({
    createdAt: { type: Date, default: Date.now }
  , title: { type: String }
  , lastActivity: { type: Date }
});

Cluster.method('findActiveActivities', function() {

});

// Create the model and export it at the same time
module.exports = mongoose.model('Cluster', Cluster);
