import * as React from "react";

function Profile() {
  return (
    <div className="items-center bg-white flex flex-col px-20 max-md:px-5">
      <div className="rounded border border-[color:var(--gray-100,#E4E7E9)] bg-white flex w-[984px] max-w-full flex-col mt-10 pb-6 border-solid">
        <div className="text-zinc-900 text-sm font-medium leading-5 uppercase whitespace-nowrap border border-[color:var(--gray-100,#E4E7E9)] bg-white self-stretch px-5 py-5 rounded border-solid max-md:max-w-full max-md:pl-1">
          Account Setting
        </div>
        <div className="self-stretch mt-6 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[18%] max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c4ff9f92-b407-4c0c-af2d-cbada6c4a780?apiKey=6368d2abbd1a483daf784d55bb48e805&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4ff9f92-b407-4c0c-af2d-cbada6c4a780?apiKey=6368d2abbd1a483daf784d55bb48e805&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4ff9f92-b407-4c0c-af2d-cbada6c4a780?apiKey=6368d2abbd1a483daf784d55bb48e805&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4ff9f92-b407-4c0c-af2d-cbada6c4a780?apiKey=6368d2abbd1a483daf784d55bb48e805&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4ff9f92-b407-4c0c-af2d-cbada6c4a780?apiKey=6368d2abbd1a483daf784d55bb48e805&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4ff9f92-b407-4c0c-af2d-cbada6c4a780?apiKey=6368d2abbd1a483daf784d55bb48e805&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4ff9f92-b407-4c0c-af2d-cbada6c4a780?apiKey=6368d2abbd1a483daf784d55bb48e805&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4ff9f92-b407-4c0c-af2d-cbada6c4a780?apiKey=6368d2abbd1a483daf784d55bb48e805&"
                className="aspect-square object-contain object-center w-44 overflow-hidden shrink-0 max-w-full max-md:mt-6"
              />
            </div>
            <div className="flex flex-col items-stretch w-[82%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-6">
                
                <div className="items-stretch flex justify-between gap-4 max-md:max-w-full max-md:flex-wrap">

                  <div className="items-stretch flex grow basis-[0%] flex-col">
                    <div className="text-zinc-900 text-sm leading-5">
                      Username
                    </div>
                    <div className="text-neutral-600 text-sm leading-5 whitespace-nowrap border border-[color:var(--gray-100,#E4E7E9)] bg-white p-4 rounded-sm border-solid">
                      Display name
                    </div>
                  </div>
                </div>


                <div className="items-stretch flex justify-between gap-4 mt-4 max-md:max-w-full max-md:flex-wrap">
                  <div className="items-stretch flex grow basis-[0%] flex-col">
                    <div className="text-zinc-900 text-sm leading-5">
                      Full Name
                    </div>
                    <div className="text-neutral-600 text-sm leading-5 whitespace-nowrap border border-[color:var(--gray-100,#E4E7E9)] bg-white p-4 rounded-sm border-solid">
                      Kevin Gilbert
                    </div>
                  </div>

                  <div className="items-stretch flex grow basis-[0%] flex-col">
                    <div className="text-zinc-900 text-sm leading-5">Email</div>
                    <div className="text-neutral-600 text-sm leading-5 whitespace-nowrap border border-[color:var(--gray-100,#E4E7E9)] bg-white p-4 rounded-sm border-solid">
                      Kevin.gilbert@gmail.com
                    </div>
                  </div>
                </div>

                <div className="items-stretch flex justify-between gap-4 mt-4 max-md:max-w-full max-md:flex-wrap">
                  
                  <div className="items-stretch flex grow basis-[0%] flex-col">
                    <div className="text-zinc-900 text-sm leading-5">
                      Phone Number
                    </div>
                    <div className="text-neutral-600 text-sm leading-5 whitespace-nowrap border border-[color:var(--gray-100,#E4E7E9)] bg-white px-4 py-4 rounded-sm border-solid">
                      +1-202-555-0118
                    </div>
                  </div>
                </div>

                <div className="items-stretch flex gap-4 mt-4 pr-12 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                  <div className="items-stretch flex grow basis-[0%] flex-col">
                    <div className="text-zinc-900 text-sm leading-5">
                      Country/Region
                    </div>
                    <div className="justify-between border border-[color:var(--gray-100,#E4E7E9)] bg-white flex gap-5 mt-2 pl-4 pr-4 py-3.5 rounded-sm border-solid">
                      <div className="text-neutral-600 text-sm leading-5">
                        Bangladesh
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae9a485f-1133-460f-84ee-a640badd247c?apiKey=6368d2abbd1a483daf784d55bb48e805&"
                        className="aspect-square object-contain object-center w-4 overflow-hidden self-stretch shrink-0 max-w-full"
                      />
                    </div>
                  </div>
                  <div className="items-stretch flex grow basis-[0%] flex-col">
                    <div className="text-zinc-900 text-sm leading-5">
                      States
                    </div>
                    <div className="justify-between items-center border border-[color:var(--gray-100,#E4E7E9)] bg-white flex gap-5 mt-2 pl-5 pr-3.5 py-3.5 rounded-sm border-solid">
                      <div className="text-neutral-600 text-sm leading-5 my-auto">
                        Dhaka
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/08925f67-550d-4fb3-8171-cbce29957428?apiKey=6368d2abbd1a483daf784d55bb48e805&"
                        className="aspect-square object-contain object-center w-4 overflow-hidden self-stretch shrink-0 max-w-full"
                      />
                    </div>
                  </div>
             
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white text-sm font-bold leading-10 tracking-normal uppercase justify-center items-center bg-orange-400 w-[161px] max-w-full ml-56 mt-6 px-5 rounded-sm max-md:ml-2.5">
          Save Changes
        </div>
      </div>





      <div className="flex  w-[984px]">


      <div className="w-[984px] max-w-full mt-6">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
       
          <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="justify-center items-center rounded border border-[color:var(--gray-100,#E4E7E9)] bg-white flex grow flex-col w-full mx-auto pb-6 border-solid max-md:max-w-full max-md:mt-6">
              <div className="text-zinc-900 text-sm font-medium leading-5 uppercase whitespace-nowrap border border-[color:var(--gray-100,#E4E7E9)] bg-white self-stretch px-5 py-5 rounded border-solid max-md:max-w-full max-md:pl-1">
                Shipping Address
              </div>
              <div className="items-stretch self-center flex w-[432px] max-w-full gap-4 mt-6 max-md:flex-wrap">
                <div className="items-stretch flex grow basis-[0%] flex-col">
                  <div className="text-zinc-900 text-sm leading-5">
                    First Name
                  </div>
                  <div className="text-neutral-600 text-sm leading-5 whitespace-nowrap border border-[color:var(--gray-100,#E4E7E9)] bg-white px-4 py-4 rounded-sm border-solid">
                    Kevin{" "}
                  </div>
                </div>
                <div className="items-stretch flex grow basis-[0%] flex-col">
                  <div className="text-zinc-900 text-sm leading-5">
                    Last Name
                  </div>
                  <div className="text-neutral-600 text-sm leading-5 whitespace-nowrap border border-[color:var(--gray-100,#E4E7E9)] bg-white px-4 py-4 rounded-sm border-solid">
                    Gilbert
                  </div>
                </div>
              </div>
              <div className="text-gray-500 text-sm leading-5 mt-4 max-md:max-w-full">
                <span className="text-zinc-900">Company Name </span>
                <span className="text-gray-500">(Optional)</span>
              </div>
              <div className="self-center border border-[color:var(--gray-100,#E4E7E9)] bg-white flex w-[432px] shrink-0 h-11 flex-col mt-2 rounded-sm border-solid max-md:max-w-full" />
              <div className="text-zinc-900 text-sm leading-5 mt-4 max-md:max-w-full">
                Address
              </div>
              <div className="text-neutral-600 text-sm leading-5 whitespace-nowrap self-center border border-[color:var(--gray-100,#E4E7E9)] bg-white w-[432px] max-w-full p-4 rounded-sm border-solid">
                Road No. 13/x, House no. 1320/C, Flat No. 5D
              </div>
              <div className="text-zinc-900 text-sm leading-5 mt-4 max-md:max-w-full">
                Country
              </div>
              <div className="justify-between self-center border border-[color:var(--gray-100,#E4E7E9)] bg-white flex w-[432px] max-w-full gap-5 mt-2 pl-4 pr-4 py-3.5 rounded-sm border-solid max-md:flex-wrap">
                <div className="text-neutral-600 text-sm leading-5">
                  Bangladesh
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed1461d1-bfd2-4c2d-98ef-4cb6b06f8384?apiKey=6368d2abbd1a483daf784d55bb48e805&"
                  className="aspect-square object-contain object-center w-4 overflow-hidden self-stretch shrink-0 max-w-full"
                />
              </div>
              <div className="text-zinc-900 text-sm leading-5 mt-4 max-md:max-w-full">
                Region/State
              </div>
              <div className="justify-between items-center self-center border border-[color:var(--gray-100,#E4E7E9)] bg-white flex w-[432px] max-w-full gap-5 mt-2 pl-4 pr-4 py-3.5 rounded-sm border-solid max-md:flex-wrap">
                <div className="text-gray-400 text-sm leading-5 my-auto">
                  Select...
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/60e39464-145b-4711-abf1-398e0f2fba13?apiKey=6368d2abbd1a483daf784d55bb48e805&"
                  className="aspect-square object-contain object-center w-4 overflow-hidden self-stretch shrink-0 max-w-full"
                />
              </div>
              <div className="items-stretch self-center flex w-[432px] max-w-full gap-4 mt-4 max-md:flex-wrap">
                <div className="items-stretch flex grow basis-[0%] flex-col">
                  <div className="text-zinc-900 text-sm leading-5">City</div>
                  <div className="justify-between items-center border border-[color:var(--gray-100,#E4E7E9)] bg-white flex gap-5 mt-2 px-4 py-3.5 rounded-sm border-solid">
                    <div className="text-neutral-600 text-sm leading-5 my-auto">
                      Dhaka
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/879687ec-b8a7-41d1-aaa2-b63191c676c8?apiKey=6368d2abbd1a483daf784d55bb48e805&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden self-stretch shrink-0 max-w-full"
                    />
                  </div>
                </div>
                <div className="items-stretch flex grow basis-[0%] flex-col">
                  <div className="text-zinc-900 text-sm leading-5">
                    Zip Code
                  </div>
                  <div className="text-neutral-600 text-sm leading-5 whitespace-nowrap border border-[color:var(--gray-100,#E4E7E9)] bg-white px-4 py-4 rounded-sm border-solid">
                    1207
                  </div>
                </div>
              </div>
              <div className="text-zinc-900 text-sm leading-5 mt-4 max-md:max-w-full">
                Email
              </div>
              <div className="text-neutral-600 text-sm leading-5 whitespace-nowrap self-center border border-[color:var(--gray-100,#E4E7E9)] bg-white w-[432px] max-w-full p-4 rounded-sm border-solid">
                <a href="mailto:kevin12345@gmail.com" target="_blank">
                  kevin12345@gmail.com
                </a>
              </div>
              <div className="text-zinc-900 text-sm leading-5 mt-4 max-md:max-w-full">
                Phone Number
              </div>
              <div className="text-neutral-600 text-sm leading-5 whitespace-nowrap self-center border border-[color:var(--gray-100,#E4E7E9)] bg-white w-[432px] max-w-full px-4 py-4 rounded-sm border-solid">
                +1-202-555-0118
              </div>
              <div className="text-white text-sm font-bold leading-10 tracking-normal uppercase justify-center items-center bg-orange-400 w-[161px] max-w-full ml-6 mt-6 px-5 rounded-sm self-start max-md:ml-2.5">
                Save Changes
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="justify-center items-start rounded border border-[color:var(--gray-100,#E4E7E9)] bg-white flex w-[984px] max-w-full flex-col mt-6 mb-20 pb-6 border-solid max-md:mb-10">
        <div className="text-zinc-900 text-sm font-medium leading-5 uppercase whitespace-nowrap border border-[color:var(--gray-100,#E4E7E9)] bg-white self-stretch px-5 py-5 rounded border-solid max-md:max-w-full max-md:pl-1">
          Change Password
        </div>
        <div className="self-stretch text-zinc-900 text-sm leading-5 mt-6 max-md:max-w-full">
          Current Password
        </div>
        <div className="justify-end self-stretch border border-[color:var(--gray-100,#E4E7E9)] bg-white flex flex-col mt-2 px-5 py-3 rounded-sm border-solid max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/487dfecc-53d6-4839-9e18-054b7b63188a?apiKey=6368d2abbd1a483daf784d55bb48e805&"
            className="aspect-[2.25] object-contain object-center w-[45px] overflow-hidden max-w-full max-md:-mr-1"
          />
        </div>
        <div className="self-stretch text-zinc-900 text-sm leading-5 mt-4 max-md:max-w-full">
          New Password
        </div>
        <div className="justify-between items-center self-stretch border border-[color:var(--gray-100,#E4E7E9)] bg-white flex gap-5 mt-2 pl-4 pr-16 py-3 rounded-sm border-solid max-md:max-w-full max-md:flex-wrap max-md:pr-5">
          <div className="text-slate-500 text-sm leading-5 my-auto">
            8+ characters
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/017f5186-91ad-4cec-87ec-8a3ea459fbc8?apiKey=6368d2abbd1a483daf784d55bb48e805&"
            className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch shrink-0 max-w-full"
          />
        </div>
        <div className="self-stretch text-zinc-900 text-sm leading-5 mt-4 max-md:max-w-full">
          Confirm Password
        </div>
        <div className="justify-end self-stretch border border-[color:var(--gray-100,#E4E7E9)] bg-white flex flex-col mt-2 px-5 py-3 rounded-sm border-solid max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/efba037b-9a88-4f1b-a798-7d19b4a16c59?apiKey=6368d2abbd1a483daf784d55bb48e805&"
            className="aspect-[2.25] object-contain object-center w-[45px] overflow-hidden max-w-full max-md:-mr-1"
          />
        </div>
        <div className="text-white text-sm font-bold leading-10 tracking-normal uppercase justify-center items-center bg-orange-400 w-[197px] max-w-full ml-6 mt-6 px-5 rounded-sm self-start max-md:ml-2.5">
          Change Passowrd
        </div>
      </div>

      

      </div>

    </div>
  );
}


export default Profile;