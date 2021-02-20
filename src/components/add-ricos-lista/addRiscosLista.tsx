import React, { useState } from "react"
import TebelaRiscos from "../tabela-riscos/tabelaRiscos"
import './addRiscoLista.css'
import '../../containers/containers.css'

const ContRiscos = () => {

  return (
    <>
      <div className={'divPanelLinha'}>
        <div className={'divPanelColuna'}>
          <span className={'spanTitleAtendimento'}>Riscos</span>
          <select name="tipoRiscos" id="tipoRiscos">
            <option value="ruido">Ruído</option>
            <option value="ergonomico">Ergonômico</option>
            <option value="quimico">Químico</option>
          </select>
        </div>
        <div className={'divPanel'}>
          <button className={'divButton'}>Adicionar Risco</button>
        </div>
      </div>
      <div className={'divPanel'}>
        <TebelaRiscos listaRiscos={[]} />
      </div>

    </>
  )

}

export default ContRiscos;