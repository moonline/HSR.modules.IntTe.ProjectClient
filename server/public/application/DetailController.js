(function ($) {
		'use strict';		

	var Repository = App.Model.Repository;
	var Controller = App.Controller;
	var detailTemplateSrc;
	
	$(document).delegate('#detail', 'pagecreate', function () {
		console.log('render list template');
		if(!detailTemplateSrc) {
			detailTemplateSrc = document.getElementById('detail').innerHTML;
		}
		var detailTemplate = doT.template(detailTemplateSrc);
		var postId = $.url(document.location).param("post");		
		var views = {
			user: Controller.UserController.getLoggedInUser(),
			post: Repository.PostRepository.getPostById(postId)
		};
		document.getElementById('detail').innerHTML = detailTemplate(views);
	});
	
})(jQuery);