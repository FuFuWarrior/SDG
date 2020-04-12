const xml2js = require('xml2js');

const express = require('express');

const estimate = require('./src/estimator');

const app = express();

app.use(express.json());

app.post('/api/v1/on-covid-19', (req, res) => {
  const data = req.body;
  const result = estimate(data);
  res.send(result).status(201);
});

app.post('/api/v1/on-covid-19/json', (req, res) => {
  const data = req.body;
  const result = estimate(data);
  res.send(result).status(201);
});


app.post('/api/v1/on-covid-19/xml', (req, res) => {
  const data = req.body;
  const builder = new xml2js.Builder();
  const xml = builder.buildObject(estimate(data));
  res.send(xml).status(201);
});

module.exports = app;
