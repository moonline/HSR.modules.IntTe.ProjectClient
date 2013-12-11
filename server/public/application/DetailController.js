(function ($) {
		'use strict';		

	var Repository = App.Model.Repository;
	var Controller = App.Controller;
	var detailTemplateSrc;

	var postId;
	$(document).delegate('#detail', 'pagebeforeshow', function () {
		console.log('render detail template');
		if(!detailTemplateSrc) {
			detailTemplateSrc = document.getElementById('detail').innerHTML;
		}
		var detailTemplate = doT.template(detailTemplateSrc);

		postId = $.url(document.location.href).param("post");

		var views = {
			user: Controller.UserController.getLoggedInUser(),
			post: Repository.PostRepository.getPostById(postId)
		};
		document.getElementById('detail').innerHTML = detailTemplate(views);
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
	});
	
	
	 $('#newComment').ready(function(){
		$('#newCommentForm').submit(function(event) {
			var textC = $('#newCommentTextfield').val();
			Repository.PostRepository.addComment(postId, textC);

			window.location.href = "/detail.html?post="+postId;
			return false;
		});
	});
	
	
})(jQuery);