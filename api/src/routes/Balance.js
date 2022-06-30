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
      };
    });
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
      where: { name: category },
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

// --------------------------PUT-------------------------------- //

router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    let { money, concept, category } = req.body;
    let updatedBalance = await Balance.findOne({
      where: {
        id: id,
      },
    });
    await updatedBalance.update({
      money,
      concept,
      category,
    });
    let categoryMatch = await Category.findOne({
      where: { name: category },
    });

    await updatedBalance.setCategory(categoryMatch);
    res.status(200).json(updatedBalance);
  } catch (error) {
    next(error);
  }
});

// --------------------------DELETE-------------------------------- //

router.delete("/:id", async (req, res, next) => {
  try {
    const  idBalance  = req.params.id;
    await Balance.destroy({
      where: {id:idBalance}
    });
    res.status(200).send("Transaction Deleted");
  } catch (error) {
    next(error)
  }
})

module.exports = router;
