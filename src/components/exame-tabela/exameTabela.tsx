import React from "react";
import { Exame } from "../../models/Exame";
import './tabelaExame.css';

interface ExamesProps {
  listaExames: Array<Exame>
}

const TabelaExame = (props: ExamesProps) => {
  let listaExames = props.listaExames;
  listaExames.push(new Exame("Nome do exame 1", new Date(2021, 24, 1), "Clínica", 10, "Responsável 1"));
  listaExames.push(new Exame("Nome do exame 2", new Date(2021, 24, 1), "Clínica", 20, "Responsável 2"));
  listaExames.push(new Exame("Nome do exame 3", new Date(2021, 24, 1), "Clínica", 30, "Responsável 3"));

  return (
    <>
      <div>
        <table className={'tabelaExame'}>
          <tr>
            <th>Exame</th>
            <th>Data Realização</th>
            <th>Clínica</th>
            <th>Responsável</th>
          </tr>
          {
            listaExames.map((item) => {
              return (
                <tr>
                  <td>{item.nome}</td>
                  <td>{item.dataRealizacao.getDate}</td>
                  <td>{item.clinica}</td>
                  <td>{item.responsavel}</td>
                </tr>)
            })}
        </table>
      </div>
    </>
  )
}

export default TabelaExame;