define([
     'backbone',
     'model/model'
   ],
   function (Backbone, model) {
    return Backbone.Collection.extend({
     	model: model
     });
   });