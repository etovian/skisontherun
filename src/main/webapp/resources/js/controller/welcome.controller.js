(function() {

	angular
		.module("app")
		.controller("WelcomeController", WelcomeController);
	
	function WelcomeController(notificationService) {
		
		var vm = this;
		
		angular.extend(vm, {
			
		});
		
		notificationService.add({
			title: "Welcome!",
			text: "Do you want to build a snowman?",
			type: "WARNING"
		})
	};
	
})();

