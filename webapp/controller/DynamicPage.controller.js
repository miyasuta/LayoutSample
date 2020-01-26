sap.ui.define([
	"demo/Train_20_LayoutSample/controller/BaseController",
	"sap/f/library"
], function (Controller, fioriLibrary) {
	"use strict";

	return Controller.extend("demo.Train_20_LayoutSample.controller.DynamicPage", {

		onInit: function () {
			var oParameters = {
				title: "Dynamic Page title",
				pageId: "dynamicPage"
			}
			this.createViewModel(oParameters);
		},

		onToggleFooter: function () {
			this.handleToggleFooter();
		},		
		
		onFullScreen: function () {
			this.handleFullScreen("DynamicPage");
		},
		
		onExitFullScreen: function () {
			this.handleExitFullScreen("DynamicPage");
		},
		
		onClose: function () {
			this.handleClose();
		}		

	});

});