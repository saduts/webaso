import React from "react"
import Exame from "../../models/Exame"
import RowTabelaExames from "./RowTabelaExames"
import './tabelaExame.css'

export interface TabelaExamesProps {
  listaExames: Exame[]
  adicionar: Function
  remover: Function
}

const TabelaExame: React.FC<TabelaExamesProps> = (props) => {

  let listaExames = props.listaExames

  const addExame = () => {
    props.adicionar()
  }

  const remover = (id: string) => {
    props.remover(id)
  }

  return (
    <>
      <div className={'divPanel'}>
        <button className={'divButton'} onClick={addExame}>Adionar Exame</button>
      </div>

      <table className={'tabelaExame'}>
        <thead>
          <th>Exame</th>
          <th>Data Realização</th>
          <th>Clínica</th>
          <th>Responsável</th>
          <th>Remover</th>
        </thead>
        <tbody>
          {listaExames.map((value: Exame) => {
            return (<RowTabelaExames exame={value} delete={remover}></RowTabelaExames>)
          })}
        </tbody>
      </table >
    </>
  )
}

export default TabelaExame