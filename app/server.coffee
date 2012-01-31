# Requires
express = require 'express'
config = require './config'

# Create Server
app = express.createServer()
config.configure app

# Our only Route
app.get '/*', (req, res) ->
  res.render 'dashboard', { layout: '' }
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
