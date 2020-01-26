/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"demo/Train_20_LayoutSample/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});