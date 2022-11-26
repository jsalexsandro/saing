import { useState, useRef, Fragment } from "react";
import { Donwloader } from "./Donwloader";
import { useDownload } from "../hooks/useDownlaod";

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
      <section className="w-full bg-white font-extrabold flex items-center flex-col gap-7 justify-center h-72">
        <div className="w-full h-auto">
          <h1 className="text-4xl text-center text-violet-500">
              <span className="opacity-80">Download { downloadType.toLocaleLowerCase() } from</span> <span className="opacity-100">{ title }</span>
          </h1>
        </div>
        <div className="flex items-center justify-center flex-col gap-1">
          <input ref={inputRef} placeholder="Cut Url" className="sm:w-[600px] placeholder:text-violet-500 focus:border-violet-700 font-medium text-violet-500 w-[calc(100vw_-_32px)] outline-none indent-3 h-14 rounded border border-violet-500" />
          <button onClick={ onClick } className="sm:w-[600px] hover:bg-violet-700 text-lg w-[calc(100vw_-_32px)] h-14 rounded bg-violet-500 flex items-center justify-between">
            <p className="px-3 text-slate-100"> Save Video </p>
          </button>
        </div>
      </section>
    </Fragment>
  )
}