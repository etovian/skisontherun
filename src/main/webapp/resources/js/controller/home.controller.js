(function() {

	angular
		.module("app")
		.controller("HomeController", HomeController);
	
	function HomeController(notificationService, applicationService, promiseHandlerService) {
		
		var vm = this;
		
		angular.extend(vm, {
			addNotification: function(notification) {
				notificationService.add(notification);
			},
			getActiveNotifications: function() {
				return notificationService.activeNotifications;
			},
			getNotificationClass: function(notification) {
				return notificationService.getNotificationClass(notification);
			},
			getNotificationTypes: function() {
				return notificationService.getNotificationTypes();
			},
			getLastNotification: function() {
				return notificationService.getLastNotification();
			},
			postNotification: function(notification) {
				notificationService.postNotification(notification);
			},
			postNotificationType: function(notification) {
				notificationService.postNotificationType(notification);
			}
		});
		
		promiseHandlerService.handle(applicationService.initialize(), vm);
	};
	
})();

