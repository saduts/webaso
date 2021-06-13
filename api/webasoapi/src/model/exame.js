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

    valor: {
      type: Number,
      required: true,
    },

  });

  schema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const exameModel = mongoose.model('exame', schema, 'exame');

  return exameModel;
};