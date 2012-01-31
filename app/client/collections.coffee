jQuery ->
  #########################
  # Activity Collection
  #########################
  class window.ActivityCollection extends Backbone.Collection
    model: Activity

  #########################
  # Pomodoro Collection
  #########################
  class window.PomodoroCollection extends Backbone.Collection
    model: Pomodoro
