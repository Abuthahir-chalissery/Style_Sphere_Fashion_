// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'





// export default function SignUpPage() {


//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName : '',
//         email: '',
//         phone: '',
//         otp: '',
//         password: '',
//         confirmPassword:''
//     })


//     const [errors , setErrors] = useState({})
    


//     function handleChange(e) {
//         const {name, value} = e.target
//         setFormData({
//             ...formData,
//             [name]:value
//         })
//     }



//     function validate () {
//         let newErrors = {}

//         if(!formData.firstName){
//             newErrors.firstName = "First name is required"
//         }

//         if (!formData.email){
//             newErrors.email = "Email is required"
//         }

//         // if (!formData.otp) {
//         //     newErrors.otp = "Please enter the otp"
//         // }

//         if (formData.phone.length !== 10) {
//             newErrors.phone = "Phone number must be 10 digits"
//         }

//         if (formData.password.length < 6){
//             newErrors.password = "Password must be at least 6 characters"
//         }

//         if (formData.password !== formData.confirmPassword){
//             newErrors.confirmPassword = "Passwords do not match"
//         }

//         setErrors(newErrors)
//         return Object.keys(newErrors).length === 0
//     }


//     function handleSignup(e) {
//         e.preventDefault()

//         if (!validate()) return;

//         const users = JSON.parse(localStorage.getItem("users")) || []
        
//         const userExists = users.find(
//             user => user.email === formData.email
//         )

//         if (userExists) {
//             alert("User already exists")
//             return
//         }

//         users.push(formData)
//         localStorage.setItem("users", JSON.stringify(users))

//         alert("Sign successfull Please login")
//     }

//   return (
//         <>
//         <div className='w-full h-screen  flex justify-center items-center'>
//             <div className='w-full h-screen grid sm:grid-cols-2'>
//                 {/* 1 */}
//                 <div className='bg-black sm:flex justify-center items-center hidden sm:block'>
//                     <h1 className='text-white text-5xl'>STYLESPHERE</h1>
//                 </div>

//                 {/* 2 */}
//                 <div className='w-full bg-gray-100 flex flex-col p-10 gap-1  sm:gap-25'>
//                     <div className='flex flex-col gap-1 sm:gap-0'>
//                         <h1 className='text-3xl font-semibold'>LOOKS LIKE YOU'RE NEW HERE!</h1>
//                         <p className='text-gray-600 sm:text-lg'>Signup with your mobile number and email to get started</p>
//                     </div>

//                     <div className='flex flex-col gap-3'>
//                         {/* Enter  */}
//                         <div className='w-full  flex  gap-5'>
//                             <div className='w-full'>
//                                 <h1>First Name</h1>
//                                 <input className='border-2 p-2 w-full rounded-md text-lg outline-none border-gray-400 ' type="text" name='firstName' value={formData.firstName} onChange={handleChange} placeholder='Enter first name' />
//                                 {errors.firstName && <p className='text-red-500' >{errors.firstName}</p>}
//                             </div>
//                             <div className='w-full'>
//                                 <h1>Last Name</h1>
//                                 <input className='border-2 p-2 w-full rounded-md text-lg outline-none border-gray-400 ' type="text" name='lastName' value={formData.lastName} onChange={handleChange} placeholder='Enter last name' />
//                                 {errors.lastName && <p className='text-red-500' >{errors.lastName}</p>}
//                             </div>
//                         </div>

//                         <div>
//                             <h1>Email</h1>
//                             <input className='border-2 p-2 w-full rounded-md text-lg outline-none border-gray-400 ' type="text" name='email' value={formData.email} onChange={handleChange} placeholder='Enter email' />
//                             {errors.email && <p className='text-red-500' >{errors.email}</p>}
//                         </div>
//                         <div>
//                             <h1>Otp</h1>
//                             <input className='border-2 p-2 w-full rounded-md text-lg outline-none border-gray-400 ' type="text" name='otp' value={formData.otp} onChange={handleChange} placeholder='Enter otp' />
//                             {errors.otp && <p className='text-red-500' >{errors.otp}</p>}
//                         </div>
//                         <div>
//                             <h1>Phone</h1>
//                             <input className='border-2 p-2 w-full rounded-md text-lg outline-none border-gray-400 ' type="text" name='phone' value={formData.phone} onChange={handleChange} placeholder='Enter phone' />
//                             {errors.phone && <p className='text-red-500' >{errors.phone}</p>}
//                         </div>
//                         <div>
//                             <h1>Password</h1>
//                             <input className='border-2 p-2 w-full rounded-md text-lg outline-none border-gray-400 ' type="text" name='password' value={formData.password} onChange={handleChange} placeholder='Enter password' />
//                             {errors.password && <p className='text-red-500' >{errors.password}</p>}
//                         </div>
//                         <div>
//                             <h1>Confirm Password</h1>
//                             <input className='border-2 p-2 w-full rounded-md text-lg outline-none border-gray-400 ' type="text" name='confirmPassword' value={formData.confirmPassword} onChange={handleChange} placeholder='Enter confirm password' />
//                             {errors.confirmPassword && <p className='text-red-500' >{errors.confirmPassword}</p>}
//                         </div>
//                         <div>
//                             <button onClick={handleSignup} className='cursor-pointer w-full bg-black p-2 text-white rounded-md text-2xl'>Sign Up</button>
//                         </div>
//                         <div className='flex justify-center items-center text-nowrap gap-5'>
//                             <h1 className='font-semibold text-gray-600'>Don't have an account ?</h1>
//                             <Link to={'/login'}><button className=' bg-black p-1 pl-3 pr-3 text-white rounded-md text-lg cursor-pointer'>Sign in</button></Link>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </div>
//         </>
//   )
// }
