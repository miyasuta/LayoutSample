sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("demo.Train_20_LayoutSample.controller.BaseController", {

		createViewModel: function (oParameters) {
			var oModel = new JSONModel({
				title: oParameters.title,
				pageId: oParameters.pageId
			});
			
			this.getView().setModel(oModel, "viewModel");
		},
		
		getRouter: function () {
			return this.getOwnerComponent().getRouter();	
		},
		
		getModel: function () {
			return this.getOwnerComponent().getModel();	
		},
		
		getPage: function () {
			var sId = this.getView().getModel("viewModel").getProperty("/pageId");
			return this.byId(sId);
		},
		
		handleToggleFooter: function () {
			this.getPage().setShowFooter(!this.getPage().getShowFooter());	
		},
		
		handleFullScreen: function (sRouteName) {
			var sNextLayout = this.getModel().getProperty("/actionButtonsInfo/midColumn/fullScreen");
			this.getRouter().navTo(sRouteName, {layout: sNextLayout});
		},
		
		handleExitFullScreen: function (sRouteName) {
			var sNextLayout = this.getModel().getProperty("/actionButtonsInfo/midColumn/exitFullScreen");
			this.getRouter().navTo(sRouteName, {layout: sNextLayout});			
		},
		
		handleClose: function () {
			var sNextLayout = this.getModel().getProperty("/actionButtonsInfo/midColumn/closeColumn");
			this.getRouter().navTo("Home", {layout: sNextLayout});			
		}

	});

});