import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Api from "../Api"
import axios from "axios";


import Arrow from "../img/ArrowRight.png"
import Google from "../img/Google.png"
import Eye from "../img/Eye.png"



 


function Sign_In() {


  const navigate = useNavigate();


  const SignUp_Page = () => {

    navigate('/signup');
  };
  const Forget_Page = () => {

    navigate('/forget');
  };


  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };




  const handleLogin = async () => {
    try {
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      const response = await Api.post(`/login`, {
        email: email,
        password: password
      });

      treatResponse(response);
    } catch (error) {
      console.error('Erro inesperado:', error.message);
      // Tratar erro aqui, se necessário
    }
  };

  const treatResponse = (response) => {
    if (response.status === 200 || response.status === 201) {
      const token = response.data.token;
      const name = response.data.username;

      localStorage.setItem('token', token);
      localStorage.setItem("username", name);

      // Redirecionar para a página desejada após o login bem-sucedido
      navigate('/');
    } else if (response.status === 401) {
      // Exibir mensagem de erro para login não autorizado
      console.error('Erro:', response.status, response.data.message);
    } else {
      // Exibir mensagem de erro genérico
      console.error('Erro:', response.status, response.data.message);
    }
  };




  return (

    <div className="bg-white flex flex-col m-auto">

      <div className="rounded border border-[color:var(--gray-100,#E4E7E9)] shadow-2xl bg-white self-center flex w-[424px] max-w-full flex-col items-stretch mt-24 border-solid max-md:mt-10">

        <div className="border border-[color:var(--gray-100,#E4E7E9)] shadow-2xl bg-white flex flex-col pb-8 px-5 border-solid max-md:max-w-full">



          <div className="text-zinc-900 text-sm leading-5 mt-6">
            Email Address
          </div>



          <div className="self-center border border-[color:var(--gray-100,#E4E7E9)] bg-white flex w-[360px] shrink-0 h-11 flex-col mt-2 rounded-sm border-solid">
            <div className="relative">
              <input
                id="email"
                placeholder="Email"
                className="py-2 px-4 w-full h-full border-none rounded-sm focus:outline-none focus:border-blue-500"
              />

            </div>
          </div>


          {/* texto entre inputs */}
          <div className="justify-between items-stretch self-center flex w-[360px] max-w-full gap-5 mt-4">
            <div className="text-zinc-900 text-sm leading-5 ">Password</div>

            <button onClick={Forget_Page} className="text-sky-400 text-sm font-medium leading-5 whitespace-nowrap">
              Forget Password
            </button>

          </div>


          <div className="self-center border border-[color:var(--gray-100,#E4E7E9)] bg-white flex w-[360px] shrink-0 h-11 flex-col mt-2 rounded-sm border-solid">
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="py-2 px-4 w-full h-full border-none rounded-sm focus:outline-none focus:border-blue-500"
              />
              <img
                onClick={togglePasswordVisibility}
                loading="lazy"
                src={Eye}
                className="aspect-square object-contain object-center w-5 cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-3"
                alt="Toggle Password Visibility"
              />
            </div>
          </div>

          <button onClick={handleLogin} className="justify-center items-center bg-orange-400 self-center flex w-[360px] max-w-full flex-col mt-6 px-5 rounded-sm">
            <div className="flex w-[83px] max-w-full items-stretch gap-2">
              <div className="text-white text-sm font-bold leading-10 tracking-normal uppercase">
                Sign in
              </div>
              <img
                loading="lazy"
                src={Arrow}
                className="aspect-square object-contain object-center w-5 overflow-hidden self-center shrink-0 max-w-full my-auto"
              />
            </div>
          </button>


          <div className="text-slate-500 text-sm leading-5 whitespace-nowrap items-stretch bg-white self-center aspect-[1.5] mt-6 px-2">
            or
          </div>


          {/* botão google */}
          <button className="items-stretch border border-[color:var(--gray-100,#E4E7E9)] bg-white self-center flex w-[360px] max-w-full justify-between gap-5 mt-3 pl-4 pr-20 py-3 rounded-sm border-solid max-md:pr-5">
            <img
              loading="lazy"
              srcSet={Google}
              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-neutral-600 text-center text-sm leading-5 self-center grow whitespace-nowrap my-auto">
              Login with Google
            </div>
          </button>

          <div className="items-stretch flex justify-between gap-1.5 mt-2">
          <div className="text-gray-500 text-sm leading-5">
            Don’t have account?
          </div>

          <button onClick={SignUp_Page} className="text-sky-400 text-sm font-medium leading-5 whitespace-nowrap">
            Sign Up
          </button>
        </div>
        </div>
      </div>
    </div>

  )
}

export default Sign_In;