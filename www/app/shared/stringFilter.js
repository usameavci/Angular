(function(){
	
	'use strict';

	angular.module('home').filter('uppercase',function(){
		return function(input) {
		    return input.toUpperCase();
		};
	});

}());