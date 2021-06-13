class Funcionario {

  private _id: string
  private _nome: string
  private _dataAdmissao: Date
  private _rg: string
  private _setor: string
  private _cargo: string
  private _funcao: string
  private _cnpjContratante: number
  private _email: string
  private _telefone: number
  private _dataNascismento: Date
  private _cpf: string
  private _ctps: string

  constructor(id: string, nome: string, dataAdmissao: Date, rg: string, setor: string, cargo: string, funcao: string,
    cnpjContratante: number, email: string, telefone: number, dataNascismento: Date, cpf: string, ctps: string) {
    this._id = id
    this._nome = nome
    this._dataAdmissao = dataAdmissao
    this._rg = rg
    this._setor = setor
    this._cargo = cargo
    this._funcao = funcao
    this._cnpjContratante = cnpjContratante
    this._email = email
    this._telefone = telefone
    this._dataNascismento = dataNascismento
    this._cpf = cpf
    this._ctps = ctps
  }

  public get id(): string {
    return this._id;
  }

  public set id(id: string) {
    this._id = id;
  }

  public get nome(): string {
    return this._nome;
  }

  public set nome(nome: string) {
    this._nome = nome;
  }

  public get funcao(): string {
    return this._funcao;
  }

  public set funcao(dataNascismento: string) {
    this._funcao = dataNascismento;
  }

  public get dataNascismento(): Date {
    return this._dataNascismento;
  }

  public set dataNascismento(dataNascismento: Date) {
    this._dataNascismento = dataNascismento;
  }

  public get dataAdmissao(): Date {
    return this._dataAdmissao;
  }

  public set dataAdmissao(dataAdmissao: Date) {
    this._dataAdmissao = dataAdmissao;
  }

  public get cpf(): string {
    return this._cpf;
  }

  public set cpf(cpf: string) {
    this._cpf = cpf;
  }

  public get rg(): string {
    return this._rg;
  }

  public set rg(rg: string) {
    this._rg = rg;
  }

  public get ctps(): string {
    return this._ctps;
  }

  public set ctps(ctps: string) {
    this._ctps = ctps;
  }

  public get setor(): string {
    return this._setor;
  }

  public set setor(setor: string) {
    this._setor = setor;
  }

  public get cargo(): string {
    return this._cargo;
  }

  public set cargo(cargo: string) {
    this._cargo = cargo;
  }

  public get cnpjContratante(): number {
    return this._cnpjContratante;
  }

  public set cnpjContratante(cnpjContratante: number) {
    this._cnpjContratante = cnpjContratante;
  }

  public get email(): string {
    return this._email;
  }

  public set email(email: string) {
    this._email = email;
  }

  public get telefone(): number {
    return this.telefone;
  }

  public set telefone(telefone: number) {
    this._telefone = telefone;
  }
}

export default Funcionario;