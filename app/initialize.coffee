# Initialize the application on DOM ready event
Application = require 'application'
$ ->
  app = new Application()
  app.start()
