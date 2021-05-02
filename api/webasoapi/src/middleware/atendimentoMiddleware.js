import atendimentoController from '../controller/atendimentoController.js'
import aso from '../model/asoAtendimento.js'
import logger from '../util/loggerUtil.js'

const create = async (req, res) => {
  try {
    aso.nomeFuncionario = req.body.nomeFuncionario
    aso.nomeEmpresa = req.body.nomeEmpresa
    aso.dataAtendimento = req.body.dataAtendimento
    aso.tipoConsulta = req.body.tipoConsulta
    aso.retornoTrabalho = req.body.retornoTrabalho
    aso.situacaoAtendimento = req.body.situacaoAtendimento
    aso.exames = req.body.exames
    aso.riscos = req.body.riscos
    await atendimentoController.inserir(aso)
    res.status(201).send()
  } catch (error) {
    res.status(500).send(error)
    logger.erro(`Atendimento Middleware Create: ${error}`)
  }
}

const findAll = async (_, res) => {
  try {
    const data = await atendimentoController.obterTodos()
    res.status(200).send(data)
  } catch (error) {
    res.status(500).send(error)
    logger.error(`Atendimento Middleware findAll - ${error}`)
  }
}

const findOne = async (req, res) => {
  try {
    const data = await atendimentoController.obterPorId(req.params.id)
    res.status(200).send(data)
  } catch (error) {
    res.status(500).send(error)
    logger.error(`Atendimento Middleware findOne - ${error}`)
  }
}

const remove = async (req, res) => {
  try {
    const data = await atendimentoController.remover(req.params.id)
    if (!data) res.status(404)
    else res.status(200)
  } catch (error) {
    res.status(500).send(error)
    logger.error(`Atendimento Middleware findOne - ${error}`)
  }
  res.send()
}

const update = async (req, res) => {
  try {
    const data = await atendimentoController.atualizar(req.body)
    res.status(200).send(data)
  } catch (error) {
    res.status(500).send(error);
    logger.error(`Atendimento Middleware findOne - ${error}`)
  }
};

export default { create, findAll, findOne, remove, update };