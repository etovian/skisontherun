angular
	.module("app")
	.factory("responseHandlerService", ResponseHandlerService);

function ResponseHandlerService($http, $log, $q) {
	return {
		handle: function(response, scope) {
			handler = this;
			$(response.commands).each(function(index, command) {
				handler.processCommand(command, scope);
			});
		},
		processCommand: function(command, scope) {
			var method = this.getScopeMethod(command.scopeMethod, scope);
			this.executeMethod(method, command.payload);
		},
		getScopeMethod: function(propertyName, scope) {
			
			var method = propertyName.split('.').reduce(function(scope, i) {
				return scope[i];
			}, scope);
			
			return method;
		},
		executeMethod: function(method, payload) {
			return method(payload);
		}
	};
}