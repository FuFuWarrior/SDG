const xml2js = require('xml2js');

const express = require('express');

const morgan = require('morgan');

const estimate = require('./src/estimator');

const pool = require('./models/database');

const app = express();

let logger;

app.use(express.json());
app.use( morgan(':method     :url    is done in :response-time ms'))


app.post('/api/v1/on-covid-19', async (req, res) => {
  const data = req.body;
  const result = estimate(data);
  res.send(result).status(201);
});

app.post('/api/v1/on-covid-19/json', async (req, res) => {
  const data = req.body;
  const result = estimate(data);
  res.send(result).status(201);
});


app.post('/api/v1/on-covid-19/xml', async (req, res) => {
  const data = req.body;
  const builder = new xml2js.Builder();
  const xml = builder.buildObject(estimate(data));
  res.send(xml).status(201);
});

app.get('', async (req, res) => {
  pool.query('INSERT Into ')
})

module.exports = app;
