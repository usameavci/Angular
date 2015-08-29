(function(){

	'use strict';

	angular.module('home').factory('randomNumber', function(){
		
		function Private(val){
			return val + 10;
		}
		
		return {
			result: Private,
			date: new Date()
		};
    });

}());
