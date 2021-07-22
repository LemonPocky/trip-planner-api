const Traveller = require("./Traveller");
const Location = require("./Location");
const Trip = require("./Trip");

// TODO: Setup many-to-many relationship
Traveller.belongsToMany(Location, {through: Trip});
Location.belongsToMany(Traveller, {through: Trip});

module.exports = { Traveller, Location, Trip };
