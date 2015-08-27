
//Unit test homeController ------------------------------------------------------- +
describe("helloworld module", function() {

  beforeEach(module('helloworld'));
  var $factory, factory, res;

  beforeEach(inject(function(_randomNumber_){
    factory = _randomNumber_;
  })); 

  //Users API
  describe('Check Random Number Factory ---', function() {

    //check return is an object ---------------------------------------- +
    it('Should be a random decimal number', function() {
      expect(factory).toEqual(jasmine.any(Number));
    });

  });

});
