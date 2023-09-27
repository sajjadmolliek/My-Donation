import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AllRoute from './router/AllRoute.jsx'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={AllRoute} />
  </React.StrictMode>,
)
