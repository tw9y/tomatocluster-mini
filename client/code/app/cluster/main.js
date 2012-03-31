var backbone = require('./backbone');

// Instantiate the application
window.app = new backbone.AppRouter();
Backbone.history.start({ pushState: true });
