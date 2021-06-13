class Tipo {

  private _id: string
  private _nome: string
  private _descricao: string
  private _categoria: string

  constructor(id: string, nome: string, descricao: string, categoria: string) {
    this._id = id
    this._nome = nome
    this._descricao = descricao
    this._categoria = categoria
  }
}

export default Tipo