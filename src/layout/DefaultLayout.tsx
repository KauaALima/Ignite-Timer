import { Header } from '../components/Header'
import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <div className="max-w-[1120px] h-[calc(100vh-7rem)] flex flex-col p-10 mt-16 mb-12 mx-auto rounded-lg bg-gray-800 ">
      <Header />
      <Outlet />
    </div>
  )
}
