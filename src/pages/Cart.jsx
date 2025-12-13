import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Cart({cart , setCart}) {

    const increaseQty = (id) => {
        setCart(cart.map(item => 
            item.id === id ? {...item, qty: item.qty + 1}:item
        ))
    }

    const decreaseQty = (id) => {
        setCart(cart.map(item =>
            item.id === id && item.qty > 1
            ? { ...item, qty: item.qty -1}:item
        ))
    }

    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id))
    }

    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

    
return (
    <>  
        <Navbar/>
        <div className=' flex justify-center  w-full min-h-110 '>
            <div className='w-full flex flex-col items-center h-auto max-w-100 md:max-w-270'>
                <div className='w-full grid grid-cols-3 gap-10 h-auto   '>
                    {/* 1 */}
                    <div className=' flex flex-col gap-5 col-span-2 p-5'>
                        <div className='w-full flex flex-col gap-5'>
                            {cart.length === 0 && <h1>Your cart is empty</h1>}
                            
                            {cart.map(item =>(
                            <div key={item.id} className='flex justify-between items-center'>
                                <img className='size-30 rounded-md' src={`/assets/${item.image}.png`} alt="" />
                                <h1 className='text-gray-800 font-semibold' >{item.title}</h1>
                                <h1 className='text-xl font-semibold'>₹{item.price * item.qty}</h1>
                                <div className='flex gap-3 text-xl items-cente justify-center'>
                                    <p className='font-bold text-3xl cursor-pointer rounded-3xl size-6 flex justify-center items-center' onClick={() => decreaseQty(item.id)}>-</p>
                                    <p className='border pl-5 pr-5' >{item.qty}</p>
                                    <p className='font-bold text-3xl cursor-pointer rounded-3xl size-6 flex justify-center items-center' onClick={() => increaseQty(item.id)}>+</p>
                                </div>
                                <button className='border p-1 pl-2 pr-2 rounded-md bg-black text-white' onClick={() => removeItem(item.id)}>Remove</button>
                            </div>
                            ))}
                            <hr className='text-gray-400'/>
                        </div>

                        
                    </div>
                    

                    {/* 2 */} 
                    <div className='w-full h-auto flex flex-col mt-5 rounded-lg'>
                        <div className=' border border-gray-500 p-5 pt-10  rounded-xl flex flex-col items-center justify-center gap-5'>
                            <h1 className='text-2xl font-bold'>Total: ₹{total}</h1>
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
