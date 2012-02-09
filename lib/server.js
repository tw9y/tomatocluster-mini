(function() {
  var Cluster, app, config, express, mongoose, realtime;

  express = require('express');

  mongoose = require('mongoose');

  config = require('./config');

  realtime = require('./realtime');

  Cluster = require('./models/cluster');

  app = express.createServer();

  config.configure(app);

  mongoose.connect(app.set('db'));

  app.get('/', function(req, res) {
    return res.render('startpage');
  });

  app.post('/cluster', function(req, res) {
    var cluster;
    cluster = new Cluster({
      created_by: req.connection.remoteAddress
    });
    return cluster.save(function(err) {
      if (err != null) res.render('error');
      if (err == null) return res.redirect("/cluster/" + cluster.slug, 301);
    });
  });

  app.get('/cluster/:id', function(req, res) {
    return Cluster.findOne({
      slug: req.params.id
    }, function(err, cluster) {
      if ((err != null) || !(cluster != null)) res.render('error');
      if (cluster != null) return res.render('dashboard', cluster);
    });
  });

  app.listen(app.set('port'));

  realtime.initialize(app);

  module.exports.app = app;

  console.log("tomatocluster-mini started on " + (app.set('port')));

}).call(this);
