import React from "react";
import TebelaExame from "../exame-tabela/TabelaExames";
import Exame from "../../models/Exame"
import { ContRiscos, IRisco } from "../risco/risco-lista-add/riscoListaAdd";
import ContFuncionario from "./funcionario_cont";
import Funcionario from "../../models/Funcionario";
import './containers.css'

const ContAtendimento: React.FC = () => {

  const [listaExames, setExames] = React.useState<Exame[] | []>([])
  const [riscos, setRiscos] = React.useState<IRisco[] | []>([])
  let funcionario: Funcionario = new Funcionario("Sadu Toledo de Souza", "Funcao", new Date(1995, 11, 17), new Date(1995, 11, 17), "CPF", "RG", "CTPS", "SETOR", "CARGO");

  const adionarRiscos = (risco: IRisco) => {
    setRiscos([...riscos, risco])
  }

  const removerRiscos = (id: string) => {
    setRiscos(riscos.filter((item) => item.id !== id))
  }

  const adionarExame = () => {
    setExames([...listaExames, new Exame(listaExames.length.toString(), "Descrisção Exame", new Date(), "Clínica", 123, "Responsável")])
  }

  const removerExame = (id: string) => {
    setExames(listaExames.filter((item) => item.id !== id))
  }

  const handleClick = () => {
    console.log('CADASTRAR')
    console.log(funcionario)
    console.log(listaExames)
    console.log(riscos)
  }

  return (
    <>
      <span className={'spanTitleAtendimento'}> - ATENDIMENTO - </span>
      <div className={'divPanelAtendimento'}>

        <div className={'divPanelLinha'}>
          <ContFuncionario funcionario={funcionario} />
          <div className={'divPanelColuna'}>
            <div className={'divPanelLinha'}>
              <div className={'divPanelColuna'}>
                <span className={'spanTitleAtendimento'}>Data do atendimento</span>
                <input type="date" name="dataAtendimento" />
              </div>
              <div className={'divPanelColuna'}>
                <span className={'spanTitleAtendimento'}>Tipo Consulta</span>
                <select name="tipoConsulta" id="tipoConsulta">
                  <option value="admissonal">Admissonal</option>
                </select>
              </div>
              <div className={'divPanelColuna'}>
                <span className={'spanTitleAtendimento'}>Retorno ao Trabalho</span>
                <select name="tipoConsulta" id="tipoConsulta">
                  <option value="admissonal">Admissonal</option>
                </select>
              </div>
              <div className={'divPanelColuna'}>
                <span className={'spanTitleAtendimento'}>Situação Atendimento</span>
                <span className={'spanTitleAtendimento'}>ATENDIDO</span>
              </div>
            </div>
            <div className={'divPanel'}>
              <TebelaExame listaExames={listaExames} adicionar={adionarExame} remover={removerExame} />
            </div>
          </div>
          <div className={'divPanel'}>
            <ContRiscos riscos={riscos} adicionar={adionarRiscos} remover={removerRiscos} />
          </div>
        </div>
        <button className={'divButton'} onClick={handleClick}>Imprimir ASO</button>
      </div>
    </>
  )
}

export default ContAtendimento;