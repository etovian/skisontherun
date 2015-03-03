package com.skisontherun.view;

import java.util.ArrayList;
import java.util.List;

public class Response {

	private List<ClientCommand<?>> commands = new ArrayList<ClientCommand<?>>();
	
	public Response() {

	}

	public List<ClientCommand<?>> getCommands() {
		return commands;
	}

	public void setCommands(List<ClientCommand<?>> commands) {
		this.commands = commands;
	}

	public Response addCommand(ClientCommand<?> command) {
		commands.add(command);
		return this;
	}
	
	public Response addCommand(Notification notification) {
		ClientCommand<Notification> command = new ClientCommand<Notification>();
		command.setScopeMethod("addNotification");
		command.setPayload(notification);
		commands.add(command);
		return this;
	}
}
