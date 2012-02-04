{spawn, exec} = require 'child_process'
{print} = require 'util'
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

task 'build', ->
  build_server -> build_client -> log 'Done', green

task 'build:client', ->
  build_client -> log 'Done', green

task 'build:server', ->
  build_server -> log 'Done', green

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
  options = ['-c', '-o', 'public/client', 'app/client']
  options.unshift '-w' if watch

  coffee = spawn 'coffee', options
  coffee.stdout.on 'data', (data) -> print data.toString()
  coffee.stderr.on 'data', (data) -> log data.toString(), red
  coffee.on 'exit', (status) -> callback?() if status is 0

spec = (callback) ->
  options = ['-c', '-R', 'spec', '-r', 'should', 'spec/server/cluster_spec.coffee']
  spec = spawn 'mocha', options
  spec.stdout.on 'data', (data) -> print data.toString()
  spec.stderr.on 'data', (data) -> log data.toString(), red
  spec.on 'exit', (status) -> callback?() if status is 0
