(function($) {

	$('#list').ready(function(){
		var dotTemplate = doT.template(document.getElementById('list').innerHTML);
		var viewModel = {
			title: 'Better Reddit',
			posts: App.Model.Repository.PostRepository.findAll()
		};
		document.getElementById('list').innerHTML = dotTemplate(viewModel);
	});
   
})(jQuery);
