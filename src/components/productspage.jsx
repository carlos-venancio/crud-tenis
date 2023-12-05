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
import heartfav from "../img/heart_favorite.svg"





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

    const coresDisponiveis = ['Azul', 'Vermelho', 'Branco'];




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
            <div className='flex items-start justify-center   pt-10  '>
                
                <div className='flex items-center justify-center '>
                    <div className='flex-col items-center h-auto rounded-lg'>

                        <div className="flex items-center justify-center  ">
                            <a href={productLinks[currentImage]} target="_blank" >
                                <img
                                    src={imageUrls[currentImage]}
                                    alt={`Product ${currentImage + 1}`}
                                    className="w-64 h-40 sm:w-full sm:h-96  border p-3 "
                                />
                            </a>
                        </div>

                        <div className='mt-5'>
                            <div className='flex justify-center max-w-screen-xl  space-x-4 mx-auto border'>
                                <Slider {...settings} >
                                    {brands.map((brand, index) => (
                                        <div key={index} className="flex justify-center max-w-8 sm:w-20 max-h-26 border-r">
                                            <img src={brand} alt={`Brand ${index + 1}`} className="ml-3 sm:ml-1 sm:mr-1 w-14 sm:w-32 " />
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>

                    </div>
                </div>



                <div className='flex items-center justify-center ml-10 drop-shadow-lg rounded-md'>
                    <div className='flex-col items-center h-auto rounded-lg '>

                        <div className='border-b p-2  bg-white rounded-t-lg'>
                            <div>
                                <h1 className='text-2xl'>Tênis Nike Air Force 1 "07 Masculino</h1>
                            </div>

                            <div className='flex items-center  space-x-10 mt-2'>

                                <div>
                                    <p className='text-sm'>Marca: <strong>nike</strong></p>
                                    <p className='mt-1 text-sm'>Genero: <strong>feminino</strong></p>
                                </div>
                                
                                <div className=''>
                                    <p className='text-sm'>Tags: </p>
                                    <p className='mt-2 p-1 text-xs border rounded-2xl'>corrida  </p>
                                </div>
                            </div>

                            <div className='mt-2 ml-2'>
                                <h1 className='text-3xl text-red-600'>R$:666,6</h1>
                            </div>

                        </div>

                        <div className=' p-4 bg-white'>
                            
                            <div>
                                <h1 className='text-sm'>Tamanhos:</h1>
                                    <div className='flex items-center space-x-4 mt-2 '>
                                        {tamanhosDisponiveis.map((tamanho) => (
                                        <p
                                            key={tamanho}
                                            onClick={() => handleTamanhoClick(tamanho)}
                                            className={`flex justify-center rounded-lg w-10 border text-sm  cursor-pointer ${
                                            tamanhoSelecionado === tamanho ? 'bg-gray-300' : ''
                                            }`}
                                        >
                                            {tamanho}
                                        </p>
                                        ))}
                                    </div>
                                {/* <p className='text-sm mt-2'>Tamanho Selecionado: {tamanhoSelecionado || 'Nenhum'}</p> */}
                            </div>

                            <div className='mt-4'>
                                <h1 className='text-sm'>Cores:</h1>
                                    <div className='flex items-center space-x-4 mt-2 '>
                                        {coresDisponiveis.map((cor) => (
                                        <p
                                            key={cor}
                                            onClick={() => handleClick(cor)}
                                            className={`flex justify-center rounded-lg w-auto text-sm border p-1 cursor-pointer ${
                                            corSelecionada === cor ? 'bg-gray-300 ' : ''
                                            }`}
                                        >
                                            {cor}
                                        </p>
                                        ))}
                                    </div>
                                {/* <p className="mt-3">Cor Selecionada: {corSelecionada || 'Nenhuma'}</p> */}
                            </div>

                            <div className=' flex justify-start mt-6'>
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


                        <div className='flex items-center justify-between space-x-1 rounded-b-lg  p-6 bg-white'>

                            <div className='flex items-center justify-between space-x-2'>
                                <div>
                                    <button className='border p-2 bg-red-100 rounded  text-base border-red-600  text-red-600'>
                                        Adicionar ao Carrinho
                                    </button>
                                </div>

                                <div>
                                    <button className='border p-2 bg-red-600  rounded text-base text-white'>
                                        Comprar Agora
                                    </button>
                                </div>

                            </div>

                            

                            <div className='flex items-center '>
                            <img className='w-7 h-7'
                                src={heartfav}
                                />                 

                            </div>

                        </div>

                    </div>
                </div>
                
            </div>
                <div className='flex items-center justify-center '>
                    <div className='border mt-20 '>
                        <div className='border p-3 '>
                            <h1 className='mr-3'>Informações</h1>
                        </div>
                        <div className='flex items-center  mt-5'>
                            <div className='flex  items-center justify-between space-x-20'>
                                <div>
                                    <h1 className='ml-5'>Descrição:</h1>
                                    <p className='mt-3 ml-5 mb-5 text-justify'>É com grande entusiasmo que apresentamos o novo Nike Air Precision Pro<br/>um calçado que eleva os padrões 
                                    de desempenho e estilo. Projetado para<br/> se destacar tanto nas quadras quanto nas ruas, este tênis incorpora<br/> a 
                                    essência da inovação e qualidade que define a marca Nike.<br/><br/>
                                    O Nike Air Precision Pro se destaca pelo seu design inovador, <br/>harmonizando linhas elegantes com detalhes ousados. 
                                        A parte superior <br/>apresenta uma fusão de materiais premium, garantindo não apenas <br/>durabilidade, mas  também um visual
                                        moderno e arrojado. As opções de cores<br/> contemporâneas oferecem escolhas que se alinham ao seu estilo único.</p>
                                </div>
                                
                                <div className=' pr-6 border-r'>
                                    <h1>Nossas Funcionalidades:</h1>
                                    <p className='mt-3 flex items-center justify-start '>
                                        <img
                                        className='mr-2'
                                        src={medal}
                                        />
                                        Garantia de 1 ano
                                    </p>
                                    <p className='flex items-center justify-start mt-2'>
                                        <img
                                        className='mr-2'
                                        src={truck}
                                        />
                                        Frete grátis e entrega rápida
                                    </p>
                                    <p className='flex items-center justify-start mt-2'>
                                        <img
                                        className='mr-2'
                                        src={hand}
                                        />
                                        100% de garantia de devolução do dinheiro
                                    </p>
                                    <p className='flex items-center justify-start mt-2'>
                                        <img
                                        className='mr-2'
                                        src={headphone}
                                        />
                                        Suporte ao cliente 24/7
                                    </p>
                                    <p className='flex items-center justify-start mt-2'>
                                        <img
                                        className='mr-2'
                                        src={credit}
                                        />
                                        Método de pagamento seguro
                                    </p>
                                </div>
                            </div>  

                            <div className='flex ml-10 mr-10'>
                                <div className=' ' >
                                    <h1 className='text-[17px]'>Dados de Entrega:</h1>
                                    <p className='mt-1'><strong>entrega: </strong>2 - 4 dias</p>
                                    <p className='mt-1'><strong>enviado de: </strong>Minas Gerais</p>
                                    <p className='mt-1'><strong>Taxa: </strong>Definida pela distancia</p>
                                    <p className='mt-1'><strong>Remetente: </strong>Sneaker House</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
        </div>
    );
}
export default Productspage;