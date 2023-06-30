import React, { useMemo, useState } from 'react'
import mData from "../MOCK_DATA.json"
import {
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    useReactTable,
    getSortedRowModel,
    getFilteredRowModel,
} from '@tanstack/react-table'
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

export default function BasicTable() {
    const data = useMemo(() => mData, [])
    /**@type import('@tanstack/react-table').ColumnDef<any> */
    const columns = [
        {
            Header: 'ID',
            accessorKey: 'id',
        },
        {
            Header: "first name",
            accessorKey: 'first_name',
        },
        {
            Header: "last name",
            accessorKey: 'last_name',
        },
        {
            Header: "company",
            accessorKey: 'company',
        },
        {
            Header: "Status",
            accessorKey: 'status',
            cell: ({ row }) => {
                return (
                    row.original.status ?
                        <div className='flex flex-row'>
                            <div className="items-center justify-center w-4 h-4  font-bold  bg-green-500 border-2  border-gray-300 rounded-full"></div>
                            <span className=" text-green-800 text-xs font-medium mr-2 px-1   rounde">active</span>
                        </div>

                        :
                        <div className='flex flex-row'>
                            <div className=" inline-flex items-center justify-center w-4 h-4    bg-red-500 border-2  border-gray-300 rounded-full   "></div>
                            <span className=" text-red-800 text-xs font-medium mr-2 px-1  rounded">deactive</span>
                        </div>
                )
            }
        },
        {
            Header: "access",
            accessorKey: 'access',
            cell: ({ row }) => {
                return (
                    <div className='flex flex-row'>
                        <span className="bg-blue-400
                         text-zinc-50
                         text-sm font-medium mr-2
                          py-1 rounded-full
                         
                         w-24
                         text-center
                       border-blue-400">{row.original.access}</span>
                    </div>
                )
            }
        },
    ]
    const [sorting, setSorting] = useState([])
    const [filtering, setFiltering] = useState('')
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting: sorting,
            globalFilter: filtering,

        },
        onSortingChange: setSorting,
        onGlobalFilterChange: setFiltering,

    })
    let pages = Array.from({ length: table.getTotalSize() / 10 }, (value, index) => index + 1);
    const { pageIndex, pageSize } = table.getState().pagination
    return (
        <div className='felx items-center justify-between py-10'>
            <div className='flex flex-row-reverse'>

                <input
                    onChange={e => setFiltering(e.target.value)}
                    className=" flex-1shadow appearance-none border rounded-2xl  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right "
                    type="text"
                    placeholder="جستجو"
                />
            </div>

            <table className="border-separate border-spacing-y-3 min-w-full">

                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th
                                    className='border-y py-4'
                                    key={header.id}
                                    onClick={header.column.getToggleSortingHandler()}
                                >
                                    {header.isPlaceholder ? null : (
                                        <div>
                                            {flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                            {
                                                { asc: '🔼', desc: '🔽' }[
                                                header.column.getIsSorted() ?? null
                                                ]
                                            }
                                        </div>
                                    )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody className=''>
                    {table.getRowModel().rows.map(row => (
                        <tr className=' bg-gray-200  my-2' key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td className="  py-4 my-2 px-2 " key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className='flex flex-row gap-1 justify-between items-center my-10'>
                <div>
                    <button
                        type="button"
                        className="text-gray-900 w-10 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-2xl text-sm px-3 pt-3 pb-3.5  mr-2 mb-2"
                        disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()}>
                        <BsArrowLeft className='text-1xl' />
                    </button>
                    {pages.map((page) => (
                        <button key={page} onClick={() => table.setPageIndex(page - 1)}
                            className={(Math.abs(page - pageIndex) > 2 ? "hidden" : "text-gray-900 w-10 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-2xl text-sm px-1 py-2.5 mr-2 mb-2")}
                        >
                            {page}
                        </button>))}
                    <button
                        className="text-gray-900 w-10 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-2xl text-sm px-3 pt-3 pb-3.5  mr-2 mb-2"
                        disabled={!table.getCanNextPage()} onClick={() => table.nextPage()}>
                        <BsArrowRight className='text-1xl' />
                    </button>
                </div>
                <div className='flex flex-row gap-1 '>
                    <select
                        onChange={(e) => table.setPageSize((e.target.value))}
                        id="countries" className="block  p-2 mb-2 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-gray-900">
                        <option defaultValue="10">10</option>
                        <option defaultValue="20">20</option>
                        <option defaultValue="30">30</option>
                    </select>
                    <p className=' p-1'>  نمایش   {(pageIndex + 1) * pageSize} ردیف
                        در مجموع  {table.getTotalSize()}  ردیف
                    </p>
                </div>

            </div>
        </div>

    )
}