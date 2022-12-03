import { HourglassSimpleLow } from "phosphor-react"
import { useInfo } from "../hooks/useInfo"

export function Informations(){
  const { title, content, linkTitle, link } = useInfo()

  return (
    <section className="max-sm:flex w-full bg-zinc-200 h-auto items-center justify-center py-8 flex-wrap">
       <article className="px-4 py-1 sm:flex sm:justify-center sm:items-center sm:flex-col">
        <div className="flex items-center gap-2">
          <HourglassSimpleLow size={32} weight="duotone" className="text-marine-500" />
          <h2 className="sm:text-center text-xl font-extrabold text-marine-500">
            Donwload super rapido
          </h2>
        </div>
        <div className="py-2">
          <p className="sm:m-auto sm:w-[600px] text-marine-500 opacity-95">
            Baixe seus videos de uma forma <strong>Rapida</strong> e <strong>Pratica</strong> em
            minutos seus videos, fotos ou musicas estaram baixados
          </p>
        </div>
      </article>       
      <article className="px-4 py-1 block">
        <h2 className="sm:text-center text-marine-500 font-extrabold text-xl">
          { title }
        </h2>
        <p className="sm:m-auto sm:w-[600px] text-marine-500 opacity-95 py-2">
          { content }
          <a href={ link }>
            <strong>
              { linkTitle }
            </strong>
          </a>
        </p>
      </article>   
    </section>
  )
}