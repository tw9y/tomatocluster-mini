var routers = require('./routers');

// Instantiate the application
app = new routers.AppRouter();
Backbone.history.start({ pushState: true });
