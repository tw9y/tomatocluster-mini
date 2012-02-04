express = require 'express'
stylus = require 'stylus'
path = require 'path'

exports.configure = (app) ->
  app.configure ->
    app.use express.bodyParser()
    app.use express.cookieParser()
    app.use express.session { secret: 'your secret' }
    app.use stylus.middleware
      src: __dirname
      dest: path.join __dirname, '/../public'
    app.use express.static path.join __dirname, '/../public'
    app.set 'view engine', 'jade'

  app.configure 'test', ->
    app.use express.errorHandler()
    app.set 'db', 'mongodb://localhost/tomatocluster-mini-test'
    app.set 'port', 3001

  app.configure 'development', ->
    app.use express.errorHandler { dumpExceptions: true, showStack: true }
    app.set 'db', 'mongodb://localhost/tomocluster-mini-dev'
    app.set 'port', 3000

  app.configure 'production', ->
    app.use express.errorHandler()
    app.set 'port', 80
