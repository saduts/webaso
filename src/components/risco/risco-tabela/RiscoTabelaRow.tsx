import * as React from 'react'
import './riscoTabela.css';

export interface IRiscoProps {
  risco: string
  comentario: string
}

export const RiscoTabelaRow: React.FC<IRiscoProps> = ({ risco, comentario }) => {
  return (
    <>
      <tr>
        <td>{risco}</td>
        <td>{comentario}</td>
      </tr>
    </>
  )
}