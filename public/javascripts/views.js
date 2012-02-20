(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  window.FocusView = (function(_super) {

    __extends(FocusView, _super);

    function FocusView() {
      FocusView.__super__.constructor.apply(this, arguments);
    }

    return FocusView;

  })(Backbone.View);

  window.ActivityView = (function(_super) {

    __extends(ActivityView, _super);

    function ActivityView() {
      ActivityView.__super__.constructor.apply(this, arguments);
    }

    ActivityView.prototype.tagName = 'li';

    ActivityView.prototype.className = 'activity';

    ActivityView.prototype.template = _.template($('#activity-template').html());

    ActivityView.prototype.initialize = function() {
      return this.countDownEnds = new Date().add(25).minutes();
    };

    ActivityView.prototype.tick = function() {
      var minutesLeft, secondsLeft, timeLeft, totalSecondsLeft,
        _this = this;
      totalSecondsLeft = Math.floor((this.countDownEnds - Date.now()) / 1000);
      minutesLeft = Math.floor(totalSecondsLeft / 60);
      secondsLeft = Math.floor(totalSecondsLeft % 60);
      timeLeft = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
      timeLeft += ':';
      timeLeft += secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
      this.$('time').html(timeLeft);
      return this.tickTimeout = setTimeout(function() {
        return _this.tick();
      }, 1000);
    };

    ActivityView.prototype.stopTicking = function() {
      return clearTimeout(this.tickTimeout);
    };

    ActivityView.prototype.toggleTimer = function() {
      this.$('time').animate({
        top: '-30px'
      }, 400);
      return this.tick();
    };

    ActivityView.prototype.render = function() {
      $(this.el).html(this.template(this.model.toJSON()));
      return this;
    };

    return ActivityView;

  })(Backbone.View);

  window.PomodoroView = (function(_super) {

    __extends(PomodoroView, _super);

    function PomodoroView() {
      PomodoroView.__super__.constructor.apply(this, arguments);
    }

    PomodoroView.prototype.tagName = 'li';

    PomodoroView.prototype.className = 'pomodoro';

    PomodoroView.prototype.template = _.template($('#pomodoro-template').html());

    PomodoroView.prototype.render = function() {
      $(this.el).html(this.template(this.model.toJSON()));
      return this;
    };

    return PomodoroView;

  })(Backbone.View);

  window.HistoryView = (function(_super) {

    __extends(HistoryView, _super);

    function HistoryView() {
      HistoryView.__super__.constructor.apply(this, arguments);
    }

    return HistoryView;

  })(Backbone.View);

  window.DashboardView = (function(_super) {

    __extends(DashboardView, _super);

    function DashboardView() {
      DashboardView.__super__.constructor.apply(this, arguments);
    }

    DashboardView.prototype.el = $('#dashboard');

    DashboardView.prototype.initialize = function() {
      this.activities = new ActivityCollection;
      return this.activities.bind('add', this.addActivity, this);
    };

    DashboardView.prototype.addActivity = function(activity) {
      var view;
      view = new ActivityView({
        model: activity
      });
      this.$('#activities').append(view.render().el);
      return view.toggleTimer();
    };

    DashboardView.prototype.recieveActivity = function(activity) {
      return this.activities.add(activity);
    };

    DashboardView.prototype.createActivity = function() {
      return this.activities.create({});
    };

    DashboardView.prototype.events = {
      "click button": "createActivity"
    };

    return DashboardView;

  })(Backbone.View);

  jQuery(function() {
    var dashBoard;
    dashBoard = new DashboardView;
    return now.recieveActivity = function(activity) {
      return dashBoard.addActivity(new Activity(activity));
    };
  });

}).call(this);
