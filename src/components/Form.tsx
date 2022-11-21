import { ArrowCircleDown } from "phosphor-react";

export function Form(){
  return ( 
    <section className="w-full bg-white font-extrabold flex items-center flex-col gap-7 justify-center h-64">
      <div className="w-full h-auto">
        <h1 className="text-4xl text-center text-[rgba(252,176,69,1)]">
          Download videos from <span>Youtube</span>
        </h1>
      </div>
      <div className="flex items-center justify-center gap-2">
        <input placeholder="Url" className="focus:border-orange-500 placeholder:text-[rgba(252,176,69,1)]  h-14 w-[270px] text-xl text-[rgba(252,176,69,1)] border border-[rgba(252,176,69,1)] indent-2 bg-[#f5f5f5] rounded outline-none"  />
        <button className="hover:bg-orange-400 w-14 h-14 bg-[rgba(252,176,69,1)] rounded flex items-center justify-center">
          <ArrowCircleDown weight="fill" className="text-white" size={32} />
        </button>
      </div>
    </section>
  )
}