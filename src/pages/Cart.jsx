import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Cart() {
return (
    <>  
        <Navbar/>
        <div className=' flex justify-center  w-full min-h-110 '>
            <div className='w-full flex flex-col items-center h-auto max-w-100 md:max-w-270'>
                <div className='w-full grid grid-cols-3 gap-10 h-auto   '>
                    {/* 1 */}
                    <div className=' flex flex-col gap-5 col-span-2 p-5'>
                        <div className='w-full flex flex-col gap-5'>
                            <div className='flex justify-between items-center'>
                                <img className='size-30 rounded-md' src="/assets/t-shirt-4.png" alt="" />
                                <h1 className='text-gray-800 font-semibold' >Polo T-shirt</h1>
                                <h1 className='text-xl font-semibold'>₹600</h1>
                                <div className='flex gap-3 text-xl items-cente justify-center'>
                                    <p className='font-bold text-3xl cursor-pointer rounded-3xl size-6 flex justify-center items-center'>-</p>
                                    <p className='border pl-5 pr-5' >1</p>
                                    <p className='font-bold text-3xl cursor-pointer rounded-3xl size-6 flex justify-center items-center'>+</p>
                                </div>
                                <button className='border p-1 pl-2 pr-2 rounded-md bg-black text-white'>Remove</button>
                            </div>
                            <hr className='text-gray-400'/>
                        </div>

                        
                    </div>
                    

                    {/* 2 */} 
                    <div className='w-full h-auto flex flex-col mt-5 rounded-lg'>
                        <div className=' border border-gray-500 p-5 pt-10  rounded-xl flex flex-col items-center justify-center gap-5'>
                            <h1 className='text-2xl font-bold'>Total (2 item): ₹1000</h1>
                            <button className='w-full bg-black cursor-pointer text-white p-2 rounded-sm text-2xl'>Check Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
)
}
