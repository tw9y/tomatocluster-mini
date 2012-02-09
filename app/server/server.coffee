# Requires
express = require 'express'
mongoose = require 'mongoose'
config = require './config'
realtime = require './realtime'
Cluster = require './models/cluster'

# Create Server
app = express.createServer()
config.configure app
mongoose.connect app.set 'db'

# Routes
app.get '/', (req, res) ->
  res.render 'startpage'

app.post '/cluster', (req, res) ->
  cluster = new Cluster { created_by: req.connection.remoteAddress }
  cluster.save (err) ->
    res.render 'error' if err?
    res.redirect "/cluster/#{cluster.slug}", 301 unless err?

app.get '/cluster/:id', (req, res) ->
  Cluster.findOne { slug: req.params.id }, (err, cluster) ->
    res.render 'error' if err? or !cluster?
    res.render 'dashboard', cluster if cluster?

# Start listening
app.listen app.set 'port'
realtime.initialize app
module.exports.app = app

# Say It
console.log "tomatocluster-mini started on #{app.set 'port'}"
