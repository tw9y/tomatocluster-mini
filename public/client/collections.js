(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  jQuery(function() {
    window.ActivityCollection = (function(_super) {

      __extends(ActivityCollection, _super);

      function ActivityCollection() {
        ActivityCollection.__super__.constructor.apply(this, arguments);
      }

      ActivityCollection.prototype.model = Activity;

      return ActivityCollection;

    })(Backbone.Collection);
    return window.PomodoroCollection = (function(_super) {

      __extends(PomodoroCollection, _super);

      function PomodoroCollection() {
        PomodoroCollection.__super__.constructor.apply(this, arguments);
      }

      PomodoroCollection.prototype.model = Pomodoro;

      return PomodoroCollection;

    })(Backbone.Collection);
  });

}).call(this);
