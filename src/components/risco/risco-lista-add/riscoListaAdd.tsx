import * as React from 'react'
import { RiscoTabelaRow } from "../risco-tabela/RiscoTabelaRow"
import './riscoListaAdd.css'

export interface IRisco {
  id: string
  risco: string
  comentario: string
}

export interface RiscoProps {
  riscos: IRisco[]
  adicionar: Function
  remover: Function
}

export const ContRiscos: React.FC<RiscoProps> = (props) => {

  const addRisco = () => {
    let select = document.getElementById('tipoRiscos') as HTMLSelectElement
    props.adicionar({ id: props.riscos.length.toString(), risco: select.options[select.selectedIndex].text, comentario: '' })
  }

  const handleActionDeleteClick = (id: string) => {
    props.remover(id)
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
        <div>
        </div >
      </div>
      <div className={'divPanel'}>
        <table className={'tabelaExame'}>
          <thead>
            <th>Número</th>
            <th>Risco</th>
            <th>Comentário</th>
            <th>Ações</th>
          </thead>
          <tbody>
            {props.riscos.map((item: IRisco) => <RiscoTabelaRow id={item.id} risco={item.risco} comentario={item.comentario} delete={handleActionDeleteClick} />)}
          </tbody>
        </table>
      </div>
    </>
  )
}