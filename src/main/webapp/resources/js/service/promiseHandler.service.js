angular
	.module("app")
	.factory("promiseHandlerService", PromiseHandlerService);

function PromiseHandlerService($http, $log, $q, responseHandlerService) {
	return {
		handle: function(promise, scope) {
			promise.then(function(response) {
				responseHandlerService.handle(response, scope);
			})["catch"](function(reason) {
//				log.error(reason);
				scope.notifications.add({
					title: "Error!",
					text: reason,
					cssClass: "alert"
				});
			});
		}
	};
}