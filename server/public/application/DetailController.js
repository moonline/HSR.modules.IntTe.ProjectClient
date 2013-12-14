define(['jQuery', 'domain/repository/PostRepository', 'domain/repository/UserRepository'],
	function(jQuery, PostRepository, UserRepository) {
	'use strict';

	var DetailController = function($scope, $location, $routeParams) {
		$scope.post = PostRepository.findById($routeParams.postId);
		$scope.user = UserRepository.getLoggedInUser();

		$scope.votePost = function(postId, positive) {
			PostRepository.votePost(postId, positive);
			$scope.post = PostRepository.findById($routeParams.postId);
		};

		$scope.voteComment = function(commentId, postId, positive) {
			PostRepository.voteComment(commentId, positive);
			$scope.post = PostRepository.findById($routeParams.postId);
		};
	};

	return DetailController;

		/*
	var Repository = App.Model.Repository;
	var Controller = App.Controller;
	var detailTemplateSrc;

	var postId;

	$(document).delegate('#detail', 'pagecreate', function (event) {
		console.log('render detail template');
		if(!detailTemplateSrc) {
			detailTemplateSrc = $('#detail .content').html();
		}
		var detailTemplate = doT.template(detailTemplateSrc);

		postId = $.url(document.location.href).param("post") || window.detailPagePostId;

		var views = {
			user: Controller.UserController.getLoggedInUser(),
			post: Repository.PostRepository.getPostById(postId)
		};
		$('#detail .content').html( detailTemplate(views));
	});



	$('#detail').ready(function() {
		$('#votePostUp').click(function() {
			var postId = $(this).attr('data-post');
			Repository.PostRepository.votePost(postId, true);

			window.location.href = "/detail.html?post="+postId;
		});

		$('#votePostDown').click(function() {
			var postId = $(this).attr('data-post');
			Repository.PostRepository.votePost(postId, false);
			window.location.href = "/detail.html?post="+postId;
		});

		$('#voteCommentUp').click(function() {
			var postId = $(this).attr('data-post');
			var commentId = $(this).attr('data-comment');			
			Repository.PostRepository.voteComment(commentId, true);

			window.location.href = "/detail.html?post="+postId;
		});

		$('#voteCommentDown').click(function() {
			var postId = $(this).attr('data-post');
			var commentId = $(this).attr('data-comment');
			Repository.PostRepository.voteComment(commentId, false);
			window.location.href = "/detail.html?post="+postId;
		});
	});  
	
	
	 $('#newComment').ready(function(){
		$('#newCommentForm').submit(function(event) {
			var textC = $('#newCommentTextfield').val();
			Repository.PostRepository.addComment(postId, textC);

			window.location.href = "/detail.html?post="+postId;
			return false;
		});
	});*/
	
	
});