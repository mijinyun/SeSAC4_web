const express = require("express");
const router = express.Router();
const user = require("../controller/userController");

router.get("/",user.sign);
router.post("/sign",user.post_sign);

router.get("/login",user.login);
router.post("/loginpass",user.post_login)


module.exports = router;