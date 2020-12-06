import { Empresa } from "./Empresa";
import { Exame } from "./Exame";
import { Funcionario } from "./Funcionario";
import { Risco } from "./Risco";
import { TipoConsulta } from "./TipoConsulta";
import { Usuario } from "./Usuario";

class Aso {

  private funcionario: Funcionario;
  private empresa: Empresa;
  private tipoConsulta: TipoConsulta;
  private risco: Array<Risco>;
  private exame: Array<Exame>;
  private usuario: Usuario;

  constructor(funcionario: Funcionario, empresa: Empresa, tipoConsulta: TipoConsulta,
    risco: Array<Risco>, exame: Array<Exame>, usuario: Usuario) {

    this.funcionario = funcionario;
    this.empresa = empresa;
    this.tipoConsulta = tipoConsulta;
    this.risco = risco;
    this.exame = exame;
    this.usuario = usuario;
  }

}