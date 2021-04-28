import dataFileUtil from '../util/dataFileUtil.js'

const create = async (req, res) => {

  const aso = new Aso({

  });

  try {

    const data = await aso.save();

    res.send(data);

  } catch (error) {
    res.status(500).send(`Erro ao salvar ASO ${error}`);
  }
};

const findAll = async (req, res) => {
  try {

    const data = await aso.find();

    res.send(data);

  } catch (error) {
    res.status(500).send('Erro ao buscar todos os documentos ASO.');
  }
};

const findOne = async (req, res) => {
  const id = req.params.id;

  try {

    const data = await aso.findById({ _id: id });

    if (!data) {
      res.send(`Não encontrato o ASO - id: ${id}`);
    } else {
      res.send(data);
    }

  } catch (error) {
    res.status(500).send(`Erro ao buscar o ASO id: ${id} ${error}`);
  }
};

const update = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await aso.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });

    if (!data) {
      res.send(`Não encontrato o ASO - id: ${id}`);
    } else {
      res.send(data);
    }
  } catch (error) {
    res.status(500).send(`Erro ao atualizar o ASO - id: ${id} ${error}`);
  }
};

const patch = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await aso.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });

    if (!data) {
      res.send(`Não encontrato o ASO - id: ${id}`);
    } else {
      res.send(data);
    }
  } catch (error) {
    res.status(500).send(`Erro ao atualizar o podcast id: ${id} ${error}`);
  }
};

const remove = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await Contas.findByIdAndRemove({ _id: id });

    if (!data) {
      res.send(`Nao encontrato o podcast id: ${id}`);
    } else {
      res.send('Podcast excluido com sucesso');
    }
  } catch (error) {
    res.status(500).send(`Erro ao excluir o podcast id: ${id} ${error}`);
  }
};

export default { create, findAll, findOne, update, patch, remove };