import React from "react";
import { Risco } from "../../models/Risco";
import './tabelaRiscos.css';

interface RiscosProps {
  listaRiscos: Array<Risco>
}

const TabelaRiscos = (props: RiscosProps) => {
  let listaRiscos = props.listaRiscos;
  listaRiscos.push(Risco.Ambiental);
  listaRiscos.push(Risco.Ambiental);

  return (
    <>
      <div>
        <table className={'tabelaRiscos'}>
          <tr>
            <th>Risco</th>
            <th>Comentário</th>
          </tr>
          {
            listaRiscos.map((item) => {
              return (
                <tr>
                  <td>{item}</td>
                  <td>Comentário do cadasto no add...</td>
                </tr>)
            })}
        </table>
      </div>
    </>
  )
}

export default TabelaRiscos;