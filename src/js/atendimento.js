let nome = null;
let empresa = null;
let dataAdmissao = null;
let ctps = null;
let cargo = null;
let botaoCadastro = null;
let botaoAtendimento = null;
let botaoDetalhe = null;
let dataAtendimento = null;
let tipoConsulta = null;
let retornoTrabalho = null;
let situacaoAtendimento = null;
let botaoAdicionarExame = null;
let tabelaExame = null;
let riscos = null;
let botaoAdicionarRisco = null;
let visualizarASO = null;

window.addEventListener('load', start);

function start() {
  init();
  adicionarOuvintesEventos();
  console.log("Componetes inicializados");
}

function init() {
  nome = document.querySelector('#nome');
  empresa = document.querySelector('#empresa');
  dataAdmissao = document.querySelector('#cpf');
  ctps = document.querySelector('#ctps');
  cargo = document.querySelector('#cargo');
  botaoCadastro = document.querySelector('#botaoCadastro');
  botaoAtendimento = document.querySelector('#botaoAtendimento');
  botaoDetalhe = document.querySelector('#botaoDetalhe');
  dataAtendimento = document.querySelector('#dataAtendimento');
  tipoConsulta = document.querySelector('#tipoConsulta');
  retornoTrabalho = document.querySelector('#retornoTrabalho');
  situacaoAtendimento = document.querySelector('#situacaoAtendimento');
  botaoAdicionarExame = document.querySelector('#botaoAdicionarExame');
  tabelaExame = document.querySelector('#tabelaExame');
  riscos = document.querySelector('#riscos');
  botaoAdicionarRisco = document.querySelector('#botaoAdicionarRisco');
  visualizarASO = document.querySelector('#visualizarASO');
}

function adicionarOuvintesEventos() {
  visualizarASO.addEventListener('click', visualizarAso);
}

function visualizarAso() {
  console.log("Visualizar ASO!!!");
}
