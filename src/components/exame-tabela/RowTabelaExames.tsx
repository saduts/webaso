import React from 'react';
import Exame from "../../models/Exame";

interface ExameProps {
  exame: Exame
}

const RowTabelaExames: React.FC<ExameProps> = ({ exame }) => {

  return (
    <React.Fragment>
      <tr>
        <td>{exame.nome}</td>
        <td></td>
        <td>{exame.clinica}</td>
        <td>{exame.responsavel}</td>
      </tr>
    </React.Fragment>
  )
}

export default RowTabelaExames