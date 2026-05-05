const { DataTypes, Model } = require("sequelize")
const sequelize = require("../DATABASE/dbconfig")

class Atendimento extends Model {}

Atendimento.init(
{
   nomeCliente:
   {
    type: DataTypes.STRING,
    allowNull: false
    },

   telefone:
    {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
    },

    data:
    {
        type: DataTypes.DATEONLY,
        allowNull: false
    },

    horario:
    {
        type: DataTypes.TIME,
        allowNull: false
    },

    tipoServico:
    {
        type: DataTypes.ENUM("corte", "barba", "sobrancelha"),
        allowNull: false
    }
},
{
    sequelize,
    modelName: "Atendimentos",
    tableName: "Atendimentos"
}
)

module.exports = Atendimento