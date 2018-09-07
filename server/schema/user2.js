module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER(11), // 字段类型
            allowNull: false, // 是否允许为NULL
            primaryKey: true, // 主键
            autoIncrement: true // 是否自增
        },
        user_id: {
            type: DataTypes.INTEGER(11), // 最大长度为50的字符串
            allowNull: true
        },
        content: {
            type: DataTypes.CHAR(255),
            allowNull: true
        }
    }, {
            tableName: 'list' // 表名
        })
}