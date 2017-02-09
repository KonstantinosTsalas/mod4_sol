(function(){
	'use strict';

	angular.module('MenuApp')
	.controller('ItemsForCategoryController',ItemsForCategoryController);

	ItemsForCategoryController.$inject=['$stateParams','MenuDataService'];
	function ItemsForCategoryController($stateParams,MenuDataService){
		var itemsForCategory = this;
		var short_name=$stateParams.categoryId;

		var promise=MenuDataService.getAllCategories();
		promise.then(function(response){
			console.log(response);
			for (var i=0;i<response.data.length;i++){
				if (response.data[i].short_name == short_name){
					itemsForCategory.name = response.data[i].name;
					// console.log(itemsForCategory.name);
				}
			}
		}).catch(function(error){
			console.log(error);
		});


		var promise=MenuDataService.getItemsForCategory(short_name);
		itemsForCategory.items=[];
		promise.then(function(response){
			// console.log(response.data.menu_items);
			for (var i=0;i<response.data.menu_items.length;i++){
				itemsForCategory.items[i]=response.data.menu_items[i].name;
			}
			// console.log(itemsForCategory.items);
		}).catch(function(error){
			console.log(error);
		});
	}
	
})();