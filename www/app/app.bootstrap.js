(function(){

	'use strict';

	//custom modules
    angular.module('home',[]);
    angular.module('helloworld',[]);

    //Bootstrap filters
	require('./shared/stringFilter');
    
	// Bootstrap directives
	require('./components/home/homeDirective');

	//Bootstrap controllers
	require('./components/home/homeController');

	//Bootstrap controllers
	require('./components/home/homeFactory');

	

}());
