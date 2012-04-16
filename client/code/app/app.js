var routers = require('./routers');

/*
 * Instantiate the App Router
 */
app = new routers.AppRouter();
Backbone.history.start({ pushState: true });
