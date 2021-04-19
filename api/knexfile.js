const dotenv = require('dotenv')
dotenv.config({ path: '../.env' })

const {
  DB_CLIENT,
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  NODE_ENV
} = process.env

if (NODE_ENV === 'development') {
  module.exports = {
    client: DB_CLIENT,
    connection: {
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME
    },
    migrations: {
      directory: './migrations',
      tableName: 'migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }
}
