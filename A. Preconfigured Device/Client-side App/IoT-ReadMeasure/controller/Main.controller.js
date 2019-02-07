sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"./../Formatter"
], function (Controller, JSONModel, Formatter) {
	"use strict";

	return Controller.extend("smbiotmeasures.controller.Main", {
		onInit: function () {
			console.log("INIT")
			//var testEnv = process.env.IOT_TENANT_URL
			//console.log("testEnv " + testEnv)

			var sUrl = IOT_TENANT_URL + "/iot/core/api/v1/devices/" + IOT_DEVICE_ID + "/measures?orderby=timestamp desc";
			var that = this;

			var auth = btoa(IOT_USER + ":" + IOT_PASSWORD);

			$.ajax({
				url: sUrl,
				type: 'GET',
				dataType: 'json',
				headers: {
					'Authorization': 'Basic ' + auth
				},
				contentType: 'application/json; charset=utf-8',
				success: function (result) {
					// console.log(result);
					var measures = {};
					measures.Measures = result;
					var oModel = new JSONModel(measures);
					that.getView().setModel(oModel);
				},
				error: function (error) {
					console.log(error);
				}
			});
		},
		
		handleReload: function(){
			this.onInit();
		}
	});

});