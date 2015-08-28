
//Unit test homeController ------------------------------------------------------- +
describe("home module", function() {

  beforeEach(module('home'));
  var $factory, factory, res;

  beforeEach(inject(function(_randomNumber_){
    factory = _randomNumber_;
  })); 

  //Users API
  describe('Check Random Number Factory ---', function() {

    //check return is an object ---------------------------------------- +
    it('Should be an object', function() {
      expect(factory).toEqual(jasmine.any(Object));
    });

    //check it has a date --------------------------------------------- +
    it('Should contain a date', function() {
      expect(factory.date).toEqual(jasmine.any(Date));
    });

    //check it has a date --------------------------------------------- +
    it('Should return 20', function() {
      var res = factory.result(10);
      expect(res).toEqual(20);
    });

  });

});
