'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize = new Sequelize(config.database, config.username, config.password, config);
//if (config.use_env_variable) {
//  sequelize = new Sequelize(process.env[config.use_env_variable], config);
//} else {
//  sequelize = new Sequelize(config.database, config.username, config.password, config);
//}

//fs
//  .readdirSync(__dirname)
//  .filter(file => {
//    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//  })
//  .forEach(file => {
//    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//    db[model.name] = model;
//  });

//Object.keys(db).forEach(modelName => {
//  if (db[modelName].associate) {
//    db[modelName].associate(db);
//  }
//});


db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.crewrecruit_detail = require("./crewrecruit_detail.js")(sequelize, Sequelize);
db.crew_info = require("./crew_info.js")(sequelize, Sequelize);

db.crew_info.hasMany(db.crewrecruit_detail, {
    foreignKey: 'identify_numb_manager',
    primaryKey: true,
    allowNull: false,
    constraints: true,
    onDelete: 'cascade'
});
db.crewrecruit_detail.belongsTo(db.crew_info, {
    foreignKey: 'identify_numb_manager'
});