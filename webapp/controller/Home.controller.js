sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("demo.Train_20_LayoutSample.controller.Home", {

		onInit: function () {
			this._oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		},

		onShowDynamic: function () {
			this._oRouter.navTo("DynamicPage");
		},
		
		onShowSemantic: function () {
			this._oRouter.navTo("SemanticPage");
		},
		
		onShowObject : function () {
			this._oRouter.navTo("ObjectPage");
		}

	});

});