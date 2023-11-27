import express from 'express';
import cors from 'cors';
import connect from './src/database/connect_bank.js';
import produto from './src/routes/produto.route.js';

connect()

// inicio do servidor
const app = express();

// configurações no servidor
app.use(cors())
app.use(express.json())


app.use('/produto', produto)


const port = process.env.PORT;

// configuração da porta
app.listen(port, () => console.log(`Servidor on na porta ${port}`))