import { promises } from "fs"
import logger from "./loggerUtil.js"

const readFile = promises.readFile
const writeFile = promises.writeFile
const asoJsonFile = "./src/data/aso.json"

const save = async (aso) => {
  let json = JSON.parse(await readFile(asoJsonFile, "utf8"))
  aso = { id: json.nextId++, timestamp: new Date(), ...aso }
  json.asos.push(aso)
  await writeFile(asoJsonFile, JSON.stringify(json))
  logger.info('ASO gravado com sucesso')
  return aso
}

const findAll = async () => {
  let json = JSON.parse(await readFile(asoJsonFile, "utf8"))
  logger.info('Consultado todos os ASOs da base de dados.');
  return json.asos
}

const findById = async (id) => {
  let json = JSON.parse(await readFile(asoJsonFile, "utf8"))
  let index = json.asos.findIndex(a => a.id === parseInt(id, 10))

  if (index === -1) {
    logger.warn(`Não encontrado o ASO id: ${id}`)
  } else {
    logger.info(`Consultado o ASO id: ${id}`)
    return json.asos[index]
  }
}

const remove = async (id) => {
  let json = JSON.parse(await readFile(asoJsonFile, "utf8"))
  let index = json.asos.findIndex(a => a.id === parseInt(id, 10))

  if (index !== -1) {
    json.asos.splice(index, 1);
    await writeFile(asoJsonFile, JSON.stringify(json));
    logger.info(`Removido o ASO id: ${id}`)
  }

  return index
}

const update = async (aso) => {

  let json = JSON.parse(await readFile(asoJsonFile, "utf8"))
  let index = json.asos.findIndex(a => a.id === parseInt(aso.id, 10))
  aso.timestamp = new Date()
  if (index === -1) {
    aso = save(aso)
  } else {
    json.asos[index] = aso
    await writeFile(asoJsonFile, JSON.stringify(json));
  }
  logger.info(`Atualizado o ASO id: ${aso.id}`)
  return aso
}

export default { save, findAll, findById, remove, update }