import { Gear } from "phosphor-react";

export function Section(){
  return (
    <section className="flex items-center justify-center flex-wrap">
      <article className="px-2 py-1 block ">
        <h2 className="text-violet-500 font-extrabold text-xl">
          How to using?
        </h2>
        <p className="text-violet-500 opacity-95 py-2">
          Saing.net is a tool to helping anyone who works with the internet to downloading content quickly and conveniently!
          To using just paste the url in the box above and click on the button.
          The video will download automatically!
        </p>
      </article> 
      <article>
        <div>
          <Gear />
          <h2>
            About Api
          </h2>
        </div>
        <div>
          click me, for seeing documentation on howing use code api.
        </div>
      </article> 
    </section>
  )
}