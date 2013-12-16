(function() {
	'use strict';

	require.config({
		baseUrl: ".",
		paths: {
			"jQuery": "lib/JQuery/jQuery.2.0.3",
			"angular": "lib/AngularJS/angular",
			"angular-route": "lib/AngularJS/angular-route"
		},
		shim: {
			angular: {
				exports: "angular"
			},
			jQuery: {
				exports: "jQuery"
			},
			"angular-route": ["angular"]
		}
	});

	require(["angular", "configuration/angularConfig"], function(angular, angularModule) {
		'use strict';

		angular.bootstrap(document, [angularModule.name]);
	});

})();
