import { useState, useRef, Fragment } from "react";
import { Donwloader } from "./Donwloader";
import { useDownload } from "../hooks/useDownlaod";
import { ArrowCircleDown } from "phosphor-react";

export function Form(){
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  const [url, setUrl] = useState<string>("")
  const inputRef = useRef<HTMLInputElement>(null)
  const { downloadType, title  } = useDownload()
  
  function onClick(){
    const value = inputRef.current?.value
    setUrl(value as string)
    setModalIsOpen(!modalIsOpen) // Close or Open <Modal/>
  }

  return (
    <Fragment>
      { modalIsOpen && <Donwloader url={url} modalIsOpen={modalIsOpen} closeOrOpen={() => setModalIsOpen(!modalIsOpen)}/>}
      <section className="w-full bg-marine-500 font-extrabold flex items-center flex-col gap-7 justify-center h-72">
        <div className="w-full h-auto">
          <h1 className="text-[2.34rem] text-center text-white">
              <span className="opacity-90">Download { downloadType.toLocaleLowerCase() } from</span> <span className="opacity-100">{ title }</span>
          </h1>
        </div>
        <div className="flex flex-rol w-[600px] max-sm:w-[calc(100vw_-_32px)]">
          <input className="w-[85%] h-14 indent-4 rounded-[4px_0px_0px_4px] outline-none text-slate-800" />
          <button className="w-[15%] h-14 flex items-center justify-center bg-slate-800 transition-colors hover:bg-slate-900 rounded-[0px_4px_4px_0px]">
            <ArrowCircleDown size={32} className="text-slate-100" />
          </button>
          {/* <input ref={inputRef} placeholder="Cut Url" className="sm:w-[600px] placeholder:text-marine-500 focus:border-marine-700 font-medium text-marine-500 w-[calc(100vw_-_32px)] outline-none indent-3 h-14 rounded border border-marine-500" />
          <button onClick={ onClick } className="sm:w-[600px] hover:bg-marine-700 text-lg w-[calc(100vw_-_32px)] h-14 rounded bg-marine-500 flex items-center justify-between">
            <p className="px-3 text-slate-100"> Save Video </p>
            <div className="flex items-center justify-center px-3">
              <ArrowCircleDown size={32} className="text-slate-100" />
            </div>
          </button> */}
        </div>
      </section>
    </Fragment>
  )
}