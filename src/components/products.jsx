import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Products() {
  const [marcas, setMarcas] = useState([]); // Inicializa como um objeto vazio

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://marcha-api.onrender.com/search');
        console.log('Resposta da API:', response); // Adicione esta linha
        setMarcas(response.data);
      } catch (error) {
        console.error('Erro ao obter dados da API:', error);
      }
    };
    
    
    
    fetchData();
  }, []); // O array vazio assegura que o useEffect só será executado uma vez (montagem do componente)

  return (
    <div className='flex items-center pt-24'>
      <div className='mx-auto flex items-center w-64 h-40 bg-slate-500'>
      <h1>Produtos:</h1>
        <ul>
          {marcas.map((produto) => (
            <li key={produto.userId + produto.modelo}>
              <p>Marca: {produto.marcanome}</p>
              <p>Modelo: {produto.modelo}</p>
              <p>Gênero: {produto.genero}</p>
              <p>Preço: R${produto.preco.toFixed(2)}</p>
              <p>Tamanho: {produto.tamanho}</p>
              <p>Cores: {Object.keys(produto.cores[0][0])[0]}</p>
              <p>Tags: {produto.tags.join(', ')}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Products;
