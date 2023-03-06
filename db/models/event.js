'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Event.init({
    addres: DataTypes.STRING,
    city: DataTypes.STRING,
    date: DataTypes.INTEGER,
    duration: DataTypes.INTEGER,
    organizator: DataTypes.STRING,
    text: DataTypes.STRING,
    title: DataTypes.STRING,
    type: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};