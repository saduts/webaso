import React, { useState, useEffect } from "react"
import TebelaRiscos from "../tabela-riscos/tabelaRiscos"
import './addRiscoLista.css'
import '../../containers/containers.css'

const ContRiscos = () => {

  interface IRiscosProps {
    listaRiscos: [{ risco: string, comentario: string }]
  }

  let listaRisco: IRiscosProps = { listaRiscos: [{ risco: 'Risco', comentario: 'Comentário' }] }

  function addRisco() {
    listaRisco.listaRiscos.push({ risco: 'Risco Novo', comentario: 'Comentario Novo' })
    console.log(listaRisco)
  }

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
          <button className={'divButton'} onClick={addRisco}>Adicionar Risco</button>
        </div>
      </div>
      <div className={'divPanel'}>
        <TebelaRiscos listaRiscos={listaRisco.listaRiscos} />
      </div>
    </>
  )
}

export default ContRiscos;