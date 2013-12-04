(function($) {
	'use strict';

	var Repository = App.Model.Repository;

	var listTemplateSrc;
	$(document).delegate('#list', 'pagebeforeshow', function () {
		console.log('render list template');
		if(!listTemplateSrc) {
			listTemplateSrc = document.getElementById('list').innerHTML;
		}
		var listTemplate = doT.template(listTemplateSrc);
		var viewModel = {
			title: 'Better Reddit',
			posts: Repository.PostRepository.findAll()
		};
		document.getElementById('list').innerHTML = listTemplate(viewModel);
		$('#list').listview().listview('refresh')
	});




	$('#register').ready(function(){
		$('#registerForm').submit(function(event) {
			var username = $('#register-input-username').val();
			var password = $('#register-input-password').val();
			var passwordConfirm = $('#register-input-passwordConfirm').val();

			if(password === passwordConfirm) {
				Repository.UserRepository.addUser(username, password);
			}

			event.preventDefault();
		});
	});

})(jQuery);
