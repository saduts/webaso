import mongoose from 'mongoose'

const schema = mongoose.Schema({

  codigoUsuario: {
    type: String,
    required: true,
  },

  codigoAso: {
    type: String,
    required: true,
  },

  dataRealizacao: {
    type: Date,
    required: true,
  },
})

schema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject()
  object.id = _id
  return object
})

const AtendimentoModel = mongoose.model('atendimento', schema, 'atendimento')

export default AtendimentoModel