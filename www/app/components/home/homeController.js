(function(){

	'use strict';

	angular.module('home').controller('homeController', [function(){

		this.msg = "updated!? :)";

		this.getUsers = function(q){
			return q;
		};

    }]);

}());
 