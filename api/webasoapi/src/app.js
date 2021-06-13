import express from 'express'
import cors from 'cors'
import { atendimentoRouter } from './route/atendimentoRouter.js'
import { db } from './util/mongooseUtil.js';

const app = express()

app.use(cors());
app.use(express.json())
app.use(atendimentoRouter);
app.use('/', (_, res) => res.status(200).send('API WEB ASO em execução !'));

db.mongoose.connect(
  db.url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.error(`Erro na conexão ao MongoDB - ${err}`);
    }
  }
);

const { connection } = db.mongoose;

connection.once('open', () => {

  console.log('Conectado ao MongoDB');

  const APP_PORT = process.env.PORT || 3001;
  app.listen(APP_PORT, () => {
    console.log(`Servidor iniciado na porta ${APP_PORT}`);
  });
});