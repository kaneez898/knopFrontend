import React from 'react'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div className='flex'>
         <div className="sidebar w-[220px] h-[100dvh] bg-amber-600">
             <h1>sidebar</h1>
         </div>
       <div>
         <header>
        <head>header</head>
        </header>
            <Outlet/>
       </div>
           <h1>footer</h1>
    </div>
  )
}

export default DashboardLayout

