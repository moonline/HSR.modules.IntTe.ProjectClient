define(['jQuery', 'domain/repository/PostRepository', 'domain/repository/UserRepository'],
	function(jQuery, PostRepository, UserRepository) {
		'use strict';

	var ListController = function($scope, $location) {
		$scope.posts = PostRepository.findAll();

	};



	/*	$('#logoutButton').ready(function() {
			$('#logoutButton').bind('click', function(event, ui) {
				Controller.UserController.logout();

				window.location.href = "/list.html";
			});
		});


		$('#register').ready(function(){
			$('#registerForm').submit(function(event) {
				var username = $('#register-input-username').val();
				var password = $('#register-input-password').val();
				var passwordConfirm = $('#register-input-passwordConfirm').val();

				if(password === passwordConfirm) {
					var state = Repository.UserRepository.addUser(username, password);
					if(state) {
						console.log('user '+username+' added');
						$('#registerForm .ui-submit').addClass('success');
						window.location.href = "/list.html";
					} else {
						console.log('error while adding user');
						$('#registerForm .ui-submit').addClass('error');
					}
				} else {
					console.log('password confirmation does not match');
					$('#registerForm .ui-submit').addClass('error');
				}

				return false;
			});
		});

		$('#login').ready(function(){
			$('#loginForm').submit(function(event) {
				var username = $('#login-input-username').val();
				var password = $('#login-input-password').val();

				var loggedIn = Controller.UserController.login(username, password);
				if(loggedIn) {
					console.log('successful logged in');
					Controller.UserController.getLoggedInUser();
					$('#loginForm .ui-submit').addClass('success');
					window.location.href = "/list.html";
				} else {
					console.log('login error');
					$('#loginForm .ui-submit').addClass('error');
				}

				return false;
			});
		});

		$('#newPost').ready(function(){
			$('#newPostForm').submit(function(event) {
				var text = $('#newPost-text').val();
				var link = $('#newPost-link').val();

				Repository.PostRepository.addPost(text, link);
				window.location.href = "/list.html";

				return false;
			});
		});*/

	return ListController;
});
