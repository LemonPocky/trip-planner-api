const Traveller = require("./Traveller");
const Location = require("./Location");
const Trip = require("./Trip");

// TODO: Setup many-to-many relationship
Traveller.belongsToMany(Location, {
  through: Trip,
  onDelete: 'CASCADE',
});
Location.belongsToMany(Traveller, {
  through: Trip,
  onDelete: 'CASCADE',
});

module.exports = { Traveller, Location, Trip };
