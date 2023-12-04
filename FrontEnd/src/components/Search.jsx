import React from "react";
import Lupa from "../img/search.svg";
function Search(){


    const Search = () => {
     
        console.log("Searching...");
    };  

    return(

 
        <div className="relative flex justify-center mt-7">
        <div className="relative">
            <input
                type="text"
                className="rounded-xl drop-shadow-xl text-slate-500 text-sm  px-8 h-7 sm:h-10 w-32 sm:w-72 border border-slate-4200 focus:outline-none focus:border-cyan-500"
                placeholder="Search"
            />
            <img
                loading="lazy"
                src={Lupa}
                className="absolute top-1/2 transform -translate-y-1/2 w-5 h-4 ml-2 cursor-pointer opacity-50"
                alt="Search"
                onClick={Search}
            />
        </div>
    </div>
    );
}

export default Search;