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

	// TODO fix path for Configuration/angularConfig: Folder name clashes with appConfiguration module
	require(["angular", "configuration/angularConfig"], function(angular, angularModule) {
		'use strict';

		angular.bootstrap(document, [angularModule.name]);
	});

})();
