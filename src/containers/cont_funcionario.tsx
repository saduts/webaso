import React, { useState } from "react";
import DadosFuncionario from "../components/dados-funcionario/dadosFuncionario";
import Funcionario from "../models/Funcionario";
import './containers.css'

interface FuncionarioProps {
  funcionario: Funcionario;
}

const ContFuncionario = (props: FuncionarioProps) => {

  const [funcionario, setFuncionario] = useState(props.funcionario);

  return (
    <>
      <span className={'spanTitle'}>Funcionário</span>
      <div className={'divPanelFuncionario'}>
        <div className={'divPanel'}>
          <span className={'spanTitleFuncionario'}>Nome: </span>
          <input className={'inputTextFuncionario'} type="text" name="nomeFuncionario" />
          <span className={'spanTitleFuncionario'}>Empresa : </span>
          <input className={'inputTextFuncionario'} type="text" name="nomeEmpresa" />
        </div>
        <div>
          <div><DadosFuncionario funcionario={funcionario} /></div>
        </div>
        <div className={'divPanel'}>
          <button className={'divButton'}>Cadastro</button>
          <button className={'divButton'}>Atendimentos</button>
          <button className={'divButton'}>Detalhe</button>
        </div>
      </div>
    </>
  )

}

export default ContFuncionario;