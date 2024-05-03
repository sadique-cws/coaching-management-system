import React from 'react'
import Dashboard from '../ui/Dashboard'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'

const page = () => {
  return (
    <div className='md:px-10 md:py-5 p-4'>
        <div className='flex'>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/admin/dashboard">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator/>
                <BreadcrumbItem>
                  <BreadcrumbPage>Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
        </div>
        <Dashboard/>
    </div>
  )
}

export default page