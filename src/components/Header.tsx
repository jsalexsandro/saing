import { useMenuInfo } from "../hooks/useInfoMenu"

export function Header(){
  const { set: MenuFunction } = useMenuInfo()

  return (
    <header className="w-full h-24 flex items-center justify-around bg-violet-500">
      <div className="max-sm:hidden">
        <h1 className="text-2xl text-slate-100">
          SAING.NET
        </h1>
      </div>
      <div className="max-sm:hidden">
        <nav>
          <ul className="w-auto text-slate-100 flex transition-colors text-lg items-center justify-center gap-4 flex-ro">
            <li className="hover:text-slate-300">
              <a href="#">MORE</a>
            </li>
            <li className="hover:text-slate-300">
              <a href="#">GITHUB</a>
            </li>
            <li className="hover:text-slate-300">
              <a href="#">DOCUMENTATION</a>
            </li>
          </ul>
        </nav>
      </div>

      {/* 44 meio extato */}

      <div onClick={ MenuFunction } className="sm:hidden">
        <button className="w-24 h-24 flex flex-col gap-3 items-center justify-center">
          <span id="dash-1" className="w-12 h-1 transition-all absolute top-9  bg-slate-100" />
          <span id="dash-2" className="w-12 h-1 transition-all absolute top-14 bg-slate-100" />
        </button>
      </div>
    </header>    
  )
}