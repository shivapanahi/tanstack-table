import React, { useState } from 'react'
import {
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    useReactTable,
    getSortedRowModel,
    getFilteredRowModel,
} from '@tanstack/react-table'
import Pagination from './Pagination';

export default function BasicTable({ data, columns }) {
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
    return (
        <div className='felx items-center justify-between py-10'>
            <div className='flex flex-row'>

                <input
                    onChange={e => setFiltering(e.target.value)}
                    className=" shadow appearance-none border rounded-2xl  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right "
                    type="text"
                    placeholder="جستجو"
                />
            </div>

            <table dir='rtl' className="border-separate border-spacing-y-3 min-w-full">

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
            <Pagination table={table} />
        </div>

    )
}
