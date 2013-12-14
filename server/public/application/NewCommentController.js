define(['jQuery', 'domain/repository/PostRepository', 'domain/repository/UserRepository'],
	function(jQuery, PostRepository, UserRepository) {
		'use strict';

	var NewCommentController = function($scope, $location, $routeParams) {
		$scope.newComment = {};

		$scope.user = UserRepository.getLoggedInUser();

		$scope.addComment = function() {
			if($scope.newComment.text) {
				PostRepository.addComment($routeParams.postId, $scope.newComment.text);
				$location.url('/post/'+$routeParams.postId);
			} else {
				alert('text empty. Please try again.');
			}
		};
	};

	return NewCommentController;
});