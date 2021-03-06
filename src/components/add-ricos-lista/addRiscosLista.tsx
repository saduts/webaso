import * as React from 'react'
import TebelaRiscos from "../tabela-riscos/tabelaRiscos"
import './addRiscoLista.css'
import '../../containers/containers.css'

const ContRiscos: React.FC = () => {

  const [riscosProps, setRiscosProps] = React.useState(100)
  const [contagem, setCount] = React.useState(0);

  const addRisco = () => {
    let c = riscosProps
    c = c++
    setRiscosProps(c + 1)
    setCount(c + 1)
    console.log(c)
  }

  React.useEffect(() => {
    console.log("Effect")
  }, [riscosProps])

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
          {contagem}
          {riscosProps}
        </div >
      </div>
      <div className={'divPanel'}>
        <TebelaRiscos risco={riscosProps} />
      </div>
    </>
  )
}

export default ContRiscos;