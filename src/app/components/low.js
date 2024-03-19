
import React from 'react'
import { CiGrid42 } from "react-icons/ci";
import { BsUiRadiosGrid, BsPentagon } from "react-icons/bs";
import { TiMessages } from "react-icons/ti"
import { BiSolidMessageDetail } from "react-icons/bi"

const Low = () => {
  return (
    <div className='relative z-50 w-full h-50 md:hidden flex-col min-h-screen '>
      <div className="flex p-3 gap-16 h-30 items-center bg-blue-900 justify-center fixed bottom-0 left-0 right-0  p-4 flex-grow overflow-y-auto">
        <CiGrid42 className='text-white' />
        <BsUiRadiosGrid className='text-white' />
        <BsPentagon className='text-white' />
        <TiMessages className='text-white' />
        <BiSolidMessageDetail className='text-white' />
      </div>
    </div>
  )
}

export default Low
