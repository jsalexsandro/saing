import { useState, useRef, ReactElement, Fragment } from "react";
import { ArrowCircleDown } from "phosphor-react";
import { RotateButton } from "../scripts/RotateButton";
import { Popover} from "./Popover";

export function Form(){
  const [isRotate, setRotate] = useState<boolean>(false)
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  const [url, setUrl] = useState<string>("")
  const inputRef = useRef<HTMLInputElement>(null)

  function closeOrOpen(){
    setModalIsOpen(!modalIsOpen)
  }

  async function onClick(){
    RotateButton(isRotate, setRotate) // Animte Button
    const value = inputRef.current?.value

    setUrl(value as string)
    closeOrOpen()
  }

  return (
    <Fragment>
      { modalIsOpen == true ? <Popover url={url} modalIsOpoen={modalIsOpen} closeOrOpen={closeOrOpen}/> : null}
      <section className="w-full bg-white font-extrabold flex items-center flex-col gap-7 justify-center h-72">
        <div className="w-full h-auto">
          <h1 className="text-4xl text-center text-violet-500">
              <span className="opacity-80">Download videos from</span> <span className="opacity-100">Youtube</span>
          </h1>
        </div>
        <div className="flex items-center justify-center flex-col gap-1">
          <input ref={inputRef} placeholder="Cut Url" className="sm:w-[600px] placeholder:text-violet-500 focus:border-violet-700 font-medium text-violet-500 w-[calc(100vw_-_32px)] outline-none indent-3 h-14 rounded border border-violet-500" />
          <button onClick={ onClick } className="sm:w-[600px] hover:bg-violet-700 text-lg w-[calc(100vw_-_32px)] h-14 rounded bg-violet-500 flex items-center justify-between">
            <p className="px-3 text-slate-100"> Save Video </p>
            <div id="icon" className="flex items-center justify-center px-3">
              <ArrowCircleDown size={32} className="text-slate-100" />
            </div>
          </button>
        </div>
      </section>
    </Fragment>
  )
}