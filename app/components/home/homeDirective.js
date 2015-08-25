(function(){

	//Select button ----------------------------------------------------
	APP.directive('homeDirective', function(){

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
