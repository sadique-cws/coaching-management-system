import React from 'react'
import CallingStudentTable from '../ui/CallingStudentTable'
import connectDb from '@/utils/connectDb'
import UserModel from '@/models/UserModel';

const page = async () => {
    await connectDb();
    let users = await UserModel.find({status:true});
    users = JSON.parse(JSON.stringify(users));
  return (
    <div className='px-[10%] w-full py-5 flex flex-1 flex-col'>
        <h2 className='text-2xl text-slate-600 font-bold border-b-2 pb-3'>Manage Students ({users.length})</h2>
        <CallingStudentTable users={users}/>
    </div>
  )
}

export default page