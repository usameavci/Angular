(function(){

    'use strict';

    angular.module('myApp')

	//routing
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider.when('/', { templateUrl: '/app/components/home/homeView.html', controller: 'homeController', controllerAs: 'home'});
        $locationProvider.html5Mode(true);
	}])

    //execute on route change
    .run(['$rootScope', '$location',function($rootScope, $location) {
        $rootScope.$on( "$routeChangeSuccess", function(event, next, current) {
            $rootScope.loading = true;
        });
    }]);

}());
