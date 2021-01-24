export class Usuario {
  private login: string;
  private nome: string;
  private email: string;
  private dataCadastro: Date;

  constructor(nome: string, login: string, email: string, dataCadastro: Date) {
    this.nome = nome;
    this.login = login;
    this.email = email;
    this.dataCadastro = dataCadastro;
  }
}