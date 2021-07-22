const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our Location model
class Location extends Model {}

// create fields/columns for Location model
Location.init(
  {
    // TODO: configure columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    traveller_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Traveller',
        key: 'id',

      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "location"
  }
);

module.exports = Location;
