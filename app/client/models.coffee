jQuery ->
  ############################
  # Activity Backbone Model
  ############################
  class window.Activity extends Backbone.Model
    defaults: ->
      title: 'New Activity'
      pomodoros: new PomodoroCollection

  ############################
  # Pomodoro Backbone Model
  ############################
  class window.Pomodoro extends Backbone.Model
    defaults: ->
      created_by: now.name
      started_at: Date.now()

    void: ->
      @voided = true
      @ended_at = Date.now()

  # Hookup the Sync method to the now callback
  Backbone.sync = (method, model, options) ->
    now.persist model, options.success
