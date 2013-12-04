(function ($) {
    "use strict";

	jQuery.extend({
		postJSON: function( url, data, callback) {
			return jQuery.post(url, data, callback, "json");
		}
	});



	var Repository = window.App.Model.Repository;

	Repository.PostRepository = {};
	Repository.PostRepository.findAll = function() {
		var posts = [];
		$.ajaxSetup( { "async": false } );
		$.getJSON( "/entries", function(data) {
			posts = data;
		});
		return posts;
	};

	Repository.PostRepository.getCommentsById = function (id) {
		var comments = [];
		$.ajaxSetup( { "async" : false} );
		$.getJSON( "/entries/id", function (data) {
			comments = data;
		});
		return comments;
	};



	Repository.UserRepository = {};
	Repository.UserRepository.addUser = function(username, password) {
		$.ajaxSetup( { "async": false } );
		$.postJSON( "/register", { name: username, password: password }, function(data) {
			console.log(data);
		});
	};

})(jQuery);
