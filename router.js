const express = require('express');
const DataStore = require('./controller.js');



const router = express.Router();
const controller = new  DataStore();
router.get('/home_timeline',(req, res) => controller.getTwitterData(req, res));
module.exports = router;
