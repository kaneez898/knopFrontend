import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
        <header>
            <h1>header</h1>

             <Outlet/>
             <h1>footer</h1>
        </header>
    </div>
  )
}

export default MainLayout