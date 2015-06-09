(function(){

	Utils = {

		//namespace function ----------------------------------------------- +
		namespace: function(namespaceString){

			var parts = namespaceString.split('.'),
			    parent = window,
	            currentPart = '';

			for (i = 0, length = parts.length; i < length; i += 1) {
			    currentPart = parts[i];
			    parent[currentPart] = parent[currentPart] || {};
			    parent = parent[currentPart];
			}

			return parent;
		},

		//set full height of DOM element ----------------------------------- +
		fullHeight: function(e,offset){
			offset = offset || 0;
			var h = $(window).height()-offset;
	    	e.css('height', h + 'px');
		}

	};

	module.exports = Utils;

})();
