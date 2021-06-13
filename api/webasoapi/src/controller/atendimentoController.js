import AtendimentoModel from '../model/atendimento.js'

const inserir = async (atendimento) => {

  const atendimentoModel = new AtendimentoModel({
    codigoUsuario: atendimento.codigoUsuario,
    codigoAso: atendimento.codigoAso,
    dataRealizacao: new Date()
  });

  await atendimentoModel.save()
}

const obterTodos = async () => {

  console.log(AtendimentoModel)
  return await AtendimentoModel.find({})
}

const obterPorId = async (id) => {
}

const remover = async (id) => {

}

const atualizar = async (aso) => {

}

export default { inserir, obterTodos, obterPorId, remover, atualizar }