import { Aso } from "./src/models/Aso";
import { Funcionario } from "./src/models/Funcionario";
import { Empresa } from "./src/models/Empresa";
import { TipoConsulta } from "./src/models/TipoConsulta";
import { Risco } from "./src/models/Risco";
import { Exame } from "./src/models/Exame";
import { Usuario } from "./src/models/Usuario";

let funcionario: Funcionario;
let empresa: Empresa;
let tipoConsulta: TipoConsulta;
let risco: Array<Risco>;
let exame: Array<Exame>;
let usuario: Usuario;
let aso: Aso;

window.addEventListener('load', start);

function start() {

  inserirAso();

}

function inserirAso() {

  aso = new Aso(funcionario, empresa, tipoConsulta, risco, exame, usuario);
  console.log(aso + "ASO Cadastro com sucesso!!!");

}