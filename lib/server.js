(function() {
  var app, config, everyone, express, nowjs;

  express = require('express');

  config = require('./config');

  app = express.createServer();

  config.configure(app);

  app.get('/', function(req, res) {
    return res.render('startpage');
  });

  app.post('/cluster', function(req, res) {
    return res.redirect('/', 301);
  });

  app.get('/cluster/:id', function(req, res) {
    return res.render('dashboard');
  });

  app.listen(app.set('port'));

  nowjs = require('now');

  everyone = nowjs.initialize(app);

  nowjs.on('connect', function() {
    return console.log(this.now);
  });

  everyone.now.persist = function(model, success) {
    everyone.now.recieveActivity(model);
    return success();
  };

  module.exports.app = app;

  console.log('tomatocluster-mini started on port 3000');

}).call(this);
