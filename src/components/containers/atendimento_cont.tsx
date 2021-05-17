import React from "react";
import TebelaExame from "../exame-tabela/TabelaExames";
import ContRiscos from "../risco/risco-lista-add/riscoListaAdd";
import Exame from "../../models/Exame";

import './containers.css'

const ContAtendimento = () => {

  const [listaExames, setExames] = React.useState([])

  const addExame = () => {
    const lista = [...listaExames, { new Exame() }]
  }

  return (
    <>
      <span className={'spanTitle'}>Atendimeto</span>
      <div className={'divPanelAtendimento'}>

        <div className={'divPanelLinha'}>

          <div className={'divPanelColuna'}>
            <div className={'divPanelLinha'}>
              <div className={'divPanelColuna'}>
                <span className={'spanTitleAtendimento'}>Data do atendimento</span>
                <input type="date" name="nomeFuncionario" />
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
              <div className={'divPanel'}>
                <button className={'divButton'} onClick={addExame}>Adionar Exame</button>
              </div>
            </div>
            <div className={'divPanel'}>
              <TebelaExame listaExames={[]} />
            </div>
          </div>
          <div className={'divPanel'}>
            <ContRiscos />
          </div>
        </div>
        <button className={'divButton'}>Imprimir ASO</button>
      </div>
    </>
  )

}

export default ContAtendimento;