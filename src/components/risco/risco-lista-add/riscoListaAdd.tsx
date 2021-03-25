import * as React from 'react'
import { RiscoTabela, IRiscoProps } from "../risco-tabela/RiscoTabela"
import './riscoListaAdd.css'

const ContRiscos: React.FC = () => {

  const [riscosProps, setRiscosProps] = React.useState<IRiscoProps[]>([{ risco: "Risco" }])

  const addRisco = () => {
    let risco = riscosProps
    risco.push({ risco: "Teste" })
    setRiscosProps(risco)
    console.log(risco)
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
            <tr>
              <th>Risco</th>
              <th>Comentário</th>
            </tr>
          </thead>
          <tbody>
            {
              riscosProps.map(item => (<RiscoTabela risco={item.risco} />))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ContRiscos;