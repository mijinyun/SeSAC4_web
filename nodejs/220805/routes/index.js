const express = require("express");
const visitorRouter = express.Router(); 
const visitor = require("../controller/VisitorController");

visitorRouter.get("/",visitor.get_visitors);
visitorRouter.post("/write",visitor.post_comment);

// visitorRouter.delete("/delete",visitor.delete_comment);
// visitorRouter.put("/update",visitor.update_comment);


module.exports = visitorRouter;