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

	return UserRepository;
});