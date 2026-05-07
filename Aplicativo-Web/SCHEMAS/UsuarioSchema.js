const {  Model, DataTypes } = require("sequelize")
const sequelize = require("../DATABASE/dbconfig")

class Usuario extends Model
{}

Usuario.init
(
    {
        username:
        {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email:
        {
            type: DataTypes.STRING,
            unique: true,
            validate:
            {
                isEmail: true,
            }
        },
        senha:
        {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
        {
            sequelize,
            modelName: "User",
            tableName: "users",
        }   
)

module.exports = Usuario