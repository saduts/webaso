import React from "react";
import Funcionario from "./models/Funcionario";
import ContFuncionario from "./components/containers/funcionario_cont";
import ContAtendimento from "./components/containers/atendimento_cont";
import './App.css';

export const App = () => {
  let initFuncionario: Funcionario = new Funcionario("Sadu Toledo de Souza", "Funcao", new Date(1995, 11, 17), new Date(1995, 11, 17), "CPF", "RG", "CTPS", "SETOR", "CARGO");

  return (
    <>
      <div className={'App-header'}>
        <div><span className={'AppTitle'}>ASO WEB</span></div>
        <ContFuncionario funcionario={initFuncionario} />
        <ContAtendimento />
      </div>
    </>
  );

}

export default App;
