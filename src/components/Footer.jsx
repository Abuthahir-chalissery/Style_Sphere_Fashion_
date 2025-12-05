import React from 'react'

export default function Footer() {
  return (
    <div className=' w-full h-auto flex flex-col items-center gap-5 bg-white mt-10 mb-5 '>
        <hr className='w-full  text-gray-300'/>
        <div className='w-full flex flex-col gap-9 max-w-100 sm:max-w-270'>
            <div className='grid w-full justify-center sm:grid-cols-2 gap-2 max-w-100 sm:max-w-270'>
                <h1 className=' w-full h-auto text-sm sm:text-base unbounded-logo-text'>STYLE-SHPERE</h1>
                <div className=' whitespace-nowrap grid sm:flex  justify-between w-full h-auto grid-cols-3 sm:grid-cols-6  items-center text-sm text-center  text-gray-600'>
                    <h1 className='text-start cursor-pointer'>Support Center</h1>
                    <h1 className='text-center cursor-pointer'>Invoicing</h1>
                    <h1 className='text-end cursor-pointer'>Contract</h1>
                    <h1 className='text-start cursor-pointer'>Careers</h1>
                    <h1 className='text-center cursor-pointer'>Blog</h1>
                    <h1 className='text-end cursor-pointer'>FAQ,s</h1>
                </div>
            </div>

            <div className='w-full h-auto flex justify-center text-xs text-gray-600'>
                <h1>Copyright © 2025 Style-Sphere. All Rights Reserved.</h1>
            </div>
        </div>
    </div>
  )
}
