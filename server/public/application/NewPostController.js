define(['jQuery', 'domain/repository/PostRepository', 'domain/repository/UserRepository'],
	function(jQuery, PostRepository, UserRepository) {
		'use strict';

		var NewPostController = function($scope, $location) {
			$scope.newPost = {};

			$scope.user = UserRepository.getLoggedInUser();

			$scope.addPost = function() {
				console.log($scope.newPost);
				if($scope.newPost.text && $scope.newPost.link) {
					PostRepository.addPost($scope.newPost.text, $scope.newPost.link);
					$location.url('/posts');
				} else {
					alert('text or url empty or url wrong. Please try again.');
				}
			};
		};

		return NewPostController;
});