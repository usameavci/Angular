(function(){

	//Select button ----------------------------------------------------
	APP.directive('selectButton', function(){

		return {
	    	restrict: 'AE',
	    	replace: 'true',
			templateUrl: '/templates/directives/button-select.html',
			scope: {
				data:'='
			},

			link: function(scope, element, attrs) {

				//set some scope with passed values
				scope.label1 		= attrs.label1;
				scope.label2 		= attrs.label2;
				scope.buttonGroup 	= attrs.group;
				scope.multiSelect 	= attrs.multiselect;

				if(scope.multiSelect) scope.data = [];

				//onclick function
				scope.update = function(){

					//standard / multiclick functionality
					if(!scope.multiSelect) {
						$('a[rel="'+scope.buttonGroup+'"]').removeClass('active');
						scope.data = attrs.value;
						element.children().addClass('active');
					}else{
						if(!element.children().hasClass('active')){
							scope.data.push(attrs.value);
							element.children().addClass('active');
						}else{
							element.children().removeClass('active');
							scope.data.splice(scope.data.indexOf(attrs.value), 1);
						}
					}

				};

			}

	  	};

	});

}());
