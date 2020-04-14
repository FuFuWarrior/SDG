const { Pool } = require('pg');
require('dotenv').config();

// connection config
// const pool = new Pool({
//     connectionString: process.env.DATABASE_URL,
//     ssl: true
// });

const pool = new Pool({
  user: process.env.PG_user,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PW,
  port: process.env.PG_PORT,
  host: process.env.PG_HOST
});

pool.on('connect', () => console.log('working'));

module.exports = Pool;
