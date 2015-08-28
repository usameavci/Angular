(function(){

	angular.module('home').controller('homeController', [function(){

		this.test = "updated!? :)";

		this.getUsers = function(q){
			return q;
		};

    }]);

}());
 