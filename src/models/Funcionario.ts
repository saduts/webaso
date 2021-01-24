class Funcionario {
  private _nome: string;
  private _funcao: string;
  private _dataNascismento: Date;
  private _dataAdmissao: Date;
  private _cpf: string;
  private _rg: string;
  private _ctps: string;
  private _setor: string;
  private _cargo: string;

  constructor(nome: string, funcao: string, dataNascimento: Date, dataAdmissao: Date, cpf: string, rg: string, ctps: string, setor: string, cargo: string) {
    this._nome = nome;
    this._funcao = funcao;
    this._dataNascismento = dataNascimento;
    this._dataAdmissao = dataAdmissao;
    this._cpf = cpf;
    this._rg = rg;
    this._ctps = ctps;
    this._setor = setor;
    this._cargo = cargo;
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

}

export default Funcionario;