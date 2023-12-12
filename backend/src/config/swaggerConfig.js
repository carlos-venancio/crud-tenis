import produto from '../docs/produto.json' assert { type:'json' }

const swaggerDocs = {
  openapi: "3.0.0",
  info: {
    title: "API Login",
    version: "1.0.0",
    description: "Documentação da API MARCHA"
  },
  servers: [
    {
      url: "https://marcha-api.onrender.com"
    }
  ],
  paths: {
    "/produto": produto
  }
}

export default swaggerDocs
