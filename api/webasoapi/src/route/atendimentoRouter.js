import express from 'express'
import atendimento from '../controller/atendimentoController.js'

const app = express()
app.post('/aso', atendimento.create)
app.get('/aso', atendimento.findAll)
app.get('/aso/:id', atendimento.findOne)
app.put('/aso/:id', atendimento.update);
app.patch('/aso/:id', atendimento.patch);
app.delete('/aso/:id', atendimento.remove);
export { app as atendimentoRouter };