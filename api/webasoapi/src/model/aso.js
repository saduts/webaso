import Empresa from '../../src/model/empresa'
import Funcionario from '../../src/model/funcionario'
import Risco from '../../src/model/risco'
import Exame from '../../src/model/exame'

export default (mongoose) => {

  const schema = mongoose.Schema({

    empresa: {
      type: Empresa,
      required: true,
    },

    funcionario: {
      type: Funcionario,
      required: true,
    },

    riscos: {
      type: Risco,
      required: true,
    },

    exames: {
      type: Exame,
      required: true,
    },

    tipoConsulta: {
      type: string,
      required: true,
    },

    dataEmissao: {
      type: Date,
      required: true,
    },

    tipoRetornoTrabalho: {
      type: string,
      required: true,
    },
  });

  schema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const asoModel = mongoose.model('aso', schema, 'aso');

  return asoModel;
};