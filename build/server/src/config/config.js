"use strict";

require('dotenv').config();
module.exports = {
  //If using onine database
  //postgres://jekrmdll:33u7GM5pRCwkXLPXs3_XoyXsd1XlgsVD@heffalump.db.elephantsql.com/jekrmdll
  // development: {
  //   use_env_variable: 'DATABASE_URL',
  //   dialect: 'postgres'
  // },

  development: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
  },
  test: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
  },
  production: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
  }
};
//# sourceMappingURL=config.js.map