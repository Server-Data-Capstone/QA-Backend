require('dotenv').config();
const { Pool } = require('pg');

const loginOptions = {
  user: process.env.GUY,
  host: process.env.HOST,
  database: process.env.DB,
  max: 30,
  password: process.env.PASS,
}

const db = new Pool(loginOptions)
db.connect()

db.query('SELECT NOW()')
  .then(res => console.log('Connected to DB successfully @', res.rows[0].now))
  .catch(e => console.log(e))

  module.exports = db;