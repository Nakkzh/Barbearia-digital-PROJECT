const { DataTypes, Model } = require('sequelize');
const sequelize = require('../DATABASE/dbconfig');
const Usuario = require('./UsuarioSchema'); // importar Usuario

class Atendimento extends Model{}

Atendimento.init({
    nomeCliente: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefone:{
        type: DataTypes.STRING,
        allowNull: false,
    } ,
    horarioAtendimento: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    dataAtendimento: {
        type: DataTypes.DATEONLY,
        allowNull:false,
    },
    dataNascimento: {
        type: DataTypes.DATEONLY,
        allowNull:false,
    },
    tipoServico: {
        type: DataTypes.ENUM('Corte de cabelo', 'Barba', 'Sobrancelha', 'Outros'),
        allowNull: false,
    },
    profissional: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
{
    sequelize,
    modelName: 'Atendimentos',
    tableName: 'atendimentos'
});

Usuario.hasMany(Atendimento, { foreignKey: 'usuarioId', as: 'atendimentos' });
Atendimento.belongsTo(Usuario, { foreignKey: 'usuarioId', as: 'usuario' });

module.exports = Atendimento