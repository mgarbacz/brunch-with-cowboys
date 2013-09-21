template = require 'views/templates/app'

module.exports = class AppView extends Backbone.View
  template: template

  initialize: ->
    @render()

  render: ->
    template {}, (error, output) =>
      @$el.html output if not error
      return @
