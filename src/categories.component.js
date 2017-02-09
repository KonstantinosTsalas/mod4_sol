(function(){
	'use strict';

	angular.module('Data')
	.component('itemsList',{
		templateUrl:"src/templates/itemsList.template.html",
		controller:ItemsListComponentController,
		bindings:{
			items:'<',
			categories: '<'
		}
	});

	ItemsListComponentController.$inject=['MenuDataService'];
	function ItemsListComponentController(MenuDataService){
		var $ctrl=this;

		var promise = MenuDataService.getAllCategories();
		promise.then(function(response){
//            $ctrl.items=response.data;
			$ctrl.items=[];
			$ctrl.categories=[];
//            console.log(response);
			for(var i=0;i<response.data.length;i++){
				$ctrl.items[i]=response.data[i].name;
				$ctrl.categories[i]=response.data[i].short_name;
			}
			// console.log($ctrl.items);
			// console.log($ctrl.categories);
		}).catch(function(error){
			console.log("Something went wrong in the component: " + error);
		});


	}

})();