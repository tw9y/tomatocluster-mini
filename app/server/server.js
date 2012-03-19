// Requires
var express = require('express'),
    mongoose = require('mongoose'),
    config = require('./config'),
    Cluster = require('./models/cluster');

// Create Server
var app = express.createServer();
config.configure(app);
mongoose.connect(app.set('db'));

// Routes
app.get('/', function(req, res) {
  res.render('startpage');
});

app.post('/cluster', function(req, res) {
  var cluster = new Cluster({ created_by: req.connection.remoteAddress });
  cluster.save(function(err) {
    if (err) return res.render('error');
    res.redirect('/cluster/' + cluster.slug, 301);
  });
});

app.get('/cluster/:id', function(req, res) {
  Cluster.findOne({ slug: req.params.id }, function(err, cluster) {
    if (err) return res.render('error');
    if (!cluster) return res.render('notfound');
    res.render('cluster', cluster);
  });
});

// Start listening
app.listen(app.set('port'));
module.exports.app = app;

console.log('tomatocluster-mini started on ' + app.set('port'));
