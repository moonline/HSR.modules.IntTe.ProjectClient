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
	
	Repository.PostRepository.getPostById = function (id) {
		var post = {};
		$.ajaxSetpu( {"async" : false} );
		$.getJSON( "/entry/"+ id, function (data) {
			post = data;
		});
		return post;
	};

	Repository.PostRepository.getCommentsById = function (id) {
		
		
		
		var comments = [];
		$.ajaxSetup( { "async" : false} );
		$.getJSON( "/entries/" + id + "/comment", function (data) {
			comments = data;
		});
		return comments;
	};

	Repository.PostRepository.addPost = function (text, link) {
		var newPost = null;
		$.ajaxSetup( { "async" : false} );
		$.postJSON( "/entry", { title: text, url: link }, function(data) {
			newPost = data;
		});
		return newPost;
	};


	Repository.UserRepository = {};
	Repository.UserRepository.addUser = function(username, password) {
		var state = false;
		$.ajaxSetup( { "async": false } );
		$.postJSON( "/register", { name: username, password: password }, function(data) {
			state = data;
		});
		return state;
	};

})(jQuery);
