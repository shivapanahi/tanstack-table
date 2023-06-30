import React from 'react'
import { AiFillAppstore, AiOutlineUsergroupDelete, AiFillProject, AiFillCreditCard } from "react-icons/ai";

export default function Sidebar() {
  return (
    <div className={`bg-teal-50 w-60 h-full`}>
      <div className='grid  place-items-center py-5'>
        <img src='../public/logo-set02.png' className='' />
      </div>
      <div className='flex flex-col'>
        <div className="flex p-2 text-gray-900 group hover:bg-gray-100 dark:text-white gap-2"  >
          <AiFillAppstore className='flex-shrink-0 w-6 h-6 transition duration-75 text-gray-400' />
          <span className="flex-1 ml-3 text-right whitespace-nowrap" >داشبورد</span>
        </div>
        <div className="flex p-2 text-gray-900 group hover:bg-gray-100 dark:text-white gap-2"  >
          <AiOutlineUsergroupDelete className='flex-shrink-0 w-6 h-6 transition duration-75 text-gray-400' />
          <span className="flex-1 ml-3 text-right whitespace-nowrap" >کاربران</span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" ></path></svg>
        </div>
        <div className="flex p-2 text-gray-900 group hover:bg-gray-100 dark:text-white gap-2"  > 
         <AiFillProject className='flex-shrink-0 w-6 h-6 transition duration-75 text-gray-400 gap-2' />
          <span className="flex-1 ml-3 text-right whitespace-nowrap" >گزارش ها</span>  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" ></path></svg>
        </div>
        <div className="flex p-2 text-gray-900 group hover:bg-gray-100 dark:text-white gap-2"  >
          <AiFillCreditCard className='flex-shrink-0 w-6 h-6 transition duration-75 text-gray-400' />
          <span className="flex-1 ml-3 text-right whitespace-nowrap" >خرید</span>
        </div>
      </div>
    </div>
  )
}
