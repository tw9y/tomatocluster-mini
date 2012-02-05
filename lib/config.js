(function() {
  var express, path, stylus;

  express = require('express');

  stylus = require('stylus');

  path = require('path');

  exports.configure = function(app) {
    app.configure(function() {
      app.use(express.bodyParser());
      app.use(express.cookieParser());
      app.use(express.session({
        secret: 'super-secret-secret!'
      }));
      app.use(stylus.middleware({
        src: path.join(__dirname, '../app'),
        dest: path.join(__dirname, '../public')
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
