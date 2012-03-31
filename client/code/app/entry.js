// This file gets called automatically by SocketStream and must always exist
// Make 'ss' available to all modules and the browser console
window.ss = require('socketstream');

ss.server.on('disconnect', function(){
  console.log('Connection down :-(')
});

ss.server.on('reconnect', function(){
  console.log('Connection back up :-)')
});

ss.server.on('ready', function(){
  jQuery(function(){
    require('./cluster/main');
  });
});
