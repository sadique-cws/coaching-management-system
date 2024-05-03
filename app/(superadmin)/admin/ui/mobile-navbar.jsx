import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import React from 'react'
import Sidebar from './side-bar'

const MobileNavbar = () => {
  return (
    <Sheet>
        <SheetTrigger className='md:hidden flex'>
            <Menu/>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 bg-white w-72">
            <Sidebar/>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNavbar