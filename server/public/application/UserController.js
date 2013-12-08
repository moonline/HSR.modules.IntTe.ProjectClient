(function ($) {
	"use strict";

	var Controller = App.Controller;

	Controller.UserController = {};
	Controller.UserController.login = function(username, password) {
		var loggedIn = false;
		$.ajaxSetup( { "async": false } );
		$.postJSON( "/login", { name: username, password: password }, function(data) {
			loggedIn = data;
		});
		return loggedIn;
	};

	Controller.UserController.logout = function() {
		var state = false;
		$.ajaxSetup( { "async": false } );
		$.postJSON( "/logout", {}, function(data) {
			state = data;
		});
		return state;
	};

	Controller.UserController.isLoggedIn = function() {
		return (Controller.UserController.getLoggedInUser()) ? true : false;
	};

	Controller.UserController.getLoggedInUser = function() {
		var user = null;
		$.ajaxSetup( { "async": false } );
		$.getJSON( "/login", function(data) {
			if(data != "") {
				user = data;
			}
		});
		return user;
	};

})(jQuery);