const {createUser, getUserById} = require("./user.controller");
const router = require("express").Router();

router.post("/", createUser)
router.get("/:id", getUserById)


module.exports = router;
