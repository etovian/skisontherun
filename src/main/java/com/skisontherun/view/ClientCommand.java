package com.skisontherun.view;

public class ClientCommand<T> {

	private String scopeMethod;
	private T payload;

	public ClientCommand() {
		
	}
	
	public String getScopeMethod() {
		return scopeMethod;
	}
	public void setScopeMethod(String scopeMethod) {
		this.scopeMethod = scopeMethod;
	}
	public T getPayload() {
		return payload;
	}
	public void setPayload(T payload) {
		this.payload = payload;
	}
	
}
