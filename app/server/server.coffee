# Requires
express = require 'express'
config = require './config'
mongoose = require 'mongoose'
Cluster = require './models/cluster'

# Create Server
app = express.createServer()
config.configure app
mongoose.connect app.set 'db'

# Routing
app.get '/', (req, res) ->
  res.render 'startpage'

app.post '/cluster', (req, res) ->
  cluster = new Cluster { created_by: req.connection.remoteAddress }
  cluster.save (err) ->
    res.redirect "/cluster/#{cluster.slug}", 301

app.get '/cluster/:id', (req, res) ->
  Cluster.findOne { slug: req.params.id }, (err, cluster) ->
    res.render 'dashboard', cluster if cluster?
    res.render 'error' if err?

app.listen app.set 'port'

# NowJS, WebSocket Stuff
nowjs = require 'now'
everyone = nowjs.initialize app

nowjs.on 'connect', ->
  console.log 'someone joined'

everyone.now.persist = (model, success) ->
  # Store in Mongo
  everyone.now.recieveActivity model
  success()

module.exports.app = app

# Say It
console.log "tomatocluster-mini started on #{app.set 'port'}"
