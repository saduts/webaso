class Medico {

  private _id: string
  private _nome: string
  private _crm: string
  private _cnpj: string
  private _email: string
  private _telefone: string

  constructor(id: string, nome: string, crm: string, cnpj: string, email: string, telefone: string) {
    this._id = id
    this._nome = nome
    this._crm = crm
    this._cnpj = cnpj
    this._email = email
    this._telefone = telefone
  }
}

export default Medico