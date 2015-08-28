(function(){

	//custom modules
    angular.module('home',[]);
    angular.module('helloworld',[]);
    
	// Bootstrap directives
	require('./components/home/homeDirective');

	//Bootstrap controllers
	require('./components/home/homeController');

	//Bootstrap controllers
	require('./components/home/homeFactory');

}());
