import * as React from 'react'
import { RiscoTabelaRow, IRiscoProps } from "../risco-tabela/RiscoTabelaRow"
import './riscoListaAdd.css'

const ContRiscos: React.FC = () => {

  const [riscos, setRiscos] = React.useState<IRiscoProps[] | []>([])

  const addRisco = () => {
    let risco: IRiscoProps = { risco: 'teste', comentario: '' }
    const lista = [...riscos, risco]
    setRiscos(lista)
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
            <th>Risco</th>
            <th>Comentário</th>
          </thead>
          <tbody>
            {riscos.map((item: IRiscoProps) => <RiscoTabelaRow risco={item.risco} comentario={item.comentario}></RiscoTabelaRow>)}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ContRiscos;