process.env.NODE_ENV = 'test'

# Require Helpers
module.exports.Backbone = require 'backbone'
module.exports._ = require 'underscore'
module.exports.should = require 'should'

# Require app
module.exports.app = require '../app/server/server'
