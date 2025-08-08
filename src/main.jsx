import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {createBrowserRouter,RouterProvider,createRoutesFromElements} from 'react-router-dom'
import { appRoute } from './routes/appRoute.jsx'

const router=createBrowserRouter(createRoutesFromElements(appRoute))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
