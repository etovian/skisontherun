(function() {

	angular
		.module("app")
		.controller("HomeController", HomeController);
	
	function HomeController() {
		
		var vm = this;
		
		angular.extend(vm, {
			showButton: true,
			greeting: function() {
				alert("Howdy");
			}
		});
	};
	
})();

