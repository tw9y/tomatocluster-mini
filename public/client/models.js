(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  window.Activity = (function(_super) {

    __extends(Activity, _super);

    function Activity() {
      Activity.__super__.constructor.apply(this, arguments);
    }

    Activity.prototype.defaults = function() {
      return {
        title: 'New Activity',
        pomodoros: new PomodoroCollection
      };
    };

    return Activity;

  })(Backbone.Model);

  window.Pomodoro = (function(_super) {

    __extends(Pomodoro, _super);

    function Pomodoro() {
      Pomodoro.__super__.constructor.apply(this, arguments);
    }

    Pomodoro.prototype.defaults = function() {
      return {
        created_by: now.name,
        started_at: Date.now()
      };
    };

    Pomodoro.prototype["void"] = function() {
      this.voided = true;
      return this.ended_at = Date.now();
    };

    return Pomodoro;

  })(Backbone.Model);

  Backbone.sync = function(method, model, options) {
    return now.persist(model, options.success);
  };

}).call(this);
