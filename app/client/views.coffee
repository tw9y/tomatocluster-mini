jQuery ->
  #####################
  # Focus View        #
  #####################
  class window.FocusView extends Backbone.View

  #####################
  # Activity View
  #####################
  class window.ActivityView extends Backbone.View
    tagName: 'li'
    className: 'activity'
    template: _.template $('#activity-template').html()

    initialize: ->
      @countDownEnds = new Date().add(25).minutes()

    tick: ->
      totalSecondsLeft = Math.floor((@countDownEnds - Date.now()) / 1000)
      minutesLeft = Math.floor(totalSecondsLeft / 60)
      secondsLeft = Math.floor(totalSecondsLeft % 60)
      timeLeft = if minutesLeft < 10 then '0' + minutesLeft else minutesLeft
      timeLeft += ':'
      timeLeft += if secondsLeft < 10 then '0' + secondsLeft else secondsLeft
      @$('time').html timeLeft

      @tickTimeout = setTimeout =>
        @tick()
      , 1000

    stopTicking: ->
      clearTimout @tickTimeout

    toggleTimer: ->
      @$('time').animate { top: '-30px' }, 400
      @tick()

    render: ->
      $(@el).html @template @model.toJSON()
      @

  #####################
  # Pomodoro View
  #####################
  class window.PomodoroView extends Backbone.View
    tagName: 'li'
    className: 'pomodoro'
    template: _.template $('#pomodoro-template').html()

    render: ->
      $(@el).html @template @model.toJSON()
      @

  #####################
  # History View
  #####################
  class window.HistoryView extends Backbone.View

  #####################
  # Dashboard View
  #####################
  class window.DashboardView extends Backbone.View
    el: $ '#dashboard'

    initialize: ->
      @activities = new ActivityCollection
      @activities.bind 'add', @addActivity, @

    addActivity: (activity) ->
      view = new ActivityView { model: activity }
      @$('#activities').append view.render().el
      view.toggleTimer()

    recieveActivity: (activity) ->
      @activities.add activity

    createActivity: ->
      @activities.create {}

    events:
      "click button": "createActivity"

  # Create the App
  dashBoard = new DashboardView
  now.recieveActivity = (activity) ->
    dashBoard.addActivity(new Activity(activity))
