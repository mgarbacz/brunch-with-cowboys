exports.config =
  # See http://brunch.readthedocs.org/en/latest/config.html for documentation.
  paths:
    public: 'public'
  files:
    javascripts:
      defaultExtention: 'coffee'
      joinTo:
        'javascripts/app.js': /^app/
        'javascripts/vendor.js': /^vendor/
        'test/javascripts/test.js': /^test(\/|\\)(?!vendor)/
        'test/javascripts/test-vendor.js': /^test(\/|\\)(?=vendor)/
      order:
        before: [
          'vendor/scripts/jquery-1.9.1.js',
          'vendor/scripts/underscore-1.4.4.js',
          'vendor/scripts/backbone-0.9.10.js',
          'vendor/scripts/bootstrap-2.2.2.js'
        ]

    stylesheets:
      defaultExtension: 'sass'
      joinTo:
        'stylesheets/app.css': /^(app|vendor)/
        'test/stylesheets/test.css': /^test/
      order:
        before: [ 'vendor/styles/bootstrap-2.2.2.css' ]
        after: []

    templates:
      defaultExtension: 'jst'
      joinTo: 'javascripts/app.js': /^app\/views\/templates/
  framework: 'backbone'