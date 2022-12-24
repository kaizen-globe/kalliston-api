require('dotenv').config();


module.exports = {

  //If using onine database
  //postgres://jekrmdll:33u7GM5pRCwkXLPXs3_XoyXsd1XlgsVD@heffalump.db.elephantsql.com/jekrmdll
  // development: {
  //   use_env_variable: 'DATABASE_URL',
  //   dialect: 'postgres'
  // },

  development: {
    database: process.env.DB_DEV_NAME,
    username: process.env.DB_DEV_USER,
    password: process.env.DB_DEV_PASS,
    host: process.env.DB_DEV_HOST,
    dialect: process.env.DB_DEV_DIALECT
  },

  test: {
    database: process.env.DB_TEST_NAME,
    username: process.env.DB_TEST_USER,
    password: process.env.DB_TEST_PASS,
    host: process.env.DB_TEST_HOST,
    dialect: process.env.DB_TEST_DIALECT
  },

  production: {
    database: process.env.DB_PROD_NAME,
    username: process.env.DB_PROD_USER,
    password: process.env.DB_PROD_PASS,
    host: process.env.DB_PROD_HOST,
    dialect: process.env.DB_PROD_DIALECT
  }
};