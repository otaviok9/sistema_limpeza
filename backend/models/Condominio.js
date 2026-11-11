const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Condominio = db.define('condominio',{
    codCondominio:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome:{
        type:DataTypes.STRING(100),
        allowNull: false
    },
    cnpj:{
        type:DataTypes.STRING(100),
        allowNull: false
    },
    telefone:{
        type:DataTypes.STRING(100),
        allowNull:false
    }
},{
    timestamps: false,
    tableName: 'condominios'
})

module.exports = Condominio