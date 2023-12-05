import { useState, useEffect } from 'react';
import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import medal from "../img/Medal.png"
import headphone from "../img/Headphone.png"
import hand from "../img/Handshake.png"
import credit from "../img/CreditCard1.png"
import truck from "../img/Truck.png"






function Productspage(){

    const [tamanhoSelecionado, setTamanhoSelecionado] = useState(null);

    const handleTamanhoClick = (tamanho) => {
        setTamanhoSelecionado(tamanhoSelecionado === tamanho ? null : tamanho);
    };

    const tamanhosDisponiveis = ['41', '42', '43'];



    const [corSelecionada, setCorSelecionada] = useState(null);

    const handleClick = (cor) => {
        setCorSelecionada(corSelecionada === cor ? null : cor);
    };

    const coresDisponiveis = ['AZUL', 'VERMELHO', 'BRANCO'];




    const [favorito, setFavorito] = useState(false);

    const toggleFavorito = () => {
        setFavorito(!favorito);
    };



    const [quantidadeItens, setQuantidadeItens] = useState(1);
      
        const aumentarQuantidade = () => {
          setQuantidadeItens(quantidadeItens + 1);
        };
      
        const diminuirQuantidade = () => {
          if (quantidadeItens > 1) {
            setQuantidadeItens(quantidadeItens - 1);
          }
        };

   
        

    const settings = {
        autoplay: false,
        autoplaySpeed: 3000, // Tempo em milissegundos entre as transições
        dots: false, // Mostra os pontos de navegação
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Número de marcas visíveis por vez
        slidesToScroll: 1,
        arrows: false,
        
      };
    
      const brands = [
        "https://images.unsplash.com/photo-1587107935279-5f654e1f17e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8OTQ5Mzc0Mnx8ZW58MHx8fHx8",
        "https://images.unsplash.com/photo-1587107935574-8f796f2db691?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTF8OTQ5Mzc0Mnx8ZW58MHx8fHx8",
        "https://images.unsplash.com/photo-1587107935480-17ee28b6d73e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTV8OTQ5Mzc0Mnx8ZW58MHx8fHx8",
        "https://images.unsplash.com/photo-1587107935286-f46e5210e943?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ];

    const [currentImage, setCurrentImage] = useState(0);
    const imageUrls = [
        'https://images.unsplash.com/photo-1587107935279-5f654e1f17e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8OTQ5Mzc0Mnx8ZW58MHx8fHx8',
 
    ];
    const productLinks = [
      'link_para_produto_1',
      'link_para_produto_2',
      'link_para_produto_3',
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % imageUrls.length);
      }, 5000); // Trocar a cada 5 segundos (5000 milissegundos)
  
      return () => clearInterval(interval);
    }, []); // Executar somente na montagem




    return(

        <div className=' flex-col items-center justify-center '>
            <div className='flex items-center justify-center mt-10'>
                
                <div className='flex items-center justify-center'>
                    <div className='flex-col items-center h-auto rounded-lg'>

                        <div className="flex items-center justify-center border">
                            <a href={productLinks[currentImage]} target="_blank" >
                                <img
                                    src={imageUrls[currentImage]}
                                    alt={`Product ${currentImage + 1}`}
                                    className="w-64 h-40 sm:w-full sm:h-72"
                                />
                            </a>
                        </div>

                        <div className='mt-5'>
                            <div className='flex justify-center max-w-screen-xl mx-auto'>
                                <Slider {...settings} >
                                    {brands.map((brand, index) => (
                                        <div key={index} className="flex justify-center max-w-8 sm:w-20 max-h-26 border">
                                            <img src={brand} alt={`Brand ${index + 1}`} className="ml-3 sm:ml-1 sm:mr-1 w-14 sm:w-20" />
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>

                    </div>
                </div>



                <div className='flex items-center justify-center ml-10'>
                    <div className='flex-col items-center h-auto rounded-lg'>

                        <div>
                            <div>
                                <h1>nome muito grande do produto</h1>
                            </div>

                            <div className='flex items-center  space-x-6 mt-2'>

                                <div>
                                    <p>marca: <strong>nike</strong></p>
                                    <p>genero: <strong>feminino</strong></p>
                                </div>
                                
                                <div>
                                    <p>Tags: </p>
                                    <p>corrida  sem cardaço</p>
                                </div>
                            </div>

                            <div className='mt-2'>
                                <h1>preço do produtin</h1>
                            </div>

                        </div>

                        <div className='mt-4'>
                            
                            <div>
                                <h1>tamanhos:</h1>
                                    <div className='flex items-center space-x-4 mt-2 '>
                                        {tamanhosDisponiveis.map((tamanho) => (
                                        <p
                                            key={tamanho}
                                            onClick={() => handleTamanhoClick(tamanho)}
                                            className={`flex justify-center rounded-lg w-10 border cursor-pointer ${
                                            tamanhoSelecionado === tamanho ? 'bg-gray-300' : ''
                                            }`}
                                        >
                                            {tamanho}
                                        </p>
                                        ))}
                                    </div>
                                <p>Tamanho Selecionado: {tamanhoSelecionado || 'Nenhum'}</p>
                            </div>

                            <div className='mt-4'>
                                <h1>cores:</h1>
                                    <div className='flex items-center space-x-4 mt-2 '>
                                        {coresDisponiveis.map((cor) => (
                                        <p
                                            key={cor}
                                            onClick={() => handleClick(cor)}
                                            className={`flex justify-center rounded-lg w-auto  border cursor-pointer ${
                                            corSelecionada === cor ? 'bg-gray-300 ' : ''
                                            }`}
                                        >
                                            {cor}
                                        </p>
                                        ))}
                                    </div>
                                <p className="mt-3">Cor Selecionada: {corSelecionada || 'Nenhuma'}</p>
                            </div>

                            <div className=' flex justify-start mt-4'>
                                <div className="flex items-center justify-between space-x-3 h-6 w-20 border ">

                                    <button
                                        className="bg-inherit text-slate-500 h-6 w-6  border-r"
                                        onClick={diminuirQuantidade}
                                    >
                                        -
                                    </button>

                                    <p className="text-base">{quantidadeItens}</p>

                                    <button
                                        className="bg-inherit text-slate-500 h-6 w-6 border-l"
                                        onClick={aumentarQuantidade}
                                    >
                                        +
                                    </button>
                                    
                                </div>
                            </div>

                        </div>


                        <div className='flex items-center justify-between space-x-1 mt-10'>

                            <div className='flex items-center justify-between space-x-2'>
                                <div>
                                    <button className='border p-1 bg-red-600 rounded font-base text-white'>
                                        Adicionar ao Carrinho
                                    </button>
                                </div>

                                <div>
                                    <button className='border p-1 bg-red-600 rounded text-white'>
                                        Comprar Agora
                                    </button>
                                </div>

                            </div>

                            <div className='flex items-center justify-center'>

                                <button
                                className={`bg-transparent outline-none focus:outline-none transition-all ${
                                    favorito ? 'text-red-500' : 'text-gray-500'
                                }`}
                                onClick={toggleFavorito}
                                >
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill={favorito ? 'red' : 'none'}
                                    viewBox="0 0 24 24"
                                    stroke={favorito ? 'red' : 'currentColor'}
                                    className="h-6 w-6"
                                    >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C16.09 3.81 17.76 3 19.5 3 22.58 3 25 5.42 25 8.5c0 3.78-3.4 6.86-8.55 11.15L12 21.35z"
                                    />
                                    </svg>
                                </button>                         

                            </div>
                        </div>

                    </div>
                </div>
                
            </div>

                <div className='border mt-20 '>
                    <div>
                        <h1>Informações</h1>
                    </div>
                    <div className='flex items-center justify-between mt-5'>

                        <div>
                            <h1>Descrição:</h1>
                            <p className='mt-3'>É com grande entusiasmo que apresentamos o novo Nike Air Precision Pro<br/>um calçado que eleva os padrões 
                            de desempenho e estilo. Projetado para<br/> se destacar tanto nas quadras quanto nas ruas, este tênis incorpora<br/> a 
                            essência da inovação e qualidade que define a marca Nike.<br/><br/>
                            O Nike Air Precision Pro se destaca pelo seu design inovador, <br/>harmonizando linhas elegantes com detalhes ousados. 
                                A parte superior <br/>apresenta uma fusão de materiais premium, garantindo não apenas <br/>durabilidade, mas  também um visual
                                 moderno e arrojado. As opções de cores<br/> contemporâneas oferecem escolhas que se alinham ao seu estilo único.</p>
                        </div>
                        
                        <div>
                            <h1>Nossas Funcionalidades:</h1>
                            <p className='mt-3 flex items-center justify-start'>
                                <img
                                src={medal}
                                />
                                Garantia de 1 ano
                            </p>
                            <p className='flex items-center justify-start mt-2'>
                                <img
                                src={truck}
                                />
                                Frete grátis e entrega rápida
                            </p>
                            <p className='flex items-center justify-start mt-2'>
                                <img
                                src={hand}
                                />
                                100% de garantia de devolução do dinheiro
                            </p>
                            <p className='flex items-center justify-start mt-2'>
                                <img
                                src={headphone}
                                />
                                Suporte ao cliente 24/7
                            </p>
                            <p className='flex items-center justify-start mt-2'>
                                <img
                                src={credit}
                                />
                                Método de pagamento seguro
                            </p>
                        </div>

                        <div>
                            <h1>Dados de Entrega:</h1>
                            <p></p>
                        </div>
                    </div>
                </div>
        </div>
    );
}
export default Productspage;