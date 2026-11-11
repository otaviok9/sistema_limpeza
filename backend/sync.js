const conn = require('./db/conn')
const { Funcionario, Condominio, Materiais, Movimentacao } = require('./models/rel')

async function syncDataBase() {
    try {
        await conn.sync({ force: true })
        console.log('tabelas sincronizadas')
    } catch (err) {
        console.error('erro ao sincronizar', err)
    } finally {
        await conn.close()
        console.log('fechando conexao com o db')
    }
}

syncDataBase()
