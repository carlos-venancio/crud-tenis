import dotenv from "dotenv";
import mongoose from "mongoose";

// importa a string de conexão oculta pelo .env
dotenv.config();

async function connect() {

  console.log('Tentando conectar com o banco')

  mongoose
    .connect(process.env.CONNECT_DATABASE, {
      dbName: process.env.DB_NAME,
    })

    .then(() => console.log("Conectado ao banco"))
    .catch((e) => console.log("Falha ao conectar no banco: " + e.message));
}

export default connect;
