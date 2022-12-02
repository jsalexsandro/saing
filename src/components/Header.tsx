import { useMenuInfo } from "../hooks/useInfoMenu"

export function Header(){
  const { set: MenuFunction } = useMenuInfo()

  return (
    <header className="max-sm:justify-between w-full h-24 flex items-center justify-center bg-marine-600">
      <div className="max-sm:hidden w-[600px] flex items-center justify-between">
        <div>
          <h1 className="text-2xl text-slate-100">
            SAING.NET
          </h1>
        </div>
        <div>
          <nav>
            <ul  className="flex flex-rol gap-4 text-zinc-100">
              <li className="hover:text-slate-300">
                <a href="#">MAIS</a>
              </li>
              <li className="hover:text-slate-300">
                <a href="#">GITHUB</a>
              </li>
              <li className="hover:text-slate-300">
                <a href="#">COMO USAR</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* 44 center */}

      <div className="sm:hidden px-3 text-slate-100 font-medium text-2xl">
        <p>
          SAING.NET
        </p>
      </div>

      <div onClick={ MenuFunction } className="sm:hidden">
        <button aria-label="Abri o menu" className="w-24 h-24 flex flex-col gap-3 items-center justify-center">
          <span id="dash-1" className="w-12 h-1 transition-all absolute top-9  bg-slate-100" />
          <span id="dash-2" className="w-12 h-1 transition-all absolute top-14 bg-slate-100" />
        </button>
      </div>
    </header>    
  )
}