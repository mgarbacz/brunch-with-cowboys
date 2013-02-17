template = require 'views/templates/app'

module.exports = class AppView extends Backbone.View
  template: template

  initialize: ->
    @render()

  render: ->
    dust.compile template, 'app'
    dust.render 'app', {}, (error, output) ->
      console.log error
      console.log output
      $(@.el).html output
      console.log @el
      return @
