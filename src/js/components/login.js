(function () {

	var app = angular.module("ivacalculator");

  app.component("login",{
    bindings: {},
    templateUrl: "loginform.html",
    controller: loginFormController,
    controllerAs: 'ctrl',
    bindToController: true
  });

function loginFormController(userManagement,alertService,ngToast,$scope,$state){
    var vm = this;
		vm.error = {
			show: false,
			content: ""
		}
		if (alertService.hasAlert()) {
		  vm.success = alertService.getSuccess();
			ngToast.create(vm.success.msg);
		  alertService.reset();
		}
		vm.login = function(isvalid){
			if(isvalid){
				if (userManagement.getSession(vm.user,vm.pass)) $state.go('calculator');
	      else {
					vm.error.content = "Invalid user or pass"
					vm.error.show = true;
				};
				}
				else {
					vm.error.content = "Error, check required fields."
					vm.error.show = true;
				}
    }
}

})();
