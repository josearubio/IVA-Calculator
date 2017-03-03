(function () {

	var app = angular.module("ivacalculator");

  app.component("register",{
    bindings: {},
    templateUrl: "registerForm.html",
    controller: registerFormController,
    controllerAs: 'ctrl',
    bindToController: true
  });

function registerFormController(userManagement,alertService,$scope,$state){
    var vm = this;

		vm.error = {
			show: false,
			content: ""
		}

    vm.registerUser = function(isvalid){
      if(isvalid) {
				if(userManagement.addAccount(vm.user,vm.pass)){
					alertService.setSuccess({ show: true, msg: 'Register successfully. You can login.' });
					$state.go('login');
				}
				else {
					vm.error.content = "User already exists!"
					vm.error.show = true;
				}
			} else {
				vm.error.content = "Error, check required fields."
				vm.error.show = true;
			};

    }

}

})();
