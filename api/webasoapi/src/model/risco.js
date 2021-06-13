export default (mongoose) => {

  const schema = mongoose.Schema({

    nome: {
      type: String,
      required: true,
    },

    tipo: {
      type: String,
      required: true,
    },

    descricao: {
      type: String,
      required: false,
    },

  });

  schema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const riscoModel = mongoose.model('risco', schema, 'risco');

  return riscoModel;
};