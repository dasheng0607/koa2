module.exports = function (sequelize, DataTypes) {
    return sequelize.define('userNew4', {
        id: {
            type: DataTypes.INTEGER(11), // 字段类型
            allowNull: false, // 是否允许为NULL
            primaryKey: true, // 主键
            autoIncrement: true // 是否自增
        },
        firstName: {
            type: DataTypes.STRING,
            field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
        },
        lastName: {
            type: DataTypes.STRING
        }
    }, {
            freezeTableName: true // Model 对应的表名将与model名相同
        });
}