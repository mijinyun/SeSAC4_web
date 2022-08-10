//여기서 sequelize를 불러옴

const Sequelize = require("sequelize");

const config = require("../config/config.json")["development"]; //개발환경셋팅을 불러오겠다는 것.
//const a = require("../config/config.json"); 위 한줄과 아래 두줄이 같은 것.
// const config = a["development"]; 

const db = {};
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config //전체를 가져오는것. 이 네줄은 정의를 했기때문에 가능한것. 만약에 정의를 안했으면 "sesac","user"~이런식으로 써줘야함. 근데 이럴경우 배포를 할때는 내용을 싹 바꿔줘야하기에 안좋음! 그래서 위에처럼 정의해서 쓰는 것.
) //클래스이기 때문에 new를 통해 초기화 시켜줌.


db.sequelize = sequelize;
db.Sequelize - Sequelize;

// db = {"sequelize ": sequelize(18번째줄) , "Sequelize" : Sequelize(3번째줄)} 


db.Visitor = require("./Visitor")(sequelize,Sequelize); // Visitor.js에서 이 함수를 실행하는 거임. 실행하러가서 ~return model;해서 받은 값이 db.Visitor에서 Visitor에 들어가는 거임.

db.User = require("./User")(sequelize,Sequelize);

module.exports = db; //작업하기 위해서 내보내줘야함. 내보내주지않으면 위에 썼던 객체들부턷 다 써줘야함. 번거로우므로 내보내주는것! 그래서 model에서 index.js를 작업을 해주는 것이다~~


 