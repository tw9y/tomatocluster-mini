express = require 'express'
stylus = require 'stylus'
path = require 'path'

exports.configure = (app) ->
  public = path.join __dirname, '../public'

  app.configure ->
    app.use express.bodyParser()
    app.use express.cookieParser()
    app.use express.session { secret: 'super-secret-secret!' }
    app.use express.compiler
      src: path.join __dirname, '../app'
      dest: public
      enable: ['less']
    app.use express.static public
    app.set 'view engine', 'jade'

  app.configure 'test', ->
    app.use express.errorHandler { dumpExceptions: true, showStack: true }
    app.set 'db', 'mongodb://localhost/tomatocluster-mini-test'
    app.set 'port', 3001

  app.configure 'development', ->
    app.use express.errorHandler { dumpExceptions: true, showStack: true }
    app.set 'db', 'mongodb://localhost/tomocluster-mini-dev'
    app.set 'port', 3000

  app.configure 'production', ->
    app.use express.errorHandler()
    app.set 'port', 80
