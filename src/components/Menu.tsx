import { useMenuInfo } from "../hooks/useInfoMenu"

export function Menu(){
  const { isOpen } = useMenuInfo()

  if (!isOpen) return null

  return (
    <menu className="sm:hidden bg-violet-500 border-b-2 border-violet-600">
      <div>
        <ul className="text-lg text-slate-100">
          <li className="px-4 py-1">
            <a href="#" className="hover:text-slate-300 transition-colors">More</a>
          </li>
          <li className="px-4 py-1">
            <a href="#" className="hover:text-slate-300 transition-colors">Github</a>
          </li>
          <li className="px-4 py-1">
            <a href="#" className="hover:text-slate-300 transition-colors">Documetation</a>
          </li>
        </ul>
      </div>
    </menu>
  )
}