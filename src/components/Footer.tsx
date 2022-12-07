import { GitFork } from "phosphor-react";

export function Footer(){
  const year = new Date().getFullYear(); // year 

  return (
    <footer className="sm:items-center w-full h-auto text-slate-100 bg-marine-500 flex flex-col p-4">
      <div className="sm:w-[600px]">
        <div className="flex items-center justify-between py-1">
          <p >
            Feito por "José Alexsandro"
          </p>
          <span>
            <a href="#">
              <GitFork size={ 32 }/>
            </a>
          </span>
        </div>
        <div className="py-1">
          <p>
            2022 - { year }
          </p>
        </div>
      </div>
    </footer>
  )
}