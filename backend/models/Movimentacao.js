const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Movimetacao = db.define('movimentacao',{
    codMovimentaco:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    qtde:{
        type:DataTypes.STRING(100),
        allowNull: false
    },
    data:{
        type:DataTypes.DATEONLY,
        allowNull: false
    },
    hora:{
        type:DataTypes.TIME,
        allowNull: false
    },
    estado:{
        type: DataTypes.ENUM('ENTRADA', 'SAIDA'),
        allowNull: false
    },
    idMateriais:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            key: 'codMateriais',
            model: 'materiais'
        }
    }
},{
    timestamps: false,
    tableName: 'movimentacoes'
})

module.exports = Movimetacao