import React from 'react'

export default function SignUpPage() {
  return (
        <>
        <div className='w-full h-screen  flex justify-center items-center'>
            <div className='w-full h-screen grid sm:grid-cols-2'>
                {/* 1 */}
                <div className='bg-black sm:flex justify-center items-center hidden sm:block'>
                    <h1 className='text-white text-5xl'>STYLESPHERE</h1>
                </div>

                {/* 2 */}
                <div className='w-full bg-gray-100 flex flex-col p-10 gap-1  sm:gap-25'>
                    <div className='flex flex-col gap-1 sm:gap-0'>
                        <h1 className='text-3xl font-semibold'>LOOKS LIKE YOU'RE NEW HERE!</h1>
                        <p className='text-gray-600 sm:text-lg'>Signup with your mobile number and email to get started</p>
                    </div>

                    <div className='flex flex-col gap-3'>
                        {/* Enter  */}
                        <div className='w-full  flex  gap-5'>
                            <div className='w-full'>
                                <h1>First Name</h1>
                                <input className='border-2 p-2 w-full rounded-md text-lg outline-none border-gray-400 ' type="text" placeholder='Enter first name' />
                            </div>
                            <div className='w-full'>
                                <h1>Last Name</h1>
                                <input className='border-2 p-2 w-full rounded-md text-lg outline-none border-gray-400 ' type="text" placeholder='Enter last name' />
                            </div>
                        </div>

                        <div>
                            <h1>Email</h1>
                            <input className='border-2 p-2 w-full rounded-md text-lg outline-none border-gray-400 ' type="text" placeholder='Enter email' />
                        </div>
                        <div>
                            <h1>Otp</h1>
                            <input className='border-2 p-2 w-full rounded-md text-lg outline-none border-gray-400 ' type="text" placeholder='Enter otp' />
                        </div>
                        <div>
                            <h1>Phone</h1>
                            <input className='border-2 p-2 w-full rounded-md text-lg outline-none border-gray-400 ' type="text" placeholder='Enter phone' />
                        </div>
                        <div>
                            <h1>Password</h1>
                            <input className='border-2 p-2 w-full rounded-md text-lg outline-none border-gray-400 ' type="text" placeholder='Enter password' />
                        </div>
                        <div>
                            <h1>Confirm Password</h1>
                            <input className='border-2 p-2 w-full rounded-md text-lg outline-none border-gray-400 ' type="text" placeholder='Enter confirm password' />
                        </div>
                        <div>
                            <button className='cursor-pointer w-full bg-black p-2 text-white rounded-md text-2xl'>Sign in</button>
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
