
//Unit test homeController ------------------------------------------------------- +
describe("homeController", function() {

  beforeEach(module('home'));
  var $controller, controller, res;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_; //clean up angular namespacing
    controller = $controller('homeController', {});
    res        = controller.getUsers({username:'luke'});
  })); 

  //Users API
  describe('Get all users from the API ---', function() {

    //check return is an object ---------------------------------------- +
    it('should return an object of users', function() {
      expect(res).toEqual(jasmine.any(Object));
    });

    //check username exists -------------------------------------------- +
    it('username should exist', function() {
      expect(res.username).toBeDefined();
    });

  });

});
