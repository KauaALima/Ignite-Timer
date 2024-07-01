import { Header } from '../components/Header'
import { Outlet } from 'react-router-dom'
import { CyclesContext } from '../contexts/CycleContext'
import { useContext } from 'react'

export function DefaultLayout() {
  const {lightMode} = useContext(CyclesContext)
  return (
    <div className={`${lightMode && 'dark'}`}>
      <div className="text-gray-300 bg-gray-900  w-full h-[100vh] py-16 dark:bg-green-400 dark:text-gray-600">
        <div className="max-w-[1120px] h-[calc(100vh-7rem)] flex flex-col p-10 mb-12 mx-auto rounded-lg bg-gray-800 dark:bg-slate-300">
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  )
}
