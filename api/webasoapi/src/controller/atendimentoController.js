import dataFileUtil from '../util/dataFileUtil.js'

const inserir = async (aso) => {
  await dataFileUtil.save(aso)
}

const obterTodos = async (aso) => {
  return await dataFileUtil.findAll()
}

const obterPorId = async (id) => {
  return await dataFileUtil.findById(id)
}

const remover = async (id) => {
  let retorno = await dataFileUtil.remove(id)
  if (retorno !== -1) {
    return true
  } else {
    return false
  }
}

const atualizar = async (aso) => {
  return await dataFileUtil.update(aso)
}

export default { inserir, obterTodos, obterPorId, remover, atualizar }