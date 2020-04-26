const express = require('express');
const router = express.Router();

const fetch = require('node-fetch');

//Wettervorschau laden
router.get('/forecast', async (req, res) => {
    fetch('http://api.openweathermap.org/data/2.5/forecast?id=2954035&units=metric&APPID={YOUR_APP_ID_HERE}', { method: 'GET' })
    .then(res => res.json()) // expecting a json response
    .then(json => {
        return res.json({success: true, data: json});
    });
})

module.exports = router; 