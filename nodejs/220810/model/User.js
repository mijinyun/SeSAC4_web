
const User = (Sequelize,DataTypes) => {
    
    
    const model = Sequelize.define(
        'loginuser',
        {
            id : {
                type: DataTypes.STRING(8),
                allowNull: false,
                primaryKey: true,
            },
            name: {
                type: DataTypes.TEXT('medium'),
                allowNull: false,
            },
            password: {
                type: DataTypes.INTEGER,
                allowNull: false,
            }
 
        },
        {
            timestamps: false,
            tableName: 'loginuser',
            freezTableName: true,
        }
    );
    return model;
}

module.exports = User;