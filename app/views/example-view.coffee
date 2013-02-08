template = require 'views/templates/example'

module.exports = class ExampleView extends Backbone.View
  template: template

  render: ->
    @$el.html @template
    this
