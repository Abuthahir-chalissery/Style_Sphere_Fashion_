import React from 'react'

export default function LoginPage() {
  return (
    <>
      <div className='w-full h-screen  flex justify-center items-center'>
        <div className='w-full h-screen grid sm:grid-cols-2'>
          {/* 1 */}
          <div className='bg-black sm:flex justify-center items-center hidden sm:block'>
            <h1 className='text-white text-5xl'>STYLESPHERE</h1>
          </div>

          {/* 2 */}
          <div className='w-full bg-gray-100 flex flex-col p-10  sm:gap-30'>
            <div className='flex flex-col gap-5'>
              <h1 className='text-3xl font-semibold'>LOGIN</h1>
              <p className='text-gray-600 text-lg'>Get access to your Orders, Wishlist and Recommendations</p>
            </div>

            <div className='flex flex-col gap-10'>
              <div>
                <h1>Email</h1>
                <input className='border-2 p-3 w-full rounded-md text-lg outline-none border-gray-400 ' type="text" placeholder='Enter email' />
              </div>
              <div>
                <h1>Password</h1>
                <input className='border-2 p-3 w-full rounded-md text-lg outline-none border-gray-400 ' type="text" placeholder='Enter Password' />
              </div>
              <div>
                <button className='cursor-pointer w-full bg-black p-3 text-white rounded-md text-2xl'>Sign in</button>
              </div>
              <div className='flex justify-center items-center text-nowrap gap-5'>
                <h1 className='font-semibold text-gray-600'>Don't have an account ?</h1>
                <button className=' bg-black p-1 pl-3 pr-3 text-white rounded-md text-lg cursor-pointer'>Sign Up</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
