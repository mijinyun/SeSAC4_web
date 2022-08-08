const express = require("express");
const visitorRouter = express.Router(); 
const visitor = require("../controller/VisitorController");

visitorRouter.get("/",visitor.get_visitors);
visitorRouter.post("/write",visitor.post_comment);
visitorRouter.get("/get",visitor.get_visitor);
visitorRouter.patch("/edit",visitor.patch_comment);
visitorRouter.delete("/delete",visitor.delete_comment);

module.exports = visitorRouter;