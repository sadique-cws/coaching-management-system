import React from 'react'
import MobileNavbar from './mobile-navbar'
import AdminHeader from './AdminHeader'
import MenuBar from './MenuBar'

const Navbar = () => {
  return (
    <div className='p-4 border-b h-full flex items-center bg-white shadow-sm'>
        <MobileNavbar/>
        <AdminHeader/>
    </div>
  )
}

export default Navbar