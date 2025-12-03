import React from 'react'

export default function Navbar() {
  return (
    <div className='flex flex-col gap-10'>
        {/* Logo and Search button */}
        <div className=' flex justify-between'>
            <h1 className='sm:text-3xl font-semibold'>STYLE-SPHERE</h1>
            <input className='border w-30 rounded-3xl text-sm sm:pl-5 sm:pr-5 outline-none' type="text" placeholder='Search...' />
        </div>

        {/* Nav Butttons */}
        <div className='capitalize flex justify-between text-sm items-center'>
            <div className='flex'>
                <h1>all</h1>
            </div>
            <div className='hidden sm:block'>
                <div className='flex  gap-9 items-center'>
                    <p>home</p>
                    <p>Deals</p>
                    <p>New Arrivals</p>
                    <p>Cart</p>
                    <div className='flex gap-3'>
                        <button className=' p-1 text-white bg-black rounded-md pl-2 border-black cursor-pointer pr-2'>Sign in</button>
                        <button className=' p-1 text-white bg-black rounded-md pl-2 border-black cursor-pointer pr-2'>Sign Up</button>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}
        