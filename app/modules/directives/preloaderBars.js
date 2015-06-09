(function(){

	//Select button ----------------------------------------------------
	APP.directive('preloaderBars', function(){

		return {
	    	restrict: 'AE',
	    	replace: 'true',
			templateUrl: '/templates/directives/preloader-bars.html',
			scope: {
				data:'@'
			},

			link: function(scope, element, attrs) {



			}

	  	};

	});

}());
