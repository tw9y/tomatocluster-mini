process.env.NODE_ENV = 'test'

# Require Helpers
module.exports._ = require 'underscore'

# Require app
module.exports.app = require '../../app/server/server'
