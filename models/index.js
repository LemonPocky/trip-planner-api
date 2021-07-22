const Traveller = require("./Traveller");
const Location = require("./Location");
const Trip = require("./Trip");

// TODO: Setup many-to-many relationship
Traveller.belongsToMany(Location, {
<<<<<<< HEAD
  through: {model:Trip , unique:false},
  onDelete: 'CASCADE',
});
Location.belongsToMany(Traveller, {
  through: {model:Trip, unique:false},
  onDelete: 'CASCADE',
=======
  through: {model: Trip, unique: false},
  onDelete: 'CASCADE',
});
Location.belongsToMany(Traveller, {
  through: { model: Trip, unique: false },
  onDelete: "CASCADE",
>>>>>>> 109be70edf7a068cbe907667df30ee18233ba003
});

module.exports = { Traveller, Location, Trip };
