import * as React from 'react'
import './riscoTabela.css';

export interface IRiscoProps {
  risco: string
}

export const RiscoTabela: React.FC<IRiscoProps> = ({ risco }) => {
  return (
    <>
      <tr>
        <td>{risco}</td>
        <td></td>
      </tr>
    </>
  )
}