import { ArrowCircleDown } from "phosphor-react";

export function Form(){
  return ( 
    <section className="w-full bg-white font-extrabold flex items-center flex-col gap-7 justify-center h-64">
      <div className="w-full h-auto">
        <h1 className="text-4xl text-center text-violet-500">
            <span className="opacity-80">Download videos from</span> <span className="opacity-100">Youtube</span>
        </h1>
      </div>
      <div className="flex items-center justify-center gap-2">
        <input placeholder="Cut Link " className="focus:border-violet-700 placeholder:text-violet-500  h-14 w-[545px] max-sm:w-[270px] text-xl text-violet-500 font-normal border border-violet-500 indent-2 rounded outline-none"  />
        <button className="hover:bg-violet-700 w-14 h-14 bg-violet-500 rounded flex items-center justify-center">
          <ArrowCircleDown weight="fill" id="icon" className="text-white" size={32} />
        </button>
      </div>
    </section>
  )
}