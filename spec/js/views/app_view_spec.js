define([
  'views/app_view',
  'collection/collection',
  'ejs'
], function (Index, collection) {
  var instance, subject;
  var numberOne = 1;
  var numberZero = 0;

  describe('I have an instance', function () {
    beforeEach(function () {
      instance = new Index({collection: collection, el: $('body')});
    });

    describe('render', function () {
      beforeEach(function () {
        subject = function () {
          instance.render();
        };
      });
      it('will get rendered', function () {
        subject();
        expect(instance.$('input').length).toEqual(numberOne);
      });

      it('will get rendered', function () {
        subject();
        expect(instance.$('button').length).toEqual(numberOne);
      });
    });

    describe('checks the click button', function () {
      beforeEach(function () {
        instance.render();
        subject = function () {
          instance.$('button').click();
        };
      });

      describe('input has no value', function () {
        beforeEach(function () {
          instance.$('input').val('');
        });

        it('will be empty', function () {
          subject();
          expect(instance.collection.length).toBe(numberZero);
        });
      });

      describe('input has value', function () {
        beforeEach(function () {
          instance.$('input').val('a');
        });

        it('add items on click', function () {
          subject();
          expect(instance.collection.length).toBe(numberOne);
        });
      });
    });
  });
});
