
import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({product,Loading}) {


  // if (freeDelivery == true){
  //   freeDelivery = 'free delivery'
  // }else{
  //   freeDelivery == false
  // }

  return (
    <>
        {product.map(item => (
        <div key={item.id} className='w-full scale-100 hover:scale-104 hover:bg-gray-400  shadow-lg shadow-gray-400 transition delay-5 ease-in  bg-gray-100  border border-gray-400  h-auto p-3  rounded-md justify-between items-start  flex flex-col gap-5 '>
          <div className='w-full h-auto flex justify-center items-start'>
          <Link to={`/product-lists/${item.id}`}><img onClick={Loading=true} className='product-img cursor-pointer' src={`/assets/${item.image}.png`} alt="" /></Link>
          </div>
          <div className='w-full flex flex-col h-full text-start gap-2 '>
            <h1 className='text-xs md:text-base  text-gray-800'>{item.title}</h1>
            <div className='w-full h-full flex flex-col justify-end gap-2 '>
              <div className='flex flex-col gap-1.5'>
                <p className=' text-xs text-gray-500'>({item.ratings}) Customer raings</p>
                <h1 className='w-22 text-center text-xs text-gray-700 rounded-3xl bg-green-300'>{item.freeDelivery}</h1>
              </div>
              <div className='w-full flex justify-between'>
                  <h1 className='md:text-xl'>₹{item.price}</h1>
                  <div className='w-auto h-auto flex gap-2 md:gap-3 justify-center items-center '>
                      <img className='cursor-pointer size-5 md:size-6' src="/cart2.png" alt="" />
                      <img className='cursor-pointer size-5 md:size-6' src="/Heart.png" alt="" />
                  </div>
              </div>
            </div>
          </div>
      </div>
      ))}
    </>
  )
}
