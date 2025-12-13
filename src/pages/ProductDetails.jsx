import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Rating from '../components/Review'
import { Link, useParams } from 'react-router-dom'
import { Products } from '../Products/Products'


export default function ProductDetails({ addToCart }) {

    const { id } = useParams();
        const product = Products.find(p => p.id === Number(id))

    

    if (!product) return <h1>Product Not found</h1>

    
    
return (
    <>
        <Navbar/>
        <div className='w-full h-auto flex justify-center p-2 sm:p-5 overflow-hidden' >
            <div className=' w-full h-auto  grid grid-rows-1  sm:grid-cols-7 gap-10 sm:gap-5  justify-center max-w-100 sm:max-w-270'>
                {/* 1 */}
                <div className='w-full grid  gap-5 grid-cols-4 gap col-span-4 '>
                    
                    <div className='w-full flex flex-col items-center gap-3'>
                        <img className='object-cover hover:border size-14 sm:size-25 cursor-pointer bg-gray-200 ' src={`/assets/${product.image}.png`} alt="" />
                        {/* <img className='object-cover hover:border size-14 sm:size-25 cursor-pointer' src="/post2.webp" alt="" />
                        <img className='object-cover hover:border size-14 sm:size-25 cursor-pointer' src="/post3.webp" alt="" />
                        <img className='object-cover hover:border size-14 sm:size-25 cursor-pointer' src="/post4.webp" alt="" /> */}
                    </div>

                    {/* Main image */}
                    <div className='w-full col-span-3 flex flex-col items-center gap-5'>
                        <div>
                            <img  src={`/assets/${product.image}.png`} alt="" />
                        </div>

                        <div className='w-full  flex gap-5 text-nowrap'>
                            <button onClick={() => addToCart(product)} className='w-full border cursor-pointer text-sm p-1 sm:text-xl sm:p-2 text-center items-center rounded-md flex justify-center gap-1 sm:gap-2 font-semibold' >Add to Cart <p><img className='size-4 sm:size-6' src="/cart2.png" alt="" /></p></button>
                            <button className='  bg-black h-auto text-center text-white font-semibold cursor-pointer sm:text-xl w-full p-1 sm:p-2 rounded-md'>Buy Now</button>
                        </div>

                        <div className='w-full flex sm:gap-3 items-center'>
                            <h1 className='font-semibold text-center'>Colors </h1>
                            <div className='flex gap-3  p-2 '>
                                <div className='size-8 hover:border bg-green-400 cursor-pointer rounded-3xl'></div>
                                <div className='size-8 hover:border bg-blue-400 cursor-pointer rounded-3xl'></div>
                                <div className='size-8 hover:border bg-red-400 cursor-pointer rounded-3xl'></div>
                                <div className='size-8 hover:border cursor-pointer bg-black rounded-3xl'></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2 */}
                <div className='w-full col-span-4 sm:col-span-3 flex flex-col  gap-5 sm:pl-10'>
                    <div className='border border-gray-500 p-4 flex flex-col gap-2 bg-white rounded-xl'>
                        <h1 className='text-xl text-gray-500'>{product.title}</h1>
                        <h1 className='text-2xl font-semibold'>₹{product.price}</h1>
                        {/* Review star */}
                        <Rating rating={product.ratings} />
                        <span className='w-19 text-center font-semibold text-[10px] rounded-2xl  bg-green-300 '>{product.freeDelivery ? "Free Delivery" : "Delivery ₹50"}</span>
                    </div>

                    {/* size */}
                    <div className='border border-gray-500 bg-white p-2 rounded-xl flex flex-col gap-2'>
                        <h1 className='font-semibold'>Select Size</h1>
                        <div className='flex gap-3'>
                            <h1 className='border cursor-pointer hover:bg-gray-300 rounded-3xl size-9 flex justify-center items-center '>M</h1>
                            <h1 className='border cursor-pointer hover:bg-gray-300 rounded-3xl size-9 flex justify-center items-center '>L</h1>
                            <h1 className='border cursor-pointer hover:bg-gray-300 rounded-3xl size-9 flex justify-center items-center '>XL</h1>
                            <h1 className='border cursor-pointer hover:bg-gray-300 rounded-3xl size-9 flex justify-center items-center '>XXL</h1>
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className='border border-gray-500 bg-white p-2 flex flex-col gap-1 rounded-xl'>
                        <div>
                            <h1 className='font-semibold'>Product Details</h1>
                        </div>
                        <div className='text-gray-700'>
                            <h1>Name :</h1>
                            <h1>Fabric :</h1>
                            <h1>Sleeve Length :</h1>
                            <h1>Pattern :</h1>
                            <h1>Net Quantity :</h1>
                            <h1>Sizes : M,L,XL,XXL</h1>
                            <div>
                                <h1>This cool t-shirts for men is made from polyester which is pre-shrunk and bio-washed for longevity is a perfect treat for Men & Boys who like to move out in style.</h1>
                            </div>
                            <h1>Country of Origin</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
)
}
