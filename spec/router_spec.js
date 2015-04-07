define([
  'router',
  'views/index'
], function (Router, ListIndex) {
  var instance, subject;

  beforeEach(function () {
    instance = new Router();
    subject = function () {
      return instance;
    };
  });

  describe('routes', function () {
    it('has a index route', function () {
      expect(subject().routes['(?:params)']).toEqual('index');
    });
  });

  describe('index', function () {
    beforeEach(function () {
      Backbone.history.start({silent:true, pushState:true});
    });

    it('calls render on the index view', function () {
      var mockListView = sinon.mock(ListIndex.prototype);
      mockListView.expects("render").once();
      subject().navigate('', true);

      mockListView.verify();
      mockListView.restore();
    })
  })
});
