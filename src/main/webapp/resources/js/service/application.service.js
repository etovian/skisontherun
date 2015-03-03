angular
	.module("app")
	.factory("applicationService", ApplicationService);

function ApplicationService(promiseHandlerService, requestHandlerService) {
	return {
		initialize: function(scope) {
			promiseHandlerService.handle(requestHandlerService.getHttpPromise({
				url: "app/initialization-request"
			}), scope);
		}
	};
}