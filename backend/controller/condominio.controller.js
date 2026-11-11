const Condominio = require('../models/Condominio')
const CryptoJS = require('crypto-js')
const CHAVE_SECRETA = 'segredo'

const cadastrar = async (req, res) => {
    const valores = req.body
    console.log(valores)

    if(!valores.nome || !valores.cnpj || !valores.telefone){
        return res.status(400).json({message: 'todos os dados sao obrigatorios'})
    }

    try{
        await Condominio.create(valores)

    }catch(err){
        return res.status(500).json({ message: 'erro ao cadastrar condominio' })
    }

}

const listar = async (req, res) => {
    try {
        const condominios = await Condominio.findAll()
        return res.status(200).json(condominios)
    } catch (err) {
        return res.status(500).json({ message: 'Erro ao listar condominio' })
    }
}

const consultar = async (req, res) => {
    const id = req.params.id
    try {
        const condominio = await Condominio.findByPk(id)
        if (!condominio) {
            return res.status(404).json({ message: 'condominios não encontrado!' })
        }
        return res.status(200).json(montar(motorista))
    } catch (err) {
        return res.status(500).json({ message: 'Erro ao consultar condominios' })
    }
}

module.exports = { cadastrar, consultar, listar }