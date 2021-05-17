class Exame {

  private _id: string
  private _nome: string
  private _dataRealizacao: Date
  private _clinica: string
  private _valor: number
  private _responsavel: string

  constructor(id: string, nome: string, dataRealizacao: Date, clinica: string, valor: number, responsavel: string) {
    this._id = id
    this._nome = nome
    this._dataRealizacao = dataRealizacao
    this._clinica = clinica
    this._valor = valor
    this._responsavel = responsavel
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

  public get dataRealizacao(): Date {
    return this._dataRealizacao
  }

  public set dataRealizacao(dataRealizacao: Date) {
    this._dataRealizacao = dataRealizacao
  }

  public get clinica(): string {
    return this._clinica
  }

  public set clinica(clinica: string) {
    this._clinica = clinica
  }

  public get valor(): number {
    return this._valor
  }

  public set valor(valor: number) {
    this._valor = valor
  }

  public get responsavel(): string {
    return this._responsavel
  }

  public set responsavel(responsavel: string) {
    this._responsavel = responsavel
  }
}

export default Exame