import Empresa from "./Empresa"
import Exame from "./Exame"
import Funcionario from "./Funcionario"
import Risco from "./Risco"

class Aso {

  private _id: string
  private _empresa: Empresa
  private _funcionario: Funcionario
  private _riscos: Array<Risco>
  private _exames: Array<Exame>
  private _tipoConsulta: string
  private _dataAdmissao: Date
  private _tipoRetornoTrabalho: string

  constructor(id: string, empresa: Empresa, funcionario: Funcionario, riscos: Array<Risco>, exames: Array<Exame>, tipoConsulta: string,
    dataAdmissao: Date, tipoRetornoTrabalho: string) {
    this._id = id
    this._empresa = empresa
    this._funcionario = funcionario
    this._riscos = riscos
    this._exames = exames
    this._tipoConsulta = tipoConsulta
    this._dataAdmissao = dataAdmissao
    this._tipoRetornoTrabalho = tipoRetornoTrabalho
  }
}

export default Aso