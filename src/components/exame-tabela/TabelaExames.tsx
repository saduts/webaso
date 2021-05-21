import React from "react"
import Exame from "../../models/Exame"
import RowTabelaExames from "./RowTabelaExames"
import './tabelaExame.css'

interface ExamesProps {
  listaExames: Array<Exame>
  delete: Function
}

const TabelaExame: React.FC<ExamesProps> = (props) => {

  return (
    <>
      <table className={'tabelaExame'}>
        <thead>
          <th>Exame</th>
          <th>Data Realização</th>
          <th>Clínica</th>
          <th>Responsável</th>
          <th>Remover</th>
        </thead>
        <tbody>
          {
            props.listaExames.map((exame) => <RowTabelaExames exame={exame} delete={props.delete} />)
          }
        </tbody>
      </table >
    </>
  )
}

export default TabelaExame;