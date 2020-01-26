sap.ui.define([
	"demo/Train_20_LayoutSample/controller/BaseController",
	"sap/f/library"
], function (Controller,  fioriLibrary) {
	"use strict";

	return Controller.extend("demo.Train_20_LayoutSample.controller.Master", {

		onInit: function () {
			this.oOwnerComponent = this.getOwnerComponent();
			this.oModel = this.oOwnerComponent.getModel();			
			this.oRouter = this.oOwnerComponent.getRouter();			
		},

		onListItemPress: function (oEvent) {
			
			var oBindingContext = oEvent.getSource().getBindingContext("sampleData");
			var sPath = oBindingContext.getPath();
			var sTarget = oBindingContext.getProperty(sPath + "/name");
			this.oRouter.navTo(sTarget, {layout: fioriLibrary.LayoutType.TwoColumnsMidExpanded});
			
		}

	});

});