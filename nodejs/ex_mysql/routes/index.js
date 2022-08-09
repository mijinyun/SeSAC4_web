const express = require("express");
const router = express.Router();
const user = require("../controller/userController");

router.get("/",user.sign);
router.post("/sign",user.post_sign);

router.get("/login",user.login);
router.post("/login",user.post_login);
router.post("/login/edit",user.post_edit);
router.post("/login/delete",user.delete_user);

module.exports = router; 