AppView = require 'views/app'

module.exports = class Application extends Backbone.Router
  routes:
    '': 'index'

  start: ->
    Backbone.history.start
      pushState: true
      # Set the root of app here, e.g. 'localhost/app/' would be '/app/'
      root: ''

  index: ->
    appView = new AppView()
    $('body').append appView.el
