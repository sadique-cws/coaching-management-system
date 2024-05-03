import connectDb from '@/utils/connectDb'
import UserModel from '@/models/UserModel';
import { DataTable } from '../ui/data-table';
import { columns } from './columns';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbList } from '@/components/ui/breadcrumb';

const page = async () => {
    await connectDb();
    let users = await UserModel.find({status:true});
    users = JSON.parse(JSON.stringify(users));
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
                            <BreadcrumbPage>Students</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
        <h2 className='text-2xl text-slate-800 font-medium my-5'>Manage Students ({users.length})</h2>
        <DataTable columns={columns} data={users}/>
    </div>
  )
}

export default page