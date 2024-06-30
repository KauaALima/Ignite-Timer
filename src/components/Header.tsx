import { Timer, ScrollText } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import IgniteLogo from '../assets/Logo.svg'

export function Header() {
  return (
    <header className="flex items-center justify-between ">
      <img src={IgniteLogo} alt="Logo Ignite" />

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
