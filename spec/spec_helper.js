process.env.NODE_ENV = 'test';
process.env.SS_ENV = 'test';

// Exports
module.exports.should = require('should');

require('../app');
