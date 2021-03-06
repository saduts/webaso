import React from "react";
import Funcionario from "../../models/Funcionario"
import './dadosFuncionario.css'

interface DadosFuncionarioProps {
  funcionario: Funcionario;
}

const DadosFuncionario = (props: DadosFuncionarioProps) => {

  const { nome, funcao, dataNascismento, dataAdmissao, cpf, rg, ctps, setor, cargo } = props.funcionario;

  return (
    <>
      <div>
        <div className={'divPanelInformacao'}>
          <div><span className={'spanTitle'}>- INFORMAÇÕES -</span></div>
          <div className={'divLinha'}></div>
          <div><span className={'spanSubTitle'}><b>Nome: </b>{nome}</span></div>
          <div><span className={'spanSubTitle'}><b>Função: </b>{funcao}</span></div>
          <div><span className={'spanSubTitle'}><b>Data Nascimento:{dataNascismento.getDate.toString}</b></span></div>
          <div><span className={'spanSubTitle'}><b>Data Admissão:{dataAdmissao.toString}</b></span></div>
          <div><span className={'spanSubTitle'}><b>Cpf: </b>{cpf}</span></div>
          <div><span className={'spanSubTitle'}><b>RG: </b>{rg}</span></div>
          <div><span className={'spanSubTitle'}><b>CTPS: </b>{ctps}</span></div>
          <div><span className={'spanSubTitle'}><b>Setor: </b>{setor}</span></div>
          <div><span className={'spanSubTitle'}><b>Cargo: </b>{cargo}</span></div>
        </div>
      </div>
    </>
  )
}

export default DadosFuncionario;