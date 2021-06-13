class Risco {

  private _id: string
  private _nome: string
  private _descricao: string
  private _tipo: string

  constructor(id: string, nome: string, descricao: string, tipo: string) {
    this._id = id
    this._nome = nome
    this._descricao = descricao
    this._tipo = tipo
  }

}

export default Risco