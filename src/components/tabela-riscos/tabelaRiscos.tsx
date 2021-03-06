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
          {
            riscosProps.listaRiscos.map((item) => {
              return (
                <tr>
                  <td>{item.risco}</td>
                  <td>{item.comentario}</td>
                </tr>)
            })}
        </table>
      </div>
    </>
  )
}

export default TabelaRiscos;