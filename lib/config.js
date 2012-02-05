(function() {
  var express, mongoose, path, stylus;

  express = require('express');

  stylus = require('stylus');

  path = require('path');

  mongoose = require('mongoose');

  exports.configure = function(app) {
    app.configure(function() {
      app.use(express.bodyParser());
      app.use(express.cookieParser());
      app.use(express.session({
        secret: 'your secret'
      }));
      app.use(stylus.middleware({
        src: __dirname,
        dest: path.join(__dirname, '/../public')
      }));
      app.use(express.static(path.join(__dirname, '/../public')));
      return app.set('view engine', 'jade');
    });
    app.configure('test', function() {
      app.use(express.errorHandler({
        dumpExceptions: true,
        showStack: true
      }));
      app.set('db', 'mongodb://localhost/tomatocluster-mini-test');
      return app.set('port', 3001);
    });
    app.configure('development', function() {
      app.use(express.errorHandler({
        dumpExceptions: true,
        showStack: true
      }));
      app.set('db', 'mongodb://localhost/tomocluster-mini-dev');
      return app.set('port', 3000);
    });
    return app.configure('production', function() {
      app.use(express.errorHandler());
      return app.set('port', 80);
    });
  };

}).call(this);
