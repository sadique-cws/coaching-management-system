import React from 'react'
import AddCategory from '../ui/AddCategory'
import Categories from '../ui/Categories'
import connectDb from '@/utils/connectDb'
import CategoryModel from '@/models/CategoryModel'

const page = async () => {
    await connectDb();

    let categories = await CategoryModel.find();
  return (
    <div className='flex flex-col gap-5 w-full px-[10%]'>
    <h1 className='my-3 text-3xl font-semibold text-slate-500'>Category Management</h1>
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