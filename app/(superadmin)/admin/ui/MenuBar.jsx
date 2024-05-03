"use client"
import { cn } from "@/lib/utils";
import { Filter, GraduationCap, IndianRupee, LayoutDashboard, List, User } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const SidebarItem = ({name, url, icon:Icon}) => {
    const pathname = usePathname();
    const router = useRouter();

    const isActive = (pathname === "/" && url === "/" || pathname === url || pathname?.startsWith(`${url}/`))

    const onClick = () => {
        router.push(url)
    }

    return(
        <button onClick={onClick} className={cn(
            'flex item-center gap-x-2 w-full text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20 ', isActive && 'text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-900 border-r-2 border-sky-700')}>
                <div className="flex items-center gap-x-2 py-4">
                    <Icon size={22} className={cn("text-slate-500", isActive && "text-sky-700")}/>
                    {name}
                </div>
        </button>
       
    )
        }

let sidebarRoutes = [
    {
        icon:LayoutDashboard,
        name:"Dashboard",
        url: "/admin/dashboard",
    },
    {
        icon:GraduationCap,
        name:"Courses",
        url:"/admin/courses"
    },
    {
        icon:User,
        name:"Students",
        url:"/admin/students"
    },
    {
        icon:List,
        name:"Admission",
        url:"/admin/admission"
    },
    {
        icon:Filter,
        name:"Categories",
        url:"/admin/categories"
    },
    {
        icon:IndianRupee,
        name:"Payments",
        url:"/admin/payments"
    }
]


const MenuBar = () => {
    return (
        <div className=" py-2">
                <nav className="flex flex-col w-full">
                   {sidebarRoutes.map(side => <SidebarItem {...side}/>)}
                </nav>
        </div>
    );
};

export default MenuBar;
