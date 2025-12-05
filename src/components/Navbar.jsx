import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='w-full bg-gray-300 shadow-sm shadow-gray-400  sticky top-0  poppins-regular flex justify-center'>
        <div className='w-full  flex flex-col p-5 gap-10 max-w-100 sm:max-w-270'>
            {/* Logo and Search button */}
            <div className=' flex justify-between'>
                <Link to={'/'}><h1 className='text- sm:text-3xl font-semibold unbounded-logo-text cursor-pointer'>STYLE-SPHERE</h1></Link>
                <div className='w-30 sm:w-auto flex sm:h-9 border border-gray-500 rounded-3xl pl-1 pr-1 sm:pl-5 sm:pr-2 justify-center items-center'>
                    <input className='w-full  text-sm  outline-none' type="text" placeholder='Search...' />
                    <img className='cursor-pointer size-5 sm:size-6' src="./search.png" alt="" />
                </div>
            </div>

            {/* Nav Butttons */}
            <div className='capitalize flex justify-between text-base items-center'>
                <div className='flex gap-3 items-center '>
                    <img className='cursor-pointer w-5 h-4' src="./bars.png" alt="" />
                    <h1 className='text-lg'>all</h1>
                </div>
                <div className='hidden sm:block'>
                    <div className='flex  gap-9 '>
                        <Link to={'/'}><p className='cursor-pointer'>home</p></Link>
                        <p className='cursor-pointer'>Deals</p>
                        <p className='cursor-pointer'>New Arrivals</p>
                        <div className='flex gap-1'>
                            <p className='cursor-pointer'>Cart</p>
                            <img className='size-5 ' src="/cart.png" alt="" />
                        </div>
                        <div className='flex gap-1 '>
                            <p className='cursor-pointer'>Profile</p>
                            <img className='size-5 ' src="/User.png" alt="" />
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}
        