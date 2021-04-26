const Sequelize = require('sequelize');

const sequelize = require('../../config/database');

const tableName = 'places';

const Place = sequelize.define('Place', {
  id: {
    type: Sequelize.NUMBER,
    unique: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
  },
 
  address: {
    type: Sequelize.STRING,
  },
  eventDate: {
    type: Sequelize.STRING,
  },
  TIME: {
    type: Sequelize.STRING,
  },
  
  
}, { tableName });

module.exports = Place;
