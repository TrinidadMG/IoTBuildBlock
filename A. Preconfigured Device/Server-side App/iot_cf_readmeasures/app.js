console.log("iot app starting...");
/* Load NodeJS Modules */
var express = require('express');
var path = require('path');

var app = express();
app.use(express.static('public'));

/* Load Local Modules */
var iot = require('./modules/iot');

// Root path to retrieve Index.html
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

// IoT Services // 
// Get Measures
app.get('/Measures', function (req, res) {

    iot.GetMeasures(req, function (err, resp, body) {
       
        if (!err) {   
            res.status(resp.statusCode).send(body)
        } else {
            var status = null
            if (!resp || !resp.statusCode) {
                status = 500
            }
            else {
                status = resp.statusCode
            }
            if (!body)
                body = err
            res.status(status).send(body)
        }
    });
    console.log('GetMeasures')
});

var port = process.env.PORT || 30000
app.listen(port, function () {
    console.log('Example app listening on port ' + port);
});