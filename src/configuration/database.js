const knex = require('knex');

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: 'cars.db'
  },
  useNullAsDefault: true
});

exports.db = db;