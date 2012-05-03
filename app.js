var http = require('http')
  , ss = require('socketstream')
  , path = require('path');

// Define a single-page client
ss.client.define('main', {
  view: 'app.jade',
  css:  ['app.styl'],
  code: ['libs', 'app'],
  tmpl: '*'
});

// Serve this client on the root URL
ss.http.router.on('/', function(req, res) {
  res.serveClient('main');
});

ss.client.formatters.add(require('ss-jade'));
ss.client.formatters.add(require('ss-stylus'));
ss.client.templateEngine.use(require('ss-hogan'));

// Apply configuration
var config = require(path.join(__dirname, 'server/config', ss.env));
config.apply(ss);

// Start web server
var server = http.Server(ss.http.middleware);
server.listen(ss.serverPort);

// Start SocketStream
ss.start(server);
