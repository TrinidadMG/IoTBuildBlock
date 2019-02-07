module.exports = {
    GetMeasures: function (req, callback) {
        return GetMeasures(req, callback);
    }
}

var request = require('request');

var IoTDevice = process.env.IOT_DEVICE_ID
var IoTTenant = process.env.IOT_TENANT_URL 
var IoTAPICore = process.env.IOT_CORE_API || '/iot/core/api/v1/devices/'
var IoTMeasuresService = process.env.IOT_MEASURES_SERVICE || '/measures' //?orderby=timestamp desc'
var IoTAuth = process.env.IOT_AUTH

/**
 * GetMeasures
 * Documentation at https://trial.canary.cp.iot.sap/iot/core/api/v1/doc/
 * @param {*} req 
 * @param {*} callback 
 */
function GetMeasures(req, callback) {
    var endpoint = IoTTenant + IoTAPICore + IoTDevice + IoTMeasuresService
    var options = {
        url: endpoint,
        method: "GET",
        headers: {
            'Authorization': 'Basic ' + IoTAuth
        }
    }

    request(options, function (err, res, body) {
        logResponse(endpoint, err, res, body) 
        callback(err, res, body);
    });   
}

function logResponse(endpoint, err, response, body){
    var resp = null
    if (response && response.statusCode && response.statusMessage) {
        resp = "RESPONSE "+ endpoint+ " - " + response.statusCode + " - " + response.statusMessage
    }
    else if (err) {
        resp = "RESPONSE "+ endpoint + " - " + err
    }
    else {
        resp = "RESPONSE "+ endpoint 
    }

    if (!err) {
        console.log(resp)
        console.log(body.substring(0,300))
    }
    else {
        console.error(resp)
        console.error("BODY " + body)
    }
}