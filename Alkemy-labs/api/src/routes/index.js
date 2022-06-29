const { Router } = require('express');
const balanceRoute = require("./Balance");
const categoryRoute = require("./Category");
const router = Router();

router.use("/balance", balanceRoute);
router.use("/categories", categoryRoute);



module.exports = router;
