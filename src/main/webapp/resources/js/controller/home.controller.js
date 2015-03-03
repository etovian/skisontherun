(function() {

	angular
		.module("app")
		.controller("HomeController", HomeController);
	
	function HomeController(notificationService, applicationService) {
		
		var vm = this;
		
		angular.extend(vm, {
			addNotification: function(notification) {
				notificationService.add(notification);
			},
			getActiveNotifications: function() {
				return notificationService.activeNotifications;
			}
		});
		
		applicationService.initialize(vm);

	};
	
})();

