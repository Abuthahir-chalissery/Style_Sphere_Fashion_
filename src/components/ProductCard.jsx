import React from 'react'

export default function ProductCard() {
  return (
    <div className=' bg-gray-100 p-3 rounded-md flex flex-col gap-3 '>
        <div className='w-full '>
          <img className='w-full  cursor-pointer rounded-md' src="/pos1.webp" alt="" />
        </div>
        <h1 className='text-lg text-gray-800'>Title</h1>
        <div className='flex flex-col gap-1'>
        <p className=' text-xs text-gray-500'>(4.6) Customer raings</p>

          <h1 className='w-22 text-center text-xs text-gray-700 rounded-3xl bg-green-300'>free delivery</h1>
        </div>
        <div className='w-full flex justify-between'>
            <h1 className='text-xl'>₹287</h1>
            <div className='w-auto h-auto flex gap-3'>
                <img className='size-6' src="/cart2.png" alt="" />
                <img className='size-6' src="/Heart.png" alt="" />
            </div>
        </div>
    </div>
  )
}
