import React, { useState, useEffect } from "react"
import './tabelaRiscos.css';

interface IRiscosProps {
  listaRiscos: [{ risco: string, comentario: string }]
}

const TabelaRiscos = (props: IRiscosProps) => {

  const [riscosProps, setRiscosProps] = useState<IRiscosProps>({ listaRiscos: [{ risco: 'Risco', comentario: 'Comentário' }] })

  useEffect(() => {
    setRiscosProps(props);
  })

  console.log("tabela -- " + riscosProps.listaRiscos)

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