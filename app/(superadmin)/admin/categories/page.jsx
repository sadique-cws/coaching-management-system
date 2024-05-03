import React from 'react'
import AddCategory from '../ui/AddCategory'
import Categories from '../ui/Categories'
import connectDb from '@/utils/connectDb'
import CategoryModel from '@/models/CategoryModel'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbList } from '@/components/ui/breadcrumb';

const page = async () => {
    await connectDb();

    let categories = await CategoryModel.find();
  return (
    <div className='px-10 py-5'>
       <div className='flex'>
              <Breadcrumb>
                  <BreadcrumbList>
                      <BreadcrumbItem>
                          <BreadcrumbLink href="/admin/dashboard">Home</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                          <BreadcrumbPage>Categories</BreadcrumbPage>
                      </BreadcrumbItem>
                  </BreadcrumbList>
              </Breadcrumb>
            </div>
    <h1 className='my-3 text-2xl font-mendium text-slate-800'>Category Management ({categories.length})</h1>
    <div className='flex gap-5'>
        <div className='w-3/4'>
            <Categories categories={categories}/>
        </div>
        <div className='w-1/4'>
            <AddCategory />
        </div>
    </div>
</div>
  )
}

export default page