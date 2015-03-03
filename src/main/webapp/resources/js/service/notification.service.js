angular
	.module("app")
	.factory("notificationService", NotificationService);

function NotificationService($timeout) {
	return {
		activeNotifications: [],
		inactiveNotifications: [],
		add: function(notification) {
			var service = this;
			this.activeNotifications.push(notification);
			if(!notification.pinned) {
				var displaySeconds = (notification.displaySeconds || 5) * 1000;
				$timeout(function() {
					service.activeNotifications = _.without(this.activeNotifications, notification);
					service.inactiveNotifications.push(notification);
				}, displaySeconds)	
			}
		}
	}
}