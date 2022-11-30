import { Gear } from "phosphor-react";

export function Section(){
  // make a translate

  return (
    <section className="max-sm:flex w-full h-auto items-center justify-center py-8 flex-wrap">
      <article className="px-4 py-1 block">
        <h2 className="sm:text-center text-marine-500 font-extrabold text-xl">
          What is it for?
        </h2>
        <p className="sm:m-auto sm:w-[600px] text-marine-500 opacity-95 py-2">
          Tools like YouTube and Instagram do not provide a way to download videos, photos and other content that the platform hosts, “Saing” gives you a quick and practical way to do this.
        </p>
      </article> 
      <article className="px-4 py-1 block">
        <h2 className="sm:text-center text-marine-500 font-extrabold text-xl">
          How to using?
        </h2>
        <p className="sm:m-auto sm:w-[600px] text-marine-500 opacity-95 py-2">
          Saing.net is a tool to helping anyone who works with the internet to downloading content quickly and conveniently!
          To using just paste the url in the box above and click on the button.
          The video will download automatically!
        </p>
      </article> 
      <article className="px-4 py-1 sm:flex sm:justify-center sm:items-center sm:flex-col">
        <div className="flex items-center gap-2">
          <Gear size={24} weight="fill" className="text-marine-500" />
          <h2 className="sm:text-center text-xl font-extrabold text-marine-500">
            About Api
          </h2>
        </div>
        <div className="py-2">
          <p className="sm:m-auto sm:w-[600px] text-marine-500 opacity-95">
            <a href="#">
              <strong>click me</strong>, for seeing documentation on howing use code api.
            </a>
          </p>
        </div>
      </article> 
    </section>
  )
}