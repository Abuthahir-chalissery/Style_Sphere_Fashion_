import React from 'react'
import ProductCard from './ProductCard'

export default function RecentProducts({product,error}) {

  return (
    <>
      <div className='w-full h-auto poppins-regular p-5 text-center sm:p-0 flex flex-col max-w-100 sm:max-w-270 mt-5 gap-10'>
        <h1 className='text-3xl capitalize font-medium bg-gray-500 p-2 rounded-sm text-gray-200'>Deals for You</h1>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  w-full h-auto  justify-items-center gap-5 overflow-hidden '>
              <h1 className='cursor-pointer w-full max-w-40 h- text-center border p-2 rounded-md bg-gray-800 text-white border-gray-800'>Men's Fashion</h1>
              <h1 className='cursor-pointer w-full max-w-40 text-center p-2 rounded-md bg-gray-300 text-gray-500 '>T-shirts</h1>
              <h1 className='cursor-pointer hidden max-w-40 sm:block w-full text-center p-2 rounded-md bg-gray-300 text-gray-500 '>Shirts</h1>
              <h1 className=' cursor-pointer hidden max-w-40 md:block w-full text-center p-2 rounded-md bg-gray-300 text-gray-500 '>Bottum Wears</h1>
          </div>
          {/* Error */}
          <div className={error ?'flex justify-center':"hidden"}>
              <h1 className={error ? 'text-center w-50 rounded-xs p-1 text-white bg-black' : ''} >{error}</h1>
          </div>
      
          <div className='w-full h-auto gap-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
              
                <ProductCard product={product.slice(0,8)}/>
          </div>  
      </div>
    </>
  )
}
