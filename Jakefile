// Requires
var print = require('util').print,
    child_process = require('child_process'),
    spawn = child_process.spawn,
    exec = child_process.exec,
    path = require('path'),
    fs = require('fs'),
    forever = require('forever');

// ANSI Terminal Colors
var bold = '\033[0;1m',
    green = '\033[0;32m',
    reset = '\033[0m',
    red = '\033[0;31m';

/*********************
 * Tasks
 *********************/
desc('Runs the specs');
task('default', [], function() {
});

desc('Starts a dev environment');
task('dev', [], function() {
  start_dev_server();
});

desc('Runs the Specs');
task('spec', [], function() {
  spec(function() {
    log('I R done', green);
  });
});

/**********************
 * Le functions!
 *********************/
function log(message, color, explanation) {
  console.log(color + message + reset + ' ' + (explanation || ''));
}

function start_dev_server() {
  log('TomatoCluster Mini Starting... Gnnn', green);
  var app = new forever.Monitor('app/server/server.js', {
    watch: true,
    watchDirectory: 'app'
  });
  app.start();
}

function spec(callback) {
  var file,
      options = ['-c', '-R', 'spec'],
      server_specs = fs.readdirSync(path.join(__dirname, 'spec/server')),
      client_specs = fs.readdirSync(path.join(__dirname, 'spec/client'));

  for(var i=0; i < server_specs.length; i++) {
    file = server_specs[i];
    if (file.indexOf('_spec.js') > -1)
      options.push(path.join('spec/server', file));
  }

  for(var i=0; i < client_specs.length; i++) {
    file = server_specs[i];
    if (file.indexOf('_spec.js') > -1)
      options.push(path.join('spec/client', file));
  }

  var spec_process = spawn('mocha', options);
  spec_process.stdout.on('data', function(data) { print(data.toString()); });
  spec_process.stderr.on('data', function(data) { log(data.toString(), red); });
  spec_process.on('exit', function(status) {
    if (status == 0 && typeof(callback) === 'function') 
      callback();
  });
}
