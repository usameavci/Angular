(function(){

	'use strict';

	//Select button ----------------------------------------------------
	angular.module('home').directive('homeDirective', function(){

		return {
	    	restrict: 'EA',
	    	replace: 'true',
			templateUrl: 'app/components/home/homeDirective.html',
			controller: 'homeController',
			controllerAs: 'home',
			bindToController: {
				msg: '='
			}
	  	};

	});

}());
