{spawn, exec} = require 'child_process'
{print} = require 'util'
path = require 'path'
fs = require 'fs'
forever = require 'forever'

# ANSI Terminal Colors
bold = '\033[0;1m'
green = '\033[0;32m'
reset = '\033[0m'
red = '\033[0;31m'

###############################
# Tasks
###############################
task 'dev', ->
  build_server true
  build_client true
  app = new (forever.Monitor) 'lib/server.js',
    watch: true
    watchDirectory: 'lib'
  app.start()

task 'prod', ->
  console.log 'not yet'

task 'build', ->
  build_server -> build_client -> log 'Done', green

task 'build:client', ->
  build_client -> log 'Done', green

task 'build:css', ->
  console.log 'hello'

task 'spec', ->
  spec -> log 'Done', green

###############################
# Le functions!
###############################
log = (message, color, explanation) ->
  console.log color + message + reset + ' ' + (explanation or '')

build_server = (watch, callback) ->
  if typeof watch is 'function'
    callback = watch
    watch = false
  options = ['-c', '-o', 'lib', 'app/server']
  options.unshift '-w' if watch

  coffee = spawn 'coffee', options
  coffee.stdout.on 'data', (data) -> print data.toString()
  coffee.stderr.on 'data', (data) -> log data.toString(), red
  coffee.on 'exit', (status) -> callback?() if status is 0

build_client = (watch, callback) ->
  if typeof watch is 'function'
    callback = watch
    watch = false
  options = ['-c', '-o', 'public/javascripts', 'app/client']
  options.unshift '-w' if watch

  coffee = spawn 'coffee', options
  coffee.stdout.on 'data', (data) -> print data.toString()
  coffee.stderr.on 'data', (data) -> log data.toString(), red
  coffee.on 'exit', (status) -> callback?() if status is 0

spec = (callback) ->
  options = ['-c', '-R', 'spec']
  for file in fs.readdirSync path.join __dirname, 'spec/server'
    options.push path.join 'spec/server', file if file.indexOf('_spec.coffee') > -1
  for file in fs.readdirSync path.join __dirname, 'spec/client'
    options.push path.join 'spec/client', file if file.indexOf('_spec.coffee') > -1
  spec = spawn 'mocha', options
  spec.stdout.on 'data', (data) -> print data.toString()
  spec.stderr.on 'data', (data) -> log data.toString(), red
  spec.on 'exit', (status) -> callback?() if status is 0
