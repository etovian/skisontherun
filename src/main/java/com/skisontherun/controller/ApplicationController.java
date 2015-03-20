package com.skisontherun.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.skisontherun.view.Notification;
import com.skisontherun.view.NotificationType;
import com.skisontherun.view.Response;

@Controller
@RequestMapping("/app")
public class ApplicationController {

	private static final Logger logger = LoggerFactory.getLogger(ApplicationController.class);
	
	@RequestMapping("/initialization-request")
	public @ResponseBody Response initializationRequest() {
		Response response = new Response();
		String title = "POW POW!";
		String text = "Shred it, yo!";
		Notification notification = new Notification(title, text, NotificationType.DANGER);
		response.addCommand(notification);
		return response;
	}

//	@RequestMapping(value = "/postNotification", method = RequestMethod.POST)
//	public @ResponseBody String postNotification(@RequestBody Notification notification) {
//		NotificationType type = notification.getType();
//		return type.name();
//	}
//	
//	@RequestMapping(value = "/postNotificationType", method = RequestMethod.POST)
//	public @ResponseBody String postNotification(@RequestBody NotificationType type) {
//		logger.debug(type.name());
//		return type.name();
//	}
	
	@RequestMapping(value = "/postNotification", method = RequestMethod.POST)
	public void postNotification(@RequestBody Notification notification) {
		logger.debug(notification.getType().name());
	}
	
	@RequestMapping(value = "/postNotificationType", method = RequestMethod.POST)
	public void postNotificationType(@RequestBody NotificationType type) {
		logger.debug(type.name());
	}
}
