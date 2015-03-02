(function() {
	
	angular
		.module("app")
		.config(config);
	
	function config($routeProvider) {
		$routeProvider
			.when("/welcome", {
				templateUrl: "templates/welcome",
				controller: "WelcomeController",
				controllerAs: "welcome"
			})
			.when("/equipmentAndPackages", {
				templateUrl: "templates/equipmentAndPackages",
				controller: "EquipmentController",
				controllerAs: "equipment"
			})
			.otherwise({
				redirectTo: "/welcome"
			});
	};
	
})();