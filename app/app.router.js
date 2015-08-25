(function(){

	//routing
    APP.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

        //servers
        $routeProvider.when('/', { templateUrl: 'templates/welcome.html', controller: 'welcomeController'});

        $locationProvider.html5Mode(true);
	}]);

    //execute on route change
    APP.run(['$rootScope', '$location',function($rootScope, $location) {
        $rootScope.$on( "$routeChangeSuccess", function(event, next, current) {
            $rootScope.loading = true;
        });
  }]);

}());
