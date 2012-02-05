nowjs = require 'now'

module.exports =

  # Initializes Nowjs and defines the methods
  initialize: (app) ->
    @everyone = nowjs.initialize app

    @everyone.now.save = (method, model, success) ->
      success()
