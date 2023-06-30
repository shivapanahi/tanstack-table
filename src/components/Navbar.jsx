import React from 'react'
import DropDown from './DropDown'
import { BsPersonCircle } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";


export default function Navbar() {
    return (
        <div className='flex  items-center justify-between shadow-lg h-16 px-6'>
          
            <div className='flex flex-row'> 
             <BsPersonCircle className='text-4xl text-gray-300' />
                <div className=''>
                    <p className='flex flex-col relative justify-between items-center'>کیمیا جوکار</p>
                    <DropDown />
                </div>
            </div> 
             <div className='flex items-center gap-4'>
               <p className=' text-blue-500 font-bold'> تعداد گزارشات : </p>
                <p className='pl-2 border-l-2  border-l-blue-500  text-black font-bold'>107,752</p>
               
                  <button type="button" className="relative inline-flex items-center p-2 text-sm font-medium text-center">
                    <AiOutlineMail className='text-2xl text-yellow-400' />
                    <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs  text-white bg-yellow-400 border-2 border-white rounded-full -top-0.5 -right-1 dark:border-gray-900">20</div>
                </button>  <AiOutlineMail className='text-2xl' />
            </div>

        </div>
    )
}
