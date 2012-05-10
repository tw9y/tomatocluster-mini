var Router = require('./router')
  , sync = require('./sync')
  , AppView = require('./views/appView');

// Instantiate the main application view
// and our router
window.app = new AppView;
window.router = new Router;
Backbone.history.start({ pushState: true });

// Lastly "render" the application
window.app.render();
