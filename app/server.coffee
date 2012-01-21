# Server
express = require 'express'
app = express.createServer()
app.configure ->
  app.use express.static(__dirname + '/../static')
  app.use express.cookieParser()
  app.use express.session { secret: 'shimsharoo' }
  app.set 'view engine', 'jade'
app.get '/', (req, res) ->
  res.render 'index'
app.listen 3000

# Now
now = require 'now'
everyone = now.initialize app

# Say It
console.log 'app running on port 3000'
