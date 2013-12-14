define(["jQuery"], function($) {
	'use strict';

	$.extend({
		postJSON: function( url, data, callback) {
			return $.post(url, data, callback, "json");
		}
	});


	var PostRepository = function() {};
	PostRepository.findAll = function() {
		var posts = [];
		$.ajaxSetup( { "async": false } );
		$.getJSON( "/entries", function(data) {
			posts = data;
		});
		return posts;
	};

	PostRepository.getPostById = function (id) {
		var post = {};
		$.ajaxSetup( {"async" : false} );
		$.getJSON( "/entry/"+ id, function (data) {
			post = data;
		});
		return post;
	};

	PostRepository.votePost = function (postId, positive) {
		$.ajaxSetup( {"async" : false} );
		if(positive) {
			$.postJSON( "/entry/"+postId+"/up", {}, function(data) {});
		} else {
			$.postJSON( "/entry/"+postId+"/down", {}, function(data) {});
		}
	};

	PostRepository.voteComment = function (commentId, positive) {
		$.ajaxSetup({"async" : false});
		if (positive) {
			$.postJSON("/comment/"+commentId+"/up", {}, function (data) {});
		}else{
			$.postJSON("/comment/"+commentId+"/down", {}, function (data) {});
		}
	};


	PostRepository.addComment = function (postId, commentText) {
		var newComment = null;
		$.ajaxSetup( {"async" : false} );
		$.postJSON( "/entry/"+postId+"/comment", { text: commentText }, function(data) {
			newComment = data;
		});
		$.postJSON( "/comment/"+ postId , { text: commentText }, function(data) {
			newComment = data;
		});
		return newComment;
	};

	PostRepository.getCommentsById = function (id) {
		return PostRepository.getPostById(id).comments;
	};

	PostRepository.addPost = function (text, link) {
		var newPost = null;
		$.ajaxSetup( { "async" : false} );
		$.postJSON( "/entry", { title: text, url: link }, function(data) {
			newPost = data;
		});
		return newPost;
	};

	return PostRepository;
});