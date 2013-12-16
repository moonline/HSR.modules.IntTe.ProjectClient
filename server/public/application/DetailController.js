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
		$scope.login = function() {
			var username = prompt('please insert your username');
			var password = prompt('please insert your password');

			var loggedIn = UserRepository.login(username, password);
			if(loggedIn) {
				console.log('successful logged in');
				UserRepository.getLoggedInUser();
				$scope.user = UserRepository.getLoggedInUser();
			} else {
				console.log('login error');
				alert('username or password wrong. Pleasy try again');
			}
		};

		$scope.register = function() {
			var username, password, passwordConfirm;
			while(!username || !password || !passwordConfirm || password != passwordConfirm) {
				username = prompt('please insert a username');
				password = prompt('please insert a password');
				passwordConfirm = prompt('please insert again to confirm');

				var state = UserRepository.addUser(username, password);
				if(state) {

				} else {
					alert('username already taken or password does not match with confirmation. Plead register again.');
				}
			}
			console.log('register success');
		};
		$scope.logout = function() {
			UserRepository.logout();
			$scope.user = UserRepository.getLoggedInUser();
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