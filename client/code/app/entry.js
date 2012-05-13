// This file gets called automatically by SocketStream and must always exist
// Make 'ss' available to all modules and the browser console
window.ss = require('socketstream');

ss.server.on('ready', function(){
  jQuery(function(){
    require('./app');
  });
});
