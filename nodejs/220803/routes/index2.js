const express = require("express");
const userRouter = express.Router(); //express안의 라우터를 이용하는 것
const user = require("../controller/UserController2");  //controller에 userController라는 파일을 만들고 호출 해준 것.


userRouter.get("/",user.index);
userRouter.get("/register",user.register); //여기서 user.register에서 register는 그냥 usercontroller파일에서 지정해준 이름일 뿐임(내맘대로)
userRouter.post("/register",user.post_register);

userRouter.get("/login",user.login);
userRouter.post("/login",user.post_login);      //로그인 버튼을 누르면 user.post_login함수가 실행되게 함.

userRouter.get("/profile",user.profile)
userRouter.post("/profile",user.post_profile);



module.exports = userRouter;