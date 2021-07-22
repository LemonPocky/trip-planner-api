const router = require("express").Router();
const { Location } = require('../../models');

// TODO: GET all locations
router.get("/", async (req, res) => {
  try {
    const locationData = await Location.findAll();
    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// TODO: GET a single location
router.get("/:id", async (req, res) => {});

// TODO: CREATE a location
router.post("/", async (req, res) => {});

// TODO: DELETE a location
router.delete("/:id", async (req, res) => {});

module.exports = router;
