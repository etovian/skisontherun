(function() {

	angular
		.module("app")
		.controller("HomeController", HomeController);
	
	function HomeController(notificationService) {
		
		var vm = this;
		
		angular.extend(vm, {
			notificationService: notificationService
		});
		
		vm.notificationService.add({
			title: "Welcome!",
			text: "Hello there, handsome!",
			type: "INFO"
		});
	};
	
})();

