import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRoutes } from './routes'
import { CycleContextProvider } from './contexts/CycleContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CycleContextProvider>
      <AppRoutes />
    </CycleContextProvider>
  </React.StrictMode>,
)
