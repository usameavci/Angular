(function(){

	//Select button ----------------------------------------------------
	angular.module('home').directive('homeDirective', function(){

		return {
	    	restrict: 'AE',
	    	replace: 'true',
			templateUrl: 'homeDirective.html',
			scope: {
				data:'='
			},

			link: function(scope, element, attrs) {


			}

	  	};

	});

}());
