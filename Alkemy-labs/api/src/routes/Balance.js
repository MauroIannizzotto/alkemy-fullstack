const { Router } = require("express");
const router = Router();
const { Balance, Category } = require("../db.js");

// --------------------------GET-------------------------------- //

router.get("/", async (req, res, next) => {
  try {
    
    let dbBalance = await Balance.findAll({
      include: {
        model: Category,
        attributes: ["name"],
    },
    through: {
      attributes: [],
    },
    });

    let all = dbBalance.map((e) => {
        return {
            id: e.id,
            money: e.money,
            concept: e.concept,
            get_into: e.get_into,
            createdAt: e.createdAt,
            updatedAt: e.updatedAt,
            categoryId: e.categoryId,
            category: e.category.name,
        }
    })
    res.status(200).json({ all });
  } catch (error) {
    next(error);
  }
});



// --------------------------POST-------------------------------- //

router.post("/", async (req, res, next) => {
  try {
    let { money, concept, get_into, category } = req.body;

    let categoryMatch = await Category.findOne({
        where: { name : category },
      });

    let balanceCreated = await Balance.create({
      money,
      concept,
      get_into,
    });

    await balanceCreated.setCategory(categoryMatch);
    res.status(200).send("Transaction added");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
