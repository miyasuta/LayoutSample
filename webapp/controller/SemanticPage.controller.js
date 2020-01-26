sap.ui.define([
	"demo/Train_20_LayoutSample/controller/BaseController",
	"sap/f/library"	
], function (Controller, fioriLibrary) {
	"use strict";

	return Controller.extend("demo.Train_20_LayoutSample.controller.SemanticPage", {

		onInit: function () {
			var oParameters = {
				title: "Semantic Page title",
				pageId: "semanticPage"
			}
			this.createViewModel(oParameters);	
			
			//Set dummy message
			var oMessageProcessor = new sap.ui.core.message.ControlMessageProcessor();
			var oMessageManager = sap.ui.getCore().getMessageManager();

			oMessageManager.registerMessageProcessor(oMessageProcessor);

			oMessageManager.addMessages(
				new sap.ui.core.message.Message({
					message: "Something wrong happened",
					type: sap.ui.core.MessageType.Error,
					processor: oMessageProcessor
				})
			);			
		},
		
		onToggleFooter: function () {
			this.handleToggleFooter();
		},		
		
		onFullScreen: function () {
			this.handleFullScreen("SemanticPage");
		},
		
		onExitFullScreen: function () {
			this.handleExitFullScreen("SemanticPage");
		},
		
		onClose: function () {
			this.handleClose();
		}

	});

});