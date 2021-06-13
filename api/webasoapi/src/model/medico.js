export default (mongoose) => {

  const schema = mongoose.Schema({

    nome: {
      type: String,
      required: true,
    },

    crm: {
      type: Number,
      required: true,
    },

    cnpj: {
      type: Number,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

  });

  schema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const medicoModel = mongoose.model('medico', schema, 'medico');

  return medicoModel;
};