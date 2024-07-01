import { Timer, ScrollText, Moon , Sun } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import IgniteLogo from '../assets/Logo.svg'
import { useContext } from 'react'
import { CyclesContext } from '../contexts/CycleContext'

export function Header() {
  const {toogleMode, lightMode} = useContext(CyclesContext)
  return (
    <header className="flex items-center justify-between ">
      <div className='flex gap-6'>
        <img src={IgniteLogo} alt="Logo Ignite" />
        <button onClick={toogleMode}> {lightMode ? <Moon size={29} /> : < Sun size={29}/>} </button>
      </div>

      <nav className="flex gap-2 items-center justify-between">
        <NavLink
          to="/"
          className="w-12 h-12 flex items-center justify-center border-y-[3px] border-transparent duration-200 hover:border-b-green-500 [&.active]:text-green-700"
        >
          <Timer size={24} />
        </NavLink>

        <NavLink
          to="/history"
          className="w-12 h-12 flex items-center justify-center border-y-[3px] border-transparent duration-200 hover:border-b-green-500  [&.active]:text-green-700"
        >
          <ScrollText size={24} />
        </NavLink>
      </nav>
    </header>
  )
}
