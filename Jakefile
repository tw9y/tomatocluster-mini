// Requires
var print = require('util').print,
    path = require('path'),
    fs = require('fs'),
    Mocha = require('mocha');

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
  spec();
});

desc('Runs the Specs');
task('spec', [], function() {
  spec();
});

/**********************
 * Le functions
 *********************/
function spec() {
  var mocha = new Mocha;
  mocha.reporter('spec').ui('bdd');
  mocha.addFile('spec/server/models/activity_spec.js');
  var runner = mocha.run(function() {
    console.log("Done");
  });
}
