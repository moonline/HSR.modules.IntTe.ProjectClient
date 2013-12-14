define(["angular", "application/ListController", "application/DetailController", "angular-route"],
	function(angular,ListController, DetailController) {
	'use strict';

	
	var app = angular.module('App', [ 'ngRoute' ]);
	app.config(function($routeProvider) {
		$routeProvider.when('/', {
		    templateUrl: require.toUrl('resources/views/listView.html'),
		    controller: 'ListController'
		});

		$routeProvider.when('/detail/:id', {
			templateUrl: require.toUrl('resources/views/detailView.html'),
			controller: 'DetailController'
		});

		$routeProvider.otherwise({
			redirectTo:'/'
		});
	});


	/* controllers */
	app.controller('ListController', ListController);
	ListController.$inject = ['$scope', '$location'];

	app.controller('DetailController', DetailController);
	DetailController.$inject = ['$scope', '$location'];
	
	return app;
});
