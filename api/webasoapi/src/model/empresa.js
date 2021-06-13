export default (mongoose) => {

  const schema = mongoose.Schema({

    cnpj: {
      type: Number,
      required: true,
    },

    nome: {
      type: String,
      required: true,
    },

    endereco: {
      type: String,
      required: true,
    },

    saldo: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      required: true,
    },

    telefone: {
      type: Number,
      required: true,
    },
  });

  schema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const empresaModel = mongoose.model('empresa', schema, 'empresa');

  return empresaModel;
};