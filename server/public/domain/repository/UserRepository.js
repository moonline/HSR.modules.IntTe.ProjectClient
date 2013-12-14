define(['jQuery'], function($){
	var UserRepository = {};
	UserRepository.addUser = function(username, password) {
		var state = false;
		$.ajaxSetup( { "async": false } );
		$.postJSON( "/register", { name: username, password: password }, function(data) {
			state = data;
		});
		return state;
	};

	UserRepository.login = function(username, password) {
		var loggedIn = false;
		$.ajaxSetup( { "async": false } );
		$.postJSON( "/login", { name: username, password: password }, function(data) {
			loggedIn = data;
		});
		return loggedIn;
	};

	UserRepository.logout = function() {
		var state = false;
		$.ajaxSetup( { "async": false } );
		$.postJSON( "/logout", {}, function(data) {
			state = data;
		});
		return state;
	};

	UserRepository.isLoggedIn = function() {
		return (UserRepository.getLoggedInUser()) ? true : false;
	};

	UserRepository.getLoggedInUser = function() {
		var user = null;
		$.ajaxSetup( { "async": false } );
		$.getJSON( "/login", function(data) {
			if(data != "") {
				user = data;
			}
		});
		return user;
	};

	return UserRepository;
});