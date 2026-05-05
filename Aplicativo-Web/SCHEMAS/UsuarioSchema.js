const { DataType, Model } = require("sequelize")
const sequelize = require("../DATABASE/dbconfig")

class Usuario extends Model
{}

Usuario.init
(
    {
        username:
        {
            type: DataType.STRING,
            allowNull: false,
        },
        email:
        {
            type: DataType.STRING,
            unique: true,
            validate:
            {
                isEmail: true,
            }
        },
        senha:
        {
            type: DataType.STRING,
            allowNull: false,
        },
        telefone:
        {
            type: DataType.STRING,
            unique: true,
            allowNull: false,
        }
    },
        {
            sequelize,
            modelName: "User",
            tableName: "users",
        }   
)

module.exports = Usuario