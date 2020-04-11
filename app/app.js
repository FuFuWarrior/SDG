const xml2js = require('xml2js');
const express = require('express');
const estimate = require('../src/estimator');
const app = express();
 
morgan.token('time', (req, res) => {
    return req[response-time];
})



app.use(express.json())


app.post('/api/v1/on-covid-19', (req,res) => {
    const data = req.body;
    // console.log(req);
    estimate(data).then((re) => {
        res.send(re).status(200)
    }).catch((err) => {
        res.send(err).status(404)
    });
    
     
});

app.post('/api/v1/on-covid-19/json', (req,res) => {
    const data = req.body
    estimate(data).then((re) => {
        res.send(re).status(200)
    }).catch((err) => {
        res.send(err).status(404)
    });
});

app.post('/api/v1/on-covid-19/xml', async(req,res) => {
    const data = req.body
    const builder = new xml2js.Builder();
    const xml = builder.buildObject( await estimate(data))
    res.send(xml).status(200)
});

module.exports = app;