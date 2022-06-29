const { Router } = require("express");
const router = Router();
const { Balance, Category } = require("../db.js");

// --------------------------GET-------------------------------- //

router.get("/", async (req, res, next) => {
    try {
      let dbCategories = await Category.findAll();
      res.status(200).json({ dbCategories });
    } catch (error) {
      next(error);
    }
  });
  
// --------------------------POST-------------------------------- //

router.post("/", async (req, res, next) => {
    try {
      let { name } = req.body;
      let categoryCreated = await Category.create({
        name,
      });
      res.status(200).send("New Category added");
    } catch (error) {
      next(error);
    }
  });

  module.exports = router;