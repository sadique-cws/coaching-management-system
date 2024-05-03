"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger,DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { formatPrice } from "@/lib/format"
import { cn } from "@/lib/utils"
import { ArrowUpDown, MoreHorizontal, Pencil } from "lucide-react"
import Link from "next/link"

export const columns = [
    {
        accessorKey:"title",
        header:({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Title
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
          }
    },
    {
        accessorKey:"description",
        header:({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Description
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
          }
    },
    {
        accessorKey:"fee",
        header:({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Fees
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
          },
        cell:({row}) => {
            const price = parseFloat(row.getValue("fee") || 0)

            return <div>{formatPrice(price)}</div>
        }
    },
    {
        accessorKey:"duration",
        header:({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Duration
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
          },
    },
    {
        accessorKey:"status",
        header:({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Status
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
          },
        cell:({row}) => {
            const status = row.getValue("status")

            return (
                <Badge className={cn("bg-slate-500 text-white hover:bg-slate-700", status=="Published" && "bg-sky-700 hover:bg-sky-900")}>
                    {status}
                </Badge>
            )
        }
            
        
    },
    {
        id:"Actions",
        header:"Action",
        cell:({row}) => {
            const {id} = row.original;

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="w-4 h-4 p-0">
                            <MoreHorizontal className="h-4 w-4"/>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                            <Link href={`/admin/courses/${id}`}>
                                <DropdownMenuItem>
                                    <Pencil className="h-4 w-4 mr-2"/>
                                    Edit Course
                                </DropdownMenuItem>
                            </Link>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    }
]