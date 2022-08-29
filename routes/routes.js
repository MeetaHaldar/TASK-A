const express = require("express");
const router = express.Router();
const Model = require("../Model/model");
const pagination = require("../middleware/pagination")

// post method
router.post("add-movie", async (req, res) => {
  const data = new Model(
    {
      moviename: req.body.moviename,
      year: req.body.year,
      description: req.body.description,
    },
  );
  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    
    res.status(400).json({ message: error.message });
  }
});

// Get all method
router.get("get-all", async (req, res) => {
  try {
    const data = await Model.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get by ID  method
router.get("/get-single/:id", async (req, res) => {
  try {
    const id = await Model.findById(req.params.id);
    res.status(200).json(id);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get by Pagination  method
router.get("/get-paginated", pagination(), (req, res) => {
  res.json(res.paginatedResults);
});




module.exports = router;
