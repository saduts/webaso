import * as React from 'react'
import './riscoTabela.css';

export interface IRiscoProps {
  id: string
  risco: string
  comentario: string
  delete: Function
}

export const RiscoTabelaRow: React.FC<IRiscoProps> = (props) => {
  const handleClick = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    props.delete(props.id)
  }

  return (
    <>
      <tr>
        <td>{props.id}</td>
        <td>{props.risco}</td>
        <td>{props.comentario}</td>
        <td><span onClick={handleClick} style={{ cursor: 'pointer' }}>Remover</span></td>
      </tr>
    </>
  )
}