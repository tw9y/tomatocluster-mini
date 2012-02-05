(function() {
  var Cluster, app, config, everyone, express, mongoose, nowjs;

  express = require('express');

  config = require('./config');

  mongoose = require('mongoose');

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
      return res.redirect("/cluster/" + cluster.slug, 301);
    });
  });

  app.get('/cluster/:id', function(req, res) {
    return Cluster.findOne({
      slug: req.params.id
    }, function(err, cluster) {
      if (cluster != null) res.render('dashboard', cluster);
      if (err != null) return res.render('error');
    });
  });

  app.listen(app.set('port'));

  nowjs = require('now');

  everyone = nowjs.initialize(app);

  nowjs.on('connect', function() {
    return console.log('someone joined');
  });

  everyone.now.persist = function(model, success) {
    everyone.now.recieveActivity(model);
    return success();
  };

  module.exports.app = app;

  console.log("tomatocluster-mini started on " + (app.set('port')));

}).call(this);
