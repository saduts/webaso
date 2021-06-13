export default (mongoose) => {

  const schema = mongoose.Schema({

    nome: {
      type: String,
      required: true,
    },

    descricao: {
      type: String,
      required: true,
    },

    categoria: {
      type: String,
      required: true,
    },

  });

  schema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const tipoModel = mongoose.model('tipo', schema, 'tipo');

  return tipoModel;
};