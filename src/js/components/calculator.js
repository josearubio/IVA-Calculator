(function () {

	var app = angular.module("ivacalculator");

  app.component("calculator",{
    bindings: {},
    templateUrl: "calculator.html",
    controller: calculatorController,
    controllerAs: 'ctrl',
    bindToController: true

  });

function calculatorController(){
    var vm = this;

		vm.registry = [];

    vm.calculateTotal = function (){
      var calculation = vm.base * (1+(vm.iva/100))
      var result = Math.round(calculation*100)/100;
      vm.total = result;
    }

    vm.calculateBase = function (){
      var calculation = vm.total / (1+(vm.iva/100))
      var result = Math.round(calculation*100)/100;
      vm.base = result;
    }

    vm.reCalculate = function (ivaType){
      vm.iva = ivaType
      vm.calculateTotal();
    }

		vm.saveRegistry = function(){
			var item = {
				"concept" : vm.concept,
				"base" : vm.base,
				"iva" : vm.iva,
				"total" : vm.total
			}
			vm.registry.push(item);
		}

		vm.deleteRegistry = function(item){
  		var index = vm.registry.indexOf(item);
  		vm.registry.splice(index, 1);
		}


}

})();
