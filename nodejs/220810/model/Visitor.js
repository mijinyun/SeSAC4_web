const Visitor  = (Sequelize, DataTypes) => {
    //Sequelize는 model/index.js에서의 sequelize  //database랑 연결된 객체 
    //DataTypes는 model/index.js에서의 Sequelize // index.js 에서 db.Visitor = require("./Visitor")(sequelize,Sequelize);로 했기때문에~

    //테이블구조 정의(sequelize 모델 )
    const model = Sequelize.define(
        'visitor',
        {//여기서 모델은 mysql문에서 정의하는 것과 동일하게 설정해줘야함. 
            id : {
                type: DataTypes.INTEGER, //UNSIGNED : 0을 제외한 정수 , INTEGER :정수 // id int 
                allowNull: false, //not null
                primaryKey: true, //primary key
                autoIncrement: true, //auto_increment

            },
            name: { //name varchar(10) not null
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            comment: { // mediumtext
                type: DataTypes.TEXT('medium'),
                // allowNull: true // 이거는 기본값이 true여서 굳이 안써도됨.

            }

        },
        {
            timestamps: false, //true로 지정하게 되면 등록된 시간과 수정된 시간을 갖는 컬럼이 만들어짐.  언제추가되고, 언제 수정되엇는지 자동으로 찍어내는 것. 우리는 현재 시간관련된 컬럼이 없기 때문에 false로 해줌.
            tableName : 'visitor',
            freezTableName: true, //sequelize문법 특징임. 전환할 때 테이블이름을 자동으로 복수로 바꾸는것 visitor => visitors 로 바꿈. 그래서 true로 해주면 복수로 바꾸는것을 막는것! 
            
        }

    );
    return model; // 만들었으니까 내보내주는 것.
    
}  

module.exports = Visitor;
