export class Empresa {
  private razaoSocial: string;
  private nomeFantasia: string;
  private readonly cnpj: string;

  constructor(razaoSocial: string) {
    this.razaoSocial = razaoSocial;
  }
}