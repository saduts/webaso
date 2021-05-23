import axios from 'axios'

const API_URL = 'http://localhost:3001/aso/'

export interface IAsoAtendimento {
  nomeFuncionario: string,
  nomeEmpresa: string,
  dataAtendimento: string,
  tipoConsulta: string,
  retornoTrabalho: string,
  situacaoAtendimento: string,
  exames: Array<{ descricao: string, dataRealizacao: string }>,
  riscos: Array<{ risco: string, comentario: string }>
}

export const saveAso = async function (aso: IAsoAtendimento) {
  await axios.post(API_URL, aso)
}

export const obterTodosAtendimentos = async function () {
  const res = await axios.get(API_URL)
  return res;
}