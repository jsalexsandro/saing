import { useMenuInfo } from "../hooks/useInfoMenu"

export function Menu(){
  const { isOpen } = useMenuInfo()

  if (!isOpen) return null

  return (
    <menu className="sm:hidden bg-marine-600 shadow-md">
      <div>
        <ul className="text-lg text-slate-100">
          <li className="px-4 py-1">
            <a href="#" className="hover:text-slate-300 transition-colors">Mais</a>
          </li>
          <li className="px-4 py-1">
            <a href="#" className="hover:text-slate-300 transition-colors">Github</a>
          </li>
          <li className="px-4 py-1">
            <a href="#" className="hover:text-slate-300 transition-colors">Tutorial</a>
          </li>
        </ul>
      </div>
    </menu>
  )
}