# Requires
express = require 'express'
config = require './config'

# Create Server
app = express.createServer()
config.configure app

# Routing
app.get '/', (req, res) ->
  res.render 'startpage'

app.post '/cluster', (req, res) ->
  res.redirect '/', 301

app.get '/cluster/:id', (req, res) ->
  res.render 'dashboard'
app.listen app.set 'port'

# NowJS, WebSocket Stuff
nowjs = require 'now'
everyone = nowjs.initialize app

nowjs.on 'connect', ->
  console.log @now

everyone.now.persist = (model, success) ->
  # Store in Mongo
  everyone.now.recieveActivity model
  success()

module.exports.app = app

# Say It
console.log 'tomatocluster-mini started on port 3000'
