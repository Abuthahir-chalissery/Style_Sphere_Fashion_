import React from 'react'

export default function Deals() {
  return (
    <div className='w-full p-5 lg:p-10  mt-2 h-auto bg-gradient-to-t flex justify-center from-gray-300  to-gray-200 '>
        <div className='w-full h-auto grid  grid-cols-1 gap-10  p-1 sm:p-3 justify-center  md:grid-cols-2 max-w-100 sm:max-w-270'>
            {/* Left */}
            <div className='w-full  h-full grid md:grid-rows-2 gap-10 '>
                <div className=' h-full flex flex-col items-center  md:items-start md:text-start justify-center gap-5 sm:gap-8  '>
                    <h1 className='text-4xl sm:text-5xl text-center sm:text-start' >Deals Of The Day</h1>
                    <p className= ' text-center md:text-start    text-xs text-gray-500' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati temporibus ducimus, nemo eaque non quos quidem aliquam eos ex illo voluptas explicabo, perferendis esse ea libero enim asperiores dolorem pariatur!</p>
                    <button className='w-full sm:w-44  shadow-gray-500 cursor-pointer shadow-lg p-2.5 rounded-md text-sm bg-black text-white'>Buy Now</button>
                </div>
                <div className=' flex flex-col justify-center text-center md:items-start text-2xl gap-5'>
                    <h1>Hurry, Before it's Too Late!</h1>
                    <div className='flex justify-between sm:justify-center sm:gap-10 text-center text-lg'>
                        <div className='flex flex-col gap-3 '>
                            <h1 className=' size-11 text-xl text-center flex justify-center items-center shadow-gray-500 shadow-sm rounded-md bg-gray-50'>01</h1>
                            <h1 className='text-xs  text-gray-900'>Days</h1>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <h1 className='size-11 text-xl text-center flex justify-center items-center p-2 shadow-gray-500 shadow-sm rounded-md bg-gray-50'>05</h1>
                            <h1 className='text-xs  text-gray-900'>Hr</h1>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <h1 className='size-11 text-xl text-center flex justify-center items-center p-2 shadow-gray-500 shadow-sm rounded-md bg-gray-50'>06</h1>
                            <h1 className='text-xs  text-gray-900'>Mns</h1>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <h1 className='size-11 text-xl text-center flex justify-center items-center p-2 shadow-gray-500 shadow-sm rounded-md bg-gray-50'>30</h1>
                            <h1 className='text-xs  text-gray-900'>Sec</h1>
                        </div>
                        
                    </div>
                </div>
            </div>
            {/* Right */}
            <div className=' flex justify-center items-center md:justify-end  w-full h-full'>
                <img className='md:h-80  lg:h-110 cursor-pointer shadow-gray-500 shadow-lg rounded-3xl' src="/image.png" alt="" />
            </div>
        </div>
    </div>
  )
}
