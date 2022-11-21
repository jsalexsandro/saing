export function Header(){
  return (
    <header className="w-full h-24 flex items-center justify-around bg-white bg-opacity-20 backdrop-blur-sm">
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
      <div className="sm:hidden">
        <button className="w-24 h-24 flex flex-col gap-3 items-center justify-center">
          <span className="w-12 h-1 bg-slate-100" />
          <span className="w-12 h-1 bg-slate-100" />
        </button>
      </div>
    </header>    
  )
}