import { promises } from "fs"

const readFile = promises.readFile
const writeFile = promises.writeFile
const asoJsonFile = "C:/Users/suporte.STFBHZN002751-W/Documents/MBA/PA/webaso/api/webasoapi/src/data/aso.json"

const save = async (aso) => {
  let json = JSON.parse(await readFile(asoJsonFile, "utf8"))
  aso = { id: json.nextId++, timestamp: new Date(), ...aso }
  json.asos.push(aso)
  await writeFile(asoJsonFile, JSON.stringify(json))
}

const findAll = async () => {
  let json = JSON.parse(await readFile(asoJsonFile, "utf8"))
  return json.asos
}

const findById = async (id) => {
  let json = JSON.parse(await readFile(asoJsonFile, "utf8"))
  let index = json.asos.findIndex(a => a.id === parseInt(id, 10))

  if (index === -1) {
    throw new Error("ASO não existente.")
  } else {
    return json.asos[index]
  }
}

const remove = async (id) => {
  let json = JSON.parse(await readFile(asoJsonFile, "utf8"))
  let index = json.asos.findIndex(a => a.id === parseInt(id, 10))

  if (index !== -1) {
    json.asos.splice(index, 1);
    await writeFile(asoJsonFile, JSON.stringify(json));
  }

  return index
}

const update = async (aso) => {

  let json = JSON.parse(await readFile(asoJsonFile, "utf8"))
  let index = json.asos.findIndex(a => a.id === parseInt(aso.id, 10))

  if (index === -1) {
    save(aso)
  } else {
    let asoAtual = json.asos[index]
    asoAtual.nomeFuncionario = aso.nomeFuncionario
    asoAtual.nomeEmpresa = aso.nomeEmpresa
    asoAtual.dataAtendimento = aso.dataAtendimento
    asoAtual.tipoConsulta = aso.tipoConsulta
    asoAtual.retornoTrabalho = aso.retornoTrabalho
    asoAtual.situacaoAtendimento = aso.situacaoAtendimento
    asoAtual.exames = aso.exames
    asoAtual.riscos = aso.riscos
    asoAtual = { id: aso.id, timestamp: new Date(), ...asoAtual }
    json.asos[index] = asoAtual
    await writeFile(asoJsonFile, JSON.stringify(json));
  }
}

export default { save, findAll, findById, remove, update }