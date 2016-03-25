define([
  'jquery',
  'backbone',
  'text!templates/app_view.ejs',
  'model/model',
  'collection/collection'
], function ($, Backbone, indexTemplate, Model, Collection) {
  return Backbone.View.extend({
    events: {
      'click #button': 'createOnClick'
    },

    initialize: function () {
      this.collection = new Collection();
    },

    el: this.$('#todo-app'),

    createOnClick: function () {
      var value;

      value = this.$('input').val();
      if (value !== '') {
        this.collection.add(new Model());
      }
    },

    render: function () {
      var compiledTemplate = ejs.render(indexTemplate, {View: this, model: this.model, collection: this.collection}, {});

      this.$el.empty();
      this.$el.append(compiledTemplate);
      return this;
    }
  });
});
