class Atendimento {

  private _id: string
  private _idUsuario: string
  private _idAso: string
  private _dataRealizacao: string

  constructor(id: string, idUsuario: string, idAso: string, dataRealizacao: string) {
    this._id = id
    this._idUsuario = idUsuario
    this._idAso = idAso
    this._dataRealizacao = dataRealizacao
  }
}

export default Atendimento