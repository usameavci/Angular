(function(){

	'use strict';

	angular.module('home').controller('homeController', ['$resource', function($resource){

		var res = $resource('http://localhost:8080');
		res.get({},function(r){
			r.msg = 'sentback';
			r.$save(function(r,re){
				console.log(r);
			});	
		});
		

    }]);

}());
 