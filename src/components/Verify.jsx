import React from "react";
import Arrow from "../img/ArrowRight.png";

function Verify() {
  return (
    <div className="items-stretch rounded border border-[color:var(--gray-100,#E4E7E9)] shadow-2xl bg-white flex flex-col px-8 border-solid max-md:px-5 w-[424px] m-auto p-8 mt-24">
      <div className="text-zinc-900 text-center text-xl font-semibold leading-7 mt-8">
        Verify Your Email Address
      </div>
      <div className="text-gray-500 text-center text-sm leading-5 mt-3">
            Check your email and send the code
      </div>
      <div className="justify-between items-stretch flex gap-5 mt-6">
        <div className="text-zinc-900 text-sm leading-5">Verification Code</div>
        <button className="text-sky-400 text-sm font-medium leading-5 whitespace-nowrap">
          Resend Code
        </button>
      </div>
      
      <div className="self-center border border-[color:var(--gray-100,#E4E7E9)] bg-white flex w-[360px] shrink-0 h-11 flex-col mt-2 rounded-sm border-solid">
          <div className="relative">
            <input
              placeholder="Email"
              className="py-2 px-4 w-full h-full border-none rounded-sm focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>


        <button className="justify-center items-center bg-orange-400 self-center flex flex-row w-[360px] max-w-full mt-6 px-5 rounded-sm">
          <div className="text-white text-sm font-bold leading-10 tracking-normal uppercase">
            Verify Me
          </div>
          <img
            loading="lazy"
            src={Arrow}
            className="aspect-square object-contain object-center w-5 overflow-hidden self-center shrink-0 ml-2"
          />
        </button>


    </div>
  );
}

export default Verify;


