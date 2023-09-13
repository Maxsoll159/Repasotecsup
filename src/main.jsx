import React from 'react'
import ReactDOM from 'react-dom/client'
import { Principal } from './Principal'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './context/ContextApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppProvider>
      <React.StrictMode>
        <Principal />
      </React.StrictMode>
    </AppProvider>
  </BrowserRouter>
  ,
)
