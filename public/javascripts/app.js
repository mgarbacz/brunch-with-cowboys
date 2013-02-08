(function(/*! Brunch !*/) {
  'use strict';

  var globals = typeof window !== 'undefined' ? window : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};

  var has = function(object, name) {
    return ({}).hasOwnProperty.call(object, name);
  };

  var expand = function(root, name) {
    var results = [], parts, part;
    if (/^\.\.?(\/|$)/.test(name)) {
      parts = [root, name].join('/').split('/');
    } else {
      parts = name.split('/');
    }
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function(name) {
      var dir = dirname(path);
      var absolute = expand(dir, name);
      return globals.require(absolute);
    };
  };

  var initModule = function(name, definition) {
    var module = {id: name, exports: {}};
    definition(module.exports, localRequire(name), module);
    var exports = cache[name] = module.exports;
    return exports;
  };

  var require = function(name) {
    var path = expand(name, '.');

    if (has(cache, path)) return cache[path];
    if (has(modules, path)) return initModule(path, modules[path]);

    var dirIndex = expand(path, './index');
    if (has(cache, dirIndex)) return cache[dirIndex];
    if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

    throw new Error('Cannot find module "' + name + '"');
  };

  var define = function(bundle, fn) {
    if (typeof bundle === 'object') {
      for (var key in bundle) {
        if (has(bundle, key)) {
          modules[key] = bundle[key];
        }
      }
    } else {
      modules[bundle] = fn;
    }
  };

  globals.require = require;
  globals.require.define = define;
  globals.require.register = define;
  globals.require.brunch = true;
})();

window.require.register("application", function(exports, require, module) {
  var Application;

  Application = {
    initialize: function() {
      var ExampleView, Router;
      ExampleView = require('views/example-view');
      Router = require('router');
      this.exampleView = new ExampleView();
      return this.route = new Router();
    }
  };

  module.exports = Application;
  
});
window.require.register("initialize", function(exports, require, module) {
  var app;

  app = require('application');

  $(function() {
    return app.initialize();
  });
  
});
window.require.register("models/example", function(exports, require, module) {
  var Example,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  module.exports = Example = (function(_super) {

    __extends(Example, _super);

    function Example() {
      return Example.__super__.constructor.apply(this, arguments);
    }

    Example.prototype.defaults = {
      example: 'This is an example'
    };

    return Example;

  })(Backbone.Model);
  
});
window.require.register("models/examples", function(exports, require, module) {
  var Examples,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  module.exports = Examples = (function(_super) {

    __extends(Examples, _super);

    function Examples() {
      return Examples.__super__.constructor.apply(this, arguments);
    }

    Examples.prototype.model = Example;

    return Examples;

  })(Backbone.Collection);
  
});
window.require.register("router", function(exports, require, module) {
  var app;

  app = require('application');

  module.exports = Backbone.Router.extend({
    routes: {
      '': 'example'
    },
    example: function() {
      console.log('hit root');
      return $('body').html(app.exampleView.render().el);
    }
  });
  
});
window.require.register("views/example-view", function(exports, require, module) {
  var ExampleView, template,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  template = require('views/templates/example');

  module.exports = ExampleView = (function(_super) {

    __extends(ExampleView, _super);

    function ExampleView() {
      return ExampleView.__super__.constructor.apply(this, arguments);
    }

    ExampleView.prototype.template = template;

    ExampleView.prototype.render = function() {
      this.$el.html(this.template);
      return this;
    };

    return ExampleView;

  })(Backbone.View);
  
});
window.require.register("views/templates/example", function(exports, require, module) {
  module.exports = function(obj){
  var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
  with(obj||{}){
  __p+='<span>'+
  ((__t=( example ))==null?'':__t)+
  '</span>\n';
  }
  return __p;
  };
});
