const xml2js = require('xml2js');

const express = require('express');

const morgan = require('morgan');

const fs = require('fs');

const cors = require('cors');

const estimate = require('./src/estimator');

// const winston = require('./middleware/winston');

const streamy = require('./middleware/stream');

// const pool = require('./models/database');

const app = express();

app.use(cors());

app.use(express.json());

app.use(morgan(':method   :url    :status   is done in    :response-time ms', { stream: streamy }));

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
  const builder = new xml2js.Builder({ renderOpts: { pretty: true, indent: '    ', newline: '\n' } });
  const xml = builder.buildObject(estimate(data));
  res.send(xml).status(201);
});

app.get('/api/v1/on-covid-19/logs', (req, res) => {
  const logs = fs.readFileSync('./sorry/logs.txt');
  res.send(logs).status(200);
});

module.exports = app;
