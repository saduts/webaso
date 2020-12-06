export class Exame {

  private readonly nome: string;
  private dataRealizacao: Date;
  private clinica: string;
  private valor: number;

  constructor(nome: string, dataRealizacao: Date, clinica: string, valor: number) {
    this.nome = nome;
    this.dataRealizacao = dataRealizacao;
    this.clinica = clinica;
    this.valor = valor;
  }

}