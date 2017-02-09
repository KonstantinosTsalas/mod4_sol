(function(){
	'use strict';

	angular.module('MenuApp')
	.config(RoutesConfig);

	RoutesConfig.$inject=['$stateProvider','$urlRouterProvider'];
	function RoutesConfig($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state('home', {
			url:'/',
			templateUrl: 'src/templates/home.template.html'
		})
		.state('categories',{
			url:'/categories',
			templateUrl:'src/templates/categories.template.html'
		})
		.state('items',{
			url:'/items/{categoryId}',
			templateUrl:'src/templates/items-for-category.template.html',
			controller:'ItemsForCategoryController as itemsForCategory'
			// resolve:{
			// 	items:['$stateParams','MenuDataService',
			// 	function($stateParams,MenuDataService){
			// 		return MenuDataService.getItemsForCategory($stateParams.categoryId)
			// 		.then(function(response){
			// 			return response;
			// 		});
			// 	}]
			// }
		});
	}
})();