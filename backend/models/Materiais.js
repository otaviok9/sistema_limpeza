const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Materiais = db.define('materiais',{
    codMateriais:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descricao:{
        type:DataTypes.STRING(100),
        allowNull: false
    },
    categoria:{
        type:DataTypes.STRING(100),
        allowNull: false
    },
    qtdeEstoque:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    idCondominio:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model: 'condominios',
            key: 'codCondominio'
        }
    }
},{
    timestamps: false,
    tableName: 'materiais'
})

module.exports = Materiais