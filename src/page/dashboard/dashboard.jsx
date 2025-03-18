import React from 'react'
import Header from './Header.jsx'
import SideBar from "./SideBar.jsx"

import MainApp from './mai.jsx'



const Dashboard = () => {
  return (
    <div className='flex gap-1 '>
        <div>
            <SideBar/>
        
        </div>
        <div className='w-full h-screen flex flex-col'>
            <Header/>
            <div className='overflow-y-auto sm:overflow-x-auto'>
                <MainApp/>
                
            </div>
        </div>
    </div>
  )
}

export default Dashboard