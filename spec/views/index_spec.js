define([
  'views/index',
  'ejs'
], function (Index) {
  var instance, subject;

  beforeEach(function () {
    instance = new Index({el: $('body')});
    subject = function () {
      return instance;
    }
  });

  describe('render', function () {
    it ('will get rendered', function () {
      subject().render();
      expect(subject().$el.text()).toEqual(jasmine.stringMatching(/The current date is:/));
    })
  });

  describe('currentDate', function () {
    beforeEach(function () {
      subject = function () {
        return instance.currentDate();
      }
    });

    it('returns a date', function () {
      expect(subject() instanceof Date).toBe(true);
    });
  });
});
