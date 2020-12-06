export class Funcionario {
  private nome: string;
  private funcao: string;
  private dateNascismento: Date;
  private dataAdmissao: Date;
  private readonly cpf: string;
  private readonly rg: string;
  private readonly ctps: string;
  private setor: string;
  private cargo: string;

  constructor(nome: string) {
    this.nome = nome;
  }
}