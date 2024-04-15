import React from 'react'
import connectDb from '@/utils/connectDb'
import UserModel from '@/models/UserModel';
import CallingStudentTable from '../ui/CallingStudentTable';

const page = async () => {
    await connectDb();
    let users = await UserModel.find({status:false});
    users = JSON.parse(JSON.stringify(users));
  return (
    <div className='px-[10%] w-full py-5 flex flex-1 flex-col'>
        <h2 className='text-2xl text-slate-600 font-bold border-b-2 pb-3'>Manage New Admission ({users.length})</h2>
        <CallingStudentTable users={users}/>
    </div>
  )
}

export default page