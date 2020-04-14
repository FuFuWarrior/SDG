const xml2js = require('xml2js');

const express = require('express');

const morgan = require('morgan');

const fs = require('fs');

const cors = require('cors');

const estimate = require('./src/estimator');

// const winston = require('./middleware/winston');

const ev = require('./middleware/eventListener');

// const pool = require('./models/database');

const app = express();

app.use(cors());

app.use(morgan(':method   :url    :status   is done in    :response-time ms', { stream: ev }));

app.post('/api/v1/on-covid-19', async (req, res) => {
  const data = req.body;
  const result =  estimate(data);
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

app.get('/api/v1/on-covid-19/logs', async (req, res) => {
  const logs = fs.readFileSync('./sorry/logs.txt');
  res.send(logs).status(200);
});

module.exports = app;
