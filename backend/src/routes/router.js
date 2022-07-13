const controller = require("../controllers/controller");
const router = require("express").Router();

router.get("/", controller.index);

router.post("/login", controller.authenticate);

router.get("*", controller.all);

module.exports = router;