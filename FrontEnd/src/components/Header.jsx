import React from "react";
import { useNavigate } from "react-router-dom";


import Icon from "../img/Icon.png";
import Heart from "../img/Heart.png";
import Lupa from "../img/MagnifyingGlass.png";
import Instagram from "../img/Instagram.png";
import Cart from "../img/ShoppingCartSimple.png";
import User from "../img/User.png";

function Header() {
    const Search = () => {
     
        console.log("Searching...");
    };

    const navigate = useNavigate();


  const Cart_Page = () => {

    navigate('/cart');
  };
  const Favorites_Page = () => {

    navigate('/favorites');
  };
  const Profile_Page = () => {

    navigate('/profilepage');
  };
  const Home_Page = () => {

    navigate('/');
  };

    return (
        <div className="w-full">
            
        <div className="justify-between items-center shadow-sm bg-cyan-700 self-stretch flex w-full flex-col px-5 py-3 max-md:max-w-full">
            <div className="flex w-full max-w-[1320px] items-center justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                <div className="text-white text-sm leading-5 grow shrink basis-auto my-auto">
                    Welcome to Clicon online eCommerce store.{" "}
                </div>

                <div className="justify-between items-start self-stretch flex gap-5 max-md:justify-center">
                    <div className="justify-center items-stretch self-center flex gap-3 my-auto">
                        <div className="text-white text-sm leading-5">Follow us:</div>
                        <div className="items-stretch self-center flex gap-3 my-auto max-md:justify-center">
                            <img
                                loading="lazy"
                                src={Instagram}
                                className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full cursor-pointer"
                                alt="Instagram"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="justify-between items-center bg-cyan-700 self-stretch flex w-full flex-col p-5 max-md:max-w-full">
            <div className="flex w-full max-w-[1320px] items-center justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                <div onClick={Home_Page} className="cursor-pointer justify-between items-stretch self-stretch flex gap-2">
                    <img
                        loading="lazy"
                        src={Icon}
                       
                        className="aspect-square object-contain object-center w-12 fill-white overflow-hidden shrink-0 max-w-full"
                        alt="Icon"
                    />
                    <div className="text-white text-3xl font-bold leading-10 tracking-tighter self-center grow whitespace-nowrap my-auto">
                        CLICON
                    </div>
                </div>

           
                <div className="relative flex-grow">
                    <input
                        type="text"
                        className="text-slate-500 text-sm leading-5 grow shrink basis-auto max-md:max-w-full px-2 py-1 rounded-sm border border-gray-300 focus:outline-none focus:border-blue-500 w-full"
                        placeholder="Search for anything..."
                    />
                    <img
                        loading="lazy"
                        src={Lupa}
                        className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                        alt="Search"
                        onClick={Search}
                    />
                </div>

            
                <div className="items-stretch flex justify-between gap-5 my-auto max-md:justify-center">
                    <img
                        loading="lazy"
                        src={Cart}
                        onClick={Cart_Page}
                        className="aspect-square object-contain object-center w-8 overflow-hidden shrink-0 max-w-full cursor-pointer"
                        alt="Cart"
                    />
                    <img
                        loading="lazy"
                        src={Heart}
                        onClick={Favorites_Page}
                        className="aspect-square object-contain object-center w-8 overflow-hidden shrink-0 max-w-full cursor-pointer"
                        alt="Heart"
                    />
                    <img
                        loading="lazy"
                        src={User}
                        onClick={Profile_Page}
                        className="aspect-square object-contain object-center w-8 overflow-hidden shrink-0 max-w-full cursor-pointer"
                        alt="User"
                    />
                </div>
            </div>
        </div>

        

        </div>
    );
}

export default Header;
