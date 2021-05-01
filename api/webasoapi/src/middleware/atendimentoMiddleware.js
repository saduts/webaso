import dataFileUtil from '../controller/asoController.js'
import aso from '../model/asoAtendimento.js'

const create = async (req, res) => {
  try {

    aso.nomeFuncionario = req.body.nomeFuncionario
    aso.nomeEmpresa = req.body.nomeEmpresa
    aso.dataAtendimento = req.body.dataAtendimento
    aso.tipoConsulta = req.body.tipoConsulta
    aso.retornoTrabalho = req.body.retornoTrabalho
    aso.situacaoAtendimento = req.body.situacaoAtendimento
    aso.exames = req.body.exames
    aso.riscos = req.body.riscos

    await dataFileUtil.inserir(aso);
    res.status(200).send("ASO INSERIDO COM SUCESSO!");

  } catch (error) {
    res.status(500).send(`Erro ao salvar ASO ${error}`);
  }
};

const findAll = async (_, res) => {
  try {
    const data = await dataFileUtil.obterTodos();
    res.send(data);

  } catch (error) {
    res.status(500).send('Erro ao buscar todos os documentos ASO.');
  }
};

const findOne = async (req, res) => {
  const id = req.params.id;
  console.log(id)
  try {

    const data = await dataFileUtil.obterPorId(id);

    if (!data) {
      res.send(`Não encontrato o ASO - id: ${id}`);
    } else {
      res.send(data);
    }

  } catch (error) {
    res.status(500).send(`Erro ao buscar o ASO id: ${id} ${error}`);
  }
};

const remove = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await dataFileUtil.remover(id)
    if (!data) {
      res.send(`Não encontrato o ASO id: ${id} para remover.`);
    } else {
      res.send('ASO excluido com sucesso.');
    }

  } catch (error) {
    res.status(500).send(`Erro ao excluir o ASO id: ${id} ${error}`);
  }
};

const update = async (req, res) => {
  try {

    const data = await dataFileUtil.atualizar(req.body);

    if (!data) {
      res.send(`Não encontrato o ASO - id: ${req.body.id}`);
    } else {
      res.send(data);
    }

  } catch (error) {
    res.status(500).send(`Erro ao atualizar o ASO - id: ${req.body.id} ${error}`);
  }
};

export default { create, findAll, findOne, remove, update, patch };