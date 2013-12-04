(function ($) {
    "use strict";

	var Repository = window.App.Model.Repository;

	Repository.PostRepository = {};
	Repository.PostRepository.findAll = function() {
		var posts = [];
		$.ajaxSetup( { "async": false } );
		$.getJSON( "/entries", function(data) {
			posts = data;
		});
		console.log(posts);
		return posts;
	};

})(jQuery);
