import { Gear } from "phosphor-react";

export function Section(){
  return (
    <section className="max-sm:flex w-full h-auto items-center justify-center py-8 flex-wrap">
      <article className="px-4 py-1 block">
        <h2 className="sm:text-center text-marine-500 font-extrabold text-xl">
          O que é <strong>Saing</strong> ?
        </h2>
        <p className="sm:m-auto sm:w-[600px] text-marine-500 opacity-95 py-2">
          Ferramentas como YouTube e Instagram não disponibilizam uma forma de baixar vídeos, fotos e outros conteúdos que a plataforma hospeda, o “Saing” te dá uma forma rápida e prática de fazer isso.
        </p>
      </article> 
      <article className="px-4 py-1 block">
        <h2 className="sm:text-center text-marine-500 font-extrabold text-xl">
          Como usar?
        </h2>
        <p className="sm:m-auto sm:w-[600px] text-marine-500 opacity-95 py-2">
          O Saing.net é uma ferramenta para ajudar quem trabalha com internet a baixar conteúdo de forma rápida e prática!
          Para usar basta colar a url na caixa acima e clicar no botão.
          O vídeo será baixado automaticamente!
        </p>
      </article> 
      <article className="px-4 py-1 sm:flex sm:justify-center sm:items-center sm:flex-col">
        <div className="flex items-center gap-2">
          <Gear size={24} weight="fill" className="text-marine-500" />
          <h2 className="sm:text-center text-xl font-extrabold text-marine-500">
            Sobre a Api de Desenvolvimento
          </h2>
        </div>
        <div className="py-2">
          <p className="sm:m-auto sm:w-[600px] text-marine-500 opacity-95">
            <a href="#">
              <strong>clique em mim</strong> para ver a documentação sobre como usar a API de código.
            </a>
          </p>
        </div>
      </article> 
    </section>
  )
}