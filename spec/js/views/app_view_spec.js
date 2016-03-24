define([
  'views/app_view',
  'collection/collection',
  'ejs'
], function (Index,collection) {
  var instance, subject;

  beforeEach(function () {
    instance = new Index({collection: collection,el: $('body')});
  });

  describe('render ',function(){
    beforeEach(function(){
      subject = function () {
       instance.render();
    }
     });
    it('will get rendered',function(){
      subject();
      expect(instance.$('input').length).toEqual(1);
    });

    it('will get rendered',function(){
      subject();
      expect(instance.$('button').length).toEqual(1);
    });
 });

    describe('checks the click button', function(){
      beforeEach(function(){
         instance.render();
         subject=function(){
           instance.$('button').click();
         }
      });

      describe('input has no value', function(){
         beforeEach(function(){
           instance.$('input').val('');
          });
   
       it('will be empty', function(){
        subject();
         expect(instance.collection.length).toBe(0);
        })
      });

      describe('input has value', function(){
         beforeEach(function(){
           instance.$('input').val('a');
        });

        it('add items on click', function(){        
         subject();
         expect(instance.collection.length).toBe(1);
      });
      });
    });

 
/*
  describe('check if enter was pressed',function(){
    beforeEach(function(){
      subject().render();
      }
    });
     it('add items on enter', function(){
    expect(instance.$('input').length).toEqual(1);
  });
  });
*/
});