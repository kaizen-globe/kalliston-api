const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const configJson = require('../config/config');

const basename = path.basename(__filename);
const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';

const config = configJson[env];

console.log('this is the environment: ', env);
console.log('this is config', config);

const db = {};

let sequelize;
if (env === 'production') {
  // sequelize = new Sequelize(
  //     process.env[config.use_env_variable], config
  // );
  sequelize = new Sequelize(
    process.env.DB_PROD_NAME,
    process.env.DB_PROD_USER,
    process.env.DB_PROD_PASS, {
      host: process.env.DB_PROD_HOST,
      port: process.env.DB_PROD_PORT,
      dialect: process.env.DB_PROD_DIALECT,
      dialectOption: {
        ssl: true,
        native: true
      },
      logging: true
    }
  );
} else if (env === 'test') {
  sequelize = new Sequelize(
    process.env.DB_TEST_NAME,
    process.env.DB_TEST_USER,
    process.env.DB_TEST_PASS, {
      host: process.env.DB_TEST_HOST,
      port: process.env.DB_TEST_PORT,
      dialect: process.env.DB_TEST_DIALECT,
      dialectOption: {
        ssl: true,
        native: true
      },
      logging: true
    }
  );
} else {
  // sequelize = new Sequelize(
  //    config.database, config.username, config.password, config
  // );
  sequelize = new Sequelize(
    process.env.DB_DEV_NAME,
    process.env.DB_DEV_USER,
    process.env.DB_DEV_PASS, {
      host: process.env.DB_DEV_HOST,
      port: process.env.DB_DEV_PORT,
      dialect: process.env.DB_DEV_DIALECT,
      dialectOption: {
        ssl: true,
        native: true
      },
      logging: true
    }
  );
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    // console.log("model db", model)
    db[model.name] = model;
  });

// fs
//   .readdirSync(__dirname)
//   .filter((file) => {
//     return (file.indexOf('.') !== 0) && 
//            (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach((file) => {
//     const model = sequelize.import(path.join(__dirname, file));
//     db[model.name] = model;
//   });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
// console.log("db..........", db)
module.exports = db;