sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"sap/ui/model/json/JSONModel",
	"sap/f/library",
	"demo/Train_20_LayoutSample/model/models",
	"sap/f/FlexibleColumnLayoutSemanticHelper"
], function (UIComponent, Device, JSONModel, fioriLibrary, models, FlexibleColumnLayoutSemanticHelper) {
	"use strict";

	return UIComponent.extend("demo.Train_20_LayoutSample.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			var oModel, oRouter;
			
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
			
			oModel = new JSONModel();
			this.setModel(oModel);

			// enable routing
			oRouter = this.getRouter();
			oRouter.attachBeforeRouteMatched(this._onBeforeRouteMatched, this);
			oRouter.initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		},
		
		getHelper: function () {
			return this._getFcl().then(function(oFCL) {
				var oSettings = {
					defaultTwoColumnLayoutType: fioriLibrary.LayoutType.TwoColumnsMidExpanded,
					defaultThreeColumnsLayoutType: fioriLibrary.LayoutType.ThreeColumnsMidExpanded,
					initialColumnsCount: 2
				};
				return (FlexibleColumnLayoutSemanticHelper.getInstanceFor(oFCL, oSettings));
			})	
		},
		
		_onBeforeRouteMatched: function (oEvent) {
			var oModel = this.getModel(),
				sLayout = oEvent.getParameters().arguments.layout,
				oNextUIState;
				
			// If there is no layout parameter, set a default layout (normally OnecColumn)
			if (!fioriLibrary.LayoutType[sLayout]) {
				this.getHelper().then(function (oHelper) {
					oNextUIState = oHelper.getNextUIState(0);
					oModel.setProperty("/layout", oNextUIState.layout);
				});
				return;
			}
			
			oModel.setProperty("/layout", sLayout);
		},
		
		_getFcl: function () {
			return new Promise(function (resolve, reject) {
				var oFCL = this.getRootControl().byId("flexibleColumnLayout");
				if (!oFCL) {
					this.getRootControl().attachAfterInit(function (oEvent) {
						resolve(oEvent.getSource().byId("flexibleColumnLayout"));
					}, this);
					return;
				}
				resolve(oFCL);
			}.bind(this));
		}
	});
});