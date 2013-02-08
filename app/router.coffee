app = require('application')
module.exports = Backbone.Router.extend(
  routes:
    '': 'example'

  example: ->
    console.log 'hit root'
    $('body').html app.exampleView.render().el
)
