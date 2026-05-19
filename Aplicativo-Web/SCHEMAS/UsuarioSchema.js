const { Model, DataTypes } = require("sequelize");
const sequelize = require("../DATABASE/dbconfig");

class Usuario extends Model {}

Usuario.init({
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true, // apenas um índice único
        validate: { isEmail: true },
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'Usuario', // nome do modelo usado internamente
    tableName: 'users',   // nome da tabela no banco
});

module.exports = Usuario;