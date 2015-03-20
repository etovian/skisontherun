angular
	.module("app")
	.factory("applicationService", ApplicationService);

function ApplicationService(requestHandlerService) {

	return {
		initialize: function() {
			return requestHandlerService.getHttpPromise({
				url: "app/initialization-request"
			});
		}
	};
}