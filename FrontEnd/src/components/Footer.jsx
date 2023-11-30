import React from "react";
import Apple from "../img/Apple---Negative 1.png"
import Play from "../img/Icon=google-play 1.png"
import Icon from "../img/Icon.png"

function Footer(){
    return(
        <div className="w-full">
                  {/* footer */}
      <div className="items-center bg-zinc-900 self-stretch flex w-full flex-col mt-24 px-5 py-12 max-md:max-w-full max-md:mt-10">
        <div className="flex w-full max-w-[1320px] items-stretch justify-between gap-5 my-6 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
          <div className="items-stretch flex grow basis-[0%] flex-col self-start">
            <div className="justify-between items-stretch flex gap-2">
              <img
                loading="lazy"
                src={Icon}
                className="aspect-square object-contain object-center w-12 fill-orange-400 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-white text-3xl font-bold leading-10 tracking-tighter self-center grow whitespace-nowrap my-auto">
                CLICON
              </div>
            </div>
            <div className="text-slate-500 text-sm leading-5 mt-6">
              Customer Supports:
            </div>
            <div className="text-white text-lg font-medium leading-6 mt-1">
              (629) 555-0129
            </div>
            <div className="text-gray-400 text-base leading-6 mt-3">
              4517 Washington Ave. Manchester, Kentucky 39495
            </div>
            <div className="text-white text-base font-medium leading-6 mt-3">
              info@kinbo.com
            </div>
          </div>


          <div className="items-stretch flex grow basis-[0%] flex-col self-start">
            <div className="text-white text-base font-medium leading-6 uppercase">
              Download APp
            </div>
            <div className="justify-between items-center bg-neutral-700 flex gap-4 mt-5 px-5 py-4 rounded">
              <img
                loading="lazy"
                src={Play}
                className="aspect-square object-contain object-center w-8 overflow-hidden shrink-0 max-w-full my-auto"
              />
              <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                <div className="text-white text-xs leading-3">Get it now</div>
                <div className="text-white text-sm font-semibold leading-5 whitespace-nowrap mt-1">
                  Google Play
                </div>
              </div>
            </div>
            <div className="justify-between items-center bg-neutral-700 flex gap-4 mt-3 px-5 py-4 rounded">
              <img
                loading="lazy"
                src={Apple}
                className="aspect-square object-contain object-center w-8 overflow-hidden shrink-0 max-w-full my-auto"
              />
              <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                <div className="text-white text-xs leading-3">Get it now</div>
                <div className="text-white text-sm font-semibold leading-5 mt-1">
                  App Store
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
        </div>
    )
}

export default Footer;