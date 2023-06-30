import React, { useState } from 'react'
import { BsChevronDown,BsChevronUp } from "react-icons/bs";

function DropDown() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='flex flex-col relative justify-between items-center'>
            
            <button onClick={() => setIsOpen(!isOpen)} className='flex text-blue-500 font-bold'
            >فنی-نرم افزار
            {isOpen ? <BsChevronDown className='text-blue-500' /> : <BsChevronUp />}
            
            </button>
            {isOpen &&
                <div className='absolute flex  bg-slate-50 flex-col gap-3 top-10 rounded-lg items-start p-2 w-full'>
                    <div className='text-sm'>
                        <span>مدیر نرم افزار </span>
                    </div>
                    <div className='text-sm'>
                        <span>پشتیبانی</span>
                    </div>
                </div>}
        </div>
    )
}

export default DropDown