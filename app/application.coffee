Application = initialize: ->
  ExampleView = require('views/example-view')
  Router = require('router')
  @exampleView = new ExampleView()
  @route = new Router()
module.exports = Application
