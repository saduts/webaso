import React from "react";
import Funcionario from "./models/Funcionario";
import ContFuncionario from "./containers/cont_funcionario";
import ContAtendimento from "./containers/cont_atendimento";
import './App.css';

export const App = () => {
  let initFuncionario: Funcionario = new Funcionario("Sadu Toledo de Souza", "Funcao", new Date(1995, 11, 17), new Date(1995, 11, 17), "CPF", "RG", "CTPS", "SETOR", "CARGO");

  return (
    <>
      <div className={'App-header'}>
        <div><span className={'AppTitle'}>ASO WEB</span></div>
        <ContFuncionario funcionario={initFuncionario} />
        <ContAtendimento funcionario={initFuncionario} />
      </div>
    </>
  );

}

export default App;
