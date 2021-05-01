import express from 'express'
import atendimento from '../middleware/atendimentoMiddleware.js'

const app = express()
app.post('/aso', atendimento.create)
app.get('/aso', atendimento.findAll)
app.get('/aso/:id', atendimento.findOne)
app.delete('/aso/:id', atendimento.remove);
app.put('/aso/', atendimento.update);
export { app as atendimentoRouter };