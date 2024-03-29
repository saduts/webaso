class Usuario {

  private _id: string
  private _login: string
  private _nome: string
  private _email: string
  private _senha: string
  private _status: string
  private _cnpj: number
  private _telefone: number

  constructor(id: string, login: string, nome: string, email: string, senha: string,
    status: string, cnpj: number, telefone: number) {
    this._id = id
    this._login = login
    this._nome = nome
    this._email = email
    this._senha = senha
    this._status = status
    this._cnpj = cnpj
    this._telefone = telefone
  }
}

export default Usuario