(function () {

	var app = angular.module("ivacalculator");

  app.factory('userManagement', function () {

    var users = [];

    return {
        getSession: function (user,pass) {
          var userData={};
          userData.user = user;
          userData.pass = pass;
					var i;
			    for (i = 0; i < users.length; i++) {
			        if (angular.equals(users[i], userData)) {
			            return true;
			        }
			    }
					return false;
        },
        addAccount: function (user,pass) {
          var userData = {};
          userData.user = user;
          userData.pass = pass;
          users.push(userData);
        }
    };
});

})();
