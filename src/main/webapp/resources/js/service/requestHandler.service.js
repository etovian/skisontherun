angular
	.module("app")
	.factory("requestHandlerService", RequestHandlerService);

function RequestHandlerService() {
	return {
		getHttpPromise: function(request) {
			var deferred = $q.defer();
			$http.get(request.url)
				.success(function(data, status, headers, config) {
					deferred.resolve(data);
				}).error(function(data, status, headers, config) {
					$log.warn(data, status, headers(), config);
				});
			
			return deferred.promise;
		},
		postHttpPromise: function(request) {
			var deferred = $q.defer();
			$http.post(request.url, request.payload)
				.success(function(data, status, headers, config) {
					deferred.resolve(data);
				}).error(function(data, status, headers, config) {
					$log.warn(data, status, headers(), config);
				});
			
			return deferred.promise;
		}
	};
}