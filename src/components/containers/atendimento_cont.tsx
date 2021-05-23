import React, { InputHTMLAttributes } from "react";
import TebelaExame from "../exame-tabela/TabelaExames";
import Exame from "../../models/Exame"
import { ContRiscos, IRisco } from "../risco/risco-lista-add/riscoListaAdd";
import ContFuncionario from "./funcionario_cont";
import Funcionario from "../../models/Funcionario";
import * as api from "../../api/apiService";
import './containers.css'

const ContAtendimento: React.FC = () => {

  const [listaExames, setListaExames] = React.useState<Exame[] | []>([])
  const [listaRiscos, setListaRiscos] = React.useState<IRisco[] | []>([])
  let funcionario: Funcionario = new Funcionario("Sadu Toledo de Souza", "Funcao", new Date(1995, 11, 17), new Date(1995, 11, 17), "CPF", "RG", "CTPS", "SETOR", "CARGO");

  const adionarRiscos = (risco: IRisco) => {
    setListaRiscos([...listaRiscos, risco])
  }

  const removerRiscos = (id: string) => {
    setListaRiscos(listaRiscos.filter((item) => item.id !== id))
  }

  const adionarExame = () => {
    setListaExames([...listaExames, new Exame(listaExames.length.toString(), "Descrisção Exame", new Date(), "Clínica", 123, "Responsável")])
  }

  const removerExame = (id: string) => {
    setListaExames(listaExames.filter((item) => item.id !== id))
  }

  const handleClick = () => {

    const exames: Array<{ descricao: string, dataRealizacao: string }> = listaExames.map((exame: Exame) => {
      const { nome, dataRealizacao } = exame
      return { descricao: nome, dataRealizacao: dataRealizacao.toString() }
    })

    let riscos: Array<{ risco: string, comentario: string }> = listaRiscos.map((item: IRisco) => {
      return ({
        risco: item.risco,
        comentario: item.comentario,
      })
    })

    const selRetorno = (document.getElementById('retornoTrabalho') as HTMLSelectElement)
    const selTipoConsulta = (document.getElementById('tipoConsulta') as HTMLSelectElement)
    const situacaoAtendimento = (document.getElementById('situacaoAtendimento') as HTMLSpanElement)

    let atendimentoAso: api.IAsoAtendimento = {
      nomeFuncionario: funcionario.nome,
      nomeEmpresa: "Empresa",
      dataAtendimento: (document.getElementById('dataAtendimento') as HTMLInputElement).value,
      tipoConsulta: selTipoConsulta.options[selTipoConsulta.selectedIndex].text,
      retornoTrabalho: selRetorno.options[selRetorno.selectedIndex].text,
      situacaoAtendimento: situacaoAtendimento.textContent != null ? situacaoAtendimento.textContent : '',
      exames: exames,
      riscos: riscos
    }
    api.saveAso(atendimentoAso)
  }

  return (
    <>
      <span className={'spanTitleAtendimento'}> - ATENDIMENTO - </span>
      <div className={'divPanelAtendimento'}>

        <div className={'divPanelLinha'}>
          <ContFuncionario funcionario={funcionario} />
          <div className={'divPanelColuna'}>
            <div className={'divPanelLinha'}>
              <div className={'divPanelColuna'}>
                <span className={'spanTitleAtendimento'}>Data do atendimento</span>
                <input type="date" name="dataAtendimento" id="dataAtendimento" />
              </div>
              <div className={'divPanelColuna'}>
                <span className={'spanTitleAtendimento'}>Tipo Consulta</span>
                <select name="tipoConsulta" id="tipoConsulta">
                  <option value="admissonal">Admissonal</option>
                </select>
              </div>
              <div className={'divPanelColuna'}>
                <span className={'spanTitleAtendimento'}>Retorno ao Trabalho</span>
                <select name="retornoTrabalho" id="retornoTrabalho">
                  <option value="admissonal">Admissonal</option>
                </select>
              </div>
              <div className={'divPanelColuna'}>
                <span className={'spanTitleAtendimento'}>Situação Atendimento</span>
                <span className={'spanTitleAtendimento'} id="situacaoAtendimento">ATENDIDO</span>
              </div>
            </div>
            <div className={'divPanel'}>
              <TebelaExame listaExames={listaExames} adicionar={adionarExame} remover={removerExame} />
            </div>
          </div>
          <div className={'divPanel'}>
            <ContRiscos riscos={listaRiscos} adicionar={adionarRiscos} remover={removerRiscos} />
          </div>
        </div>
        <button className={'divButton'} onClick={handleClick}>Imprimir ASO</button>
      </div>
    </>
  )
}

export default ContAtendimento;