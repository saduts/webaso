import * as React from 'react'
import './tabelaRiscos.css';

interface IProps {
  risco: number
}

const TabelaRiscos: React.FC<IProps> = (props) => {

  console.log("tabela -- " + props.risco)

  return (
    <>
      <div>
        <table className={'tabelaRiscos'}>
          <tr>
            <th>Risco</th>
            <th>Comentário</th>
          </tr>

        </table>
      </div>
    </>
  )
}

export default TabelaRiscos;