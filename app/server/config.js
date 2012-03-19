var express = require('express'),
    stylus = require('stylus'),
    path = require('path');

exports.configure = function(app) {
  var public = path.join(__dirname, '../public');

  app.configure(function() {
    app.use(express.bodyParser());
    app.use(express.cookieParser());
    app.use(express.session({ secret: 'super-secret' }));
    app.use(express.compiler({
      src: path.join(__dirname, '../app'),
      dest: public,
      enable: ['less']
    }));
    app.use(express.static(public));
    app.set('view engine', 'jade');
  });

  app.configure('test', function() {
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
    app.set('db', 'mongodb://localhost/tomatocluster-mini-test');
    app.set('port', 3001);
  });

  app.configure('developer', function() {
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
    app.set('db', 'mongodb://localhost/tomatocluster-mini-dev');
    app.set('port', 3000);
  });

  app.configure('production', function() {
    app.use(express.errorHandler());
    app.set('port', 80);
  });
};
