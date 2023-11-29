import express from "express";
import cors from "cors";
import connect from "./src/database/connect_bank.js";
import produtoRouter from "./src/routes/produto.route.js";
import marcaRouter from "./src/routes/marca.route.js";
import testeRouter from "./src/routes/teste.route.js";
import tagRouter from "./src/routes/tag.route.js";
import swaggerSpec from "./src/swaggerConfig.js";
import swaggerUi from "swagger-ui-express";

// conexão com mongo
connect();

// inicio do servidor
const app = express();

// configurações no servidor
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// rotas
app.use("/", testeRouter);
app.use("/produto", produtoRouter);
app.use("/marca", marcaRouter);
app.use("/tag", tagRouter);
app.use('/api-docs', swaggerUi.serve,swaggerUi.setup(swaggerSpec))

// configuração da porta
const port = process.env.PORT;

app.listen(port, () => console.log(`Servidor on na porta ${port}`));
