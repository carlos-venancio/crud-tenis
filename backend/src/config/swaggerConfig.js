import swaggerJSDoc from 'swagger-jsdoc'

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API Login',
    version: '1.0.0',
    description: 'Documentação da api MARCHA'
  },
  servers: [
    {
      url: 'https://marcha-api.onrender.com',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['src/routes/*.js'], // caminho dos arquivos que contêm a documentação da API
};

const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;
