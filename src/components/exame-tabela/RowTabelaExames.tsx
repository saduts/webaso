import React from 'react';
import Exame from "../../models/Exame";

interface ExameProps {
  exame: Exame
  delete: Function
}

const RowTabelaExames: React.FC<ExameProps> = (props) => {

  const handleClick = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    console.log("teste")
    props.delete(props.exame.id)
  }

  return (
    <React.Fragment>
      <tr>
        <td>{props.exame.nome}</td>
        <td></td>
        <td>{props.exame.clinica}</td>
        <td>{props.exame.responsavel}</td>
        <td align='center' >
          <span
            className="material-icons"
            onClick={handleClick}
            style={{ cursor: 'pointer' }}
          >
            Remover
          </span>
        </td>
      </tr>
    </React.Fragment>
  )
}

export default RowTabelaExames