import React from 'react'

export default function Home() {
  return (
    <>
    <div className='w-full h-auto flex flex-col gap-10'>
        <div className='w-full h-auto grid grid-cols-1 sm:grid-cols-3 gap-5'>
            {/* 1 */}
            <div className='hidden sm:block w-full h-auto bg-[#CACDD7] rounded-xl'>
                <div className='w-full h-full flex justify-center items-end'>
                    <img className=' w-100% h-auto' src="./src/assets/image1.png" alt="pc-1" />
                </div>
            </div>

            {/* 2 */}
            <div className=' w-full h-110 sm:h-auto grid grid-rows-3 '>
                <div className='w-full h-auto flex justify-center items-start'>
                    <img className='w-100% h-auto rounded-xl' src="./src/assets/images545.png" alt="" />
                </div>
                <div className='w-full h-auto flex flex-col gap-2  justify-center items-center '>
                    <div className='flex flex-col items-center'>
                        <h1 className='text-5xl font-semibold '>ULTIMATE</h1>
                        <h1 className='text-7xl font-bold text-transparent' style={{WebkitTextStroke: "1px black",}}>SALE</h1>
                    </div>
                    <div className='flex flex-col justify-center gap-1'>
                        <h1 className='text-xs font-semibold text-gray-500'>NEW COLLECTIONS</h1>
                        <button className='border rounded-md font-semibold text-white text-xs bg-black p-1'>SHOP NOW</button>
                    </div>
                </div>
                <div className='w-full h-auto flex items-end justify-center'>
                    <img className='w-100% h-auto rounded-xl' src="./src/assets/images1.jpg" alt="" />
                </div>
            </div>

            {/* 3 */}
            <div className='hidden sm:block w-full h-auto bg-[#CACDD7] rounded-xl'>
                <div className='w-full h-full flex justify-center items-end'>
                    <img className=' w-100% h-auto' src="./src/assets/image3.png" alt="" />
                </div>
            </div>
        </div>

        <div className='w-full h-auto grid grid-cols-4 sm:flex justify-center gap-5 sm:gap-10 place-items-center place-content-center'>
            <img className='w-20 h-4'  src="./src/assets/chanel.png" alt="" />
            <img className='w-20 h-3' src="./src/assets/louis.png" alt="" />
            <img className='w-20 h-4' src="./src/assets/prada.png" alt="" />
            <img className='w-20 h-3' src="./src/assets/calvin.png" alt="" />
            <img className='hidden sm:block w-20 h-4 ' src="./src/assets/denim.png" alt="" />
        </div>  
    </div>
    </>
  )
}
