var http = require('http')
  , ss = require('socketstream')
  , mongoose = require('mongoose');

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

// Configuration
if (ss.env == 'production') {
  ss.client.packAssets();
  mongoose.connect('?');
}

if (ss.env == 'development') {
  mongoose.connect('mongodb://localhost/tomocluster-dev');
}

// Start web server
var server = http.Server(ss.http.middleware);
server.listen(3000);

// Start SocketStream
ss.start(server);
