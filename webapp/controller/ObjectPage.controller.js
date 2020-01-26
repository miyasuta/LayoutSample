sap.ui.define([
	"demo/Train_20_LayoutSample/controller/BaseController",
], function (Controller) {
	"use strict";

	return Controller.extend("demo.Train_20_LayoutSample.controller.ObjectPage", {

		onInit: function () {
			var oParameters = {
				title: "Object Page title",
				pageId: "objectPage"
			}
			this.createViewModel(oParameters);				
		},
		
		onToggleFooter: function () {
			this.handleToggleFooter();
		},		
		
		onFullScreen: function () {
			this.handleFullScreen("ObjectPage");
		},
		
		onExitFullScreen: function () {
			this.handleExitFullScreen("ObjectPage");
		},
		
		onClose: function () {
			this.handleClose();
		}	

	});

});