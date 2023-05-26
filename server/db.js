require('dotenv').config();
const { Pool } = require('pg');


const loginOptions = {
  host: process.env.HOST,
  database: process.env.DB,
  max: 30,
}

const db = new Pool(loginOptions)
db.connect()

db.query('SELECT NOW()')
  .then(res => console.log('Connected to DB successfully @', res.rows[0].now))
  .catch(e => console.log(error.e.stack))

  module.exports = db;