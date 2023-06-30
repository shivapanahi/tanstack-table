import React from 'react'
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

function Pagination({ table }) {
    let pages = Array.from({ length: table.getTotalSize() / 10 }, (value, index) => index + 1);
    const { pageIndex, pageSize } = table.getState().pagination
    return (
        <div>
            <div className='flex flex-row gap-1 justify-between items-center my-10'>
                <div className='flex flex-row gap-1 '> <p className=' p-1'>  نمایش   {(pageIndex + 1) * pageSize} ردیف
                    در مجموع  {table.getTotalSize()}  ردیف
                </p>
                    <select
                        onChange={(e) => table.setPageSize((e.target.value))}
                        id="countries" className="block  p-2 mb-2 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-gray-900">
                        <option defaultValue="10">10</option>
                        <option defaultValue="20">20</option>
                        <option defaultValue="30">30</option>
                    </select>
                </div>
                <div>
                    <button
                        type="button"
                        className="text-gray-900 w-10 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 disabled:opacity-50 font-medium rounded-2xl text-sm px-3 pt-3 pb-3.5  mr-2 mb-2"
                        disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()}>
                        <BsArrowRight className='text-1xl' />
                    </button>
                    {pages.map((page) => (
                        <button key={page} onClick={() => table.setPageIndex(page - 1)}
                            className={(Math.abs(page - pageIndex) > 2 ? "hidden" : "text-gray-900 w-10 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:bg-blue-800 focus:text-slate-50 active:bg-blue-800 font-medium rounded-2xl text-sm px-1 py-2.5 mr-2 mb-2")}
                        >
                            {page}
                        </button>))}
                    <button
                        className="text-gray-900 w-10 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-2xl text-sm px-3 pt-3 pb-3.5  mr-2 mb-2 disabled:opacity-50  "
                        disabled={!table.getCanNextPage()} onClick={() => table.nextPage()}>
                        <BsArrowLeft className='text-1xl' />
                    </button>

                </div>

            </div>
        </div>
    )
}

export default Pagination