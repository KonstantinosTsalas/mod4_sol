(function(){
	'use strict';

	angular.module('MenuApp')
	.component('itemsList', {
		templateurl:"src/itemsList.template.html",
		controller:ItemsListComponentController,
		bindings:{
			items:'<'
		}
	});


	ItemsListComponentController.$inject=['$rootScope','$element','MenuDataService'];
	function ItemsListComponentController($rootScope,$element,MenuDataService){
		var $ctrl = this;

		var promise = MenuDataService.getAllCategories();
		promise.then(function(response){
			$ctrl.items=response;
		}).catch(function(error){
			console.log("Error In the return promise: " + error);
		});
	};
})();