class Empresa {
  private razaoSocial: string;
  private nomeFantasia: string;
  private cnpj: string;

  constructor(razaoSocial: string, nomeFantasia: string, cnpj: string) {
    this.razaoSocial = razaoSocial;
    this.nomeFantasia = nomeFantasia;
    this.cnpj = cnpj;
  }
}

export default Empresa