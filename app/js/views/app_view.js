define([
  'jquery',
  'backbone',
  'text!templates/app_view.ejs'
], function ($, Backbone, indexTemplate) {
  return Backbone.View.extend({
    el: this.$('#todo-app'),

    currentDate: function () {
      return new Date();
    },

    render: function () {
      var compiledTemplate = ejs.render(indexTemplate, {view: this, model: this.model}, {});  
      this.$el.empty();
      this.$el.append(compiledTemplate);
      return this;
    },
  });
});
/*
var ENTER_KEY = 13;
var InputView = Backbone.View.extend({

  tagName: 'input',

  events: {
    "keydown" : "keyAction",
  },

  render: function() { ... },

  keyAction: function(e) {
    if (e.which === ENTER_KEY) {
      this.collection.add({text: this.$el.val()});
    }
  }
}); 
*/