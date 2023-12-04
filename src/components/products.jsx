import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Products() {
  const [marcas, setMarcas] = useState({}); // Inicializa como um objeto vazio

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://marcha-api.onrender.com/produto');
        console.log('Dados da API:', response.data);
        setMarcas(response.data); // Define o estado com o objeto retornado pela API
      } catch (error) {
        console.error('Erro ao obter dados da API:', error);
      }
    };
    
    fetchData();
  }, []); // O array vazio assegura que o useEffect só será executado uma vez (montagem do componente)

  return (
    <div className='flex items-center pt-24'>
      <div className='mx-auto flex items-center w-64 h-40 bg-slate-500'>
      {/*  */}
      </div>
    </div>
  );
}

export default Products;
