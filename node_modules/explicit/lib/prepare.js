'use strict'

var validateDefinitions = require('./validate/definitions')
var validateOptions = require('./validate/options')
var assertPlugin = require('./assertPlugin')
var PluginMap = require('./PluginMap')
var argsPlugin = require('../plugin/args')
var assertPlugin2 = require('../plugin/assert')

function prepareDefinitions (definitions, options, modify) {
  if (modify) {
    if (Array.isArray(definitions)) {
      definitions.forEach(modify)
    } else if (definitions.$one) {
      modify(definitions)
    } else {
      Object.keys(definitions).forEach(function (key) {
        modify(definitions[key])
      })
    }
  }
  definitions = validateDefinitions(definitions, options.plugins)
  return definitions
}

function prepareOptions (options) {
  options = assertPlugin(options, argsPlugin)
  options = assertPlugin(options, assertPlugin2)
  options = validateOptions(options)
  options.plugins = new PluginMap(options.plugins)
  return options
}

module.exports = function (definitions, options, modify) {
  options = prepareOptions(options)
  return {
    definitions: prepareDefinitions(definitions, options, modify),
    options: options
  }
}
