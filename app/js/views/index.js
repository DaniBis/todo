define([
  'jquery',
  'backbone',
  'text!templates/index.ejs'
], function ($, Backbone, indexTemplate) {
  return Backbone.View.extend({
    el: $('#index'),

    currentDate: function () {
      return new Date();
    },

    render: function () {
      var compiledTemplate = ejs.render(indexTemplate, {view: this, model: this.model}, {});
      this.$el.empty();
      this.$el.append(compiledTemplate);
      return this
    }
  });
});
