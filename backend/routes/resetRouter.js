const reset = require("../controllers/reset");
const middlewareController = require("../controllers/middlewareController");

const router = require("express").Router();

router.post("/reset", middlewareController.verifyTokenAndAdmin, reset.resetResult)
module.exports = router;
