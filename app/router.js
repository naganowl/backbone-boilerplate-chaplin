define(function(require, exports, module) {
  "use strict";
  var Backbone;
  Backbone = require("backbone");
  return module.exports = Backbone.Router.extend({
    routes: {
      "": "index"
    },
    index: function() {
      return console.log("Welcome to your / route.");
    }
  });
});
