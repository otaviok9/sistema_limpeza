const Funcionario = require('./Funcionario')
const Condominio = require('./Condominio')
const Materiais = require('./Materiais')
const Movimentacao = require('./Movimentacao')

Condominio.hasMany(Materiais,{
    foreignKey: 'idCondominio',
    as: 'movimentoCondominio',
    onDelete: 'CASCADE'
})

Materiais.belongsTo(Condominio,{
    foreignKey: 'idCondominio',
    as: 'condominioMovimentacao',
    allowNull: false
})

Materiais.hasMany(Movimentacao,{
    foreignKey: 'idMateriais',
    as: 'movimentacaoMateriais',
    onDelete: 'CASCADE'
})

Movimentacao.belongsTo(Materiais,{
    foreignKey:'idMateriais',
    as: 'materiaisMovimentacao',
    allowNull: false
})

module.exports = { Funcionario, Condominio, Movimentacao, Materiais }