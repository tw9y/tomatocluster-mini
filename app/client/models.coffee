jQuery ->
  class Pomodoro extends Backbone.Model
    defaults: ->
      started_at: Date.now()

    initialize: ->
      alert 'tjabba'
