var routers = require('./routers')
  , sync = require('./sync');

/*
 * Instantiate the App Router
 */
window.app = new routers.AppRouter();
Backbone.history.start({ pushState: true });
