const Traveller = require("./Traveller");
const Location = require("./Location");
const Trip = require("./Trip");

// TODO: Setup many-to-many relationship
Traveller.belongsToMany(Location, {
  through: {model:Trip , unique:false},
  onDelete: 'CASCADE',
});
Location.belongsToMany(Traveller, {
  through: {model:Trip, unique:false},
  onDelete: 'CASCADE',
});

module.exports = { Traveller, Location, Trip };
