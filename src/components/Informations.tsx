import { useInfo } from "../hooks/useInfo"

export function Informations(){
  const { title, content, linkTitle, link } = useInfo()

  return (
    <section className="max-sm:flex w-full bg-zinc-200 h-auto items-center justify-center py-8 flex-wrap">
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