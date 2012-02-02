{spawn, exec} = require 'child_process'

task 'test', 'Runs all the tests', ->

  jasmine = require 'jasmine-node'
  util = require 'util'
  path = require 'path'

  specsFolder = path.join __dirname, 'spec'
  isVerbose = false
  teamCity = false
  useRequireJs = false
  showColors = true
  coffee = true
  jUnitReport = false

  jasmine.executeSpecsInFolder(specsFolder, (runner, log) ->
    process.exit(if runner.results().failedCount then 1 else 0)
  , isVerbose, showColors, teamCity, useRequireJs, new RegExp("_spec.coffee$", 'i'), jUnitReport)

task 'dev', 'Starts developement watchers', ->
  console.log 'Started development environment'
  exec 'coffee --compile --watch --output public/client/ app/client/', (err, stdout, stderr) ->
    throw err if err
    console.log stdout + stderr
