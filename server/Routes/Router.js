const express = require('express')
const route = express.Router();
const Instrumentcontroller = require('../controller/Instrument.controller')
const DailyExtractionDataController = require('../controller/DailyExtractionData.controller')
const RoofFallController = require('../controller/RoofFall.controller')
// Instrument data manipulation routes
route.post('/:Location/:Instrument_Name/:RefNo', Instrumentcontroller.addData);
route.get('/:Location/:Instrument_Name/:RefNo', Instrumentcontroller.fetchInfo);
route.put('/:Location/:Instrument_Name/:RefNo/:Date/:Time', Instrumentcontroller.updateData);

// Daily extraction data routes
route.post('/DailyExtraction/:Date', DailyExtractionDataController.addData);

// Roof fall data routes
route.post('/RoofFall', RoofFallController.addData);
route.get('/RoofFall/:RoofFallNo', RoofFallController.fetchInfo);
// route.put('/RoofFall/:RoofFallNo', RoofFallController.updateData);


module.exports = route;