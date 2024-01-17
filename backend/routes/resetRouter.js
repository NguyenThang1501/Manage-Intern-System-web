const reset = require("../controllers/reset");
const middlewareController = require("../controllers/middlewareController");

const router = require("express").Router();

router.get(
  "/reset",
  middlewareController.verifyTokenAndAdmin,
  reset.resetResult
);
module.exports = router;
