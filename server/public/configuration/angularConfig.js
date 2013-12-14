define(["angular", "application/ListController", "application/DetailController", "application/NewPostController", "application/NewCommentController", "angular-route"],
	function(angular,ListController, DetailController, NewPostController, NewCommentController) {
	'use strict';

	
	var app = angular.module('App', [ 'ngRoute' ]);
	app.config(function($routeProvider) {
		$routeProvider.when('/', {
		    templateUrl: require.toUrl('resources/views/listView.html'),
		    controller: 'ListController'
		});

		$routeProvider.when('/posts', {
			templateUrl: require.toUrl('resources/views/listView.html'),
			controller: 'ListController'
		});

		$routeProvider.when('/post/:postId', {
			templateUrl: require.toUrl('resources/views/detailView.html'),
			controller: 'DetailController'
		});

		$routeProvider.when('/newPost', {
			templateUrl: require.toUrl('resources/views/newPostView.html'),
			controller: 'NewPostController'
		});

		$routeProvider.when('/newComment/:postId', {
			templateUrl: require.toUrl('resources/views/newCommentView.html'),
			controller: 'NewCommentController'
		});

		$routeProvider.otherwise({
			redirectTo:'/'
		});
	});


	/* controllers */
	app.controller('ListController', ListController);
	ListController.$inject = ['$scope', '$location'];

	app.controller('NewPostController', NewPostController);
	NewPostController.$inject = ['$scope', '$location'];

	app.controller('NewCommentController', NewCommentController);
	NewCommentController.$inject = ['$scope', '$location', '$routeParams'];

	app.controller('DetailController', DetailController);
	DetailController.$inject = ['$scope', '$location', '$routeParams'];
	
	return app;
});
