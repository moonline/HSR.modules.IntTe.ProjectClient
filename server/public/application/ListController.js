(function($) {
	'use strict';

	var Repository = App.Model.Repository;
	var Controller = App.Controller;

	var listTemplateSrc;
	$(document).delegate('#list', 'pagecreate', function () {
		console.log('render list template');
		if(!listTemplateSrc) {
			listTemplateSrc = document.getElementById('list').innerHTML;
		}
		var listTemplate = doT.template(listTemplateSrc);
		console.log(Controller.UserController.isLoggedIn());
		var viewModel = {
			user: Controller.UserController.getLoggedInUser(),
			title: 'Better Reddit',
			posts: Repository.PostRepository.findAll()
		};
		console.log(JSON.stringify(Repository.PostRepository.findAll()));
		document.getElementById('list').innerHTML = listTemplate(viewModel);
	});


	$('#logoutButton').ready(function() {
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
	});
})(jQuery);
