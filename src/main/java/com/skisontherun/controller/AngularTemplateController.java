package com.skisontherun.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value="/templates")
public class AngularTemplateController {

	@RequestMapping(value="/welcome")
	public String welcome() {
		return "templates/welcome";
	}
	
	@RequestMapping(value="/equipmentAndPackages")
	public String equipmentAndPackages() {
		return "templates/equipmentAndPackages";
	}
}
