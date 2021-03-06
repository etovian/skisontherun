<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html data-ng-app="app" data-ng-controller="HomeController as home">
<head>

	<link rel="stylesheet" type="text/css" href="resources/bower_components/bootstrap/dist/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="resources/css/animate.css">
	<link rel="stylesheet" type="text/css" href="resources/css/main.css">

	<script type="text/javascript" src="resources/bower_components/jquery/dist/jquery.min.js"></script>
	<script type="text/javascript" src="resources/bower_components/angular/angular.min.js"></script>
	<script type="text/javascript" src="resources/bower_components/angular-route/angular-route.min.js"></script>
	<script type="text/javascript" src="resources/bower_components/angular-animate/angular-animate.min.js"></script>
	<script type="text/javascript" src="resources/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="resources/bower_components/underscore/underscore-min.js"></script>
	
	<script type="text/javascript" src="resources/js/app.js"></script>
	<script type="text/javascript" src="resources/js/route.config.js"></script>
	
	<script type="text/javascript" src="resources/js/controller/home.controller.js"></script>
	<script type="text/javascript" src="resources/js/controller/welcome.controller.js"></script>
	<script type="text/javascript" src="resources/js/controller/equipment.controller.js"></script>
	
	<script type="text/javascript" src="resources/js/service/application.service.js"></script>
	<script type="text/javascript" src="resources/js/service/notification.service.js"></script>
	<script type="text/javascript" src="resources/js/service/promiseHandler.service.js"></script>
	<script type="text/javascript" src="resources/js/service/requestHandler.service.js"></script>
	<script type="text/javascript" src="resources/js/service/responseHandler.service.js"></script>

	<title>Skis on the Run</title>
</head>
<body>

	<nav class="navbar navbar-default navbar-fixed-bottom">
		<div class="container-fluid">
			<div class="navbar-header">
				<a class="navbar-brand" href="#/welcome">
					<img src="resources/images/SOTR_Logo_Web-f795ef2c70c5d98b3da9e23a38d7ecc1.png" style="width:100px;"/>
				</a>
			</div>
			<div>
				<ul class="nav navbar-nav">
					<li><a href="#/equipmentAndPackages">Equipment &amp; Packages</a></li>
					<li><a href="#">Groups &amp; Events</a></li>
					<li><a href="#">Partners</a></li>
					<li><a href="#">About Us</a></li>
					<li><a href="#">FAQ</a></li>
					<li><a href="#">Reserve Now</a></li>
				</ul>
			</div>
		</div>
	</nav>

	<div class="main-content container-fluid">
		<div 
			class="shadow alert" data-ng-class="home.getNotificationClass(home.getLastNotification())">
			<h4>{{ home.getLastNotification().title }}</h4>
			<p>{{ home.getLastNotification().text }}</p>
			<select data-ng-model="home.getLastNotification().type" data-ng-options="s as s for s in home.getNotificationTypes()">
			</select>
			<button 
				class="btn btn-default"
				data-ng-click="home.postNotification(home.getLastNotification());">
				Post Notification!
			</button>
			<button 
				class="btn btn-default"
				data-ng-click="home.postNotificationType(home.getLastNotification());">
				Post Notification Type (Enum)!
			</button>
		</div>
	
		<div class="ng-view"></div>
	</div>
	
	<div class="message-container">
		<div 
			data-ng-repeat="n in home.getActiveNotifications()"
			class="shadow alert" data-ng-class="home.getNotificationClass(n)">
			<h4>{{ n.title }}</h4>
			<p>{{ n.text }}</p>
		</div>
	</div>

</body>
</html>
