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
		},
		getNotificationClass: function(notification) {
			var cssClass = "";
			switch(notification.type) {
				case "INFO":
					cssClass = "alert-info";
					break;
				case "SUCCESS":
					cssClass = "alert-success";
					break;
				case "WARNING":
					cssClass = "alert-warning";
					break;
				case "DANGER":
					cssClass = "alert-danger";
					break;
				default:
					cssClass = "alert-info"
					break;
			}
			
			return cssClass;
		}
	}
}