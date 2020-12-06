export class Usuario {
  private login: string;
  private nome: string;
  private readonly email: string;
  private dataCadastro: Date;

  constructor(nome: string) {
    this.nome = nome;
  }
}