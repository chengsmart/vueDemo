'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    BASE_API: '"http://10.8.8.145:8084"'
})
