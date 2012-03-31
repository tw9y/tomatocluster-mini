var routers = require('./routers');

// Instantiate the application
window.app = new routers.AppRouter();
Backbone.history.start({ pushState: true });
