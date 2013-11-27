(function($) {

	$('#postList').ready(function(){
		var dotTemplate = doT.template(document.getElementById('postList').innerHTML);
		var viewModel = {
			posts: App.Model.Repository.PostRepository.findAll()
		};
		document.getElementById('postList').innerHTML = dotTemplate(viewModel);
	});
   
})(jQuery);
