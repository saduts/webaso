import express from 'express'
import cors from 'cors'
import { atendimentoRouter } from './route/atendimentoRouter.js'

const port = 3001
const app = express()

app.use(cors());
app.use(express.json())
app.use(atendimentoRouter);
app.use('/', (_, res) => res.status(200).send('API WEB ASO em execução !'));

app.listen(port, () => {
  console.log(`API WEB ASO em execução na porta ${port}`);
});