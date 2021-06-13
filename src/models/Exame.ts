class Exame {

  private _id: string
  private _nome: string
  private _descricao: string
  private _valor: number

  constructor(id: string, nome: string, descricao: string, valor: number) {
    this._id = id
    this._nome = nome
    this._descricao = descricao
    this._valor = valor
  }

  public get id(): string {
    return this._id
  }

  public set id(id: string) {
    this._id = id
  }

  public get nome(): string {
    return this._nome
  }

  public set nome(nome: string) {
    this._nome = nome
  }

  public get valor(): number {
    return this._valor
  }

  public set valor(valor: number) {
    this._valor = valor
  }

  public get descricao(): string {
    return this._descricao
  }

  public set descricao(descricao: string) {
    this._descricao = descricao
  }
}

export default Exame