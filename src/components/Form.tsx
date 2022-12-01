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
            <label htmlFor="input">
              <span className="opacity-90">Baixe { downloadType.toLocaleLowerCase() } do</span> <span className="opacity-100">{ title }</span>
            </label>
          </h1>
        </div>
        <div className="flex flex-rol w-[600px] max-sm:w-[calc(100vw_-_32px)]">
          <input id="input" ref={inputRef} className="w-[85%] h-14 indent-4 rounded-[4px_0px_0px_4px] outline-none text-slate-800" />
          <button aria-label="Download" onClick={onClick} className="w-[15%] h-14 flex items-center justify-center bg-slate-800 transition-colors hover:bg-slate-900 rounded-[0px_4px_4px_0px]">
            <ArrowCircleDown size={32} className="text-slate-100" />
          </button>
        </div>
      </section>
    </Fragment>
  )
}