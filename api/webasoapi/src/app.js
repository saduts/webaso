import express from 'express'
import { atendimentoRouter } from './route/atendimentoRouter.js'

const app = express()
const port = 3000

app.use(express.json())
app.use(atendimentoRouter);
app.use('/', (_, res) => res.status(200).send('API WEB ASO em execução !'));

app.listen(port, () => {
  console.log('API WEB ASO em execução !');
});